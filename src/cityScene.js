// ─────────────────────────────────────────────────────────────────
// cityScene.js
//   CityScene  — isometric "Where's Waldo" tile city
//   StreetView — third-person (behind-character) street perspective
// ─────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════
// THEME PALETTES  (bright, daytime, illustrative)
// ═══════════════════════════════════════════════════════════════════
export const THEME_PALETTES = {
  mobility: {
    sky: ['#87c8e8','#c5e8f5'], ground: '#8cb87c',
    road: '#4a4a52', roadLine: '#ffe84a',
    buildings: ['#1565c0','#0277bd','#0d47a1','#0288d1','#006494','#1976d2'],
    parkGrass: '#4caf50', tree: '#2e7d32', treeDark: '#1b5e20', trunk: '#5d4037',
    people: ['#f44336','#ffeb3b','#ff9800','#e91e63','#9c27b0'],
    cloud: '#f0f8ff', accent: '#29b6f6', windowLit: '#fffde7', windowDark: '#1a2a3a',
  },
  governance: {
    sky: ['#c5b0e8','#ede0fa'], ground: '#9cb87c',
    road: '#4a4040', roadLine: '#ffd54f',
    buildings: ['#6a1b9a','#7b1fa2','#4a148c','#8e24aa','#38006b','#9c27b0'],
    parkGrass: '#56a156', tree: '#1b5e20', treeDark: '#0d3b0d', trunk: '#5d4037',
    people: ['#ff6f00','#ffd600','#ffffff','#ff4081','#40c4ff'],
    cloud: '#f9f4ff', accent: '#e040fb', windowLit: '#fff9c4', windowDark: '#1a0a2a',
  },
  ecology: {
    sky: ['#a8dba8','#d8f5d8'], ground: '#6dac6d',
    road: '#5a5a40', roadLine: '#ffe04a',
    buildings: ['#2e7d32','#388e3c','#1b5e20','#43a047','#558b2f','#33691e'],
    parkGrass: '#66bb6a', tree: '#1b8a1b', treeDark: '#0d5e0d', trunk: '#4e342e',
    people: ['#f44336','#ffd700','#ff9800','#2196f3','#e91e63'],
    cloud: '#f1fff1', accent: '#69f0ae', windowLit: '#f9ffe0', windowDark: '#0a1a0a',
  },
  housing: {
    sky: ['#f5d0a0','#faebd7'], ground: '#a09070',
    road: '#5a5040', roadLine: '#fff0a0',
    buildings: ['#bf360c','#d84315','#e64a19','#8d2a0a','#c62828','#e53935'],
    parkGrass: '#7cb87a', tree: '#33691e', treeDark: '#1a3d08', trunk: '#5d4037',
    people: ['#1565c0','#ffd700','#4caf50','#9c27b0','#ffffff'],
    cloud: '#fff9f0', accent: '#ff8a65', windowLit: '#fffde7', windowDark: '#2a0a00',
  },
  economy: {
    sky: ['#ffe082','#fff9c4'], ground: '#9a9a6a',
    road: '#484840', roadLine: '#ffffff',
    buildings: ['#f57f17','#f9a825','#e65100','#ff8f00','#ff6f00','#ffa000'],
    parkGrass: '#7cb87a', tree: '#33691e', treeDark: '#1b5e20', trunk: '#5d4037',
    people: ['#1a237e','#b71c1c','#ffffff','#004d40','#4a148c'],
    cloud: '#fffde7', accent: '#ffd600', windowLit: '#fffde7', windowDark: '#1a1000',
  },
  infrastructure: {
    sky: ['#b0bec5','#eceff1'], ground: '#8a9a8a',
    road: '#37474f', roadLine: '#ffeb3b',
    buildings: ['#455a64','#546e7a','#37474f','#607d8b','#263238','#4a6370'],
    parkGrass: '#66bb6a', tree: '#2e7d32', treeDark: '#1b5e20', trunk: '#5d4037',
    people: ['#f44336','#ffd700','#2196f3','#e91e63','#ff9800'],
    cloud: '#f5f8fa', accent: '#78909c', windowLit: '#e3f2fd', windowDark: '#0a1018',
  },
  healthcare: {
    sky: ['#b2ebf2','#e0f7fa'], ground: '#a0c8a0',
    road: '#4a5a5a', roadLine: '#ffffff',
    buildings: ['#00838f','#006064','#00acc1','#0097a7','#004d52','#00b8d4'],
    parkGrass: '#81c784', tree: '#2e7d32', treeDark: '#1b5e20', trunk: '#5d4037',
    people: ['#f44336','#ffffff','#03a9f4','#4caf50','#9c27b0'],
    cloud: '#f0faff', accent: '#00bcd4', windowLit: '#e0f7fa', windowDark: '#001a1a',
  },
  education: {
    sky: ['#f5cc88','#fff8e1'], ground: '#a09060',
    road: '#5a4a30', roadLine: '#fff0a0',
    buildings: ['#e65100','#bf360c','#f57c00','#e64a19','#8d2a0a','#c75000'],
    parkGrass: '#7cb87a', tree: '#33691e', treeDark: '#1a4d08', trunk: '#5d4037',
    people: ['#1565c0','#880e4f','#ffd600','#1b5e20','#4a148c'],
    cloud: '#fffde7', accent: '#ff8f00', windowLit: '#fff8e1', windowDark: '#1a0a00',
  },
  energy: {
    sky: ['#ff8a65','#ffccbc'], ground: '#8a7a6a',
    road: '#5a4a40', roadLine: '#ffd700',
    buildings: ['#b71c1c','#c62828','#e53935','#8d0000','#d32f2f','#c0392b'],
    parkGrass: '#7cb87a', tree: '#33691e', treeDark: '#1b5e20', trunk: '#5d4037',
    people: ['#ffeb3b','#ffffff','#4caf50','#2196f3','#ff9800'],
    cloud: '#fff3e0', accent: '#ff3d00', windowLit: '#fff3e0', windowDark: '#1a0000',
  },
  food: {
    sky: ['#a5d6a7','#e8f5e9'], ground: '#8a9a60',
    road: '#5a5040', roadLine: '#ffe04a',
    buildings: ['#558b2f','#689f38','#33691e','#7cb342','#2e7b0c','#4a7c00'],
    parkGrass: '#81c784', tree: '#2e7d32', treeDark: '#1b5e20', trunk: '#5d4037',
    people: ['#f44336','#ffd700','#ff9800','#2196f3','#e91e63'],
    cloud: '#f1fff1', accent: '#76c442', windowLit: '#f9ffe0', windowDark: '#0a1400',
  },
  digital: {
    sky: ['#0d2a3a','#0a3a2a'], ground: '#1a2a1a',
    road: '#1a1a2a', roadLine: '#00ff88',
    buildings: ['#0a2a4a','#0d3a5a','#062240','#103050','#081830','#0a3040'],
    parkGrass: '#1a5a1a', tree: '#00aa44', treeDark: '#006622', trunk: '#4e342e',
    people: ['#00ff88','#00cfff','#f0abfc','#ffd700','#ff4081'],
    cloud: '#ccf9e8', accent: '#00ff88', windowLit: '#00ff88', windowDark: '#000a14',
  },
  community: {
    sky: ['#f8b4d5','#fce7f3'], ground: '#9a8a9a',
    road: '#5a4a5a', roadLine: '#ffd54f',
    buildings: ['#ad1457','#c2185b','#880e4f','#e91e63','#6a0038','#d81b60'],
    parkGrass: '#81c784', tree: '#2e7d32', treeDark: '#1b5e20', trunk: '#5d4037',
    people: ['#2196f3','#ff9800','#4caf50','#9c27b0','#f44336','#ffeb3b'],
    cloud: '#fce7f3', accent: '#ff4081', windowLit: '#fce4ec', windowDark: '#1a001a',
  },
}

