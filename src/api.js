// ─────────────────────────────────────────────────────────────────
// api.js  —  Claude API city generation call
// Add your Anthropic API key below before running.
// ─────────────────────────────────────────────────────────────────
import { AXES, THEMES } from './data.js'

const API_URL = 'https://api.anthropic.com/v1/messages'
const API_KEY = 'sk-ant-YOUR_KEY_HERE'  // ← replace with your key

/**
 * Stream a city narrative from Claude based on current state.
 * Calls onChunk(text) for each streamed token, onDone() when complete.
 *
 * @param {Object} scores      { L, S, R, C, E, Ec }  0–100
 * @param {Object} config      { scale, topography, climate }
 * @param {Array}  faults      active fault objects
 * @param {Object} responses   full responses map for context
 * @param {Function} onChunk   called with each text delta
 * @param {Function} onDone    called when stream ends
 * @param {Function} onError   called on error
 */
export async function generateNarrative({ scores, config, faults, responses, onChunk, onDone, onError }) {
  // Build ranked axes for context
  const ranked = [...AXES].sort((a, b) => scores[b.id] - scores[a.id])
  const strongest = ranked.slice(0, 2).map(a => `${a.label} (${scores[a.id]})`)
  const weakest   = ranked.slice(-2).map(a => `${a.label} (${scores[a.id]})`)

  const faultLines = faults.length
    ? faults.map(f => `- [${f.severity.toUpperCase()}] ${f.title}: ${f.desc}`).join('\n')
    : 'None detected'

  // Key inputs for extra colour
  const density   = responses.residential_density ?? 40
  const walkScore = responses.walkability ?? 65
  const green     = responses.park_per_capita ?? 50
  const transit   = responses.transit_coverage ?? 70
  const mixed     = responses.mixed_use_ratio ?? 55
  const renewable = responses.renewable_energy ?? 40

  const prompt = `You are an urban design critic and storyteller. Based on the following city parameters, write a vivid, specific, and architecturally grounded description of this city in 3 short paragraphs.

CITY CONFIGURATION
Scale: ${config.scale}
Topography: ${config.topography}
Climate: ${config.climate}

PERFORMANCE SCORES (0–100)
Livability:     ${scores.L}
Sustainability: ${scores.S}
Resilience:     ${scores.R}
Connectivity:   ${scores.C}
Equity:         ${scores.E}
Economy:        ${scores.Ec}

KEY PARAMETERS
Residential density: ${density}/100
Walkability index:   ${walkScore}/100
Green space:         ${green}/100
Transit coverage:    ${transit}/100
Mixed-use ratio:     ${mixed}/100
Renewable energy:    ${renewable}%

STRONGEST DIMENSIONS: ${strongest.join(', ')}
AREAS FOR IMPROVEMENT: ${weakest.join(', ')}

ACTIVE ISSUES:
${faultLines}

Write the description in present tense, as if a visitor is experiencing the city. Be concrete — describe the streets, architecture, rhythms of daily life, what makes this city's character. In a final short sentence, name the single most impactful intervention this city needs.`

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
        max_tokens: 600,
        stream: true,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      throw new Error(`API error ${response.status}: ${err}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() // keep incomplete line

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6).trim()
        if (data === '[DONE]') continue
        try {
          const evt = JSON.parse(data)
          if (evt.type === 'content_block_delta' && evt.delta?.type === 'text_delta') {
            onChunk(evt.delta.text)
          }
        } catch {
          // skip malformed SSE lines
        }
      }
    }
    onDone()
  } catch (err) {
    onError(err.message || String(err))
  }
}
