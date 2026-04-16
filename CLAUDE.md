# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:3000 (auto-opens browser)
npm run build     # production build → dist/
npm run preview   # preview the dist/ build locally
npm run deploy    # build + publish to GitHub Pages (gh-pages -d dist)
```

No test suite exists.

## Architecture

BrickByBrick is a browser-only city simulator built with Vite + vanilla JS ESM + Three.js (Three.js is a listed dependency but is currently unused; the renderers are pure Canvas 2D).

### 4-Step Flow (`app.js` is the state machine)

```
map → theme → config → city
```

| Step | What happens |
|------|--------------|
| `map` | User picks one of 10 city types (port, coastal, desert, etc.) — each carries `adjustments` (±points per theme) |
| `theme` | User picks one of 12 themes (mobility, housing, energy, …) to "master" |
| `config` | User drags an interactive SVG sunburst to set 8 inputs for their chosen theme; `autoConfigureThemes()` derives all 96 values for the other 11 themes |
| `city` | Scores computed, city rendered on `<canvas>`, narrative can be streamed from Claude API |

### Module Responsibilities

| File | Role |
|------|------|
| `src/data.js` | All static data: `AXES` (6 scoring axes), `CITY_TYPES` (10), `THEMES` (12 × 8 inputs each), `INPUTS` (flat array of all 96), `INFLUENCE_MATRIX`, `autoConfigureThemes()` |
| `src/scoring.js` | `computeScores()`, `detectFaults()`, `overallScore()`, `gradeScore()` |
| `src/app.js` | Single-page state machine; owns `state` object; wires all screens and scene lifecycle |
| `src/ui.js` | Pure DOM builders for all 4 screens; no state mutation — receives callbacks |
| `src/sunburst.js` | `SunburstChart` — interactive SVG drag-to-set ring chart for the config screen |
| `src/cityScene.js` | `CityScene` (isometric animated city) and `StreetView` (third-person street walk); both use Canvas 2D, not Three.js |
| `src/api.js` | Streams city narrative from Claude API directly from browser using `anthropic-dangerous-direct-browser-access` header |
| `src/renderer2d.js` | Legacy isometric renderer — **not currently imported anywhere** |

### Scoring System (`data.js` + `scoring.js`)

Each of the 96 inputs has an `axes` weight map `{ L, S, R, C, E, Ec }` and an `objective` (0–1). `computeScores()` multiplies each input's normalised value (0–1) by its per-axis weight and objective, then normalises against `AXIS_MAX` (the theoretical maximum if all inputs were at 100% of their objective).

### Auto-Configuration (`data.js → autoConfigureThemes`)

When the user configures 8 inputs for their chosen theme, the engine:
1. Computes the average of those 8 values (`chosenAvg`)
2. For each of the other 11 themes, derives a score: `base(50 ± cityTypeAdj) + (chosenAvg − 50) × influenceCoeff`
3. Spreads that derived score across the theme's 8 inputs using `INPUT_VARIANCE` offsets

### Visualisation

`CityScene` and `StreetView` in `cityScene.js` read from `THEME_PALETTES` (keyed by `themeId`) to set colours. Both classes expose `.start()`, `.stop()`, `.resize()`. The active scene is managed in `app.js`; switching view calls `_startScene()` which stops the old class and instantiates the new one.

### API Key

`src/api.js` contains a placeholder API key (`sk-ant-2023-06-01`). Replace `API_KEY` with a real Anthropic key before the "Generate City" narrative feature will work. The key is sent as a request header directly from the browser — do not commit real keys.

### Deployment

`vite.config.js` sets `base: '/BrickByBrick/'` for GitHub Pages. The `deploy` script uses `gh-pages -d dist`.
