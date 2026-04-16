// ─────────────────────────────────────────────────────────────────
// demo.js  —  Auto-play walkthrough with animated cursor + bubbles
// ─────────────────────────────────────────────────────────────────

// Energy theme inputs to animate during Step 3
const DEMO_INPUTS = [
  ['solar_coverage',      80, 'Solar Panel Coverage'],
  ['wind_energy',         70, 'Wind Energy Harnessing'],
  ['energy_storage',      65, 'Energy Storage Capacity'],
  ['district_energy_sys', 60, 'District Heating / Cooling'],
  ['energy_poverty_red',  75, 'Energy Poverty Reduction'],
  ['retrofit_rate',       55, 'Building Retrofitting Rate'],
  ['carbon_target',       85, 'Carbon Reduction Target'],
  ['peak_management',     60, 'Peak Demand Management'],
]

// Desert pin tile coords from pixelMap.js PINS
const DESERT_TX = 29, DESERT_TY = 35
const MAP_PX_W  = 80 * 8   // 640 px
const MAP_PX_H  = 50 * 8   // 400 px

export class DemoPlayer {
  constructor(changeInputFn) {
    this._changeInput = changeInputFn
    this._cur = null   // cursor div
    this._bub = null   // bubble div
    this._cx  = 0
    this._cy  = 0
    this.active = false
    this._stopFn = null
  }

  // ── Public API ─────────────────────────────────────────────────
  start() {
    if (this.active) return
    this.active = true
    this._inject()
    this._buildCursor()
    this._buildBubble()

    // Allow Escape to abort
    const onKey = (e) => { if (e.key === 'Escape') this.stop() }
    window.addEventListener('keydown', onKey)
    this._stopFn = () => window.removeEventListener('keydown', onKey)

    setTimeout(() => this._sequence(), 500)
  }

  stop() {
    this.active = false
    this._stopFn?.()
    this._cur?.remove()
    this._bub?.remove()
    this._cur = null
    this._bub = null
    document.getElementById('_demo_css')?.remove()
  }

  // ── Styles ─────────────────────────────────────────────────────
  _inject() {
    if (document.getElementById('_demo_css')) return
    const el = document.createElement('style')
    el.id = '_demo_css'
    el.textContent = `
      .dm-cur {
        position: fixed; z-index: 99999; pointer-events: none;
        width: 40px; height: 44px;
        transform: translate(-6px, -4px);
        filter: drop-shadow(0 2px 12px rgba(0,212,255,.55));
        transition: left .55s cubic-bezier(.25,.8,.25,1),
                    top  .55s cubic-bezier(.25,.8,.25,1);
      }
      @keyframes _dm_ring {
        0%   { r: 12; opacity: .7 }
        100% { r: 28; opacity: 0  }
      }
      .dm-cur.click .dm-ring { animation: _dm_ring .32s ease-out forwards }
      .dm-bub {
        position: fixed; z-index: 99998; pointer-events: none;
        max-width: 220px; padding: 9px 13px; border-radius: 10px;
        background: rgba(6,12,26,.97);
        border: 1.5px solid rgba(0,212,255,.32);
        box-shadow: 0 4px 22px rgba(0,180,255,.18);
        font: 12px/1.6 'Segoe UI',system-ui,sans-serif;
        color: #d8e8f8; transition: opacity .22s;
      }
      .dm-bub b  { color: #00d4ff }
      .dm-bub em { color: #00e676; font-style: normal }
      .dm-tag {
        font-size: 9px; font-weight: 800;
        letter-spacing: .12em; text-transform: uppercase;
        color: #00d4ff; margin-bottom: 5px;
      }
    `
    document.head.appendChild(el)
  }

  _buildCursor() {
    this._cur = document.createElement('div')
    this._cur.className = 'dm-cur'
    this._cur.innerHTML = `
      <svg viewBox="0 0 40 44" fill="none" width="40" height="44">
        <circle class="dm-ring" cx="7" cy="7" r="0" fill="#00d4ff" opacity="0"/>
        <path d="M6 3 L6 31 L12 24 L18 37 L22 34 L16 21 L25 21 Z"
              fill="white" stroke="#050a18" stroke-width="1.6"
              stroke-linejoin="round"/>
      </svg>`
    this._cx = window.innerWidth  * 0.5
    this._cy = window.innerHeight * 0.25
    this._cur.style.left = this._cx + 'px'
    this._cur.style.top  = this._cy + 'px'
    document.body.appendChild(this._cur)
  }

  _buildBubble() {
    this._bub = document.createElement('div')
    this._bub.className = 'dm-bub'
    this._bub.style.opacity = '0'
    document.body.appendChild(this._bub)
  }

  // ── Motion & interaction helpers ────────────────────────────────
  _wait(ms) { return new Promise(r => setTimeout(r, ms)) }

  _move(x, y) {
    if (!this._cur) return
    this._cx = x; this._cy = y
    this._cur.style.left = x + 'px'
    this._cur.style.top  = y + 'px'
    if (this._bub) {
      this._bub.style.left = Math.min(x + 22, window.innerWidth  - 240) + 'px'
      this._bub.style.top  = Math.max(y - 82, 8) + 'px'
    }
  }

  async _goto(sel, dwell = 500) {
    const el = document.querySelector(sel)
    if (!el) return null
    const r = el.getBoundingClientRect()
    this._move(r.left + r.width * .42, r.top + r.height * .42)
    await this._wait(Math.max(dwell, 580))
    return el
  }

  _say(tag, html) {
    if (!this._bub) return
    this._bub.innerHTML = `<div class="dm-tag">${tag}</div>${html}`
    this._bub.style.opacity = '1'
  }

