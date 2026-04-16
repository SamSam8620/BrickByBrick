// ─────────────────────────────────────────────────────────────────
// sunburst.js — Interactive SVG sunburst chart for theme config
// Drag inward/outward on any segment to set its value (0–100).
// ─────────────────────────────────────────────────────────────────

const SVG_NS = 'http://www.w3.org/2000/svg'

function mkEl(tag) {
  return document.createElementNS(SVG_NS, tag)
}

// Polar coords: angle in radians from top, clockwise
function polar(cx, cy, r, angle) {
  return [cx + r * Math.sin(angle), cy - r * Math.cos(angle)]
}

// Build an SVG arc-ring path for one segment
function arcPath(cx, cy, rInner, rOuter, startA, endA) {
  const [x1, y1] = polar(cx, cy, rOuter, startA)
  const [x2, y2] = polar(cx, cy, rOuter, endA)
  const [x3, y3] = polar(cx, cy, rInner, endA)
  const [x4, y4] = polar(cx, cy, rInner, startA)
  const large = endA - startA > Math.PI ? 1 : 0
  return [
    `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
    `A ${rOuter} ${rOuter} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
    `L ${x3.toFixed(2)} ${y3.toFixed(2)}`,
    `A ${rInner} ${rInner} 0 ${large} 0 ${x4.toFixed(2)} ${y4.toFixed(2)}`,
    'Z',
  ].join(' ')
}

// Hex colour brightness adjustment  (-1 to +1)
function adjustHex(hex, amt) {
  const clamp = v => Math.max(0, Math.min(255, Math.round(v)))
  const parse = h => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)]
  const [r,g,b] = parse(hex.length === 7 ? hex : '#7f7f7f')
  const f = 1 + amt
  return `rgb(${clamp(r*f)},${clamp(g*f)},${clamp(b*f)})`
}

export class SunburstChart {
  /**
   * @param {HTMLElement} container – element to append the SVG to
   * @param {Array}  inputs         – the 8 input objects ({ id, label, description, default, … })
   * @param {Object} initialValues  – { inputId: 0–100 }
   * @param {Function} onChange     – (inputId, value) called on each change
   * @param {string} themeColor     – hex color of the chosen theme
   * @param {string} themeIcon      – emoji icon for center
   */
  constructor(container, inputs, initialValues, onChange, themeColor, themeIcon) {
    this.inputs     = inputs
    this.values     = { ...initialValues }
    this.onChange   = onChange
    this.themeColor = themeColor
    this.themeIcon  = themeIcon

    this.SIZE    = 420
    this.cx      = 210
    this.cy      = 210
    this.innerR  = 52
    this.outerR  = 170
    this.labelR  = 195
    this.n       = inputs.length        // 8
    this.segStep = (2 * Math.PI) / this.n
    this.gap     = 0.07                 // radians gap between segments

    this.dragging   = null              // index of dragged segment
    this.hovering   = null              // index of hovered segment

    this.svg        = this._buildSVG()
    this.defs       = mkEl('defs')
    this.svg.appendChild(this.defs)

    container.appendChild(this.svg)
    this._bindEvents()
    this._render()
  }

  _buildSVG() {
    const svg = mkEl('svg')
    svg.setAttribute('viewBox', `0 0 ${this.SIZE} ${this.SIZE}`)
    svg.setAttribute('width',   this.SIZE)
    svg.setAttribute('height',  this.SIZE)
    svg.style.cssText = 'display:block; margin:0 auto; cursor:crosshair; overflow:visible'
    return svg
  }

  // ── Public: update from outside (e.g. reset) ──────────────────
  updateValues(newValues) {
    this.values = { ...newValues }
    this._render()
  }

  // ── Render ────────────────────────────────────────────────────
  _render() {
    // Keep defs, remove everything else
    while (this.svg.children.length > 1) {
      this.svg.removeChild(this.svg.lastChild)
    }
    this.defs.innerHTML = ''

    this._addGlowFilter()
    this._drawBackground()

    for (let i = 0; i < this.n; i++) {
      this._drawSegment(i)
    }

    this._drawCenterCircle()
    this._drawCenterLabel()
  }

