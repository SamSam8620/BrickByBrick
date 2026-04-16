// ─────────────────────────────────────────────────────────────────
// api.js  —  Claude API city narrative generation
// ─────────────────────────────────────────────────────────────────
import { AXES, THEMES, CITY_TYPES } from './data.js'

const API_URL = 'https://api.anthropic.com/v1/messages'
const API_KEY = 'sk-ant-2023-06-01'  // ← replace with your key

/**
 * Stream a city narrative from Claude based on world-builder state.
 */
export async function generateNarrative({
  scores, cityTypeId, themeId, themeScores, faults, responses, onChunk, onDone, onError,
}) {
  const cityType = CITY_TYPES.find(c => c.id === cityTypeId)
  const theme    = THEMES.find(t => t.id === themeId)

  const ranked   = [...AXES].sort((a, b) => scores[b.id] - scores[a.id])
  const strongest = ranked.slice(0, 2).map(a => `${a.label} (${scores[a.id]})`)
  const weakest   = ranked.slice(-2).map(a => `${a.label} (${scores[a.id]})`)

  const faultLines = faults.length
    ? faults.map(f => `- [${f.severity.toUpperCase()}] ${f.title}: ${f.desc}`).join('\n')
    : 'None detected'

  // Theme impact summary
  const themeLines = Object.entries(themeScores)
    .map(([id, score]) => {
      const t = THEMES.find(x => x.id === id)
      return t ? `${t.name}: ${score}/100` : null
    })
    .filter(Boolean)
    .join(', ')

  // Key primary inputs for flavour
  const primaryInputs = theme?.inputs
    .map(inp => `${inp.label}: ${responses[inp.id] ?? inp.default}/100`)
    .join('\n') || ''

  const prompt = `You are an urban design critic and world-builder. Based on the following city parameters, write a vivid, specific, and architecturally grounded description of this city in 3 short paragraphs.

CITY GEOGRAPHY
Type: ${cityType?.name || 'Unknown'} ${cityType?.emoji || ''}
Character: ${cityType?.description || ''}

DESIGNER FOCUS
Theme Mastered: ${theme?.name || 'Unknown'} ${theme?.icon || ''}
Design Philosophy: ${theme?.description || ''}

PRIMARY DESIGN DECISIONS (${theme?.name})
${primaryInputs}

OVERALL PERFORMANCE SCORES (0–100)
Livability:     ${scores.L}
Sustainability: ${scores.S}
Resilience:     ${scores.R}
Connectivity:   ${scores.C}
Equity:         ${scores.E}
Economy:        ${scores.Ec}

THEME SCORES
${themeLines}

STRONGEST DIMENSIONS: ${strongest.join(', ')}
AREAS FOR IMPROVEMENT: ${weakest.join(', ')}

ACTIVE ISSUES:
${faultLines}

Write in present tense as if a visitor is experiencing the city. Be concrete — describe the streets, architecture, rhythms of daily life, and what makes this city's character unique given its geography and design focus. In a final short sentence, name the single most impactful intervention this city still needs.`

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 700,
        stream: true,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      throw new Error(`API error ${response.status}: ${err}`)
    }

    const reader  = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer    = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop()

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6).trim()
        if (data === '[DONE]') continue
        try {
          const evt = JSON.parse(data)
          if (evt.type === 'content_block_delta' && evt.delta?.type === 'text_delta') {
            onChunk(evt.delta.text)
          }
        } catch { /* skip malformed SSE lines */ }
      }
    }
    onDone()
  } catch (err) {
    onError(err.message || String(err))
  }
}