  _quiet() { if (this._bub) this._bub.style.opacity = '0' }

  async _click(sel, tag, msg) {
    const el = await this._goto(sel, 380)
    if (!el) return
    if (msg) this._say(tag, msg)
    await this._wait(280)
    this._cur?.classList.add('click')
    el.click()
    await this._wait(340)
    this._cur?.classList.remove('click')
  }

  async _waitFor(sel, timeout = 5000) {
    const dl = Date.now() + timeout
    while (!document.querySelector(sel)) {
      if (Date.now() > dl || !this.active) return false
      await this._wait(80)
    }
    return true
  }

  // Dispatch a synthetic click at the pixel-map canvas position of a city pin
  async _clickMapPin(tx, ty) {
    const cv = document.querySelector('.pixel-map-canvas')
    if (!cv) return
    const r  = cv.getBoundingClientRect()
    const sx = r.width  / MAP_PX_W
    const sy = r.height / MAP_PX_H
    const cx = r.left + (tx * 8 + 4) * sx
    const cy = r.top  + (ty * 8 + 4) * sy
    this._move(cx, cy)
    await this._wait(600)
    this._cur?.classList.add('click')
    cv.dispatchEvent(new MouseEvent('click', {
      clientX: cx, clientY: cy, bubbles: true, cancelable: true,
    }))
    await this._wait(340)
    this._cur?.classList.remove('click')
  }

  // ── Main walkthrough sequence ───────────────────────────────────
  async _sequence() {
    if (!this.active) return

    // ── Step 1: Geography ──────────────────────────────────────
    await this._waitFor('.pixel-map-canvas')
    this._say('Step 1 — Geography',
      'Pick your city\'s geography. Each of the <b>10 archetypes</b> shifts how your city performs across all 12 themes before you begin.')
    await this._wait(2400)

    await this._clickMapPin(DESERT_TX, DESERT_TY)
    this._say('Step 1 — Geography',
      '<b>Desert City</b> — abundant solar energy, scarce water, challenging food security. High-risk, high-reward.')
    await this._wait(1900)

    await this._click('#map-continue-btn', 'Step 1 — Geography',
      'Geography locked in. Moving to theme selection →')
    await this._wait(900)

    if (!this.active) return

    // ── Step 2: Theme ──────────────────────────────────────────
    await this._waitFor('[data-id="energy"]')
    this._say('Step 2 — Theme',
      'You master <b>one</b> domain. The other 11 themes auto-configure around your decisions via a cross-theme influence matrix.')
    await this._wait(2200)

    // Linger over a few cards before settling on Energy
    for (const id of ['ecology', 'mobility', 'energy']) {
      await this._goto(`[data-id="${id}"]`, 480)
    }
    await this._click('[data-id="energy"]', 'Step 2 — Theme',
      '<b>Energy</b> chosen — configure solar, wind, storage, carbon targets & more.')
    await this._wait(1100)

    await this._click('#theme-continue-btn', 'Step 2 — Theme',
      'Configure your 8 energy parameters →')
    await this._wait(1300)

    if (!this.active) return

    // ── Step 3: Configuration ──────────────────────────────────
    await this._waitFor('#sunburst-container')
    this._say('Step 3 — Configure',
      'Drag the sunburst segments to set values. The <b>live city preview</b> updates in real time — solar panels and wind turbines appear as you raise each input.')
    const sb = document.querySelector('#sunburst-container')
    if (sb) {
      const r = sb.getBoundingClientRect()
      this._move(r.left + r.width * .5, r.top + r.height * .5)
    }
    await this._wait(2400)

    for (const [id, val, label] of DEMO_INPUTS) {
      if (!this.active) return
      this._say('Configuring Energy', `<b>${label}</b> → <em>${val}%</em>`)
      // Drift cursor near the city preview canvas to show it's updating
      const cv = document.getElementById('config-scene-canvas')
      if (cv) {
        const r = cv.getBoundingClientRect()
        this._move(
          r.left + r.width  * (.25 + (Math.random() * .5)),
          r.top  + r.height * (.25 + (Math.random() * .5)),
        )
      }
      this._changeInput(id, val)
      await this._wait(870)
    }

    await this._goto('#config-scene-canvas', 300)
    this._say('Live Preview',
      '<b>Solar panels</b> appear on rooftops. <b>Wind turbines</b> spin in parks. Every input has a visible impact.')
    await this._wait(2200)

    await this._click('#config-build-btn', 'Step 3 — Configure',
      'All 96 parameters set. Rendering the final city →')
    await this._wait(1200)

    if (!this.active) return

    // ── Step 4: City View ──────────────────────────────────────
    await this._waitFor('#scene-canvas')
    this._say('Step 4 — Your City',
      'Your city is <b>scored across 6 axes</b> — Livability, Sustainability, Resilience, Connectivity, Equity, Economy.')
    await this._goto('#panel-right', 600)
    await this._wait(1500)

    await this._goto('.overall-score', 400)
    this._say('Overall Grade',
      'An A+ → F letter grade derived from all six axis scores. Critical faults lower the ceiling.')
    await this._wait(2000)

    await this._goto('.axis-list', 400)
    this._say('Axis Scores',
      'Each axis is independently weighted. High <b>Sustainability</b> lifts <b>Resilience</b>. Low <b>Equity</b> triggers fault warnings.')
    await this._wait(2000)

    await this._goto('.faults-section', 400)
    this._say('Fault Detection',
      '<b>14 rule-based checks</b> surface critical issues like "Water Supply Crisis" or "Urban Heat Island Risk".')
    await this._wait(2200)

    this._quiet()
    await this._wait(700)
    this.stop()
  }
}
