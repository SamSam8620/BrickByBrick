// ─────────────────────────────────────────────────────────────────
// pixelMap.js  —  Interactive pixel-art world map for city selection
// ─────────────────────────────────────────────────────────────────

const TILE = 8   // canvas pixels per map tile
const MW   = 80  // map width in tiles
const MH   = 50  // map height in tiles

// ── Terrain IDs ──────────────────────────────────────────────────
const T = {
  DEEP: 0, SEA: 1, SHALLOW: 2, BEACH: 3,
  GRASS: 4, FOREST: 5, MOUNTAIN: 6, SNOW: 7,
  DESERT: 8, VOLCANIC: 9, PRAIRIE: 10,
}

// ── Pixel art palette: [base, lighter, darker] ───────────────────
const PAL = [
  ['#091525', '#0c1b2e', '#060e1c'],  // DEEP
  ['#0e2540', '#12294a', '#0b1e33'],  // SEA
  ['#1b4264', '#1f4a72', '#153455'],  // SHALLOW
  ['#b89650', '#c8a862', '#a08440'],  // BEACH
  ['#2e5c28', '#35682e', '#274e22'],  // GRASS
  ['#1b3e19', '#1f471d', '#153014'],  // FOREST
  ['#5c5c6e', '#6a6a80', '#505060'],  // MOUNTAIN
  ['#d2d2e2', '#dcdcec', '#c6c6d6'],  // SNOW
  ['#c07838', '#cc8640', '#aa6830'],  // DESERT
  ['#481a10', '#541e14', '#3a1208'],  // VOLCANIC
  ['#8a9c42', '#9aac4c', '#7a8a38'],  // PRAIRIE
]

// ── City pin definitions (tile coords + display) ─────────────────
const PINS = {
  port:        { tx: 9,  ty: 24, color: '#3a88c8', label: 'Port City'      },
  coastal:     { tx: 18, ty: 43, color: '#5a9acc', label: 'Coastal City'   },
  river_delta: { tx: 11, ty: 37, color: '#38aa88', label: 'River Delta'    },
  landlocked:  { tx: 24, ty: 23, color: '#58a040', label: 'Landlocked City'},
  mountain:    { tx: 17, ty: 17, color: '#8898bb', label: 'Mountain City'  },
  forest:      { tx: 20, ty: 12, color: '#449955', label: 'Forest City'    },
  prairie:     { tx: 31, ty: 27, color: '#aaaa44', label: 'Prairie City'   },
  desert:      { tx: 29, ty: 35, color: '#cc8844', label: 'Desert City'    },
  island:      { tx: 41, ty: 24, color: '#44bba8', label: 'Island City'    },
  geothermal:  { tx: 66, ty: 21, color: '#cc4422', label: 'Volcanic City'  },
}

