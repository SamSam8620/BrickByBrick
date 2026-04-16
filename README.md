# BrickByBrick — Generative City World Builder

**Live site:** https://samsam8620.github.io/BrickByBrick/

BrickByBrick is an interactive world-building tool that lets anyone design a city from the ground up — no urban planning background required. You make a handful of meaningful decisions, and the model generates a complete, scored city across 96 parameters, visualised in three different renderers.

---

## What it does

You build your city in four steps:

**1. Choose a geography**
Pick from 10 city types — Port City, Desert City, Island City, River Delta, and more. Each geography shifts how your city performs across all 12 urban themes. A desert city, for instance, excels at energy but struggles with food security and ecology.

**2. Master a theme**
Choose one of 12 urban domains to specialise in:
Mobility · Governance · Ecology · Housing · Economy · Infrastructure · Healthcare · Education · Energy · Food & Agriculture · Digital & Innovation · Community & Equity

Each theme gives you 8 detailed sliders to configure — things like cycling network coverage, affordable housing ratio, renewable energy share, or civic participation rate.

**3. Configure your domain**
Drag the interactive sunburst chart to set your 8 inputs. As you adjust them, a live preview panel shows how your decisions ripple outward to automatically configure all 11 other themes via a cross-theme influence matrix. A high Mobility score pulls up Infrastructure, Healthcare, and Ecology. A strong Governance focus lifts Housing, Education, and Community.

**4. See your city**
Your city is rendered and scored across 6 axes:
- **L** — Livability
- **S** — Sustainability
- **R** — Resilience
- **C** — Connectivity
- **E** — Equity
- **Ec** — Economy

Switch between three visual modes:
- **City View** — animated isometric scene with walking people, trees, clouds, and birds, coloured by your chosen theme palette
- **Street View** — third-person street-level perspective with a walking character, buildings, and parallax sky
- **3D View** — Three.js orbital city model you can rotate and zoom, with shadow-cast buildings and atmosphere tint driven by your sustainability score

The right panel shows your axis scores, an overall grade (A+ → F), and any detected faults — from critical issues like "Water Supply Crisis" or "Density Without Transit" to warnings like "Urban Heat Island Risk" or "Housing Affordability Crisis".

Hit **Generate City** to stream an AI-written description of your city from Claude, grounded in your actual design decisions.

---

## How to use it

The tool is entirely browser-based — no account, no installation. Just open the link and start building.

- **Redesign** at any time using the top-bar button to start over without losing the page
- **Hover** over any input row in the left panel to see its full description
- **Drag** the sunburst segments inward or outward to raise or lower each value; the city-wide impact preview updates live
- **Generate City** requires an Anthropic API key set in `src/api.js` if running locally

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → dist/
npm run deploy     # publish to GitHub Pages
```

The `Generate City` narrative feature calls the Anthropic API directly from the browser. To enable it locally, replace the placeholder in `src/api.js`:
```js
const API_KEY = 'your-key-here'
```

---

## How the model works

- **96 inputs** across 12 themes × 8 sliders each
- **6 scoring axes** — each input carries per-axis weights and an objective value; scores normalise against a theoretical maximum
- **Cross-theme influence matrix** — a 12×12 matrix determines how strongly mastering one theme pulls the others; governance has broad influence, food has deep community ties
- **City type adjustments** — each geography applies ±point offsets per theme before influence propagation
- **Fault detection** — 14 rule-based checks catch critical failures and sustainability warnings
- **Three renderers** — isometric Canvas 2D (CityScene), perspective Canvas 2D (StreetView), and Three.js WebGL (Renderer3D)
