// ─────────────────────────────────────────────────────────────────
// ui.js  —  All screen builders: Map, Theme, Config, City View
// ─────────────────────────────────────────────────────────────────
import { THEMES, CITY_TYPES, AXES } from './data.js'
import { SunburstChart } from './sunburst.js'
import { PixelMap } from './pixelMap.js'

// ═══════════════════════════════════════════════════════════════════
// SCREEN 1 — City Type Map
// ═══════════════════════════════════════════════════════════════════
export function buildMapScreen(app, state, onSelect, onContinue) {
  const screen = el('div', 'wb-screen map-screen')
  screen.innerHTML = `
    <div class="wb-hero compact">
      <div class="wb-logo">Brick by Brick</div>
      <h1 class="wb-title">World Builder</h1>
      <p class="wb-subtitle">Click a location on the map to choose your city's geography</p>
    </div>
    <div class="wb-steps">
      <div class="wb-step active"><span>1</span> Geography</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step"><span>2</span> Theme</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step"><span>3</span> Configure</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step"><span>4</span> Your City</div>
    </div>
    <div class="pixel-map-wrap" id="pixel-map-wrap"></div>
    <div class="map-info-bar" id="map-info-bar">
      <span class="mib-hint">&#8593; Click a city pin on the map to begin</span>
    </div>
    <div class="wb-footer">
      <button class="wb-btn wb-btn-primary" id="map-continue-btn" disabled>
        Choose Your Expertise &rsaquo;
      </button>
    </div>
  `
  app.appendChild(screen)

  const wrap = screen.querySelector('#pixel-map-wrap')
  const pixelMap = new PixelMap(wrap, (id) => {
    onSelect(id)
    const ct = CITY_TYPES.find(c => c.id === id)
    screen.querySelector('#map-info-bar').innerHTML = `
      <div class="mib-selected">
        <span class="mib-emoji">${ct.emoji}</span>
        <div class="mib-text">
          <div class="mib-name">${ct.name}</div>
          <div class="mib-desc">${ct.description}</div>
        </div>
      </div>
    `
    screen.querySelector('#map-continue-btn').disabled = false
  })

  screen.querySelector('#map-continue-btn').addEventListener('click', onContinue)

  if (state.cityTypeId) {
    pixelMap.select(state.cityTypeId)
    const ct = CITY_TYPES.find(c => c.id === state.cityTypeId)
    if (ct) {
      screen.querySelector('#map-info-bar').innerHTML = `
        <div class="mib-selected">
          <span class="mib-emoji">${ct.emoji}</span>
          <div class="mib-text">
            <div class="mib-name">${ct.name}</div>
            <div class="mib-desc">${ct.description}</div>
          </div>
        </div>
      `
      screen.querySelector('#map-continue-btn').disabled = false
    }
  }

  // Expose destroy so app.js can clean up the RAF loop
  screen._pixelMap = pixelMap
}