// ── Terrain generation ────────────────────────────────────────────
function buildTerrain() {
  const m   = new Uint8Array(MW * MH) // all T.DEEP
  const at  = (x, y) => y * MW + x
  const set = (x, y, t) => { if (x >= 0 && x < MW && y >= 0 && y < MH) m[at(x, y)] = t }

  // Fill an ellipse with terrain t
  const ellipse = (cx, cy, rx, ry, t) => {
    for (let y = Math.max(0, Math.floor(cy - ry)); y <= Math.min(MH - 1, Math.ceil(cy + ry)); y++)
      for (let x = Math.max(0, Math.floor(cx - rx)); x <= Math.min(MW - 1, Math.ceil(cx + rx)); x++) {
        const dx = (x - cx) / rx, dy = (y - cy) / ry
        if (dx * dx + dy * dy <= 1) set(x, y, t)
      }
  }

  // Overlay: only paint tiles that are currently `onlyIf` terrain
  const over = (cx, cy, rx, ry, t, onlyIf) => {
    for (let y = Math.max(0, Math.floor(cy - ry)); y <= Math.min(MH - 1, Math.ceil(cy + ry)); y++)
      for (let x = Math.max(0, Math.floor(cx - rx)); x <= Math.min(MW - 1, Math.ceil(cx + rx)); x++) {
        const dx = (x - cx) / rx, dy = (y - cy) / ry
        if (dx * dx + dy * dy <= 1 && m[at(x, y)] === onlyIf) set(x, y, t)
      }
  }

  // ── Western continent ─────────────────────────────────────────
  ellipse(20, 27, 13, 17, T.GRASS)          // main body
  ellipse(15, 12,  7,  5, T.GRASS)          // northern peninsula
  ellipse(17, 42,  7,  5, T.GRASS)          // southern coastal extension

  // terrain overlays (only paint onto existing GRASS)
  over(19, 12,  6,  4, T.FOREST,   T.GRASS)   // northern forest
  over(18, 18,  4,  7, T.MOUNTAIN, T.GRASS)   // mountain spine
  over(18, 14,  2,  4, T.SNOW,     T.MOUNTAIN)// snow peaks
  over(29, 35,  5,  4, T.DESERT,   T.GRASS)   // desert patch
  // prairie belt (only overwrites grass)
  for (let y = 22; y <= 31; y++)
    for (let x = 23; x <= 35; x++)
      if (x < MW && y < MH && m[at(x, y)] === T.GRASS) set(x, y, T.PRAIRIE)

  // ── Eastern continent ─────────────────────────────────────────
  ellipse(62, 23, 12, 14, T.GRASS)           // main body
  ellipse(58, 10,  8,  5, T.GRASS)           // northern extension

  over(55, 11,  8,  5, T.FOREST,   T.GRASS)  // northern forest
  over(60, 19,  3,  7, T.MOUNTAIN, T.GRASS)  // mountain range
  over(60, 14,  2,  4, T.SNOW,     T.MOUNTAIN)// snow
  over(61, 34,  9,  5, T.DESERT,   T.GRASS)  // southern desert
  over(67, 21,  5,  6, T.VOLCANIC, T.GRASS)  // volcanic zone

  // ── Central island ────────────────────────────────────────────
  ellipse(41, 24,  4,  4, T.GRASS)
  over   (41, 24,  2,  2, T.FOREST, T.GRASS) // tropical forest center

  // ── Post-process 1: coastal BEACH ────────────────────────────
  const b = new Uint8Array(m)
  for (let y = 0; y < MH; y++) {
    for (let x = 0; x < MW; x++) {
      const t = m[at(x, y)]
      // only land tiles that can become beach
      if (t < T.GRASS || t === T.MOUNTAIN || t === T.SNOW || t === T.VOLCANIC) continue
      const ns = [
        x > 0      ? m[at(x - 1, y)] : T.DEEP,
        x < MW - 1 ? m[at(x + 1, y)] : T.DEEP,
        y > 0      ? m[at(x, y - 1)] : T.DEEP,
        y < MH - 1 ? m[at(x, y + 1)] : T.DEEP,
      ]
      if (ns.some(n => n < T.BEACH)) b[at(x, y)] = T.BEACH
    }
  }

  // ── Post-process 2: shallow/medium sea near coasts ────────────
  const s = new Uint8Array(b)
  for (let y = 0; y < MH; y++) {
    for (let x = 0; x < MW; x++) {
      if (b[at(x, y)] !== T.DEEP) continue
      let d1 = false, d2 = false
      outer: for (let dy = -3; dy <= 3; dy++) {
        for (let dx = -3; dx <= 3; dx++) {
          const nx = x + dx, ny = y + dy
          if (nx < 0 || nx >= MW || ny < 0 || ny >= MH) continue
          if (b[at(nx, ny)] >= T.BEACH) {
            const dist = Math.max(Math.abs(dx), Math.abs(dy))
            if (dist <= 1) { d1 = true; break outer }
            if (dist <= 2)   d2 = true
          }
        }
      }
      if (d1)      s[at(x, y)] = T.SHALLOW
      else if (d2) s[at(x, y)] = T.SEA
    }
  }

  return s
}

