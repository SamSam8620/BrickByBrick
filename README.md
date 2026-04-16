# BrickByBrick — Generative City World Builder

**Live site:** https://samsam8620.github.io/BrickByBrick/

BrickByBrick is an interactive browser-based world-building tool that lets anyone design a functional city from scratch — no urban planning background required. You make a handful of meaningful decisions across 12 urban domains, and the engine generates a fully scored city across 96 parameters, rendered in real time as an animated isometric scene.

---

## What it does

You build your city in four steps:

### 1 · Choose a geography
Pick from 10 city archetypes — Port City, Desert City, Island City, River Delta, Mountain City, and more. Each geography applies hidden ±point adjustments to all 12 urban themes before any configuration begins. A desert city, for example, benefits from abundant solar energy but starts with an ecology penalty and a food security deficit.

### 2 · Master a theme
Choose one of 12 urban domains to specialise in:

> Mobility · Governance · Ecology · Housing · Economy · Infrastructure · Healthcare · Education · Energy · Food & Agriculture · Digital & Innovation · Community & Equity

Your chosen theme is the one you configure manually. The other eleven are derived automatically.

### 3 · Configure your domain
Drag the interactive sunburst chart to set your 8 primary inputs — things like cycling network coverage, renewable energy share, affordable housing ratio, or civic participation rate. As you adjust them:

- A **live isometric city preview** updates in real time
- The city illustration **directly reflects the inputs you change**:
  - Raise **Solar Panel Coverage** → blue panel arrays appear on rooftops
  - Raise **Wind Energy Harnessing** → animated turbines spin in park tiles
  - Raise **Cycling Network Coverage** → green bike-lane markings appear on roads
  - Raise **Urban Farming Integration** → crop-grid patches replace park trees
- A **score HUD** shows how your 6 city axes shift with every drag
- An **auto-configuration panel** shows how the other 11 themes respond via the cross-theme influence matrix

### 4 · See your city
Your city is rendered and scored across 6 axes:

| Code | Axis | What it captures |
|------|------|-----------------|
| L | Livability | Daily quality of life, comfort, amenities |
| S | Sustainability | Environmental impact, emissions, resources |
| R | Resilience | Climate adaptation, redundancy, durability |
| C | Connectivity | Transport, digital, and social networks |
| E | Equity | Access, affordability, inclusion for all |
| Ec | Economy | Productivity, diversity, opportunity |

Switch between two visual modes:
- **City View** — animated isometric scene with walking people, trees, clouds, birds, and theme-coloured buildings
- **Street View** — third-person street-level perspective with a walking character, parallax buildings, and NPC pedestrians

The right panel shows your axis scores, an overall city grade (A+ → F), and any detected faults — from critical issues like "Water Supply Crisis" or "Density Without Transit" to warnings like "Urban Heat Island Risk" or "Housing Affordability Crisis."

Optionally hit **Generate City** to stream an AI-written narrative description of your city from Claude, grounded in your actual design decisions.

---

## How to use it

The tool is entirely browser-based — no account, no installation. Just open the link and start building.

- **Redesign** at any time using the top-bar button to restart without losing the page
- **Hover** over any input row in the left panel to see its full description
- **Drag** sunburst segments inward or outward to set values; the city preview and score HUD update live
- **Customize** the auto-configured themes manually via the "Customize" toggle in the left panel
- **Generate City** requires an Anthropic API key set in `src/api.js` if running locally

---

## Running locally

```bash
npm install
npm run dev        # dev server at http://localhost:3000
npm run build      # production build → dist/
npm run preview    # preview the dist/ build locally
npm run deploy     # build + publish to GitHub Pages
```

The `Generate City` narrative feature calls the Anthropic API directly from the browser. To enable it locally, replace the placeholder in `src/api.js`:

```js
const API_KEY = 'your-key-here'
```

---

## How the model works

