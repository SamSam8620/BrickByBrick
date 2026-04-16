// ─────────────────────────────────────────────────────────────────
// renderer2d.js  —  Isometric diorama + radar chart
// ─────────────────────────────────────────────────────────────────
import { AXES } from './data.js'

const GRID = 22           // grid cells per side
const TW   = 48           // isometric tile width (screen px)
const TH   = 24           // isometric tile height (screen px)
const FH   = 7            // pixels per building floor
const GAP  = 2            // gap between tile edges

// Zone palette: top-face, left-face, right-face
const ZONE_COLORS = {
  civic:       { top: '#4DD0E1', left: '#00ACC1', right: '#006064' },
  commercial:  { top: '#64B5F6', left: '#1E88E5', right: '#0D47A1' },
  mixed:       { top: '#CE93D8', left: '#AB47BC', right: '#6A1B9A' },
  residential: { top: '#FFAB76', left: '#F4511E', right: '#BF360C' },
  res_low:     { top: '#FFCC80', left: '#FFA726', right: '#E65100' },
  industrial:  { top: '#B0BEC5', left: '#607D8B', right: '#263238' },
  green:       { top: '#81C784', left: '#388E3C', right: '#1B5E20' },
  ground:      { top: '#1a2540', left: '#141d35', right: '#0f1629' },
}

// ─── Deterministic cell noise ─────────────────────────────────────
function cellRand(x, y, seed = 0) {
  return Math.abs(Math.sin(x * 127.1 + y * 311.7 + seed * 419.7) * 43758.5453 % 1)
}

// ─── City layout generation ───────────────────────────────────────
export function generateCityGrid(responses) {
  const cx = GRID / 2
  const cy = GRID / 2
  const grid = []

  const parkScore  = (responses.green_coverage      ?? 50) / 100
  const indScore   = (100 - (responses.economic_diversity ?? 55)) / 200
  const mixScore   = (responses.mixed_income         ?? 55) / 100
  const density    = (responses.housing_density      ?? 45) / 100
  const height     = ((responses.housing_density ?? 45) + (responses.innovation_hubs ?? 35)) / 200
  const far        = (responses.housing_density      ?? 45) / 100
  const greenRoof  = (responses.building_efficiency  ?? 50) > 60

  for (let x = 0; x < GRID; x++) {
    grid[x] = []
    for (let y = 0; y < GRID; y++) {
      const dx = x - cx
      const dy = y - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const nd = dist / (GRID * 0.5)  // 0–1 normalised distance
      const r1 = cellRand(x, y, 1)
      const r2 = cellRand(x, y, 2)

      // Scattered green based on park score
      if (nd > 0.25 && r1 < parkScore * 0.35) {
        grid[x][y] = { zone: 'green', floors: 0 }
        continue
      }
      // Industrial on edges
      if (nd > 0.80 && r1 < indScore * 0.6) {
        const f = Math.max(1, Math.round(r2 * 4 * (1 + far)))
        grid[x][y] = { zone: 'industrial', floors: f }
        continue
      }

      let zone, floors
      if (nd < 0.12) {
        zone = 'civic'
        floors = Math.max(3, Math.round((5 + r2 * 8) * (1 + height * 1.5) * (1 + far)))
      } else if (nd < 0.28) {
        zone = r1 < 0.5 ? 'commercial' : 'mixed'
        floors = Math.max(2, Math.round((4 + r2 * 6) * (1 + height) * (1 + far)))
      } else if (nd < 0.45) {
        zone = r1 < mixScore ? 'mixed' : 'residential'
        floors = Math.max(1, Math.round((2 + r2 * 5) * (0.5 + density) * (1 + far * 0.5)))
      } else if (nd < 0.65) {
        zone = 'residential'
        floors = Math.max(1, Math.round((1 + r2 * 3) * (0.3 + density * 0.8)))
      } else if (nd < 0.80) {
        zone = 'res_low'
        floors = Math.max(1, Math.round(1 + r2 * 2))
      } else {
        zone = r1 < parkScore * 0.5 ? 'green' : 'res_low'
        floors = zone === 'green' ? 0 : 1
      }

      grid[x][y] = { zone, floors, greenRoof: greenRoof && zone !== 'green' && floors > 0 && r1 > 0.5 }
    }
  }
  return grid
}