// ── PixelMap class ────────────────────────────────────────────────
export class PixelMap {
  constructor(container, onSelect) {
    this.onSelect = onSelect
    this.selected = null
    this.hovered  = null
    this._terrain = buildTerrain()
    this._animFrame = null

    this.canvas = document.createElement('canvas')
    this.canvas.width  = MW * TILE
    this.canvas.height = MH * TILE
    this.canvas.className = 'pixel-map-canvas'
    container.appendChild(this.canvas)

    this.ctx = this.canvas.getContext('2d')
    this.ctx.imageSmoothingEnabled = false

    this.canvas.addEventListener('mousemove',  e => this._onMove(e))
    this.canvas.addEventListener('mouseleave', () => { this.hovered = null; this._render() })
    this.canvas.addEventListener('click',      e => this._onClick(e))

    this._startLoop()
  }

  destroy() {
    if (this._animFrame) cancelAnimationFrame(this._animFrame)
    this._animFrame = null
  }

  select(id) {
    this.selected = id
    this._render()
  }

  // ── Animation loop (for ocean shimmer) ───────────────────────
  _startLoop() {
    let last = 0
    const tick = (now) => {
      this._animFrame = requestAnimationFrame(tick)
      if (now - last < 600) return  // ~1.6 fps for waves is enough
      last = now
      this._render()
    }
    this._animFrame = requestAnimationFrame(tick)
  }

  // ── Coordinate helpers ────────────────────────────────────────
  _tile(e) {
    const r  = this.canvas.getBoundingClientRect()
    const sx = (MW * TILE) / r.width
    const sy = (MH * TILE) / r.height
    return {
      tx: Math.floor((e.clientX - r.left) * sx / TILE),
      ty: Math.floor((e.clientY - r.top)  * sy / TILE),
    }
  }

  _pinAt(tx, ty) {
    for (const [id, p] of Object.entries(PINS))
      if (Math.abs(tx - p.tx) <= 2 && Math.abs(ty - p.ty) <= 2) return id
    return null
  }

  // ── Event handlers ────────────────────────────────────────────
  _onMove(e) {
    const { tx, ty } = this._tile(e)
    const id = this._pinAt(tx, ty)
    if (id !== this.hovered) {
      this.hovered = id
      this.canvas.style.cursor = id ? 'pointer' : 'default'
      this._render()
    }
  }

  _onClick(e) {
    const { tx, ty } = this._tile(e)
    const id = this._pinAt(tx, ty)
    if (id) {
      this.selected = id
      this._render()
      this.onSelect(id)
    }
  }

  // ── Main render ───────────────────────────────────────────────
  _render() {
    const ctx  = this.ctx
    const tick = Math.floor(Date.now() / 700) // wave animation tick
    ctx.imageSmoothingEnabled = false

    // Draw terrain tiles
    for (let y = 0; y < MH; y++) {
      for (let x = 0; x < MW; x++) {
        const t   = this._terrain[y * MW + x]
        const pal = PAL[t]
        // deterministic per-tile dither (3 shades)
        const d = (x * 3 + y * 7 + (x ^ y)) % 3
        ctx.fillStyle = pal[d]
        ctx.fillRect(x * TILE, y * TILE, TILE, TILE)
      }
    }

    // Animated ocean wave shimmer
    ctx.fillStyle = 'rgba(30,100,160,0.28)'
    for (let y = 0; y < MH; y++) {
      for (let x = 0; x < MW; x++) {
        const t = this._terrain[y * MW + x]
        if (t !== T.DEEP && t !== T.SEA) continue
        if (((x + y * 2 + tick) % 8) === 0) {
          ctx.fillRect(x * TILE, y * TILE + 3, TILE, 2)
        }
      }
    }

    // Draw all city pins
    for (const [id, p] of Object.entries(PINS))
      this._drawPin(p.tx, p.ty, p.color, id === this.hovered, id === this.selected)

    // Draw labels (selected first so hovered renders on top)
    for (const [id, p] of Object.entries(PINS))
      if (id === this.selected && id !== this.hovered)
        this._drawLabel(p.tx, p.ty, p.label, true)
    for (const [id, p] of Object.entries(PINS))
      if (id === this.hovered)
        this._drawLabel(p.tx, p.ty, p.label, id === this.selected)
  }