// ═══════════════════════════════════════════════════════════════════
// COLOR HELPERS
// ═══════════════════════════════════════════════════════════════════
function shade(hex, f) {
  const parse = h => {
    const n = parseInt((h.startsWith('#') ? h.slice(1) : h), 16)
    return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff]
  }
  const [r, g, b] = parse(hex.length >= 6 ? hex : '888888')
  const c = v => Math.max(0, Math.min(255, Math.round(v * f)))
  return `rgb(${c(r)},${c(g)},${c(b)})`
}

// ═══════════════════════════════════════════════════════════════════
// ISOMETRIC DRAWING PRIMITIVES
// ═══════════════════════════════════════════════════════════════════

// Draw an isometric ground diamond.
// (cx, cy) = screen coord of the top vertex of the diamond.
function isoFlat(ctx, cx, cy, TW, TH, fill, stroke) {
  ctx.beginPath()
  ctx.moveTo(cx,        cy)
  ctx.lineTo(cx + TW/2, cy + TH/2)
  ctx.lineTo(cx,        cy + TH)
  ctx.lineTo(cx - TW/2, cy + TH/2)
  ctx.closePath()
  ctx.fillStyle = fill
  ctx.fill()
  if (stroke) {
    ctx.strokeStyle = stroke
    ctx.lineWidth = 0.6
    ctx.stroke()
  }
}

// Draw an isometric box (building) rising UP by boxH pixels.
// (cx, cy) = top vertex of the base diamond.
function isoBox(ctx, cx, cy, TW, TH, boxH, baseColor) {
  const topC   = shade(baseColor, 1.30)
  const leftC  = shade(baseColor, 0.72)
  const rightC = shade(baseColor, 0.50)
  const edge   = 'rgba(0,0,0,0.13)'

  // Left face
  ctx.beginPath()
  ctx.moveTo(cx - TW/2, cy + TH/2 - boxH)
  ctx.lineTo(cx,        cy + TH   - boxH)
  ctx.lineTo(cx,        cy + TH)
  ctx.lineTo(cx - TW/2, cy + TH/2)
  ctx.closePath()
  ctx.fillStyle = leftC
  ctx.fill()
  ctx.strokeStyle = edge; ctx.lineWidth = 0.5; ctx.stroke()

  // Right face
  ctx.beginPath()
  ctx.moveTo(cx + TW/2, cy + TH/2 - boxH)
  ctx.lineTo(cx,        cy + TH   - boxH)
  ctx.lineTo(cx,        cy + TH)
  ctx.lineTo(cx + TW/2, cy + TH/2)
  ctx.closePath()
  ctx.fillStyle = rightC
  ctx.fill()
  ctx.strokeStyle = edge; ctx.lineWidth = 0.5; ctx.stroke()

  // Top face (roof)
  ctx.beginPath()
  ctx.moveTo(cx,        cy        - boxH)
  ctx.lineTo(cx + TW/2, cy + TH/2 - boxH)
  ctx.lineTo(cx,        cy + TH   - boxH)
  ctx.lineTo(cx - TW/2, cy + TH/2 - boxH)
  ctx.closePath()
  ctx.fillStyle = topC
  ctx.fill()
  ctx.strokeStyle = edge; ctx.lineWidth = 0.5; ctx.stroke()
}