// ─── Renderer2D class ─────────────────────────────────────────────
export class Renderer2D {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx    = canvas.getContext('2d')
    this.radarCanvas = document.createElement('canvas')
    this.radarCanvas.width  = 240
    this.radarCanvas.height = 240
    this.radarCtx = this.radarCanvas.getContext('2d')
  }

  resize() {
    const parent = this.canvas.parentElement
    this.canvas.width  = parent.clientWidth
    this.canvas.height = parent.clientHeight
  }

  render(grid, scores, faults) {
    const ctx = this.ctx
    const W = this.canvas.width
    const H = this.canvas.height

    ctx.clearRect(0, 0, W, H)

    // Background gradient
    const bg = ctx.createLinearGradient(0, 0, 0, H)
    bg.addColorStop(0, '#0a0e1a')
    bg.addColorStop(1, '#0f1629')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, W, H)

    // Centre the isometric grid
    const isoW = (GRID + GRID) * (TW / 2)
    const isoH = (GRID + GRID) * (TH / 2) + GRID * FH * 6
    const offX = W / 2
    const offY = (H - isoH) / 2 + 60

    // Draw ground tiles first (full grid)
    for (let sum = 0; sum <= 2 * (GRID - 1); sum++) {
      for (let x = 0; x < GRID; x++) {
        const y = sum - x
        if (y < 0 || y >= GRID) continue
        this._drawTile(ctx, x, y, offX, offY, 'ground', 0, false)
      }
    }

    // Draw buildings (painter's order: low x+y first = background)
    const faultSet = new Set(faults.map(f => f.id))
    const hasCritical = faults.some(f => f.severity === 'critical')

    for (let sum = 0; sum <= 2 * (GRID - 1); sum++) {
      for (let x = 0; x < GRID; x++) {
        const y = sum - x
        if (y < 0 || y >= GRID) continue
        const cell = grid[x]?.[y]
        if (!cell || cell.floors === 0) continue
        this._drawBuilding(ctx, x, y, offX, offY, cell, hasCritical)
      }
    }

    // Draw radar chart in top-right corner
    this._drawRadar(scores)

    // Overlay radar onto main canvas
    ctx.drawImage(this.radarCanvas, W - 260, 10)

    // Grid label
    ctx.fillStyle = 'rgba(138,155,181,0.4)'
    ctx.font = '10px "Segoe UI", sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText(`${GRID}×${GRID} GRID  ·  ISOMETRIC VIEW`, 16, H - 16)
  }

  _isoProject(x, y, offX, offY) {
    return {
      sx: offX + (x - y) * (TW / 2),
      sy: offY + (x + y) * (TH / 2),
    }
  }

  _drawTile(ctx, x, y, offX, offY, zone, floors, greenRoof) {
    const c = ZONE_COLORS[zone] || ZONE_COLORS.ground
    const { sx, sy } = this._isoProject(x, y, offX, offY)
    const hw = TW / 2
    const hh = TH / 2

    ctx.beginPath()
    ctx.moveTo(sx,      sy - hh)
    ctx.lineTo(sx + hw, sy)
    ctx.lineTo(sx,      sy + hh)
    ctx.lineTo(sx - hw, sy)
    ctx.closePath()
    ctx.fillStyle = c.top
    ctx.fill()
  }

  _drawBuilding(ctx, x, y, offX, offY, cell, hasCritical) {
    const c = ZONE_COLORS[cell.zone] || ZONE_COLORS.residential
    const { sx, sy } = this._isoProject(x, y, offX, offY)
    const hw = TW / 2 - GAP
    const hh = TH / 2 - GAP / 2
    const bh = cell.floors * FH

    // Left face
    ctx.beginPath()
    ctx.moveTo(sx - hw, sy)
    ctx.lineTo(sx,      sy + hh)
    ctx.lineTo(sx,      sy + hh - bh)
    ctx.lineTo(sx - hw, sy - bh)
    ctx.closePath()
    ctx.fillStyle = c.left
    ctx.fill()

    // Right face
    ctx.beginPath()
    ctx.moveTo(sx + hw, sy)
    ctx.lineTo(sx,      sy + hh)
    ctx.lineTo(sx,      sy + hh - bh)
    ctx.lineTo(sx + hw, sy - bh)
    ctx.closePath()
    ctx.fillStyle = c.right
    ctx.fill()

    // Top face
    const topColor = cell.greenRoof ? '#4CAF50' : c.top
    ctx.beginPath()
    ctx.moveTo(sx,      sy - hh - bh)
    ctx.lineTo(sx + hw, sy      - bh)
    ctx.lineTo(sx,      sy + hh - bh)
    ctx.lineTo(sx - hw, sy      - bh)
    ctx.closePath()
    ctx.fillStyle = topColor
    ctx.fill()

    // Window dots on tall buildings
    if (cell.floors >= 3 && cell.zone !== 'green') {
      ctx.fillStyle = 'rgba(255,255,255,0.18)'
      const rows = Math.min(cell.floors - 1, 4)
      for (let r = 0; r < rows; r++) {
        const wy = sy + hh - bh + r * FH + FH * 0.4
        // left face windows
        ctx.fillRect(sx - hw + 4, wy, 4, 2)
        ctx.fillRect(sx - hw + 10, wy, 4, 2)
        // right face windows
        ctx.fillRect(sx + 4, wy, 4, 2)
        ctx.fillRect(sx + 10, wy, 4, 2)
      }
    }
  }

  _drawRadar(scores) {
    const rc = this.radarCtx
    const W = 240, H = 240
    const cx = W / 2, cy = H / 2
    const R = 88
    const n = AXES.length
    rc.clearRect(0, 0, W, H)

    // Background circle
    rc.beginPath()
    rc.arc(cx, cy, R + 10, 0, Math.PI * 2)
    rc.fillStyle = 'rgba(10,14,26,0.85)'
    rc.fill()
    rc.strokeStyle = 'rgba(30,45,74,0.8)'
    rc.lineWidth = 1
    rc.stroke()

    // Grid rings
    for (let ring = 1; ring <= 4; ring++) {
      const r = R * ring / 4
      rc.beginPath()
      for (let i = 0; i <= n; i++) {
        const angle = (i / n) * Math.PI * 2 - Math.PI / 2
        const px = cx + Math.cos(angle) * r
        const py = cy + Math.sin(angle) * r
        i === 0 ? rc.moveTo(px, py) : rc.lineTo(px, py)
      }
      rc.closePath()
      rc.strokeStyle = 'rgba(30,45,74,0.6)'
      rc.lineWidth = 0.5
      rc.stroke()
    }

    // Axis lines
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2
      rc.beginPath()
      rc.moveTo(cx, cy)
      rc.lineTo(cx + Math.cos(angle) * R, cy + Math.sin(angle) * R)
      rc.strokeStyle = 'rgba(30,45,74,0.8)'
      rc.lineWidth = 0.5
      rc.stroke()
    }

    // Score polygon
    rc.beginPath()
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2
      const score = scores[AXES[i].id] ?? 0
      const r = R * score / 100
      const px = cx + Math.cos(angle) * r
      const py = cy + Math.sin(angle) * r
      i === 0 ? rc.moveTo(px, py) : rc.lineTo(px, py)
    }
    rc.closePath()
    rc.fillStyle = 'rgba(0,212,255,0.12)'
    rc.fill()
    rc.strokeStyle = 'rgba(0,212,255,0.7)'
    rc.lineWidth = 1.5
    rc.stroke()

    // Axis dots + labels
    rc.textAlign = 'center'
    rc.textBaseline = 'middle'
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2
      const score = scores[AXES[i].id] ?? 0
      const r = R * score / 100
      const dotX = cx + Math.cos(angle) * r
      const dotY = cy + Math.sin(angle) * r

      // Dot
      rc.beginPath()
      rc.arc(dotX, dotY, 3, 0, Math.PI * 2)
      rc.fillStyle = AXES[i].color
      rc.fill()

      // Label at tip
      const lx = cx + Math.cos(angle) * (R + 18)
      const ly = cy + Math.sin(angle) * (R + 18)
      rc.font = 'bold 9px "Segoe UI", sans-serif'
      rc.fillStyle = AXES[i].color
      rc.fillText(AXES[i].id, lx, ly)
    }

    // Centre label
    rc.font = '9px "Segoe UI", sans-serif'
    rc.fillStyle = 'rgba(138,155,181,0.5)'
    rc.fillText('SCORES', cx, cy)
  }

  getRadarCanvas() {
    return this.radarCanvas
  }
}