  // ── Pin renderer ──────────────────────────────────────────────
  _drawPin(tx, ty, color, hov, sel) {
    const ctx = this.ctx
    const cx  = tx * TILE + Math.floor(TILE / 2)  // tile center x
    const bw  = 14, bh = 14                        // body dimensions
    const bx  = cx - 7                             // body left
    const by  = ty * TILE - 10                     // body top (above tile)
    const sx  = cx - 1                             // stem x
    const sy  = by + bh                            // stem start y
    const sh  = 8                                  // stem height

    // Glow backdrop (hover / selected)
    if (hov || sel) {
      ctx.fillStyle = sel ? 'rgba(0,212,255,0.22)' : 'rgba(255,255,255,0.10)'
      ctx.fillRect(bx - 4, by - 4, bw + 8, bh + sh + 10)
    }

    // Drop shadow
    ctx.fillStyle = 'rgba(0,0,0,0.55)'
    ctx.fillRect(bx + 2, by + 2, bw, bh)
    ctx.fillRect(sx + 1, sy + 1,  2, sh)

    // Pin body
    ctx.fillStyle = sel ? '#00d4ff' : color
    ctx.fillRect(bx, by, bw, bh)

    // Stem + tip
    ctx.fillStyle = sel ? '#00d4ff' : color
    ctx.fillRect(sx, sy,      2, sh)
    ctx.fillRect(sx, sy + sh, 2,  1)

    // Pixel-art bevel: highlight (top + left)
    ctx.fillStyle = 'rgba(255,255,255,0.38)'
    ctx.fillRect(bx,          by,          bw, 1)
    ctx.fillRect(bx,          by,          1,  bh)
    // shadow (bottom + right)
    ctx.fillStyle = 'rgba(0,0,0,0.38)'
    ctx.fillRect(bx,          by + bh - 1, bw, 1)
    ctx.fillRect(bx + bw - 1, by,          1,  bh)

    // Pixel building icon (white, inside the body)
    ctx.fillStyle = sel ? 'rgba(0,30,50,0.7)' : 'rgba(255,255,255,0.65)'
    ctx.fillRect(bx + 2, by + 2,  4, 1)  // roof
    ctx.fillRect(bx + 2, by + 3,  2, 5)  // left column
    ctx.fillRect(bx + 8, by + 3,  2, 5)  // right column (gap = door area)
    ctx.fillRect(bx + 5, by + 6,  2, 2)  // door
  }

  // ── Label renderer ────────────────────────────────────────────
  _drawLabel(tx, ty, text, sel) {
    const ctx = this.ctx
    const cx  = tx * TILE + Math.floor(TILE / 2)
    const by  = ty * TILE - 10  // top of the pin body

    ctx.font = 'bold 8px monospace'
    ctx.textAlign    = 'center'
    ctx.textBaseline = 'middle'
    const tw = ctx.measureText(text).width
    const lw = Math.ceil(tw) + 10
    const lh = 13
    const lx = Math.max(1, Math.min(MW * TILE - lw - 1, Math.round(cx - lw / 2)))
    const ly = Math.max(1, by - lh - 3)

    // Background
    ctx.fillStyle = sel ? 'rgba(0,36,64,0.97)' : 'rgba(8,16,32,0.93)'
    ctx.fillRect(lx, ly, lw, lh)

    // 1-px border (pixel art style)
    ctx.fillStyle = sel ? '#00d4ff' : 'rgba(155,185,255,0.55)'
    ctx.fillRect(lx,          ly,          lw, 1)
    ctx.fillRect(lx,          ly + lh - 1, lw, 1)
    ctx.fillRect(lx,          ly,          1,  lh)
    ctx.fillRect(lx + lw - 1, ly,          1,  lh)

    // Text
    ctx.fillStyle = sel ? '#00d4ff' : '#c8d8f0'
    ctx.fillText(text, cx, ly + lh / 2)
  }
}
