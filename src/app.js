// ─────────────────────────────────────────────────────────────────
// app.js  —  State machine, step navigation, auto-config, render
// ─────────────────────────────────────────────────────────────────
import { THEMES, CITY_TYPES, INPUTS, INPUT_VARIANCE, autoConfigureThemes } from './data.js'
import { computeScores, detectFaults, overallScore } from './scoring.js'
import {
  buildMapScreen, buildThemeScreen, buildConfigScreen,
  buildCityTopBar, buildLeftSummaryPanel, buildRightPanel,
} from './ui.js'
import { CityScene } from './cityScene.js'

// ─── App State ────────────────────────────────────────────────────
const state = {
  step:               'map',   // 'map' | 'theme' | 'config' | 'city'
  cityTypeId:         null,
  activeThemeId:      null,
  primaryInputs:      {},      // 8 values for chosen theme
  allResponses:       {},      // all 96 values (primary + auto-configured)
  themeScores:        {},      // per-theme aggregate scores
  scores:             { L: 0, S: 0, R: 0, C: 0, E: 0, Ec: 0 },
  faults:             [],
  overall:            0,
  customizingThemes:  false,
}

// Initialise primary inputs to theme defaults
function initPrimaryInputs(themeId) {
  const theme = THEMES.find(t => t.id === themeId)
  if (!theme) return
  state.primaryInputs = {}
  for (const inp of theme.inputs) {
    state.primaryInputs[inp.id] = inp.default
  }
}

// Initialise ALL responses to global defaults
function initAllDefaults() {
  for (const inp of INPUTS) {
    state.allResponses[inp.id] = inp.default
  }
}

initAllDefaults()

// ─── Scene references ────────────────────────────────────────────
let cityScene         = null   // Step 4: final city view
let configPreviewScene = null  // Step 3: live config preview

// ─── Entry Point ─────────────────────────────────────────────────
export function init() {
  showStep('map')
}

// ─── Step Router ─────────────────────────────────────────────────
function showStep(step) {
  state.step = step
  const app = document.getElementById('app')

  // Clean up step-specific resources before clearing DOM
  const screen = app.firstElementChild
  if (screen?._pixelMap) screen._pixelMap.destroy()
  if (configPreviewScene) {
    configPreviewScene.stop()
    configPreviewScene = null
    window.removeEventListener('resize', _onConfigResize)
  }

  app.innerHTML = ''

  if (step === 'map') {
    buildMapScreen(app, state, onCityTypeSelect, onCityTypeContinue)

  } else if (step === 'theme') {
    buildThemeScreen(app, state, onThemeSelect, onThemeBack, onThemeContinue)

  } else if (step === 'config') {
    runAutoConfig()
    buildConfigScreen(app, state, onConfigInputChange, onConfigBack, onBuildCity)

    // Mount live isometric city preview on the config canvas
    const configCanvas = document.getElementById('config-scene-canvas')
    if (configCanvas) {
      const liveScores = computeScores(state.allResponses)
      configPreviewScene = new CityScene(configCanvas, state.activeThemeId, liveScores, state.primaryInputs)
      configPreviewScene.start()
      updateScoreHud(liveScores)
      window.addEventListener('resize', _onConfigResize)
    }

  } else if (step === 'city') {
    buildCityLayout(app)
    initCity()
  }
}

function _onConfigResize() {
  if (configPreviewScene) configPreviewScene.resize()
}

// ─── Map Screen Handlers ─────────────────────────────────────────
function onCityTypeSelect(id) {
  state.cityTypeId = id
  const btn = document.getElementById('map-continue-btn')
  if (btn) btn.disabled = false
}

function onCityTypeContinue() {
  if (!state.cityTypeId) return
  showStep('theme')
}

// ─── Theme Screen Handlers ────────────────────────────────────────
function onThemeSelect(id) {
  state.activeThemeId = id
  document.querySelectorAll('.theme-pick-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.id === id)
  })
  const btn = document.getElementById('theme-continue-btn')
  if (btn) btn.disabled = false
}

function onThemeBack() {
  showStep('map')
}