// Windows on the right face of a building.
function isoWindows(ctx, cx, cy, TW, TH, boxH, litColor, darkColor, t) {
  const cols = Math.max(1, Math.floor(TW / 14))
  const rows = Math.max(1, Math.floor(boxH / 12))
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const u = (c + 1) / (cols + 1)      // 0..1 left→right across right face
      const v = (r + 0.7) / (rows + 0.3)  // 0..1 top→bottom of face
      // Right face: left edge is (cx, cy+TH-boxH→cy+TH) right edge is (cx+TW/2, cy+TH/2-boxH→cy+TH/2)
      // Interpolate: x = cx + u*TW/2, y = (cy+TH-boxH + v*boxH) + u*(TH/2-TH/2)
      const wx = cx + u * TW / 2
      const wy = (cy + TH - boxH) + v * boxH - u * v * TH / 4
      // flicker based on tile hash + time
      const lit = ((Math.floor(cx) * 3 + Math.floor(boxH) * 7 + r * 5 + c * 11 + Math.floor(t / 100)) % 7) !== 0
      ctx.fillStyle = lit ? litColor : darkColor
      ctx.fillRect(wx - 1.5, wy - 2, 3, 4)
    }
  }
}

// Isometric tree
function isoTree(ctx, cx, cy, TW, pal) {
  const tw = TW * 0.18
  const th = tw * 0.6

  // Trunk (mini left face)
  ctx.beginPath()
  ctx.moveTo(cx - tw, cy + TW*0.3)
  ctx.lineTo(cx,      cy + TW*0.4 + th)
  ctx.lineTo(cx,      cy + TW*0.6)
  ctx.lineTo(cx - tw, cy + TW*0.5 - th)
  ctx.closePath()
  ctx.fillStyle = shade(pal.trunk, 0.8)
  ctx.fill()

  // Canopy — three overlapping circles for bushy look
  ctx.fillStyle = pal.treeDark
  ctx.beginPath(); ctx.arc(cx, cy - 2, TW * 0.25, 0, Math.PI*2); ctx.fill()
  ctx.fillStyle = pal.tree
  ctx.beginPath(); ctx.arc(cx - TW*0.08, cy - 7, TW * 0.20, 0, Math.PI*2); ctx.fill()
  ctx.beginPath(); ctx.arc(cx + TW*0.06, cy - 5, TW * 0.18, 0, Math.PI*2); ctx.fill()
  ctx.fillStyle = shade(pal.tree, 1.25)
  ctx.beginPath(); ctx.arc(cx - TW*0.04, cy - 12, TW * 0.12, 0, Math.PI*2); ctx.fill()
}

// Isometric person with shirt/pants colours and optional accessory
function isoPerson(ctx, sx, sy, shirtColor, pantsColor, variant) {
  const s = 0.82 + (variant % 3) * 0.12   // slight size variation

  // Pants / legs
  ctx.fillStyle = pantsColor
  ctx.fillRect(sx - 2.5*s, sy + 1,  2*s, 3.5*s)
  ctx.fillRect(sx + 0.5*s, sy + 1,  2*s, 3.5*s)

  // Body (shirt)
  ctx.fillStyle = shirtColor
  ctx.beginPath()
  ctx.ellipse(sx, sy - 1*s, 2.6*s, 3.2*s, 0, 0, Math.PI*2)
  ctx.fill()

  // Head
  ctx.fillStyle = ['#f5c4a0','#d4956a','#c07850','#e8b890'][variant % 4]
  ctx.beginPath()
  ctx.arc(sx, sy - 5.5*s, 2*s, 0, Math.PI*2)
  ctx.fill()

  // Accessory (hat / umbrella / bag — ~1 in 4 people)
  if (variant % 5 === 0) {
    // Wide-brim hat
    ctx.fillStyle = '#37474f'
    ctx.fillRect(sx - 3*s, sy - 8.5*s, 6*s, 1.2*s)
    ctx.fillRect(sx - 1.5*s, sy - 10*s, 3*s, 1.8*s)
  } else if (variant % 9 === 1) {
    // Red umbrella
    ctx.fillStyle = '#e53935'
    ctx.beginPath()
    ctx.arc(sx + 4*s, sy - 5*s, 3*s, Math.PI, 0)
    ctx.fill()
    ctx.strokeStyle = '#333'; ctx.lineWidth = 0.6
    ctx.beginPath(); ctx.moveTo(sx + 4*s, sy - 5*s); ctx.lineTo(sx + 4*s, sy + 1)
    ctx.stroke()
  } else if (variant % 11 === 2) {
    // Shoulder bag
    ctx.fillStyle = '#ff8f00'
    ctx.fillRect(sx + 2.5*s, sy - 3*s, 2.5*s, 2*s)
  } else if (variant % 13 === 3) {
    // Balloon string
    ctx.strokeStyle = '#bbb'; ctx.lineWidth = 0.5
    ctx.beginPath(); ctx.moveTo(sx, sy - 7.5*s); ctx.lineTo(sx - 1, sy - 13*s); ctx.stroke()
    ctx.fillStyle = ['#f44336','#2196f3','#ffeb3b','#9c27b0'][variant % 4]
    ctx.beginPath(); ctx.arc(sx - 1, sy - 14.5*s, 2*s, 0, Math.PI*2); ctx.fill()
  }
}

// ═══════════════════════════════════════════════════════════════════
// CITY SCENE — Isometric "Where's Waldo" city
// ═══════════════════════════════════════════════════════════════════
const GS = 12  // grid size (12×12 tiles)