- **96 inputs** across 12 themes × 8 sliders each — every input carries per-axis weights and an objective value
- **6 scoring axes** — scores normalise against a theoretical maximum (`AXIS_MAX`) so 100 means every input is at its ideal objective
- **Cross-theme influence matrix** — a 12×12 matrix determines how strongly mastering one theme pulls the others; governance has broad influence, food has deep community ties
- **City type adjustments** — each geography applies ±point offsets per theme before influence propagation
- **Auto-configuration engine** — derives all 88 non-primary input values from your 8 configured ones using the influence matrix and city type base scores
- **Fault detection** — 14 rule-based checks catch critical failures and sustainability warnings
- **Input-driven live rendering** — `CityScene` reads raw input values (not just aggregate scores) to place solar panels, wind turbines, crop patches, and bike lanes directly in the isometric scene

---

## Using BrickByBrick as a Plugin for Other Games

BrickByBrick is designed to be embedded. The core engine — city configuration, scoring, and auto-propagation — is a set of pure JavaScript modules with no DOM dependencies. You can drop them into any game, tool, or engine that runs JavaScript, and use the output to drive your own world.

### What the engine exports

```js
// src/data.js
THEMES          // 12 themes × 8 input definitions (labels, defaults, axis weights)
CITY_TYPES      // 10 geography archetypes with per-theme adjustments
INPUTS          // flat array of all 96 input definitions
INFLUENCE_MATRIX // 12×12 cross-theme influence coefficients
autoConfigureThemes(chosenThemeId, primaryValues, cityTypeId)
// → { allValues: {inputId: 0–100}, themeScores: {themeId: 0–100} }

// src/scoring.js
computeScores(allValues)   // → { L, S, R, C, E, Ec }  (0–100 each)
detectFaults(allValues, scores)  // → [{ title, desc, severity }]
overallScore(scores)       // → 0–100
gradeScore(score)          // → 'A+' | 'A' | 'B' | …
```

None of these functions touch the DOM. They take plain objects and return plain objects. Import them into any environment.

---

### Integration patterns

#### Pattern 1 — Embedded configuration screen (web games / Electron apps)

Drop BrickByBrick into your game's UI as a city-setup screen. When the player finishes configuring, read the resulting scores and feed them directly into your game world:

```js
import { autoConfigureThemes } from './brickbybrick/data.js'
import { computeScores, overallScore } from './brickbybrick/scoring.js'

// Player has picked a theme and set 8 inputs in your UI
const { allValues, themeScores } = autoConfigureThemes('energy', playerInputs, 'desert')
const scores = computeScores(allValues)

// Drive game systems from the output
myGame.setRenewablePercent(scores.S)          // Sustainability → clean energy %
myGame.setPopulationHappiness(scores.L)        // Livability → happiness meter
myGame.setEconomyMultiplier(scores.Ec / 100)   // Economy → production rate
myGame.setDisasterResistance(scores.R)         // Resilience → disaster probability
```

#### Pattern 2 — iframe overlay with postMessage (Unity WebGL / Godot HTML export)

Host BrickByBrick in an iframe above your game canvas. Communicate over `postMessage` to pass the city state back:

```html
<!-- In your game's HTML wrapper -->
<canvas id="game-canvas"></canvas>
<iframe id="bbrick" src="https://samsam8620.github.io/BrickByBrick/" hidden></iframe>

<script>
  window.addEventListener('message', (e) => {
    if (e.data.type === 'bbrick:city-ready') {
      const { scores, allValues, themeScores } = e.data.payload
      // Pass to Unity/Godot via SendMessage or JS interop
      gameInstance.SendMessage('CityManager', 'LoadCityData', JSON.stringify(scores))
    }
  })
</script>
```

Then in BrickByBrick's `app.js`, add one line at the end of `onBuildCity`:
```js
window.parent.postMessage({ type: 'bbrick:city-ready', payload: {
  scores: state.scores, allValues: state.allResponses, themeScores: state.themeScores
}}, '*')
```

#### Pattern 3 — JSON city preset export / import (Cities: Skylines, modded games)