function onThemeContinue() {
  if (!state.activeThemeId) return
  initPrimaryInputs(state.activeThemeId)
  showStep('config')
}

// ─── Config Screen Handlers ──────────────────────────────────────
function onConfigInputChange(id, value) {
  state.primaryInputs[id] = value
  runAutoConfig()
  updateConfigPreview()
  const liveScores = computeScores(state.allResponses)
  if (configPreviewScene) {
    configPreviewScene.updateScores(liveScores)
    configPreviewScene.updateInputs(state.primaryInputs)
  }
  updateScoreHud(liveScores)
}

function updateScoreHud(scores) {
  for (const [axisId, val] of Object.entries(scores)) {
    const bar = document.getElementById(`hud-bar-${axisId}`)
    const num = document.getElementById(`hud-num-${axisId}`)
    if (bar) bar.style.width = Math.round(val) + '%'
    if (num) num.textContent  = Math.round(val)
  }
}

function onConfigBack() {
  showStep('theme')
}

function onBuildCity() {
  showStep('city')
}

// ─── Auto-Configuration ──────────────────────────────────────────
function runAutoConfig() {
  const { allValues, themeScores } = autoConfigureThemes(
    state.activeThemeId,
    state.primaryInputs,
    state.cityTypeId,
  )
  state.allResponses = allValues
  state.themeScores  = themeScores
}

function updateConfigPreview() {
  for (const [themeId, score] of Object.entries(state.themeScores)) {
    const bar = document.getElementById(`preview-bar-${themeId}`)
    const val = document.getElementById(`preview-val-${themeId}`)
    if (bar) bar.style.width = score + '%'
    if (val) val.textContent  = score
  }
}

// ─── City View Build ─────────────────────────────────────────────
function buildCityLayout(app) {
  app.innerHTML = `
    <div id="topbar"></div>
    <div id="main">
      <div id="panel-left"></div>
      <div id="canvas-wrap">
        <canvas id="scene-canvas"></canvas>
      </div>
      <div id="panel-right"></div>
    </div>
  `
}

function initCity() {
  state.scores  = computeScores(state.allResponses)
  state.faults  = detectFaults(state.allResponses, state.scores)
  state.overall = overallScore(state.scores)

  buildCityTopBar(state, onRedesign)
  buildLeftSummaryPanel(state, onCustomizeToggle, onAutoThemeScoreChange)
  buildRightPanel(state)

  _startScene()
  window.addEventListener('resize', _onResize)
}

function _startScene() {
  const canvas = document.getElementById('scene-canvas')
  if (!canvas) return
  cityScene?.stop()
  cityScene = new CityScene(canvas, state.activeThemeId, state.scores)
  cityScene.start()
}

function _onResize() {
  if (document.getElementById('scene-canvas')) cityScene?.resize()
}

// ─── City View Event Handlers ─────────────────────────────────────
function onRedesign() {
  cityScene?.stop()
  cityScene = null
  window.removeEventListener('resize', _onResize)

  state.step             = 'map'
  state.cityTypeId       = null
  state.activeThemeId    = null
  state.primaryInputs    = {}
  state.customizingThemes = false

  showStep('map')
}

// ─── Customize Themes ────────────────────────────────────────────
function onCustomizeToggle() {
  state.customizingThemes = !state.customizingThemes
  buildLeftSummaryPanel(state, onCustomizeToggle, onAutoThemeScoreChange)
}

function onAutoThemeScoreChange(themeId, score) {
  const theme = THEMES.find(t => t.id === themeId)
  if (!theme) return

  // Distribute the new score across the theme's 8 inputs using the variance pattern
  theme.inputs.forEach((inp, i) => {
    const variance = INPUT_VARIANCE[i] || 0
    const snapped  = Math.round(Math.max(10, Math.min(95, score + variance)) / 5) * 5
    state.allResponses[inp.id] = snapped
  })
  state.themeScores[themeId] = score

  // Recompute and refresh
  state.scores  = computeScores(state.allResponses)
  state.faults  = detectFaults(state.allResponses, state.scores)
  state.overall = overallScore(state.scores)

  buildRightPanel(state)
  _startScene()
}