export class CityScene {
  constructor(canvas, themeId, scores) {
    this.canvas  = canvas
    this.ctx     = canvas.getContext('2d')
    this.pal     = THEME_PALETTES[themeId] || THEME_PALETTES.ecology
    this.scores  = scores || {}
    this.t       = 0
    this.animId  = null
    this.TW = 52; this.TH = 26; this.ox = 0; this.oy = 0

    this._resize()
    this.tiles   = this._buildGrid()
    this.people  = this._buildPeople()
    this.clouds  = this._buildClouds()
    this.birds   = this._buildBirds()
  }

  _resize() {
    const r = this.canvas.getBoundingClientRect()
    this.canvas.width  = r.width
    this.canvas.height = r.height
    const W = r.width
    // TW so the full diagonal span of the grid fills ~90% of the canvas width
    this.TW = Math.max(32, Math.min(64, Math.floor(W / GS)))
    this.TH = this.TW / 2
    this.ox = W / 2
    this.oy = Math.max(30, this.TH * 2)
  }

  _screenPos(gx, gy) {
    const { TW, TH, ox, oy } = this
    return { x: ox + (gx - gy) * TW / 2, y: oy + (gx + gy) * TH / 2 }
  }

  _buildGrid() {
    const pal   = this.pal
    const score = this.scores
    const density = (score.L || 50) / 100
    const econ    = (score.Ec || 50) / 100

    // Pre-defined park zones (2×2 patches)
    const parkSet = new Set(
      [[2,2],[3,2],[2,3],[3,3],
       [8,2],[9,2],[8,3],[9,3],
       [5,5],[6,5],[5,6],[6,6],
       [2,8],[3,8],[2,9],[3,9],
       [8,8],[9,8],[8,9],[9,9]].map(([x,y]) => `${x},${y}`)
    )

    const tiles = []
    const cx = GS / 2, cy = GS / 2

    for (let gy = 0; gy < GS; gy++) {
      for (let gx = 0; gx < GS; gx++) {
        const isRoad = (gx % 4 === 0) || (gy % 4 === 0)
        const isPark = parkSet.has(`${gx},${gy}`)

        if (isRoad) {
          tiles.push({ gx, gy, type: 'road' })
        } else if (isPark) {
          tiles.push({ gx, gy, type: 'park' })
        } else {
          const dist = Math.sqrt((gx - cx) ** 2 + (gy - cy) ** 2)
          const centrality = 1 - dist / (Math.sqrt(2) * cx)
          const baseH = 10 + centrality * (25 + density * 35 + econ * 25)
          // Deterministic height variance using a position hash
          const h = ((gx * 13 + gy * 7) % 17) / 17
          const boxH = Math.max(8, Math.round(baseH + h * 22))
          const colorIdx = (gx * 3 + gy * 7) % pal.buildings.length
          tiles.push({ gx, gy, type: 'building', boxH, colorIdx })
        }
      }
    }

    // Painter's algorithm: sort by (gx+gy) ascending, then gx ascending
    tiles.sort((a, b) => (a.gx + a.gy) - (b.gx + b.gy) || a.gx - b.gx)
    return tiles
  }

  _buildPeople() {
    // Where's Waldo density: 45–60 figures spread across the whole map
    const count     = 45 + Math.floor((this.scores.L || 50) / 6)
    const openTiles = this.tiles.filter(t => t.type === 'road' || t.type === 'park')
    const allTiles  = this.tiles

    const PANTS = ['#1a237e','#4e342e','#263238','#880e4f','#1b5e20','#212121','#4a148c','#bf360c']

    return Array.from({ length: Math.min(count, 60) }, (_, i) => {
      // Two-thirds on open tiles, one-third anywhere (doorways, building edges)
      const pool = i % 3 === 2 ? allTiles : openTiles
      const rt   = pool[(i * 17 + 7) % pool.length]
      const angle = (i * 137.5) * Math.PI / 180   // golden-angle spread
      const spd   = 0.0015 + (i % 7) * 0.0008
      return {
        gx:      rt.gx + Math.random() * 0.85,
        gy:      rt.gy + Math.random() * 0.85,
        sgx:     Math.cos(angle) * spd,
        sgy:     Math.sin(angle) * spd * 0.5,
        shirt:   this.pal.people[i % this.pal.people.length],
        pants:   PANTS[i % PANTS.length],
        variant: i,
      }
    })
  }

  _buildClouds() {
    const W = this.canvas.width
    return Array.from({ length: 5 }, (_, i) => ({
      x: (i / 5) * W + Math.random() * W * 0.3,
      y: 18 + Math.random() * (this.canvas.height * 0.16),
      rx: 24 + Math.random() * 22,
      ry: 12 + Math.random() * 8,
      spd: 0.06 + Math.random() * 0.10,
    }))
  }

  _buildBirds() {
    return Array.from({ length: 4 }, () => ({
      x: Math.random() * this.canvas.width,
      y: 24 + Math.random() * (this.canvas.height * 0.18),
      spd: 0.35 + Math.random() * 0.5,
      frame: 0, ft: 0,
    }))
  }

  start() { this._loop() }
  stop()  { if (this.animId) cancelAnimationFrame(this.animId); this.animId = null }
  resize() { this._resize(); this.tiles = this._buildGrid(); this.people = this._buildPeople(); this.clouds = this._buildClouds() }

  _loop() { this.t++; this._draw(); this.animId = requestAnimationFrame(() => this._loop()) }

