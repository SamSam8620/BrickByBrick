// ─────────────────────────────────────────────────────────────────
// ui.js  —  DOM panel builders
// ─────────────────────────────────────────────────────────────────
import { THEMES, INPUTS, AXES, GLOBAL_PARAMS } from './data.js'

// ─── Top Bar ─────────────────────────────────────────────────────
export function buildTopBar(state, onViewChange, onGenerate, onConfigChange) {
  const bar = document.getElementById('topbar')
  bar.innerHTML = ''

  // Brand
  const brand = el('div', 'brand')
  brand.innerHTML = `<span class="brand-name">Brick by Brick</span><span class="brand-sub">Adaptive City Model</span>`
  bar.appendChild(brand)

  bar.appendChild(sep())

  // Global config selectors
  for (const param of GLOBAL_PARAMS) {
    const group = el('div', 'config-group')
    const label = el('span', 'config-label')
    label.textContent = param.label
    const sel = document.createElement('select')
    for (const opt of param.options) {
      const o = document.createElement('option')
      o.value = opt.value
      o.textContent = opt.label
      if (opt.value === state.config[param.id]) o.selected = true
      sel.appendChild(o)
    }
    sel.addEventListener('change', () => onConfigChange(param.id, sel.value))
    group.appendChild(label)
    group.appendChild(sel)
    bar.appendChild(group)
  }

  bar.appendChild(sep())

  // View toggle
  const vt = el('div', 'view-toggle')
  for (const v of ['2d', '3d']) {
    const btn = el('button', 'view-btn' + (state.view === v ? ' active' : ''))
    btn.textContent = v.toUpperCase()
    btn.dataset.view = v
    btn.addEventListener('click', () => onViewChange(v))
    vt.appendChild(btn)
  }
  bar.appendChild(vt)

  bar.appendChild(el('div', 'spacer'))

  // Generate button
  const gen = el('button', 'gen-btn' + (state.generating ? ' loading' : ''))
  gen.id = 'gen-btn'
  gen.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>${state.generating ? 'Generating…' : 'Generate City'}`
  gen.addEventListener('click', onGenerate)
  bar.appendChild(gen)
}

// ─── Left Panel ───────────────────────────────────────────────────
export function buildLeftPanel(state, onInputChange, onThemeChange) {
  const panel = document.getElementById('panel-left')
  panel.innerHTML = ''

  const header = el('div', 'panel-header')
  header.innerHTML = `<div class="panel-title">City Inputs — ${INPUTS.length} parameters</div>`
  panel.appendChild(header)

  // Theme tab bar
  const tabs = el('div', 'theme-tabs')
  const allTab = el('button', 'theme-tab' + (state.activeTheme === 'all' ? ' active' : ''))
  allTab.textContent = 'All'
  allTab.addEventListener('click', () => onThemeChange('all'))
  tabs.appendChild(allTab)

  for (const theme of THEMES) {
    const tab = el('button', 'theme-tab' + (state.activeTheme === theme.id ? ' active' : ''))
    tab.textContent = theme.label.split(' ')[0]
    tab.style.color = theme.color
    tab.addEventListener('click', () => onThemeChange(theme.id))
    tabs.appendChild(tab)
  }
  panel.appendChild(tabs)

  // Scrollable inputs
  const scroll = el('div', 'inputs-scroll')
  panel.appendChild(scroll)

  const activeThemes = state.activeTheme === 'all'
    ? THEMES
    : THEMES.filter(t => t.id === state.activeTheme)

  for (const theme of activeThemes) {
    const inputs = INPUTS.filter(i => i.theme === theme.id)
    if (!inputs.length) continue

    const section = el('div', 'theme-section')

    // Theme header
    const th = el('div', 'theme-section-header')
    const dot = el('span', 'theme-dot')
    dot.style.background = theme.color
    th.appendChild(dot)
    th.appendChild(text(theme.label))
    section.appendChild(th)

    // Group by category
    const cats = [...new Set(inputs.map(i => i.category))]
    for (const cat of cats) {
      const catInputs = inputs.filter(i => i.category === cat)
      const group = el('div', 'category-group')
      const catLabel = el('div', 'category-label')
      catLabel.textContent = cat
      group.appendChild(catLabel)

      for (const inp of catInputs) {
        const hasFault = state.faults.some(f =>
          f.desc?.toLowerCase().includes(inp.label.toLowerCase()) ||
          (inp.objective >= 0.8 && (state.responses[inp.id] ?? inp.default) < 30)
        )

        if (inp.type === 'toggle') {
          const row = el('div', 'toggle-row' + (hasFault ? ' input-row has-fault' : ' input-row'))
          row.title = inp.description

          const lbl = el('span', 'input-label')
          lbl.textContent = inp.label

          const sw = el('label', 'toggle-switch')
          const chk = document.createElement('input')
          chk.type = 'checkbox'
          chk.checked = (state.responses[inp.id] ?? inp.default) > 50
          chk.addEventListener('change', () => onInputChange(inp.id, chk.checked ? 100 : 0))
          const slider = el('span', 'toggle-slider')
          sw.appendChild(chk)
          sw.appendChild(slider)

          row.appendChild(lbl)
          row.appendChild(sw)
          group.appendChild(row)
        } else {
          const row = el('div', 'input-row' + (hasFault ? ' has-fault' : ''))
          row.title = inp.description

          const meta = el('div', 'input-meta')
          const lbl = el('span', 'input-label')
          lbl.textContent = inp.label
          const val = el('span', 'input-value')
          const curVal = state.responses[inp.id] ?? inp.default
          val.textContent = curVal + (inp.unit ? ' ' + inp.unit : '')

          meta.appendChild(lbl)
          meta.appendChild(val)

          const range = document.createElement('input')
          range.type = 'range'
          range.min = inp.min
          range.max = inp.max
          range.step = inp.step
          range.value = curVal

          range.addEventListener('input', () => {
            val.textContent = range.value + (inp.unit ? ' ' + inp.unit : '')
            onInputChange(inp.id, Number(range.value))
          })

          row.appendChild(meta)
          row.appendChild(range)
          group.appendChild(row)
        }
      }
      section.appendChild(group)
    }
    scroll.appendChild(section)
  }
}

// ─── Right Panel ──────────────────────────────────────────────────
export function buildRightPanel(state, radarCanvas) {
  const panel = document.getElementById('panel-right')
  panel.innerHTML = ''

  // Overall score
  const overall = el('div', 'overall-score')
  const num = el('div', 'overall-num')
  const { grade, color } = gradeFor(state.overall)
  num.textContent = state.overall
  const lbl = el('div', 'overall-label')
  lbl.innerHTML = 'Overall<br>City Score'
  const gradeEl = el('div', 'overall-grade')
  gradeEl.textContent = grade
  gradeEl.style.color = color
  overall.appendChild(num)
  overall.appendChild(lbl)
  overall.appendChild(gradeEl)
  panel.appendChild(overall)

  // Radar canvas
  const rw = el('div', 'radar-wrap')
  rw.id = 'radar-wrap'
  rw.appendChild(radarCanvas)
  panel.appendChild(rw)

  // Axis bars
  const list = el('div', 'axis-list')
  for (const ax of AXES) {
    const score = state.scores[ax.id] ?? 0
    const item = el('div', 'axis-item')

    const dot = el('span', 'axis-dot')
    dot.style.background = ax.color

    const name = el('span', 'axis-name')
    name.textContent = ax.label

    const barWrap = el('div', 'axis-bar-wrap')
    const bar = el('div', 'axis-bar')
    bar.style.width = score + '%'
    bar.style.background = ax.color
    barWrap.appendChild(bar)

    const scoreEl = el('span', 'axis-score')
    scoreEl.textContent = score
    scoreEl.style.color = ax.color

    item.appendChild(dot)
    item.appendChild(name)
    item.appendChild(barWrap)
    item.appendChild(scoreEl)
    list.appendChild(item)
  }
  panel.appendChild(list)

  // Faults
  const faults = el('div', 'faults-section')
  const fh = el('div', 'faults-header')
  fh.textContent = `Issues (${state.faults.length})`
  faults.appendChild(fh)

  if (!state.faults.length) {
    const nf = el('div', 'no-faults')
    nf.textContent = '✓ No critical issues detected'
    faults.appendChild(nf)
  } else {
    for (const fault of state.faults) {
      const item = el('div', 'fault-item' + (fault.severity === 'critical' ? ' critical' : ''))
      const icon = el('div', 'fault-icon')
      icon.textContent = fault.severity === 'critical' ? '🔴' : '⚠️'
      const body = el('div', 'fault-body')
      const title = el('div', 'fault-title')
      title.textContent = fault.title
      const desc = el('div', 'fault-desc')
      desc.textContent = fault.desc
      body.appendChild(title)
      body.appendChild(desc)
      item.appendChild(icon)
      item.appendChild(body)
      faults.appendChild(item)
    }
  }
  panel.appendChild(faults)
}

// ─── Canvas overlay ───────────────────────────────────────────────
export function buildCanvasOverlay() {
  const wrap = document.getElementById('canvas-wrap')
  if (document.querySelector('.canvas-overlay')) return

  const overlay = el('div', 'canvas-overlay')
  const narrative = el('div', '')
  narrative.id = 'narrative-box'
  narrative.innerHTML = '<span style="color:var(--text-muted);font-size:11px;letter-spacing:0.05em">Click <strong style="color:var(--accent)">Generate City</strong> for an AI description of your city →</span>'
  overlay.appendChild(narrative)
  wrap.appendChild(overlay)
}

// ─── Helpers ──────────────────────────────────────────────────────
function el(tag, cls) {
  const e = document.createElement(tag)
  if (cls) e.className = cls
  return e
}
function text(str) {
  return document.createTextNode(str)
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
