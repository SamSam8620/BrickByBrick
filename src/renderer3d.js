// ─────────────────────────────────────────────────────────────────
// renderer3d.js  —  Three.js 3D city scene + orbit controls
// ─────────────────────────────────────────────────────────────────
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const CELL   = 4.0    // world-units per grid cell
const FLOOR  = 0.9    // world-units per building floor
const GAP    = 0.3    // gap between buildings

const ZONE_COLORS_3D = {
  civic:       0x4DD0E1,
  commercial:  0x64B5F6,
  mixed:       0xCE93D8,
  residential: 0xFFAB76,
  res_low:     0xFFCC80,
  industrial:  0xB0BEC5,
  green:       0x81C784,
}

const ZONE_EMISSIVE = {
  civic:       0x004D60,
  commercial:  0x0D2A5E,
  mixed:       0x3D0050,
  residential: 0x5C2010,
  res_low:     0x4A2800,
  industrial:  0x1A2530,
  green:       0x1B3A1C,
}

export class Renderer3D {
  constructor(container) {
    this.container = container
    this.scene     = null
    this.camera    = null
    this.renderer  = null
    this.controls  = null
    this.buildings = []
    this.trees     = []
    this.animId    = null
    this._init()
  }

  _init() {
    const W = this.container.clientWidth  || 800
    const H = this.container.clientHeight || 600

    // Scene
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x0a0e1a)
    this.scene.fog = new THREE.FogExp2(0x0a0e1a, 0.012)

    // Camera
    this.camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 500)
    this.camera.position.set(40, 45, 60)
    this.camera.lookAt(0, 0, 0)

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(W, H)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.container.innerHTML = ''
    this.container.appendChild(this.renderer.domElement)

    // Lights
    const ambient = new THREE.AmbientLight(0x223355, 0.8)
    this.scene.add(ambient)

    const sun = new THREE.DirectionalLight(0xffeedd, 1.6)
    sun.position.set(60, 100, 40)
    sun.castShadow = true
    sun.shadow.mapSize.width  = 2048
    sun.shadow.mapSize.height = 2048
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far  = 300
    sun.shadow.camera.left = -80
    sun.shadow.camera.right = 80
    sun.shadow.camera.top = 80
    sun.shadow.camera.bottom = -80
    this.scene.add(sun)

    const fill = new THREE.DirectionalLight(0x3355aa, 0.4)
    fill.position.set(-40, 20, -40)
    this.scene.add(fill)

    // Ground plane
    const gGeo = new THREE.PlaneGeometry(CELL * 22, CELL * 22)
    const gMat = new THREE.MeshStandardMaterial({ color: 0x0f1629, roughness: 0.9, metalness: 0.1 })
    const ground = new THREE.Mesh(gGeo, gMat)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    this.scene.add(ground)

    // Grid lines
    const gridHelper = new THREE.GridHelper(CELL * 22, 22, 0x1e2d4a, 0x1e2d4a)
    gridHelper.material.transparent = true
    gridHelper.material.opacity = 0.3
    this.scene.add(gridHelper)

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.minDistance = 10
    this.controls.maxDistance = 200
    this.controls.maxPolarAngle = Math.PI * 0.48
    this.controls.target.set(0, 0, 0)
  }

  buildCity(grid) {
    const GRID = grid.length

    // Remove old buildings and trees
    for (const m of this.buildings) this.scene.remove(m)
    for (const t of this.trees)     this.scene.remove(t)
    this.buildings = []
    this.trees     = []

    const offset = (GRID * CELL) / 2 - CELL / 2

    for (let x = 0; x < GRID; x++) {
      for (let y = 0; y < GRID; y++) {
        const cell = grid[x]?.[y]
        if (!cell) continue
        const wx = x * CELL - offset
        const wz = y * CELL - offset

        if (cell.zone === 'green') {
          this._addTree(wx, wz)
        } else if (cell.floors > 0) {
          this._addBuilding(wx, wz, cell)
        }
      }
    }
  }

  _addBuilding(wx, wz, cell) {
    const h = cell.floors * FLOOR
    const w = CELL - GAP

    const geo = new THREE.BoxGeometry(w, h, w)
    const mat = new THREE.MeshStandardMaterial({
      color:     ZONE_COLORS_3D[cell.zone] || 0xaaaaaa,
      emissive:  ZONE_EMISSIVE[cell.zone]  || 0x000000,
      emissiveIntensity: 0.15,
      roughness: 0.7,
      metalness: 0.2,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(wx, h / 2, wz)
    mesh.castShadow    = true
    mesh.receiveShadow = true
    this.scene.add(mesh)
    this.buildings.push(mesh)

    // Green roof accent
    if (cell.greenRoof) {
      const roofGeo = new THREE.BoxGeometry(w * 0.9, 0.12, w * 0.9)
      const roofMat = new THREE.MeshStandardMaterial({ color: 0x4CAF50, roughness: 0.8 })
      const roof = new THREE.Mesh(roofGeo, roofMat)
      roof.position.set(wx, h + 0.06, wz)
      this.scene.add(roof)
      this.buildings.push(roof)
    }

    // Window lights on tall buildings (emissive planes)
    if (cell.floors >= 4) {
      const winGeo = new THREE.PlaneGeometry(w * 0.6, h * 0.55)
      const winMat = new THREE.MeshStandardMaterial({
        color: 0xfff8e1,
        emissive: 0xfff8e1,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.25,
      })
      for (let side = 0; side < 4; side++) {
        const win = new THREE.Mesh(winGeo, winMat)
        const angle = (side / 4) * Math.PI * 2
        win.position.set(
          wx + Math.cos(angle) * (w / 2 + 0.01),
          h * 0.45,
          wz + Math.sin(angle) * (w / 2 + 0.01)
        )
        win.rotation.y = angle + Math.PI / 2
        this.scene.add(win)
        this.buildings.push(win)
      }
    }
  }

  _addTree(wx, wz) {
    const trunkH  = 0.8 + Math.random() * 0.4
    const foliageR = 0.6 + Math.random() * 0.4

    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, trunkH, 6)
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4e342e, roughness: 1 })
    const trunk = new THREE.Mesh(trunkGeo, trunkMat)
    trunk.position.set(wx, trunkH / 2, wz)

    const foliageGeo = new THREE.SphereGeometry(foliageR, 7, 6)
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.9, flatShading: true })
    const foliage = new THREE.Mesh(foliageGeo, foliageMat)
    foliage.position.set(wx, trunkH + foliageR * 0.7, wz)

    trunk.castShadow   = true
    foliage.castShadow = true

    this.scene.add(trunk)
    this.scene.add(foliage)
    this.trees.push(trunk, foliage)
  }

  // Update sky/fog based on air quality and sustainability
  updateAtmosphere(scores) {
    const airScore = scores.S ?? 50  // use sustainability as proxy
    const t = airScore / 100
    const skyColor = new THREE.Color().lerpColors(
      new THREE.Color(0x1a0d0d),  // dirty red-brown sky
      new THREE.Color(0x0d1a2a),  // clean dark blue sky
      t
    )
    this.scene.background = skyColor
    this.scene.fog.color  = skyColor
    this.scene.fog.density = 0.008 + (1 - t) * 0.012
  }

  start() {
    const animate = () => {
      this.animId = requestAnimationFrame(animate)
      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    }
    animate()
  }

  stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId)
      this.animId = null
    }
  }

  resize() {
    const W = this.container.clientWidth
    const H = this.container.clientHeight
    this.camera.aspect = W / H
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(W, H)
  }

  dispose() {
    this.stop()
    this.renderer.dispose()
  }
}
