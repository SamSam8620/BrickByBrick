// ─────────────────────────────────────────────────────────────────
// scoring.js  —  Axis engine, fault detection, score math
// ─────────────────────────────────────────────────────────────────
import { INPUTS, AXES } from './data.js'

// Build a normalisation denominator per axis (max possible contribution)
const AXIS_MAX = {}
for (const ax of AXES) {
  let sum = 0
  for (const inp of INPUTS) {
    sum += (inp.axes[ax.id] || 0) * inp.objective
  }
  AXIS_MAX[ax.id] = sum || 1
}

/**
 * Compute 0–100 scores for every axis from the current responses map.
 * @param {Object} responses  { [inputId]: 0–100 }
 * @returns {Object}  { L, S, R, C, E, Ec }
 */
export function computeScores(responses) {
  const raw = {}
  for (const ax of AXES) raw[ax.id] = 0

  for (const inp of INPUTS) {
    const val = responses[inp.id] ?? inp.default
    const normalised = inp.type === 'toggle'
      ? (val > 50 ? 1 : 0)
      : val / 100
    for (const ax of AXES) {
      raw[ax.id] += normalised * (inp.axes[ax.id] || 0) * inp.objective
    }
  }

  const scores = {}
  for (const ax of AXES) {
    scores[ax.id] = Math.round((raw[ax.id] / AXIS_MAX[ax.id]) * 100)
  }
  return scores
}

/**
 * Overall score: weighted average of axes.
 */
export function overallScore(scores) {
  const vals = AXES.map(ax => scores[ax.id])
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length
  return Math.round(avg)
}

/**
 * Letter grade from overall score.
 */
export function gradeScore(overall) {
  if (overall >= 90) return { grade: 'A+', color: '#00e676' }
  if (overall >= 80) return { grade: 'A',  color: '#66BB6A' }
  if (overall >= 70) return { grade: 'B',  color: '#26C6DA' }
  if (overall >= 60) return { grade: 'C',  color: '#42A5F5' }
  if (overall >= 50) return { grade: 'D',  color: '#FFA726' }
  return                       { grade: 'F',  color: '#ef5350' }
}

// ─── Fault definitions ────────────────────────────────────────────
// Each fault: { id, title, desc, severity ('critical'|'warning'),
//   test(responses, scores) → bool }

const FAULTS = [
  {
    id: 'no_water',
    title: 'Water Supply Crisis',
    desc: 'Water supply reliability is critically low — a basic urban requirement.',
    severity: 'critical',
    test: (r) => (r.water_supply ?? 80) < 30,
  },
  {
    id: 'no_emergency',
    title: 'Emergency Coverage Gap',
    desc: 'Emergency service coverage is dangerously insufficient.',
    severity: 'critical',
    test: (r) => (r.emergency_infra ?? 70) < 30,
  },
  {
    id: 'no_schools',
    title: 'Education Access Failure',
    desc: 'School coverage is too low for a functional society.',
    severity: 'critical',
    test: (r) => (r.school_coverage ?? 80) < 30,
  },
  {
    id: 'no_healthcare',
    title: 'Primary Healthcare Gap',
    desc: 'Primary healthcare coverage is critically low.',
    severity: 'critical',
    test: (r) => (r.healthcare_primary ?? 75) < 30,
  },
  {
    id: 'low_equity',
    title: 'Equity Deficit',
    desc: 'High economic output but very low equity — risk of social instability.',
    severity: 'critical',
    test: (r, s) => s.E < 35 && s.Ec > 65,
  },
  {
    id: 'no_transit',
    title: 'Transit Void',
    desc: 'High density with very low transit coverage creates gridlock and exclusion.',
    severity: 'critical',
    test: (r) => (r.residential_density ?? 40) > 60 && (r.transit_coverage ?? 70) < 30,
  },
  {
    id: 'heat_risk',
    title: 'Urban Heat Island Risk',
    desc: 'Low tree canopy and park provision with insufficient heat mitigation.',
    severity: 'warning',
    test: (r) => (r.tree_canopy ?? 40) < 25 && (r.heat_island ?? 45) < 30,
  },
  {
    id: 'low_resilience',
    title: 'Climate Resilience Gap',
    desc: 'City has inadequate adaptation measures for climate risks.',
    severity: 'warning',
    test: (r, s) => s.R < 40,
  },
  {
    id: 'no_affordability',
    title: 'Housing Affordability Crisis',
    desc: 'Affordability target is very low — severe cost-of-living burden on residents.',
    severity: 'warning',
    test: (r) => (r.housing_affordability ?? 65) < 30,
  },
  {
    id: 'no_green',
    title: 'Green Space Deprivation',
    desc: 'Park provision is far below the WHO minimum of 9m² per person.',
    severity: 'warning',
    test: (r) => (r.park_per_capita ?? 50) < 20,
  },
  {
    id: 'poor_air',
    title: 'Poor Air Quality',
    desc: 'Insufficient air quality management threatens public health.',
    severity: 'warning',
    test: (r) => (r.air_quality ?? 60) < 30,
  },
  {
    id: 'no_walkability',
    title: 'Walkability Failure',
    desc: 'Low walkability undermines livability, health, and sustainability.',
    severity: 'warning',
    test: (r) => (r.walkability ?? 65) < 25,
  },
  {
    id: 'low_sustainability',
    title: 'Sustainability Shortfall',
    desc: 'Sustainability score is very low — city has a large ecological footprint.',
    severity: 'warning',
    test: (r, s) => s.S < 35,
  },
  {
    id: 'density_without_services',
    title: 'Density Without Services',
    desc: 'High residential density with insufficient social services coverage.',
    severity: 'warning',
    test: (r, s) => (r.residential_density ?? 40) > 65 && s.E < 50,
  },
]

/**
 * Detect active faults from current responses and scores.
 * @param {Object} responses
 * @param {Object} scores
 * @returns {Array} of fault objects
 */
export function detectFaults(responses, scores) {
  return FAULTS.filter(f => f.test(responses, scores))
}