  _addGlowFilter() {
    const filter = mkEl('filter')
    filter.id = 'sb-glow'
    const blur = mkEl('feGaussianBlur')
    blur.setAttribute('stdDeviation', '4')
    blur.setAttribute('result', 'blur')
    const merge = mkEl('feMerge')
    ;['blur', 'SourceGraphic'].forEach(src => {
      const n = mkEl('feMergeNode')
      n.setAttribute('in', src)
      merge.appendChild(n)
    })
    filter.appendChild(blur)
    filter.appendChild(merge)
    this.defs.appendChild(filter)
  }

  _drawBackground() {
    const bg = mkEl('circle')
    bg.setAttribute('cx', this.cx)
    bg.setAttribute('cy', this.cy)
    bg.setAttribute('r', this.outerR + 20)
    bg.setAttribute('fill', 'rgba(5,8,20,0.55)')
    this.svg.appendChild(bg)
  }

  _drawSegment(i) {
    const inp      = this.inputs[i]
    const value    = this.values[inp.id] ?? inp.default
    const fill     = value / 100
    const isActive = this.dragging === i || this.hovering === i

    const startA   = i * this.segStep + this.gap / 2
    const endA     = (i + 1) * this.segStep - this.gap / 2
    const midA     = (startA + endA) / 2

    const fillR    = this.innerR + fill * (this.outerR - this.innerR)

    // ── Track (empty ring) ──
    const track = mkEl('path')
    track.setAttribute('d', arcPath(this.cx, this.cy, this.innerR, this.outerR, startA, endA))
    track.setAttribute('fill', isActive ? 'rgba(40,60,100,0.75)' : 'rgba(20,30,60,0.6)')
    track.setAttribute('stroke', 'rgba(255,255,255,0.05)')
    track.setAttribute('stroke-width', '0.5')
    track.setAttribute('data-seg', i)
    track.style.cursor = 'pointer'
    this.svg.appendChild(track)

    // ── Fill arc ──
    if (fill > 0.01) {
      const gradId = `sg${i}`
      const lg = mkEl('linearGradient')
      lg.id = gradId
      lg.setAttribute('gradientUnits', 'userSpaceOnUse')
      const [ix, iy] = polar(this.cx, this.cy, this.innerR, midA)
      const [ox, oy] = polar(this.cx, this.cy, this.outerR, midA)
      lg.setAttribute('x1', ix.toFixed(1)); lg.setAttribute('y1', iy.toFixed(1))
      lg.setAttribute('x2', ox.toFixed(1)); lg.setAttribute('y2', oy.toFixed(1))

      const s1 = mkEl('stop'); s1.setAttribute('offset', '0%')
      s1.setAttribute('stop-color', adjustHex(this.themeColor, -0.3))
      s1.setAttribute('stop-opacity', '0.4')
      const s2 = mkEl('stop'); s2.setAttribute('offset', '100%')
      s2.setAttribute('stop-color', this.themeColor)
      s2.setAttribute('stop-opacity', isActive ? '1' : '0.85')
      lg.appendChild(s1); lg.appendChild(s2)
      this.defs.appendChild(lg)

      const filledPath = mkEl('path')
      filledPath.setAttribute('d', arcPath(this.cx, this.cy, this.innerR, fillR, startA, endA))
      filledPath.setAttribute('fill', `url(#${gradId})`)
      if (isActive || value > 70) filledPath.setAttribute('filter', 'url(#sb-glow)')
      filledPath.setAttribute('data-seg', i)
      filledPath.style.cursor = 'pointer'
      this.svg.appendChild(filledPath)

      // Outer edge glow line at fill tip
      const [ex1, ey1] = polar(this.cx, this.cy, fillR, startA + this.gap * 0.3)
      const [ex2, ey2] = polar(this.cx, this.cy, fillR, endA - this.gap * 0.3)
      const edgeLine = mkEl('path')
      edgeLine.setAttribute('d', `M ${ex1.toFixed(1)} ${ey1.toFixed(1)} A ${fillR} ${fillR} 0 0 1 ${ex2.toFixed(1)} ${ey2.toFixed(1)}`)
      edgeLine.setAttribute('fill', 'none')
      edgeLine.setAttribute('stroke', this.themeColor)
      edgeLine.setAttribute('stroke-width', isActive ? '3' : '1.5')
      edgeLine.setAttribute('stroke-opacity', '0.9')
      edgeLine.setAttribute('stroke-linecap', 'round')
      this.svg.appendChild(edgeLine)
    }

    // ── Value bubble on the fill tip ──
    const tipR = fillR < this.innerR + 4 ? this.innerR + 10 : fillR
    const [bx, by] = polar(this.cx, this.cy, tipR, midA)
    if (isActive || value > 0) {
      const bubble = mkEl('circle')
      bubble.setAttribute('cx', bx.toFixed(1))
      bubble.setAttribute('cy', by.toFixed(1))
      bubble.setAttribute('r', isActive ? '9' : '7')
      bubble.setAttribute('fill', 'rgba(5,8,20,0.85)')
      bubble.setAttribute('stroke', this.themeColor)
      bubble.setAttribute('stroke-width', isActive ? '2' : '1.2')
      bubble.setAttribute('data-seg', i)
      bubble.style.cursor = 'pointer'
      this.svg.appendChild(bubble)

      const valTxt = mkEl('text')
      valTxt.setAttribute('x', bx.toFixed(1))
      valTxt.setAttribute('y', (by + 4).toFixed(1))
      valTxt.setAttribute('text-anchor', 'middle')
      valTxt.setAttribute('fill', this.themeColor)
      valTxt.setAttribute('font-size', isActive ? '9' : '8')
      valTxt.setAttribute('font-weight', '800')
      valTxt.setAttribute('font-family', 'monospace')
      valTxt.textContent = value
      this.svg.appendChild(valTxt)
    }

    // ── Outer label ──
    const [lx, ly] = polar(this.cx, this.cy, this.labelR, midA)
    // Break label into ≤2 lines of ≤12 chars
    const words = inp.label.split(' ')
    const line1 = words.slice(0, Math.ceil(words.length / 2)).join(' ')
    const line2 = words.length > 1 ? words.slice(Math.ceil(words.length / 2)).join(' ') : ''

    const lbl = mkEl('text')
    lbl.setAttribute('text-anchor', 'middle')
    lbl.setAttribute('fill', isActive ? 'rgba(230,240,255,0.95)' : 'rgba(140,165,210,0.75)')
    lbl.setAttribute('font-size', '9')
    lbl.setAttribute('font-weight', '600')

    if (line2) {
      const t1 = mkEl('tspan'); t1.setAttribute('x', lx.toFixed(1)); t1.setAttribute('y', (ly - 5).toFixed(1)); t1.textContent = line1
      const t2 = mkEl('tspan'); t2.setAttribute('x', lx.toFixed(1)); t2.setAttribute('y', (ly + 7).toFixed(1)); t2.textContent = line2
      lbl.appendChild(t1); lbl.appendChild(t2)
    } else {
      lbl.setAttribute('x', lx.toFixed(1)); lbl.setAttribute('y', (ly + 3).toFixed(1))
      lbl.textContent = line1
    }
    this.svg.appendChild(lbl)
  }