  _draw() {
    const { ctx, canvas, TW, TH, pal, t } = this
    const W = canvas.width, H = canvas.height

    // Sky
    const sg = ctx.createLinearGradient(0, 0, 0, H * 0.65)
    sg.addColorStop(0, pal.sky[0]); sg.addColorStop(1, pal.sky[1])
    ctx.fillStyle = sg; ctx.fillRect(0, 0, W, H)

    // Sun
    const sunX = W * 0.78, sunY = H * 0.12
    const sunG = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 45)
    sunG.addColorStop(0, '#fffde7')
    sunG.addColorStop(0.5, 'rgba(255,253,180,0.4)')
    sunG.addColorStop(1, 'rgba(255,253,180,0)')
    ctx.fillStyle = sunG; ctx.beginPath(); ctx.arc(sunX, sunY, 45, 0, Math.PI*2); ctx.fill()
    ctx.fillStyle = '#fffde7'; ctx.beginPath(); ctx.arc(sunX, sunY, 14, 0, Math.PI*2); ctx.fill()

    // Clouds
    ctx.globalAlpha = 0.85
    for (const c of this.clouds) {
      c.x = (c.x + c.spd) % (W + 80)
      ctx.fillStyle = pal.cloud
      ctx.beginPath(); ctx.ellipse(c.x,          c.y,     c.rx,       c.ry,      0, 0, Math.PI*2); ctx.fill()
      ctx.beginPath(); ctx.ellipse(c.x - c.rx*0.5, c.y+5, c.rx*0.62, c.ry*0.72, 0, 0, Math.PI*2); ctx.fill()
      ctx.beginPath(); ctx.ellipse(c.x + c.rx*0.45, c.y+5, c.rx*0.55, c.ry*0.65, 0, 0, Math.PI*2); ctx.fill()
    }
    ctx.globalAlpha = 1

    // Birds
    for (const b of this.birds) {
      b.x = (b.x + b.spd) % (W + 20); b.ft++
      if (b.ft >= 16) { b.frame = 1 - b.frame; b.ft = 0 }
      ctx.fillStyle = pal.accent
      if (b.frame === 0) { ctx.fillRect(b.x, b.y, 9, 2); ctx.fillRect(b.x+3, b.y+2, 4, 1) }
      else               { ctx.fillRect(b.x, b.y+2, 9, 2); ctx.fillRect(b.x+3, b.y, 4, 1) }
    }

    // Isometric tiles (back → front)
    for (const tile of this.tiles) {
      const { x: sx, y: sy } = this._screenPos(tile.gx, tile.gy)

      if (tile.type === 'road') {
        isoFlat(ctx, sx, sy, TW, TH, pal.road, 'rgba(0,0,0,0.07)')
        // Dashed centre line on major axes
        if (tile.gx % 4 === 0 && tile.gy > 0) {
          ctx.save()
          ctx.strokeStyle = pal.roadLine; ctx.lineWidth = 1.2; ctx.setLineDash([3, 5])
          ctx.lineDashOffset = -(t * 0.25)
          ctx.beginPath()
          ctx.moveTo(sx, sy + TH * 0.5); ctx.lineTo(sx, sy + TH); ctx.stroke()
          ctx.setLineDash([]); ctx.restore()
        }
      } else if (tile.type === 'park') {
        isoFlat(ctx, sx, sy, TW, TH, pal.parkGrass, 'rgba(0,0,0,0.05)')
        isoTree(ctx, sx, sy, TW, pal)
      } else {
        // Ground base
        isoFlat(ctx, sx, sy, TW, TH, pal.ground, 'rgba(0,0,0,0.04)')
        const color = pal.buildings[tile.colorIdx]
        isoBox(ctx, sx, sy, TW, TH, tile.boxH, color)
        // Window grid
        if (tile.boxH > 14 && TW > 36) {
          isoWindows(ctx, sx, sy, TW, TH, tile.boxH, pal.windowLit, pal.windowDark, t)
        }
        // Rooftop accent (small coloured rectangle on the roof face)
        if (tile.boxH > 20) {
          const roofCx = sx, roofCy = sy - tile.boxH
          ctx.fillStyle = shade(color, 0.8)
          ctx.beginPath()
          ctx.moveTo(roofCx,            roofCy + TH*0.4)
          ctx.lineTo(roofCx + TW*0.18,  roofCy + TH*0.5 + TH*0.4*0.5)
          ctx.lineTo(roofCx,            roofCy + TH*0.6 + TH*0.4*0.5)
          ctx.lineTo(roofCx - TW*0.18,  roofCy + TH*0.5 + TH*0.4*0.5)
          ctx.closePath()
          ctx.fill()
        }
      }
    }