// ═══════════════════════════════════════════════════════════════════
// SCREEN 2 — Theme Selection
// ═══════════════════════════════════════════════════════════════════
export function buildThemeScreen(app, state, onSelect, onBack, onContinue) {
  const ct = CITY_TYPES.find(c => c.id === state.cityTypeId)

  const screen = el('div', 'wb-screen theme-screen')
  screen.innerHTML = `
    <div class="wb-hero compact">
      <div class="wb-logo">Brick by Brick</div>
      <div class="city-badge" style="background:${ct?.gradient || '#1a2540'}">
        <span>${ct?.emoji || '🏙'}</span> ${ct?.name || 'Your City'}
      </div>
      <h1 class="wb-title">Choose Your Expertise</h1>
      <p class="wb-subtitle">You master one domain — the rest of the city adapts around your decisions</p>
    </div>
    <div class="wb-steps">
      <div class="wb-step done"><span>✓</span> Geography</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step active"><span>2</span> Theme</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step"><span>3</span> Configure</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step"><span>4</span> Your City</div>
    </div>
    <div class="theme-pick-grid" id="theme-pick-grid"></div>
    <div class="wb-footer">
      <button class="wb-btn wb-btn-ghost" id="theme-back-btn">‹ Back</button>
      <button class="wb-btn wb-btn-primary" id="theme-continue-btn" disabled>
        Configure Theme &rsaquo;
      </button>
    </div>
  `
  app.appendChild(screen)

  const grid = document.getElementById('theme-pick-grid')
  for (const theme of THEMES) {
    const card = el('div', 'theme-pick-card')
    card.dataset.id = theme.id
    card.innerHTML = `
      <div class="tp-icon" style="background:${theme.color}22; border:1.5px solid ${theme.color}44; color:${theme.color}">
        ${theme.icon}
      </div>
      <div class="tp-info">
        <div class="tp-name">${theme.name}</div>
        <div class="tp-desc">${theme.description}</div>
        <div class="tp-count">8 parameters to configure</div>
      </div>
    `
    card.addEventListener('click', () => onSelect(theme.id))
    grid.appendChild(card)
  }

  document.getElementById('theme-back-btn').addEventListener('click', onBack)
  document.getElementById('theme-continue-btn').addEventListener('click', onContinue)

  if (state.activeThemeId) {
    const card = document.querySelector(`.theme-pick-card[data-id="${state.activeThemeId}"]`)
    if (card) {
      card.classList.add('selected')
      document.getElementById('theme-continue-btn').disabled = false
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// SCREEN 3 — Theme Configuration (Sunburst chart)
// ═══════════════════════════════════════════════════════════════════
export function buildConfigScreen(app, state, onInputChange, onBack, onBuild) {
  const theme = THEMES.find(t => t.id === state.activeThemeId)
  const ct    = CITY_TYPES.find(c => c.id === state.cityTypeId)
  if (!theme) return

  const screen = el('div', 'wb-screen config-screen')
  screen.innerHTML = `
    <div class="wb-steps config-steps">
      <div class="wb-step done"><span>✓</span> Geography</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step done"><span>✓</span> Theme</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step active"><span>3</span> Configure</div>
      <div class="wb-step-arrow">›</div>
      <div class="wb-step"><span>4</span> Your City</div>
    </div>

    <div class="config-layout">

      <!-- Left: sunburst chart -->
      <div class="config-inputs-col">
        <div class="config-theme-header">
          <div class="config-theme-icon" style="background:${theme.color}22; color:${theme.color}; border:1.5px solid ${theme.color}55">
            ${theme.icon}
          </div>
          <div>
            <div class="config-theme-name">${theme.name}</div>
            <div class="config-theme-desc">${theme.description}</div>
          </div>
        </div>
        <div class="config-city-badge">
          <span>${ct?.emoji || ''}</span>
          <span>${ct?.name || 'Your City'}</span>
        </div>
        <div class="sunburst-hint">
          Drag each segment inward or outward to set its value
        </div>
        <div class="sunburst-wrap" id="sunburst-container"></div>
      </div>

      <!-- Right: live isometric city preview -->
      <div class="config-city-col">
        <div class="preview-header">
          <div class="preview-title">Live City Preview</div>
          <div class="preview-subtitle">Buildings construct in real time as you adjust inputs</div>
        </div>
        <div class="config-canvas-wrap">
          <canvas id="config-scene-canvas"></canvas>
          <div class="score-hud" id="score-hud">
            ${AXES.map(a => `
              <div class="sh-row">
                <span class="sh-label" style="color:${a.color}">${a.id}</span>
                <div class="sh-bar-wrap">
                  <div class="sh-bar" id="hud-bar-${a.id}" style="width:50%;background:${a.color}"></div>
                </div>
                <span class="sh-val" id="hud-num-${a.id}">50</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>

    <div class="wb-footer config-footer">
      <button class="wb-btn wb-btn-ghost" id="config-back-btn">‹ Back</button>
      <div class="config-footer-info">
        <span class="config-footer-label">${theme.name} →</span>
        <span class="config-footer-sub">11 themes auto-configured</span>
      </div>
      <button class="wb-btn wb-btn-build" id="config-build-btn">
        Build My City &rsaquo;
      </button>
    </div>
  `
  app.appendChild(screen)

  // Instantiate SunburstChart in place of sliders
  const container = document.getElementById('sunburst-container')
  new SunburstChart(
    container,
    theme.inputs,
    state.primaryInputs,
    (id, value) => onInputChange(id, value),
    theme.color,
    theme.icon,
  )

  document.getElementById('config-back-btn').addEventListener('click', onBack)
  document.getElementById('config-build-btn').addEventListener('click', onBuild)
}

// ═══════════════════════════════════════════════════════════════════
// CITY VIEW — Top Bar
// ═══════════════════════════════════════════════════════════════════
export function buildCityTopBar(state, onRedesign) {
  const bar = document.getElementById('topbar')
  bar.innerHTML = ''

  const theme = THEMES.find(t => t.id === state.activeThemeId)
  const ct    = CITY_TYPES.find(c => c.id === state.cityTypeId)

  const brand = el('div', 'brand')
  brand.innerHTML = `<span class="brand-name">Brick by Brick</span><span class="brand-sub">World Builder</span>`
  bar.appendChild(brand)

  bar.appendChild(sep())

  if (ct) {
    const badge = el('div', 'city-info-badge')
    badge.innerHTML = `<span>${ct.emoji}</span><span>${ct.name}</span>`
    bar.appendChild(badge)
  }

  if (theme) {
    const tbadge = el('div', 'theme-info-badge')
    tbadge.style.borderColor = theme.color + '55'
    tbadge.style.color = theme.color
    tbadge.innerHTML = `<span>${theme.icon}</span><span>${theme.name} Focus</span>`
    bar.appendChild(tbadge)
  }

  bar.appendChild(el('div', 'spacer'))

  const redesign = el('button', 'redesign-btn')
  redesign.textContent = '↩ Redesign'
  redesign.addEventListener('click', onRedesign)
  bar.appendChild(redesign)
}

// ═══════════════════════════════════════════════════════════════════
// CITY VIEW — Left Panel (Theme Summary)
// ═══════════════════════════════════════════════════════════════════
export function buildLeftSummaryPanel(state, onCustomizeToggle, onThemeScoreChange) {
  const panel = document.getElementById('panel-left')
  panel.innerHTML = ''

  const theme = THEMES.find(t => t.id === state.activeThemeId)
  if (!theme) return

  const header = el('div', 'panel-header')
  header.innerHTML = `
    <div class="panel-title" style="color:${theme.color}">
      ${theme.icon} ${theme.name}
    </div>
    <div class="panel-subtitle">Your mastered theme — locked</div>
  `
  panel.appendChild(header)

  const scroll = el('div', 'inputs-scroll')
  panel.appendChild(scroll)

  // ── Primary inputs (locked) ──────────────────────────────────────
  const secHeader = el('div', 'theme-section-header')
  secHeader.innerHTML = `<span class="theme-dot" style="background:${theme.color}"></span> Your 8 Configured Inputs`
  scroll.appendChild(secHeader)

  for (const inp of theme.inputs) {
    const val = state.primaryInputs[inp.id] ?? inp.default
    const row = el('div', 'summary-input-row')
    const pct = val / 100
    const barColor = pct > 0.65 ? theme.color : pct > 0.35 ? '#FFA726' : '#ef5350'
    row.innerHTML = `
      <div class="si-top">
        <span class="si-label">${inp.label}</span>
        <span class="si-value" style="color:${barColor}">${val}${inp.unit ? ' ' + inp.unit : ''}</span>
      </div>
      <div class="si-bar-wrap">
        <div class="si-bar" style="width:${val}%; background:${barColor}"></div>
      </div>
    `
    row.title = inp.description
    scroll.appendChild(row)
  }

  // ── Auto-configured themes ────────────────────────────────────────
  const secHeader2 = el('div', 'theme-section-header')
  secHeader2.style.marginTop = '10px'

  const customizeBtn = el('button', 'customize-themes-btn' + (state.customizingThemes ? ' active' : ''))
  customizeBtn.textContent = state.customizingThemes ? '✓ Done' : '✏ Customize'
  customizeBtn.addEventListener('click', onCustomizeToggle)

  secHeader2.innerHTML = `<span class="theme-dot" style="background:#78909C"></span> Auto-Configured Themes`
  secHeader2.appendChild(customizeBtn)
  scroll.appendChild(secHeader2)

  const otherThemes = THEMES.filter(t => t.id !== state.activeThemeId)
  for (const t of otherThemes) {
    const score = state.themeScores[t.id] ?? 50
    const row   = el('div', 'auto-theme-row')

    if (state.customizingThemes) {
      row.classList.add('customizing')
      row.innerHTML = `
        <span class="at-icon">${t.icon}</span>
        <span class="at-name">${t.name}</span>
        <input type="range" class="at-slider" min="15" max="88" step="1" value="${score}" />
        <span class="at-val" id="at-val-${t.id}" style="color:${t.color}">${score}</span>
      `
      const slider = row.querySelector('.at-slider')
      slider.style.setProperty('accent-color', t.color)
      slider.addEventListener('input', (e) => {
        const v = parseInt(e.target.value)
        document.getElementById(`at-val-${t.id}`).textContent = v
        onThemeScoreChange(t.id, v)
      })
    } else {
      row.innerHTML = `
        <span class="at-icon">${t.icon}</span>
        <span class="at-name">${t.name}</span>
        <div class="at-bar-wrap">
          <div class="at-bar" style="width:${score}%; background:${t.color}55"></div>
        </div>
        <span class="at-val" style="color:${t.color}">${score}</span>
      `
    }
    scroll.appendChild(row)
  }
}

// ═══════════════════════════════════════════════════════════════════
// CITY VIEW — Right Panel (Scores & Faults)
// ═══════════════════════════════════════════════════════════════════
export function buildRightPanel(state) {
  const panel = document.getElementById('panel-right')
  panel.innerHTML = ''

  // Overall score
  const overall = el('div', 'overall-score')
  const { grade, color } = gradeFor(state.overall)
  overall.innerHTML = `
    <div class="overall-num">${state.overall}</div>
    <div class="overall-label">Overall<br>City Score</div>
    <div class="overall-grade" style="color:${color}">${grade}</div>
  `
  panel.appendChild(overall)

  // Axis bars
  const list = el('div', 'axis-list')
  for (const ax of AXES) {
    const score = state.scores[ax.id] ?? 0
    const item  = el('div', 'axis-item')
    item.innerHTML = `
      <span class="axis-dot" style="background:${ax.color}"></span>
      <span class="axis-name">${ax.label}</span>
      <div class="axis-bar-wrap">
        <div class="axis-bar" style="width:${score}%; background:${ax.color}"></div>
      </div>
      <span class="axis-score" style="color:${ax.color}">${score}</span>
    `
    list.appendChild(item)
  }
  panel.appendChild(list)

  // Faults
  const faults = el('div', 'faults-section')
  const fh     = el('div', 'faults-header')
  fh.textContent = `Issues (${state.faults.length})`
  faults.appendChild(fh)

  if (!state.faults.length) {
    const nf = el('div', 'no-faults')
    nf.textContent = '✓ No critical issues detected'
    faults.appendChild(nf)
  } else {
    for (const fault of state.faults) {
      const item = el('div', 'fault-item' + (fault.severity === 'critical' ? ' critical' : ''))
      item.innerHTML = `
        <div class="fault-icon">${fault.severity === 'critical' ? '🔴' : '⚠️'}</div>
        <div class="fault-body">
          <div class="fault-title">${fault.title}</div>
          <div class="fault-desc">${fault.desc}</div>
        </div>
      `
      faults.appendChild(item)
    }
  }
  panel.appendChild(faults)
}


// ─── Helpers ──────────────────────────────────────────────────────
function el(tag, cls) {
  const e = document.createElement(tag)
  if (cls) e.className = cls
  return e
}

function sep() {
  return el('div', 'topbar-sep')
}

function gradeFor(score) {
  if (score >= 90) return { grade: 'A+', color: '#00e676' }
  if (score >= 80) return { grade: 'A',  color: '#66BB6A' }
  if (score >= 70) return { grade: 'B',  color: '#26C6DA' }
  if (score >= 60) return { grade: 'C',  color: '#42A5F5' }
  if (score >= 50) return { grade: 'D',  color: '#FFA726' }
  return                   { grade: 'F',  color: '#ef5350' }
}
