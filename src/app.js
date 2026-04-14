// ─────────────────────────────────────────────────────────────────
// app.js  —  State, events, render cycle
// ─────────────────────────────────────────────────────────────────
import { INPUTS, GLOBAL_PARAMS } from './data.js'
import { computeScores, detectFaults, overallScore } from './scoring.js'
import { generateNarrative } from './api.js'
import { buildTopBar, buildLeftPanel, buildRightPanel, buildCanvasOverlay } from './ui.js'
import { Renderer2D, generateCityGrid } from './renderer2d.js'
import { Renderer3D } from './renderer3d.js'

// ─── State ────────────────────────────────────────────────────────
const state = {
  config: {
    scale:       'city',
    topography:  'flat',
    climate:     'temperate',
  },
  responses:     {},   // inputId → 0–100 value
  scores:        { L: 0, S: 0, R: 0, C: 0, E: 0, Ec: 0 },
  faults:        [],
  overall:       0,
  view:          '2d',
  activeTheme:   'all',
  generating:    false,
  cityGrid:      null,
}

// Initialise responses from INPUTS defaults
for (const inp of INPUTS) {
  state.responses[inp.id] = inp.default
}

// ─── Renderer references ─────────────────────────────────────────
let r2d = null
let r3d = null

// ─── Init ─────────────────────────────────────────────────────────
export function init() {
  // Build DOM skeleton
  buildSkeleton()

  // Create 2D renderer
  const canvas2d = document.getElementById('city-canvas')
  r2d = new Renderer2D(canvas2d)
  r2d.resize()

  // Build UI (will reference radarCanvas from r2d)
  rebuildUI()

  // Initial scores + city
  update()

  // Resize handler
  window.addEventListener('resize', () => {
    r2d.resize()
    if (r3d) r3d.resize()
    if (state.view === '2d') redraw2D()
  })
}

// ─── DOM skeleton ────────────────────────────────────────────────
function buildSkeleton() {
  document.getElementById('app').innerHTML = `
    <div id="topbar"></div>
    <div id="main">
      <div id="panel-left"></div>
      <div id="canvas-wrap">
        <canvas id="city-canvas"></canvas>
        <div id="city-3d"></div>
      </div>
      <div id="panel-right"></div>
    </div>
  `
}

// ─── Rebuild full UI ─────────────────────────────────────────────
function rebuildUI() {
  buildTopBar(state, onViewChange, onGenerate, onConfigChange)
  buildLeftPanel(state, onInputChange, onThemeChange)
  buildRightPanel(state, r2d.getRadarCanvas())
  buildCanvasOverlay()
}

// ─── Core update ─────────────────────────────────────────────────
function update() {
  state.scores  = computeScores(state.responses)
  state.faults  = detectFaults(state.responses, state.scores)
  state.overall = overallScore(state.scores)
  state.cityGrid = generateCityGrid(state.responses)

  // Re-render visuals
  if (state.view === '2d') {
    redraw2D()
  } else if (r3d) {
    r3d.buildCity(state.cityGrid)
    r3d.updateAtmosphere(state.scores)
  }

  // Update right panel (scores + faults) without full rebuild
  buildRightPanel(state, r2d.getRadarCanvas())
  updateFaultHighlights()
}

function redraw2D() {
  r2d.render(state.cityGrid, state.scores, state.faults)
}

function updateFaultHighlights() {
  // Highlight input rows that have critically unmet objectives
  document.querySelectorAll('.input-row').forEach(row => {
    row.classList.remove('has-fault')
  })
  for (const inp of INPUTS) {
    if (inp.objective >= 0.8 && (state.responses[inp.id] ?? inp.default) < 30) {
      // Find the row by its range input value label
      // (rows don't have IDs, so we match via title = inp.description)
      document.querySelectorAll(`.input-row[title="${inp.description}"]`).forEach(r => {
        r.classList.add('has-fault')
      })
    }
  }
}

// ─── Event handlers ──────────────────────────────────────────────
function onInputChange(id, value) {
  state.responses[id] = value
  update()
}

function onThemeChange(theme) {
  state.activeTheme = theme
  buildLeftPanel(state, onInputChange, onThemeChange)
  updateFaultHighlights()
}

function onViewChange(view) {
  state.view = view
  const canvas2d = document.getElementById('city-canvas')
  const div3d    = document.getElementById('city-3d')

  // Update active button states
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view)
  })

  if (view === '2d') {
    canvas2d.style.display = 'block'
    div3d.style.display    = 'none'
    if (r3d) { r3d.stop(); }
    r2d.resize()
    redraw2D()
  } else {
    canvas2d.style.display = 'none'
    div3d.style.display    = 'block'

    if (!r3d) {
      r3d = new Renderer3D(div3d)
      r3d.buildCity(state.cityGrid)
      r3d.updateAtmosphere(state.scores)
      r3d.start()
    } else {
      r3d.resize()
      r3d.buildCity(state.cityGrid)
      r3d.updateAtmosphere(state.scores)
      if (!r3d.animId) r3d.start()
    }
  }
}

function onConfigChange(key, value) {
  state.config[key] = value
  update()
}

async function onGenerate() {
  if (state.generating) return
  state.generating = true

  const btn = document.getElementById('gen-btn')
  if (btn) {
    btn.classList.add('loading')
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Generating…`
  }

  const box = document.getElementById('narrative-box')
  if (box) {
    box.classList.add('has-content')
    box.textContent = ''
  }
  const cursor = document.createElement('span')
  cursor.id = 'narrative-cursor'
  if (box) box.appendChild(cursor)

  let text = ''

  await generateNarrative({
    scores:    state.scores,
    config:    state.config,
    faults:    state.faults,
    responses: state.responses,
    onChunk(chunk) {
      text += chunk
      if (box) {
        const cur = document.getElementById('narrative-cursor')
        if (cur) cur.remove()
        box.textContent = text
        const newCursor = document.createElement('span')
        newCursor.id = 'narrative-cursor'
        box.appendChild(newCursor)
        box.scrollTop = box.scrollHeight
      }
    },
    onDone() {
      const cur = document.getElementById('narrative-cursor')
      if (cur) cur.remove()
      state.generating = false
      resetGenBtn()
    },
    onError(msg) {
      if (box) {
        const cur = document.getElementById('narrative-cursor')
        if (cur) cur.remove()
        box.textContent = `Error: ${msg}\n\nCheck that your API key is set in src/api.js`
        box.style.color = 'var(--danger)'
      }
      state.generating = false
      resetGenBtn()
    },
  })
}

function resetGenBtn() {
  const btn = document.getElementById('gen-btn')
  if (btn) {
    btn.classList.remove('loading')
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>Generate City`
  }
}