    // People — Where's Waldo crowd
    for (const p of this.people) {
      p.gx = ((p.gx + p.sgx) % (GS + 1) + GS + 1) % (GS + 1)
      p.gy = Math.max(0, Math.min(GS, p.gy + p.sgy))
      const { x: px, y: py } = this._screenPos(p.gx, p.gy)
      isoPerson(ctx, px, py + TH * 0.5, p.shirt, p.pants, p.variant)
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// STREET VIEW — Third-person behind-character perspective
// ═══════════════════════════════════════════════════════════════════
export class StreetView {
  constructor(canvas, themeId, scores) {
    this.canvas   = canvas
    this.ctx      = canvas.getContext('2d')
    this.pal      = THEME_PALETTES[themeId] || THEME_PALETTES.ecology
    this.scores   = scores || {}
    this.t        = 0
    this.animId   = null
    this.walkPhase = 0

    this._resize()
    this.clouds = this._buildClouds()
    this.birds  = this._buildBirds()
    this.npcs   = this._buildNPCs()
    this.bldgs  = this._buildBuildings()
  }

  _resize() {
    const r = this.canvas.getBoundingClientRect()
    this.canvas.width  = r.width
    this.canvas.height = r.height
  }

  _buildClouds() {
    const W = this.canvas.width
    return Array.from({ length: 5 }, (_, i) => ({
      x: (i / 5) * W + Math.random() * W * 0.4,
      y: 20 + Math.random() * (this.canvas.height * 0.22),
      rx: 30 + Math.random() * 25,
      ry: 14 + Math.random() * 9,
      spd: 0.3 + Math.random() * 0.4,
    }))
  }

  _buildBirds() {
    const W = this.canvas.width
    return Array.from({ length: 3 }, () => ({
      x: Math.random() * W,
      y: 25 + Math.random() * (this.canvas.height * 0.2),
      spd: 0.6 + Math.random() * 0.8,
      frame: 0, ft: 0,
    }))
  }

  _buildNPCs() {
    // People walking on the sidewalks in the middle distance
    return Array.from({ length: 4 }, (_, i) => ({
      t: i / 4,                              // depth position [0=far, 1=near]
      side: i % 2 === 0 ? 'left' : 'right',
      color: this.pal.people[i % this.pal.people.length],
      phase: Math.random() * Math.PI * 2,
    }))
  }

  _buildBuildings() {
    // 5 buildings on each side at varying depths
    const out = []
    for (let i = 0; i < 5; i++) {
      const t = i / 4  // 0=far, 1=near
      out.push(
        { side: 'left',  t, color: this.pal.buildings[i % this.pal.buildings.length] },
        { side: 'right', t, color: this.pal.buildings[(i + 2) % this.pal.buildings.length] },
      )
    }
    return out
  }

  start() { this._loop() }
  stop()  { if (this.animId) cancelAnimationFrame(this.animId); this.animId = null }
  resize() { this._resize(); this.clouds = this._buildClouds(); this.bldgs = this._buildBuildings() }

  _loop() { this.t++; this.walkPhase += 0.055; this._draw(); this.animId = requestAnimationFrame(() => this._loop()) }

  _draw() {
    const { ctx, canvas, pal, t, walkPhase } = this
    const W = canvas.width, H = canvas.height

    // ── Vanishing point & horizon ──────────────────────────────
    const bob = Math.sin(walkPhase) * 2.5          // camera walk-bob
    const VPx = W / 2
    const VPy = H * 0.40 + bob

    ctx.clearRect(0, 0, W, H)

    // ── Sky ────────────────────────────────────────────────────
    const skyG = ctx.createLinearGradient(0, 0, 0, VPy)
    skyG.addColorStop(0, pal.sky[0]); skyG.addColorStop(1, pal.sky[1])
    ctx.fillStyle = skyG; ctx.fillRect(0, 0, W, VPy + 4)

    // ── Sun ────────────────────────────────────────────────────
    const sunX = W * 0.72, sunY = H * 0.10 + bob * 0.3
    const sG = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 55)
    sG.addColorStop(0, '#fffde7'); sG.addColorStop(0.5, 'rgba(255,253,180,0.35)'); sG.addColorStop(1, 'rgba(255,253,180,0)')
    ctx.fillStyle = sG; ctx.beginPath(); ctx.arc(sunX, sunY, 55, 0, Math.PI*2); ctx.fill()
    ctx.fillStyle = '#fffde7'; ctx.beginPath(); ctx.arc(sunX, sunY, 16, 0, Math.PI*2); ctx.fill()

    // ── Clouds ─────────────────────────────────────────────────
    ctx.globalAlpha = 0.88
    for (const c of this.clouds) {
      c.x = (c.x + c.spd) % (W + 90)
      ctx.fillStyle = pal.cloud
      ctx.beginPath(); ctx.ellipse(c.x,          c.y + bob*0.3, c.rx,      c.ry,      0, 0, Math.PI*2); ctx.fill()
      ctx.beginPath(); ctx.ellipse(c.x - c.rx*0.5, c.y+5+bob*0.3, c.rx*0.62, c.ry*0.72, 0, 0, Math.PI*2); ctx.fill()
      ctx.beginPath(); ctx.ellipse(c.x + c.rx*0.45, c.y+5+bob*0.3, c.rx*0.55, c.ry*0.65, 0, 0, Math.PI*2); ctx.fill()
    }
    ctx.globalAlpha = 1

    // ── Birds ──────────────────────────────────────────────────
    for (const b of this.birds) {
      b.x = (b.x + b.spd) % (W + 20); b.ft++
      if (b.ft >= 18) { b.frame = 1 - b.frame; b.ft = 0 }
      ctx.fillStyle = pal.accent
      if (b.frame === 0) { ctx.fillRect(b.x, b.y + bob*0.2, 10, 2); ctx.fillRect(b.x+3, b.y+2+bob*0.2, 5, 1) }
      else               { ctx.fillRect(b.x, b.y+2+bob*0.2, 10, 2); ctx.fillRect(b.x+3, b.y+bob*0.2, 5, 1) }
    }

    // ── Distant city skyline (silhouette at horizon) ───────────
    ctx.fillStyle = shade(pal.buildings[0], 0.55)
    for (let i = 0; i < 22; i++) {
      const bw = 14 + (i * 17) % 28
      const bh = 18 + (i * 11) % 40
      const bx = (i * (W / 20)) % W
      ctx.fillRect(bx, VPy - bh + bob, bw, bh)
    }

    // ── Ground plane ───────────────────────────────────────────
    const groundG = ctx.createLinearGradient(0, VPy, 0, H)
    groundG.addColorStop(0, shade(pal.ground, 0.8))
    groundG.addColorStop(1, pal.ground)
    ctx.fillStyle = groundG
    ctx.beginPath()
    ctx.moveTo(0, VPy + 2); ctx.lineTo(W, VPy + 2); ctx.lineTo(W, H); ctx.lineTo(0, H)
    ctx.fill()

    // ── Road ───────────────────────────────────────────────────
    const roadL = VPx - (W * 0.28)   // left edge at ground level
    const roadR = VPx + (W * 0.28)   // right edge at ground level
    ctx.fillStyle = pal.road
    ctx.beginPath()
    ctx.moveTo(VPx - 3, VPy); ctx.lineTo(VPx + 3, VPy)
    ctx.lineTo(roadR, H); ctx.lineTo(roadL, H)
    ctx.closePath(); ctx.fill()

    // Road lane dashes
    for (let lane = -1; lane <= 1; lane++) {
      const lx0 = VPx + lane * 2
      const lxH = VPx + lane * W * 0.09
      ctx.strokeStyle = pal.roadLine; ctx.lineWidth = 1.5
      ctx.setLineDash([14, 18]); ctx.lineDashOffset = -(t * 3)
      ctx.beginPath(); ctx.moveTo(lx0, VPy + 2); ctx.lineTo(lxH, H); ctx.stroke()
      ctx.setLineDash([])
    }

    // ── Sidewalks ──────────────────────────────────────────────
    const swalkColor = shade(pal.road, 1.35)
    // Left sidewalk
    ctx.fillStyle = swalkColor
    ctx.beginPath()
    ctx.moveTo(VPx - 4,      VPy)
    ctx.lineTo(roadL,         H)
    ctx.lineTo(roadL - W*0.12, H)
    ctx.lineTo(VPx - W*0.1,  VPy)
    ctx.closePath(); ctx.fill()
    // Right sidewalk
    ctx.beginPath()
    ctx.moveTo(VPx + 4,      VPy)
    ctx.lineTo(roadR,         H)
    ctx.lineTo(roadR + W*0.12, H)
    ctx.lineTo(VPx + W*0.1,  VPy)
    ctx.closePath(); ctx.fill()

    // ── Buildings (perspective quads) ─────────────────────────
    // Draw far→near (t=0 first, t=1 last)
    const sortedBldgs = [...this.bldgs].sort((a, b) => a.t - b.t)
    for (const bldg of sortedBldgs) {
      const f    = bldg.t   // 0=far, 1=close
      const gs   = 0.06 + f * 0.92  // geometry scale

      // Position: building's inner vertical edge follows the perspective sidewalk edge
      const innerX = bldg.side === 'left'
        ? VPx - 4 + (roadL - W*0.08 - VPx + 4) * f
        : VPx + 4 + (roadR + W*0.08 - VPx - 4) * f

      const baseY = VPy + (H - VPy) * f
      const bW    = W * 0.12 * gs
      const bH    = H * 0.45 * gs

      const left  = bldg.side === 'left'  ? innerX - bW : innerX
      const right = bldg.side === 'right' ? innerX + bW : innerX

      // Building face
      ctx.fillStyle = bldg.color
      ctx.fillRect(left, baseY - bH, right - left, bH)

      // Darker top strip (roof edge)
      ctx.fillStyle = shade(bldg.color, 0.65)
      ctx.fillRect(left, baseY - bH, right - left, Math.max(2, bH * 0.06))

      // Perspective side face (slant toward VP)
      const vpFaceW = (right - left) * 0.18
      ctx.fillStyle = shade(bldg.color, 0.48)
      if (bldg.side === 'left') {
        ctx.beginPath()
        ctx.moveTo(right,         baseY - bH)
        ctx.lineTo(right,         baseY)
        ctx.lineTo(right + vpFaceW * f, baseY)
        ctx.lineTo(right + vpFaceW * f, baseY - bH * 0.95)
        ctx.closePath(); ctx.fill()
      } else {
        ctx.beginPath()
        ctx.moveTo(left,              baseY - bH)
        ctx.lineTo(left,              baseY)
        ctx.lineTo(left - vpFaceW * f, baseY)
        ctx.lineTo(left - vpFaceW * f, baseY - bH * 0.95)
        ctx.closePath(); ctx.fill()
      }

      // Windows (grid)
      if (bW > 18) {
        const wCols = Math.max(1, Math.floor(bW / 14))
        const wRows = Math.max(1, Math.floor(bH / 16))
        for (let wr = 0; wr < wRows; wr++) {
          for (let wc = 0; wc < wCols; wc++) {
            const wx = left + (wc + 0.5) / wCols * (right - left)
            const wy = baseY - bH + (wr + 0.6) / wRows * bH
            const ww = Math.max(2, (right - left) / (wCols + 1) * 0.55)
            const wh = Math.max(2, bH / (wRows + 1) * 0.55)
            const lit = ((Math.floor(left) * 3 + wr * 7 + wc * 11 + Math.floor(t / 90)) % 5) !== 0
            ctx.fillStyle = lit ? pal.windowLit : pal.windowDark
            ctx.fillRect(wx - ww/2, wy - wh/2, ww, wh)
          }
        }
      }
    }

    // ── Pavement trees ─────────────────────────────────────────
    for (const side of ['left', 'right']) {
      for (const f of [0.25, 0.55, 0.82]) {
        const gs  = 0.12 + f * 0.88
        const innerX = side === 'left'
          ? VPx - 4 + (roadL - VPx + 4) * f - W*0.06*f
          : VPx + 4 + (roadR - VPx - 4) * f + W*0.06*f
        const baseY = VPy + (H - VPy) * f
        const tR    = 14 * gs

        // Trunk
        ctx.fillStyle = pal.trunk
        ctx.fillRect(innerX - 3*gs, baseY - tR * 2.2, 6*gs, tR * 2.2)

        // Canopy
        ctx.fillStyle = pal.treeDark
        ctx.beginPath(); ctx.arc(innerX, baseY - tR * 2.4, tR, 0, Math.PI*2); ctx.fill()
        ctx.fillStyle = pal.tree
        ctx.beginPath(); ctx.arc(innerX - tR*0.3, baseY - tR * 2.9, tR*0.78, 0, Math.PI*2); ctx.fill()
        ctx.fillStyle = shade(pal.tree, 1.3)
        ctx.beginPath(); ctx.arc(innerX, baseY - tR * 3.3, tR * 0.48, 0, Math.PI*2); ctx.fill()
      }
    }

    // ── NPC people in mid-distance ─────────────────────────────
    for (const npc of this.npcs) {
      const f      = npc.t
      const gs     = 0.10 + f * 0.55
      const phase  = npc.phase + t * 0.10
      const innerX = npc.side === 'left'
        ? VPx + (roadL - W*0.04 - VPx) * f - 10 * f
        : VPx + (roadR + W*0.04 - VPx) * f + 10 * f
      const baseY  = VPy + (H - VPy) * f
      const scale  = gs * 60
      const legS   = Math.sin(phase * 2) * 6 * gs

      // Body
      ctx.fillStyle = npc.color
      ctx.fillRect(innerX - 5*gs, baseY - scale*0.65, 10*gs, scale*0.35)
      // Head
      ctx.fillStyle = '#f5c4a0'
      ctx.beginPath(); ctx.arc(innerX, baseY - scale*0.78, 7*gs, 0, Math.PI*2); ctx.fill()
      // Legs
      ctx.fillStyle = '#333'
      ctx.fillRect(innerX - 5*gs, baseY - scale*0.3, 4*gs, scale*0.3 + legS)
      ctx.fillRect(innerX + 1*gs, baseY - scale*0.3, 4*gs, scale*0.3 - legS)
    }

    // ── Player character (third-person, behind) ─────────────────
    this._drawCharacter(ctx, W/2, H * 0.86, H * 0.18, walkPhase, pal)

    // ── Vignette ───────────────────────────────────────────────
    const vig = ctx.createRadialGradient(W/2, H/2, H*0.22, W/2, H/2, H*0.85)
    vig.addColorStop(0, 'transparent'); vig.addColorStop(1, 'rgba(0,0,0,0.32)')
    ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H)
  }