  _drawCenterCircle() {
    const ring = mkEl('circle')
    ring.setAttribute('cx', this.cx); ring.setAttribute('cy', this.cy)
    ring.setAttribute('r', this.innerR - 2)
    ring.setAttribute('fill', 'rgba(5,8,20,0.92)')
    ring.setAttribute('stroke', this.themeColor)
    ring.setAttribute('stroke-width', '1.5')
    ring.setAttribute('stroke-opacity', '0.5')
    this.svg.appendChild(ring)
  }

  _drawCenterLabel() {
    const active = this.dragging !== null ? this.dragging : this.hovering
    const inp = active !== null ? this.inputs[active] : null

    if (inp) {
      // Show hovered/active input name + value
      const val = this.values[inp.id] ?? inp.default
      const t1 = mkEl('text')
      t1.setAttribute('x', this.cx); t1.setAttribute('y', this.cy - 10)
      t1.setAttribute('text-anchor', 'middle')
      t1.setAttribute('fill', this.themeColor)
      t1.setAttribute('font-size', '18')
      t1.setAttribute('font-weight', '800')
      t1.setAttribute('font-family', 'monospace')
      t1.textContent = val
      this.svg.appendChild(t1)

      const words = inp.label.split(' ')
      const perLine = Math.ceil(words.length / 2)
      const lines = [words.slice(0, perLine).join(' '), words.slice(perLine).join(' ')].filter(Boolean)
      lines.forEach((line, li) => {
        const tspan = mkEl('text')
        tspan.setAttribute('x', this.cx)
        tspan.setAttribute('y', this.cy + 8 + li * 10)
        tspan.setAttribute('text-anchor', 'middle')
        tspan.setAttribute('fill', 'rgba(160,185,230,0.85)')
        tspan.setAttribute('font-size', '7.5')
        tspan.textContent = line
        this.svg.appendChild(tspan)
      })
    } else {
      // Show theme icon in center
      const icon = mkEl('text')
      icon.setAttribute('x', this.cx); icon.setAttribute('y', this.cy + 12)
      icon.setAttribute('text-anchor', 'middle')
      icon.setAttribute('font-size', '34')
      icon.textContent = this.themeIcon || '●'
      this.svg.appendChild(icon)
    }
  }

