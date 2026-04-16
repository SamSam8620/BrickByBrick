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
    const val        = responses[inp.id] ?? inp.default
    const normalised = val / 100
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
 * Overall score: weighted average of all six axes.
 */
export function overallScore(scores) {
  const vals = AXES.map(ax => scores[ax.id])
  const avg  = vals.reduce((a, b) => a + b, 0) / vals.length
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
  return                     { grade: 'F',  color: '#ef5350' }
}

// ─── Fault definitions ────────────────────────────────────────────
const FAULTS = [
  {
    id: 'no_water',
    title: 'Water Supply Crisis',
    desc: 'Water supply reliability is critically low — a basic urban requirement.',
    severity: 'critical',
    test: (r) => (r.water_reliability ?? 80) < 30,
  },
  {
    id: 'no_emergency',
    title: 'Emergency Coverage Gap',
    desc: 'Emergency service capacity is dangerously insufficient.',
    severity: 'critical',
    test: (r) => (r.emergency_capacity ?? 65) < 25,
  },
  {
    id: 'no_schools',
    title: 'Education Access Failure',
    desc: 'School coverage is too low for a functioning society.',
    severity: 'critical',
    test: (r) => (r.school_coverage ?? 75) < 30,
  },
  {
    id: 'no_healthcare',
    title: 'Primary Healthcare Gap',
    desc: 'Primary care coverage is critically insufficient.',
    severity: 'critical',
    test: (r) => (r.primary_care ?? 70) < 25,
  },
  {
    id: 'low_equity',
    title: 'Equity Deficit',
    desc: 'High economic output but very low equity — risk of social instability.',
    severity: 'critical',
    test: (r, s) => s.E < 35 && s.Ec > 65,
  },
  {
    id: 'density_no_transit',
    title: 'Density Without Transit',
    desc: 'High housing density with very low transit frequency — gridlock and exclusion.',
    severity: 'critical',
    test: (r) => (r.housing_density ?? 45) > 65 && (r.transit_frequency ?? 55) < 25,
  },
  {
    id: 'heat_risk',
    title: 'Urban Heat Island Risk',
    desc: 'Low green coverage and insufficient heat island mitigation.',
    severity: 'warning',
    test: (r) => (r.green_coverage ?? 50) < 20 && (r.heat_mitigation ?? 45) < 30,
  },
  {
    id: 'low_resilience',
    title: 'Climate Resilience Gap',
    desc: 'City has inadequate measures for climate and environmental risks.',
    severity: 'warning',
    test: (r, s) => s.R < 40,
  },
  {
    id: 'no_affordability',
    title: 'Housing Affordability Crisis',
    desc: 'Affordable housing ratio is very low — severe cost burden on residents.',
    severity: 'warning',
    test: (r) => (r.affordable_ratio ?? 40) < 20,
  },
  {
    id: 'no_green',
    title: 'Green Space Deprivation',
    desc: 'Urban green coverage far below WHO recommendations.',
    severity: 'warning',
    test: (r) => (r.green_coverage ?? 50) < 15,
  },
  {
    id: 'poor_air',
    title: 'Poor Air Quality',
    desc: 'Air quality management is insufficient — public health threat.',
    severity: 'warning',
    test: (r) => (r.air_quality_mgmt ?? 60) < 30,
  },
  {
    id: 'no_walkability',
    title: 'Walkability Failure',
    desc: 'Very low pedestrian priority undermines livability and health.',
    severity: 'warning',
    test: (r) => (r.pedestrian_priority ?? 55) < 20,
  },
  {
    id: 'low_sustainability',
    title: 'Sustainability Shortfall',
    desc: 'City sustainability score is very low — large ecological footprint.',
    severity: 'warning',
    test: (r, s) => s.S < 35,
  },
  {
    id: 'energy_poverty',
    title: 'Energy Poverty',
    desc: 'Many residents unable to afford adequate energy — compounding inequality.',
    severity: 'warning',
    test: (r) => (r.energy_poverty_red ?? 55) < 30,
  },
]

/**
 * Detect active faults from current responses and scores.
 */
export function detectFaults(responses, scores) {
  return FAULTS.filter(f => f.test(responses, scores))
}