  _drawCharacter(ctx, cx, groundY, scale, phase, pal) {
    const s   = scale / 100   // normalize scale
    const bob = Math.sin(phase) * 2 * s * 100
    const legS = Math.sin(phase * 2) * 8 * s * 100
    const armS = Math.sin(phase * 2) * 5 * s * 100
    const baseY = groundY + bob

    const H = (px) => px * s * 100   // helper: pixels in scale units

    // Shadow on ground
    ctx.fillStyle = 'rgba(0,0,0,0.22)'
    ctx.beginPath()
    ctx.ellipse(cx, groundY + H(6), H(18), H(5), 0, 0, Math.PI*2)
    ctx.fill()

    // Shoes
    ctx.fillStyle = '#1a1a1a'
    ctx.beginPath(); ctx.ellipse(cx - H(8), baseY + H(2) + legS,  H(10), H(5), -0.25, 0, Math.PI*2); ctx.fill()
    ctx.beginPath(); ctx.ellipse(cx + H(8), baseY + H(2) - legS, H(10), H(5),  0.25, 0, Math.PI*2); ctx.fill()

    // Legs (pants)
    ctx.fillStyle = '#2c3e6a'
    ctx.fillRect(cx - H(16), baseY - H(30) + legS,  H(14), H(34))  // left leg
    ctx.fillRect(cx + H(2),  baseY - H(30) - legS,  H(14), H(34))  // right leg

    // Body (shirt — theme accent color)
    ctx.fillStyle = pal.accent
    ctx.fillRect(cx - H(18), baseY - H(68), H(36), H(40))

    // Backpack (small detail)
    ctx.fillStyle = shade(pal.accent, 0.6)
    ctx.fillRect(cx - H(12), baseY - H(64), H(9), H(26))

    // Left arm
    ctx.fillStyle = pal.accent
    ctx.fillRect(cx - H(28), baseY - H(65) + armS, H(11), H(30))
    // Right arm
    ctx.fillRect(cx + H(17), baseY - H(65) - armS, H(11), H(30))

    // Hands
    ctx.fillStyle = '#f5c4a0'
    ctx.beginPath(); ctx.arc(cx - H(22), baseY - H(34) + armS, H(7), 0, Math.PI*2); ctx.fill()
    ctx.beginPath(); ctx.arc(cx + H(22), baseY - H(34) - armS, H(7), 0, Math.PI*2); ctx.fill()

    // Neck + head
    ctx.fillStyle = '#f5c4a0'
    ctx.fillRect(cx - H(7), baseY - H(80), H(14), H(14))
    ctx.beginPath(); ctx.arc(cx, baseY - H(88), H(18), 0, Math.PI*2); ctx.fill()

    // Hair
    ctx.fillStyle = '#3e2410'
    ctx.beginPath(); ctx.arc(cx, baseY - H(94), H(18), Math.PI, Math.PI*2); ctx.fill()
    ctx.fillRect(cx - H(18), baseY - H(94), H(36), H(8))

    // Ears (tiny detail)
    ctx.fillStyle = '#d4a080'
    ctx.beginPath(); ctx.arc(cx - H(18), baseY - H(88), H(5), 0, Math.PI*2); ctx.fill()
    ctx.beginPath(); ctx.arc(cx + H(18), baseY - H(88), H(5), 0, Math.PI*2); ctx.fill()
  }
}