Export a full city definition as JSON and load it into a game mod or level editor:

```js
// Export from BrickByBrick
const cityPreset = {
  meta:        { cityType: state.cityTypeId, masterTheme: state.activeThemeId },
  primaryInputs: state.primaryInputs,   // 8 values you configured
  allInputs:   state.allResponses,      // all 96 values
  scores:      state.scores,            // { L, S, R, C, E, Ec }
  themeScores: state.themeScores,       // per-theme aggregate scores
  overall:     state.overall,
  faults:      state.faults,
}
localStorage.setItem('bbrick-export', JSON.stringify(cityPreset))
```

A game mod (e.g. Cities: Skylines via Harmony/Mod API) can then read this and translate scores into in-game policy settings, starting budgets, population density, or map generation seeds.

#### Pattern 4 — Procedural world seeding (Minecraft, RPG Maker, Godot)

Use the 96 normalised input values (each 0–100) as a deterministic seed vector for procedural generation. Each input maps naturally to a world property:

| BrickByBrick input | Procedural game use |
|----|-----|
| `green_coverage` | Tree density, biome type |
| `housing_density` | Building frequency, village size |
| `solar_coverage` | Desert/arid biome probability |
| `water_preservation` | River/lake frequency |
| `transit_frequency` | Road network complexity |
| `biodiversity` | Mob variety, wildlife spawn rates |
| `innovation_hubs` | Dungeon/tech-ruin frequency |
| `food_security_prog` | Starting food resources |
| `social_cohesion` | NPC friendliness, trader availability |
| `energy_poverty_red` | Starting torch/lamp supply |

```js
// Example: Godot 4 via GDScript calling a JS helper
const vals = cityPreset.allInputs
const seed = Object.values(vals).reduce((acc, v, i) => acc ^ (v << (i % 24)), 0)
WorldGenerator.generate(seed, {
  forestDensity:    vals.green_coverage / 100,
  urbanDensity:     vals.housing_density / 100,
  waterFeatures:    vals.water_preservation / 100,
})
```

#### Pattern 5 — Live companion app (mobile, browser extension)

Run BrickByBrick as a side-panel tool while playing a city-builder. As the player's in-game city changes, write values back into BrickByBrick via its data layer to get a second-opinion score and fault analysis — effectively a real-time policy advisor overlay.

---

### Embedding the scoring engine standalone

If you only need the scoring model (no renderer, no UI), copy just two files:

```
src/data.js     (~1 000 lines, no imports)
src/scoring.js  (~80 lines, imports only from data.js)
```

These are self-contained ES modules. Bundle them with esbuild, Rollup, or Vite for any target environment — browser, Node.js, Deno, Bun, or a game engine's scripting runtime.

```bash
# Bundle to a single UMD file usable in any game engine with a JS runtime
npx esbuild src/scoring.js src/data.js --bundle --format=esm --outfile=bbrick-engine.js
```

---

## Architecture reference

| File | Role |
|------|------|
| `src/data.js` | Static data: `AXES`, `CITY_TYPES`, `THEMES`, `INPUTS`, `INFLUENCE_MATRIX`, `autoConfigureThemes()` |
| `src/scoring.js` | `computeScores()`, `detectFaults()`, `overallScore()`, `gradeScore()` |
| `src/app.js` | Single-page state machine; owns `state`; wires all screens and scene lifecycle |
| `src/ui.js` | Pure DOM builders for all 4 screens; no state mutation |
| `src/sunburst.js` | `SunburstChart` — interactive SVG drag-to-set ring chart |
| `src/cityScene.js` | `CityScene` (isometric animated city) and `StreetView` (third-person street walk); both Canvas 2D |
| `src/api.js` | Streams city narrative from Claude API via Anthropic SDK |

The state machine in `app.js` follows a strict 4-step flow: `map → theme → config → city`. All scoring is stateless and side-effect-free — identical inputs always produce identical outputs, which makes the engine safe to call from any game context.