  // ── Event Handling ────────────────────────────────────────────
  _bindEvents() {
    const getSegmentAt = (mx, my) => {
      const dx = mx - this.cx, dy = my - this.cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < this.innerR - 4 || dist > this.outerR + 8) return null
      let angle = Math.atan2(dx, -dy)
      if (angle < 0) angle += 2 * Math.PI
      return Math.floor(angle / this.segStep) % this.n
    }

    const getValueAt = (mx, my) => {
      const dx = mx - this.cx, dy = my - this.cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      return Math.round(
        Math.max(0, Math.min(100, (dist - this.innerR) / (this.outerR - this.innerR) * 100))
        / 5) * 5
    }

    const toSVGCoords = (e) => {
      const rect = this.svg.getBoundingClientRect()
      const scale = this.SIZE / rect.width
      return [(e.clientX - rect.left) * scale, (e.clientY - rect.top) * scale]
    }

    // Mouse down: start drag
    this.svg.addEventListener('mousedown', (e) => {
      const [mx, my] = toSVGCoords(e)
      const seg = getSegmentAt(mx, my)
      if (seg === null) return
      this.dragging = seg
      const val = getValueAt(mx, my)
      const inp = this.inputs[seg]
      this.values[inp.id] = val
      this._render()
      this.onChange(inp.id, val)
      e.preventDefault()
    })

    // Mouse move: drag or hover
    window.addEventListener('mousemove', (e) => {
      const [mx, my] = toSVGCoords(e)
      if (this.dragging !== null) {
        const val = getValueAt(mx, my)
        const inp = this.inputs[this.dragging]
        if (this.values[inp.id] !== val) {
          this.values[inp.id] = val
          this._render()
          this.onChange(inp.id, val)
        }
      } else {
        const seg = getSegmentAt(mx, my)
        if (seg !== this.hovering) {
          this.hovering = seg
          this._render()
        }
      }
    })

    // Mouse up: end drag
    window.addEventListener('mouseup', () => {
      if (this.dragging !== null) {
        this.dragging = null
        this._render()
      }
    })

    // Touch events
    const touch = (e, isMove) => {
      const t = e.touches[0]
      const [mx, my] = toSVGCoords(t)
      if (!isMove) {
        const seg = getSegmentAt(mx, my)
        if (seg === null) return
        this.dragging = seg
      }
      if (this.dragging !== null) {
        const val = getValueAt(mx, my)
        const inp = this.inputs[this.dragging]
        if (this.values[inp.id] !== val) {
          this.values[inp.id] = val
          this._render()
          this.onChange(inp.id, val)
        }
        e.preventDefault()
      }
    }
    this.svg.addEventListener('touchstart', (e) => touch(e, false), { passive: false })
    this.svg.addEventListener('touchmove', (e) => touch(e, true), { passive: false })
    this.svg.addEventListener('touchend', () => { this.dragging = null; this._render() })
  }

  destroy() {
    this.svg.remove()
  }
}
