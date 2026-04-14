// ─────────────────────────────────────────────────────────────────
// data.js  —  All inputs, themes, zones, axes, global config
// ─────────────────────────────────────────────────────────────────

export const THEMES = [
  { id: 'housing',    label: 'Housing & Shelter',         color: '#FF7043', icon: '🏘' },
  { id: 'mobility',   label: 'Mobility & Transport',      color: '#42A5F5', icon: '🚇' },
  { id: 'public',     label: 'Public Space & Nature',     color: '#66BB6A', icon: '🌳' },
  { id: 'economy',    label: 'Economic Activity',         color: '#AB47BC', icon: '🏙' },
  { id: 'infra',      label: 'Infrastructure & Utilities',color: '#26C6DA', icon: '⚡' },
  { id: 'social',     label: 'Social Services',           color: '#EC407A', icon: '🏥' },
  { id: 'resilience', label: 'Environmental Resilience',  color: '#FFA726', icon: '🌿' },
  { id: 'governance', label: 'Governance & Culture',      color: '#78909C', icon: '🏛' },
]

export const ZONES = [
  { id: 'civic',       label: 'Civic',         color: '#26C6DA' },
  { id: 'commercial',  label: 'Commercial',    color: '#42A5F5' },
  { id: 'mixed',       label: 'Mixed Use',     color: '#AB47BC' },
  { id: 'residential', label: 'Residential',   color: '#FF7043' },
  { id: 'res_low',     label: 'Low-Density',   color: '#FFAB76' },
  { id: 'industrial',  label: 'Industrial',    color: '#78909C' },
  { id: 'green',       label: 'Green Space',   color: '#66BB6A' },
]

export const AXES = [
  { id: 'L',  label: 'Livability',     color: '#66BB6A', desc: 'Quality of daily life, comfort, amenities' },
  { id: 'S',  label: 'Sustainability', color: '#26C6DA', desc: 'Environmental impact, resources, emissions' },
  { id: 'R',  label: 'Resilience',     color: '#FFA726', desc: 'Climate adaptation, redundancy, durability' },
  { id: 'C',  label: 'Connectivity',   color: '#42A5F5', desc: 'Transport networks, digital, social links' },
  { id: 'E',  label: 'Equity',         color: '#EC407A', desc: 'Access, affordability, inclusion for all' },
  { id: 'Ec', label: 'Economy',        color: '#AB47BC', desc: 'Productivity, diversity, opportunity' },
]

export const GLOBAL_PARAMS = [
  {
    id: 'scale',
    label: 'City Scale',
    type: 'select',
    options: [
      { value: 'neighbourhood', label: 'Neighbourhood (1k–20k)' },
      { value: 'district',      label: 'District (20k–200k)' },
      { value: 'city',          label: 'City (200k–2M)' },
      { value: 'metropolis',    label: 'Metropolis (2M+)' },
    ],
    default: 'city',
  },
  {
    id: 'topography',
    label: 'Topography',
    type: 'select',
    options: [
      { value: 'flat',     label: 'Flat / Plains' },
      { value: 'hilly',    label: 'Hilly / Rolling' },
      { value: 'coastal',  label: 'Coastal' },
      { value: 'valley',   label: 'River Valley' },
      { value: 'mountain', label: 'Mountain / Highland' },
    ],
    default: 'flat',
  },
  {
    id: 'climate',
    label: 'Climate',
    type: 'select',
    options: [
      { value: 'tropical',    label: 'Tropical / Humid' },
      { value: 'arid',        label: 'Arid / Desert' },
      { value: 'temperate',   label: 'Temperate' },
      { value: 'continental', label: 'Continental / Cold' },
      { value: 'polar',       label: 'Polar / Subarctic' },
    ],
    default: 'temperate',
  },
]

// ─── Input definitions ────────────────────────────────────────────
// Each input: { id, label, description, theme, zone, category,
//   type ('slider'|'toggle'), min, max, step, default, unit,
//   objective (0–1 = how critical for any functional city),
//   axes: { L, S, R, C, E, Ec }  (weights, sum ~1) }
// ─────────────────────────────────────────────────────────────────

export const INPUTS = [

  // ───────────────────────────────────────────────
  // HOUSING & SHELTER
  // ───────────────────────────────────────────────
  {
    id: 'residential_density', label: 'Residential Density',
    description: 'Dwelling units per hectare in residential zones',
    theme: 'housing', zone: 'residential', category: 'Density',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: 'u/ha',
    objective: 0.95,
    axes: { L: 0.25, S: 0.1, R: 0.1, C: 0.15, E: 0.3, Ec: 0.2 }
  },
  {
    id: 'floor_area_ratio', label: 'Floor Area Ratio',
    description: 'Ratio of total floor area to plot area (FAR)',
    theme: 'housing', zone: 'residential', category: 'Density',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: 'FAR×0.05',
    objective: 0.7,
    axes: { L: 0.2, S: 0.1, R: 0.1, C: 0.1, E: 0.15, Ec: 0.35 }
  },
  {
    id: 'lot_coverage', label: 'Max Lot Coverage',
    description: 'Maximum percentage of a lot that can be built upon',
    theme: 'housing', zone: 'residential', category: 'Density',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '%',
    objective: 0.6,
    axes: { L: 0.2, S: 0.25, R: 0.15, C: 0.0, E: 0.15, Ec: 0.25 }
  },

  {
    id: 'housing_affordability', label: 'Affordability Target',
    description: 'Target: households spending <30% of income on housing',
    theme: 'housing', zone: 'residential', category: 'Affordability',
    type: 'slider', min: 0, max: 100, step: 5, default: 65, unit: '%',
    objective: 0.9,
    axes: { L: 0.3, S: 0.0, R: 0.1, C: 0.0, E: 0.55, Ec: 0.15 }
  },
  {
    id: 'social_housing', label: 'Social Housing Share',
    description: 'Percentage of stock reserved as social or affordable housing',
    theme: 'housing', zone: 'residential', category: 'Affordability',
    type: 'slider', min: 0, max: 100, step: 5, default: 20, unit: '%',
    objective: 0.85,
    axes: { L: 0.2, S: 0.0, R: 0.15, C: 0.0, E: 0.65, Ec: 0.1 }
  },
  {
    id: 'anti_displacement', label: 'Anti-Displacement Policy',
    description: 'Strength of policies preventing displacement of existing residents',
    theme: 'housing', zone: 'residential', category: 'Affordability',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.75,
    axes: { L: 0.15, S: 0.0, R: 0.2, C: 0.0, E: 0.65, Ec: 0.1 }
  },

  {
    id: 'mixed_housing_types', label: 'Housing Type Mix',
    description: 'Diversity of typologies: detached, terraced, apartment, etc.',
    theme: 'housing', zone: 'residential', category: 'Typology',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
    objective: 0.75,
    axes: { L: 0.3, S: 0.1, R: 0.2, C: 0.0, E: 0.35, Ec: 0.15 }
  },
  {
    id: 'building_height', label: 'Max Building Height',
    description: 'Permitted maximum height in storeys',
    theme: 'housing', zone: 'residential', category: 'Typology',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: 'flrs',
    objective: 0.6,
    axes: { L: 0.2, S: 0.1, R: 0.1, C: 0.1, E: 0.1, Ec: 0.4 }
  },
  {
    id: 'adaptive_reuse', label: 'Adaptive Reuse Priority',
    description: 'Preference for converting existing buildings over new construction',
    theme: 'housing', zone: 'mixed', category: 'Typology',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.6,
    axes: { L: 0.15, S: 0.35, R: 0.2, C: 0.0, E: 0.2, Ec: 0.2 }
  },
  {
    id: 'live_work', label: 'Live-Work Units',
    description: 'Percentage of stock designed as combined live-work spaces',
    theme: 'housing', zone: 'mixed', category: 'Typology',
    type: 'slider', min: 0, max: 100, step: 5, default: 15, unit: '%',
    objective: 0.4,
    axes: { L: 0.2, S: 0.1, R: 0.1, C: 0.1, E: 0.2, Ec: 0.3 }
  },

  {
    id: 'tenure_diversity', label: 'Tenure Mix',
    description: 'Balance of ownership, rental, cooperative, and community land',
    theme: 'housing', zone: 'residential', category: 'Tenure',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.7,
    axes: { L: 0.2, S: 0.0, R: 0.2, C: 0.0, E: 0.5, Ec: 0.2 }
  },
  {
    id: 'community_ownership', label: 'Community Land Trust',
    description: 'Share of land held in community ownership to prevent speculation',
    theme: 'housing', zone: 'residential', category: 'Tenure',
    type: 'slider', min: 0, max: 100, step: 5, default: 20, unit: '%',
    objective: 0.5,
    axes: { L: 0.1, S: 0.1, R: 0.2, C: 0.0, E: 0.55, Ec: 0.15 }
  },

  {
    id: 'green_roofs', label: 'Green Roof Mandate',
    description: 'Requirement for green or cool roofs on new buildings',
    theme: 'housing', zone: 'residential', category: 'Sustainability',
    type: 'toggle', default: 50,
    objective: 0.6,
    axes: { L: 0.2, S: 0.4, R: 0.25, C: 0.0, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'passive_design', label: 'Passive Solar Design',
    description: 'Requirement for passive solar/ventilation in building design',
    theme: 'housing', zone: 'residential', category: 'Sustainability',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '%',
    objective: 0.7,
    axes: { L: 0.15, S: 0.45, R: 0.2, C: 0.0, E: 0.1, Ec: 0.1 }
  },
  {
    id: 'materials_local', label: 'Local Materials Priority',
    description: 'Preference for locally sourced and low-embodied-carbon materials',
    theme: 'housing', zone: 'residential', category: 'Sustainability',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.5,
    axes: { L: 0.1, S: 0.45, R: 0.2, C: 0.0, E: 0.1, Ec: 0.25 }
  },

  {
    id: 'housing_elderly', label: 'Elderly Housing Provision',
    description: 'Percentage of stock designed and reserved for elderly residents',
    theme: 'housing', zone: 'residential', category: 'Inclusion',
    type: 'slider', min: 0, max: 100, step: 5, default: 15, unit: '%',
    objective: 0.8,
    axes: { L: 0.25, S: 0.0, R: 0.1, C: 0.0, E: 0.65, Ec: 0.0 }
  },
  {
    id: 'housing_disabled', label: 'Accessible Housing',
    description: 'Percentage of stock meeting full wheelchair/disability access',
    theme: 'housing', zone: 'residential', category: 'Inclusion',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
    objective: 0.85,
    axes: { L: 0.2, S: 0.0, R: 0.1, C: 0.0, E: 0.7, Ec: 0.0 }
  },
  {
    id: 'temporary_housing', label: 'Emergency Housing',
    description: 'Provision for emergency and transitional housing needs',
    theme: 'housing', zone: 'residential', category: 'Inclusion',
    type: 'slider', min: 0, max: 100, step: 5, default: 10, unit: '%',
    objective: 0.7,
    axes: { L: 0.1, S: 0.0, R: 0.45, C: 0.0, E: 0.45, Ec: 0.0 }
  },

  // ───────────────────────────────────────────────
  // MOBILITY & TRANSPORT
  // ───────────────────────────────────────────────
  {
    id: 'walkability', label: 'Walkability Index',
    description: 'Proportion of daily needs reachable on foot within 15 minutes',
    theme: 'mobility', zone: 'mixed', category: 'Active Transport',
    type: 'slider', min: 0, max: 100, step: 5, default: 65, unit: '',
    objective: 0.95,
    axes: { L: 0.35, S: 0.2, R: 0.15, C: 0.2, E: 0.1, Ec: 0.1 }
  },
  {
    id: 'cycling_network', label: 'Cycling Network Coverage',
    description: 'Percentage of streets with protected cycling infrastructure',
    theme: 'mobility', zone: 'mixed', category: 'Active Transport',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
    objective: 0.8,
    axes: { L: 0.25, S: 0.3, R: 0.15, C: 0.25, E: 0.15, Ec: 0.1 }
  },
  {
    id: 'pedestrian_priority', label: 'Pedestrian Street Priority',
    description: 'Proportion of streets designed with pedestrian priority',
    theme: 'mobility', zone: 'mixed', category: 'Active Transport',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '%',
    objective: 0.85,
    axes: { L: 0.4, S: 0.2, R: 0.1, C: 0.2, E: 0.15, Ec: 0.15 }
  },
  {
    id: 'micro_mobility', label: 'Micro-Mobility Lanes',
    description: 'Dedicated lanes for e-scooters, e-bikes, and micro-vehicles',
    theme: 'mobility', zone: 'mixed', category: 'Active Transport',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
    objective: 0.5,
    axes: { L: 0.2, S: 0.2, R: 0.1, C: 0.35, E: 0.15, Ec: 0.1 }
  },

  {
    id: 'transit_coverage', label: 'Transit Coverage',
    description: 'Population within 400m of a frequent transit stop',
    theme: 'mobility', zone: 'mixed', category: 'Public Transit',
    type: 'slider', min: 0, max: 100, step: 5, default: 70, unit: '%',
    objective: 0.95,
    axes: { L: 0.3, S: 0.2, R: 0.15, C: 0.25, E: 0.2, Ec: 0.1 }
  },
  {
    id: 'bus_frequency', label: 'Bus/Tram Frequency',
    description: 'Average peak-hour frequency of bus and tram services',
    theme: 'mobility', zone: 'mixed', category: 'Public Transit',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: 'min⁻¹',
    objective: 0.85,
    axes: { L: 0.3, S: 0.15, R: 0.15, C: 0.3, E: 0.2, Ec: 0.1 }
  },
  {
    id: 'rail_connection', label: 'Rail / Metro Connection',
    description: 'Quality and extent of heavy rail and metro infrastructure',
    theme: 'mobility', zone: 'mixed', category: 'Public Transit',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.75,
    axes: { L: 0.25, S: 0.15, R: 0.15, C: 0.35, E: 0.15, Ec: 0.2 }
  },
  {
    id: 'shared_mobility', label: 'Shared Mobility Programs',
    description: 'Availability of car-share, bike-share, and on-demand transit',
    theme: 'mobility', zone: 'mixed', category: 'Public Transit',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.6,
    axes: { L: 0.25, S: 0.25, R: 0.1, C: 0.3, E: 0.2, Ec: 0.1 }
  },

  {
    id: 'car_restriction', label: 'Private Car Restriction',
    description: 'Level of restriction on private car access in the city core',
    theme: 'mobility', zone: 'mixed', category: 'Roads & Cars',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.6,
    axes: { L: 0.25, S: 0.35, R: 0.1, C: 0.1, E: 0.15, Ec: 0.05 }
  },
  {
    id: 'parking_ratio', label: 'Parking Ratio',
    description: 'Parking spaces per dwelling (lower = more urban, active)',
    theme: 'mobility', zone: 'residential', category: 'Roads & Cars',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: 'sp/u',
    objective: 0.5,
    axes: { L: 0.1, S: 0.1, R: 0.05, C: 0.2, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'traffic_calming', label: 'Traffic Calming Measures',
    description: 'Prevalence of speed tables, chicanes, and low-speed zones',
    theme: 'mobility', zone: 'residential', category: 'Roads & Cars',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.7,
    axes: { L: 0.35, S: 0.15, R: 0.1, C: 0.15, E: 0.2, Ec: 0.05 }
  },
  {
    id: 'electric_vehicle', label: 'EV Charging Infrastructure',
    description: 'Coverage and density of public EV charging points',
    theme: 'mobility', zone: 'mixed', category: 'Roads & Cars',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
    objective: 0.65,
    axes: { L: 0.1, S: 0.35, R: 0.15, C: 0.2, E: 0.1, Ec: 0.1 }
  },

  {
    id: 'block_size', label: 'Block Size',
    description: 'Average block perimeter (smaller = more walkable, permeable)',
    theme: 'mobility', zone: 'mixed', category: 'Street Network',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: 'm',
    objective: 0.75,
    axes: { L: 0.3, S: 0.1, R: 0.1, C: 0.35, E: 0.1, Ec: 0.15 }
  },
  {
    id: 'intersection_density', label: 'Intersection Density',
    description: 'Number of intersections per km² (high = fine-grained grid)',
    theme: 'mobility', zone: 'mixed', category: 'Street Network',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '/km²',
    objective: 0.7,
    axes: { L: 0.25, S: 0.1, R: 0.1, C: 0.4, E: 0.1, Ec: 0.15 }
  },
  {
    id: 'water_transport', label: 'Water Transport',
    description: 'Availability of ferry and water-based public transport',
    theme: 'mobility', zone: 'mixed', category: 'Street Network',
    type: 'slider', min: 0, max: 100, step: 5, default: 20, unit: '',
    objective: 0.3,
    axes: { L: 0.2, S: 0.2, R: 0.2, C: 0.25, E: 0.1, Ec: 0.15 }
  },
  {
    id: 'autonomous_vehicles', label: 'AV Infrastructure Readiness',
    description: 'Road infrastructure and legal readiness for autonomous vehicles',
    theme: 'mobility', zone: 'mixed', category: 'Street Network',
    type: 'slider', min: 0, max: 100, step: 5, default: 20, unit: '',
    objective: 0.3,
    axes: { L: 0.1, S: 0.1, R: 0.2, C: 0.35, E: 0.1, Ec: 0.25 }
  },

  // ───────────────────────────────────────────────
  // PUBLIC SPACE & NATURE
  // ───────────────────────────────────────────────
  {
    id: 'park_per_capita', label: 'Park Area per Capita',
    description: 'Square metres of public green space per resident',
    theme: 'public', zone: 'green', category: 'Green Space',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: 'm²/p',
    objective: 0.9,
    axes: { L: 0.4, S: 0.25, R: 0.2, C: 0.05, E: 0.15, Ec: 0.05 }
  },
  {
    id: 'tree_canopy', label: 'Street Tree Canopy',
    description: 'Percentage of street network shaded by tree canopy',
    theme: 'public', zone: 'green', category: 'Green Space',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
    objective: 0.8,
    axes: { L: 0.35, S: 0.3, R: 0.25, C: 0.0, E: 0.1, Ec: 0.0 }
  },
  {
    id: 'biodiversity', label: 'Biodiversity Corridors',
    description: 'Connectivity of ecological networks through the urban fabric',
    theme: 'public', zone: 'green', category: 'Green Space',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.7,
    axes: { L: 0.2, S: 0.45, R: 0.25, C: 0.05, E: 0.1, Ec: 0.0 }
  },
  {
    id: 'community_gardens', label: 'Community Gardens',
    description: 'Availability of community growing and allotment spaces',
    theme: 'public', zone: 'green', category: 'Green Space',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
    objective: 0.5,
    axes: { L: 0.3, S: 0.25, R: 0.2, C: 0.05, E: 0.3, Ec: 0.0 }
  },
  {
    id: 'urban_forest', label: 'Urban Forest / Woodland',
    description: 'Area of woodland and forest within city limits',
    theme: 'public', zone: 'green', category: 'Green Space',
    type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '%',
    objective: 0.6,
    axes: { L: 0.25, S: 0.4, R: 0.25, C: 0.0, E: 0.1, Ec: 0.0 }
  },
  {
    id: 'wetlands', label: 'Wetland Preservation',
    description: 'Protection and integration of wetland habitats',
    theme: 'public', zone: 'green', category: 'Green Space',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
    objective: 0.65,
    axes: { L: 0.15, S: 0.4, R: 0.35, C: 0.0, E: 0.1, Ec: 0.0 }
  },

  {
    id: 'public_plaza', label: 'Public Plaza Provision',
    description: 'Density of public squares, plazas, and gathering spaces',
    theme: 'public', zone: 'civic', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.8,
    axes: { L: 0.45, S: 0.05, R: 0.1, C: 0.15, E: 0.2, Ec: 0.1 }
  },
  {
    id: 'cultural_venues', label: 'Cultural Venue Density',
    description: 'Museums, theatres, galleries, and cultural centres per capita',
    theme: 'public', zone: 'civic', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.7,
    axes: { L: 0.4, S: 0.0, R: 0.05, C: 0.1, E: 0.25, Ec: 0.25 }
  },
  {
    id: 'sports_facilities', label: 'Sports & Recreation',
    description: 'Availability of public sports fields, pools, and leisure centres',
    theme: 'public', zone: 'civic', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.75,
    axes: { L: 0.4, S: 0.05, R: 0.1, C: 0.1, E: 0.3, Ec: 0.05 }
  },
  {
    id: 'market_spaces', label: 'Market & Vendor Spaces',
    description: 'Outdoor and covered market infrastructure for local trade',
    theme: 'public', zone: 'commercial', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.65,
    axes: { L: 0.3, S: 0.1, R: 0.1, C: 0.15, E: 0.25, Ec: 0.25 }
  },
  {
    id: 'public_art', label: 'Public Art Provision',
    description: 'Investment in public art, murals, and cultural installations',
    theme: 'public', zone: 'civic', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
    objective: 0.4,
    axes: { L: 0.4, S: 0.0, R: 0.0, C: 0.1, E: 0.3, Ec: 0.2 }
  },
  {
    id: 'street_furniture', label: 'Street Furniture Quality',
    description: 'Seating, lighting, wayfinding, and public amenity quality',
    theme: 'public', zone: 'mixed', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.65,
    axes: { L: 0.5, S: 0.05, R: 0.05, C: 0.1, E: 0.2, Ec: 0.1 }
  },
  {
    id: 'water_access', label: 'Waterfront / Water Access',
    description: 'Public access to rivers, lakes, coastline, or water features',
    theme: 'public', zone: 'green', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.5,
    axes: { L: 0.4, S: 0.15, R: 0.15, C: 0.1, E: 0.2, Ec: 0.1 }
  },
  {
    id: 'event_spaces', label: 'Event & Festival Spaces',
    description: 'Dedicated spaces for civic events, festivals, and gatherings',
    theme: 'public', zone: 'civic', category: 'Public Spaces',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.5,
    axes: { L: 0.35, S: 0.0, R: 0.1, C: 0.2, E: 0.2, Ec: 0.2 }
  },

  // ───────────────────────────────────────────────
  // ECONOMIC ACTIVITY
  // ───────────────────────────────────────────────
  {
    id: 'commercial_gf', label: 'Active Ground Floors',
    description: 'Percentage of ground-floor space with active commercial use',
    theme: 'economy', zone: 'commercial', category: 'Land Use',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '%',
    objective: 0.85,
    axes: { L: 0.35, S: 0.0, R: 0.1, C: 0.15, E: 0.15, Ec: 0.35 }
  },
  {
    id: 'mixed_use_ratio', label: 'Mixed-Use Development',
    description: 'Percentage of buildings with vertical mixed use',
    theme: 'economy', zone: 'mixed', category: 'Land Use',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '%',
    objective: 0.85,
    axes: { L: 0.3, S: 0.1, R: 0.15, C: 0.15, E: 0.15, Ec: 0.35 }
  },
  {
    id: 'industrial_land', label: 'Industrial Land Reserve',
    description: 'Percentage of city area protected for industrial and logistics use',
    theme: 'economy', zone: 'industrial', category: 'Land Use',
    type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '%',
    objective: 0.75,
    axes: { L: 0.05, S: 0.1, R: 0.2, C: 0.15, E: 0.15, Ec: 0.45 }
  },
  {
    id: 'employment_density', label: 'Employment Density',
    description: 'Jobs per hectare in commercial and mixed-use zones',
    theme: 'economy', zone: 'commercial', category: 'Land Use',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: 'j/ha',
    objective: 0.8,
    axes: { L: 0.2, S: 0.0, R: 0.15, C: 0.15, E: 0.2, Ec: 0.5 }
  },

  {
    id: 'local_business', label: 'Local Business Support',
    description: 'Policies favouring independent and local businesses over chains',
    theme: 'economy', zone: 'commercial', category: 'Business Mix',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.7,
    axes: { L: 0.25, S: 0.1, R: 0.2, C: 0.1, E: 0.25, Ec: 0.3 }
  },
  {
    id: 'retail_diversity', label: 'Retail Type Diversity',
    description: 'Mix of retail formats: local shops, markets, anchors, services',
    theme: 'economy', zone: 'commercial', category: 'Business Mix',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
    objective: 0.7,
    axes: { L: 0.3, S: 0.05, R: 0.15, C: 0.1, E: 0.2, Ec: 0.3 }
  },
  {
    id: 'informal_economy', label: 'Informal Economy Support',
    description: 'Legal and spatial support for street vendors, hawkers, informal trade',
    theme: 'economy', zone: 'mixed', category: 'Business Mix',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
    objective: 0.55,
    axes: { L: 0.2, S: 0.05, R: 0.15, C: 0.1, E: 0.35, Ec: 0.25 }
  },
  {
    id: 'night_economy', label: 'Night-Time Economy',
    description: 'Provisions for safe and active nightlife and evening commerce',
    theme: 'economy', zone: 'mixed', category: 'Business Mix',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.5,
    axes: { L: 0.35, S: 0.0, R: 0.1, C: 0.15, E: 0.1, Ec: 0.35 }
  },

  {
    id: 'innovation_cluster', label: 'Innovation Clusters',
    description: 'Designated innovation, tech, and research districts',
    theme: 'economy', zone: 'mixed', category: 'Knowledge Economy',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
    objective: 0.5,
    axes: { L: 0.1, S: 0.05, R: 0.15, C: 0.2, E: 0.1, Ec: 0.5 }
  },
  {
    id: 'maker_spaces', label: 'Maker / Fabrication Spaces',
    description: 'Workshops, fab labs, and hands-on production facilities',
    theme: 'economy', zone: 'mixed', category: 'Knowledge Economy',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '',
    objective: 0.5,
    axes: { L: 0.15, S: 0.1, R: 0.1, C: 0.15, E: 0.25, Ec: 0.45 }
  },
  {
    id: 'co_working', label: 'Co-Working Spaces',
    description: 'Density of shared professional workspaces across city',
    theme: 'economy', zone: 'mixed', category: 'Knowledge Economy',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
    objective: 0.45,
    axes: { L: 0.15, S: 0.05, R: 0.1, C: 0.25, E: 0.2, Ec: 0.4 }
  },
  {
    id: 'circular_economy', label: 'Circular Economy Facilities',
    description: 'Repair cafes, reuse centres, materials exchanges',
    theme: 'economy', zone: 'mixed', category: 'Knowledge Economy',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '',
    objective: 0.55,
    axes: { L: 0.1, S: 0.45, R: 0.2, C: 0.1, E: 0.15, Ec: 0.2 }
  },
  {
    id: 'urban_agriculture', label: 'Urban Agriculture',
    description: 'Integration of food production into urban fabric',
    theme: 'economy', zone: 'green', category: 'Knowledge Economy',
    type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '%',
    objective: 0.5,
    axes: { L: 0.2, S: 0.3, R: 0.25, C: 0.0, E: 0.2, Ec: 0.15 }
  },
  {
    id: 'tourism', label: 'Tourism Infrastructure',
    description: 'Investment in visitor economy, hospitality, and attractions',
    theme: 'economy', zone: 'commercial', category: 'Knowledge Economy',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.4,
    axes: { L: 0.15, S: 0.0, R: 0.05, C: 0.2, E: 0.1, Ec: 0.5 }
  },
  {
    id: 'economic_resilience', label: 'Economic Diversification',
    description: 'Spread across sectors to reduce vulnerability to shocks',
    theme: 'economy', zone: 'mixed', category: 'Knowledge Economy',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.8,
    axes: { L: 0.1, S: 0.05, R: 0.35, C: 0.1, E: 0.15, Ec: 0.45 }
  },

  // ───────────────────────────────────────────────
  // INFRASTRUCTURE & UTILITIES
  // ───────────────────────────────────────────────
  {
    id: 'water_supply', label: 'Water Supply Reliability',
    description: 'Reliability and quality of potable water supply',
    theme: 'infra', zone: 'mixed', category: 'Water',
    type: 'slider', min: 0, max: 100, step: 5, default: 80, unit: '%',
    objective: 1.0,
    axes: { L: 0.3, S: 0.15, R: 0.35, C: 0.0, E: 0.25, Ec: 0.1 }
  },
  {
    id: 'water_recycling', label: 'Water Recycling & Reuse',
    description: 'Proportion of wastewater treated and recycled for non-potable use',
    theme: 'infra', zone: 'mixed', category: 'Water',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
    objective: 0.75,
    axes: { L: 0.1, S: 0.45, R: 0.3, C: 0.0, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'stormwater', label: 'Stormwater Management',
    description: 'Capacity to manage and absorb heavy rainfall events',
    theme: 'infra', zone: 'mixed', category: 'Water',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.85,
    axes: { L: 0.15, S: 0.3, R: 0.45, C: 0.0, E: 0.1, Ec: 0.0 }
  },
  {
    id: 'sewage_treatment', label: 'Sewage Treatment Quality',
    description: 'Level of wastewater treatment before discharge',
    theme: 'infra', zone: 'mixed', category: 'Water',
    type: 'slider', min: 0, max: 100, step: 5, default: 75, unit: '',
    objective: 0.95,
    axes: { L: 0.2, S: 0.4, R: 0.2, C: 0.0, E: 0.2, Ec: 0.0 }
  },

  {
    id: 'renewable_energy', label: 'Renewable Energy Share',
    description: 'Percentage of city energy from renewable sources',
    theme: 'infra', zone: 'mixed', category: 'Energy',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
    objective: 0.9,
    axes: { L: 0.1, S: 0.5, R: 0.25, C: 0.0, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'energy_efficiency', label: 'Building Energy Efficiency',
    description: 'Average energy use intensity of building stock',
    theme: 'infra', zone: 'mixed', category: 'Energy',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.85,
    axes: { L: 0.15, S: 0.5, R: 0.2, C: 0.0, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'district_energy', label: 'District Heating / Cooling',
    description: 'Centralised district energy systems for heating and cooling',
    theme: 'infra', zone: 'mixed', category: 'Energy',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
    objective: 0.65,
    axes: { L: 0.1, S: 0.4, R: 0.3, C: 0.0, E: 0.1, Ec: 0.1 }
  },
  {
    id: 'solar_panels', label: 'Solar PV Coverage',
    description: 'Percentage of suitable roof area fitted with solar panels',
    theme: 'infra', zone: 'mixed', category: 'Energy',
    type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
    objective: 0.7,
    axes: { L: 0.05, S: 0.5, R: 0.25, C: 0.0, E: 0.1, Ec: 0.1 }
  },
  {
    id: 'battery_storage', label: 'Energy Storage Systems',
    description: 'Grid-scale battery storage capacity',
    theme: 'infra', zone: 'mixed', category: 'Energy',
    type: 'slider', min: 0, max: 100, step: 5, default: 20, unit: '',
    objective: 0.6,
    axes: { L: 0.05, S: 0.25, R: 0.5, C: 0.0, E: 0.1, Ec: 0.1 }
  },

  {
    id: 'waste_management', label: 'Waste Collection Quality',
    description: 'Coverage and reliability of waste collection services',
    theme: 'infra', zone: 'mixed', category: 'Waste',
    type: 'slider', min: 0, max: 100, step: 5, default: 75, unit: '%',
    objective: 0.95,
    axes: { L: 0.3, S: 0.35, R: 0.15, C: 0.0, E: 0.2, Ec: 0.0 }
  },
  {
    id: 'recycling_rate', label: 'Recycling / Composting Rate',
    description: 'Percentage of waste diverted from landfill',
    theme: 'infra', zone: 'mixed', category: 'Waste',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
    objective: 0.8,
    axes: { L: 0.1, S: 0.55, R: 0.15, C: 0.0, E: 0.1, Ec: 0.1 }
  },

  {
    id: 'internet_coverage', label: 'Broadband / 5G Coverage',
    description: 'Population with access to high-speed internet',
    theme: 'infra', zone: 'mixed', category: 'Digital',
    type: 'slider', min: 0, max: 100, step: 5, default: 70, unit: '%',
    objective: 0.9,
    axes: { L: 0.2, S: 0.0, R: 0.2, C: 0.45, E: 0.15, Ec: 0.2 }
  },
  {
    id: 'smart_grid', label: 'Smart Grid Infrastructure',
    description: 'Digital monitoring and optimisation of utilities grid',
    theme: 'infra', zone: 'mixed', category: 'Digital',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
    objective: 0.6,
    axes: { L: 0.05, S: 0.3, R: 0.35, C: 0.2, E: 0.05, Ec: 0.05 }
  },
  {
    id: 'emergency_infra', label: 'Emergency Service Coverage',
    description: 'Response time and coverage of emergency services',
    theme: 'infra', zone: 'mixed', category: 'Safety Infrastructure',
    type: 'slider', min: 0, max: 100, step: 5, default: 70, unit: '%',
    objective: 1.0,
    axes: { L: 0.25, S: 0.0, R: 0.5, C: 0.1, E: 0.2, Ec: 0.0 }
  },
  {
    id: 'flood_infra', label: 'Flood Defence Infrastructure',
    description: 'Levees, barriers, and drainage to manage flood risk',
    theme: 'infra', zone: 'mixed', category: 'Safety Infrastructure',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.8,
    axes: { L: 0.1, S: 0.15, R: 0.6, C: 0.0, E: 0.15, Ec: 0.0 }
  },

  // ───────────────────────────────────────────────
  // SOCIAL SERVICES
  // ───────────────────────────────────────────────
  {
    id: 'school_coverage', label: 'School Coverage',
    description: 'Percentage of children within 800m of a quality school',
    theme: 'social', zone: 'civic', category: 'Education',
    type: 'slider', min: 0, max: 100, step: 5, default: 80, unit: '%',
    objective: 1.0,
    axes: { L: 0.25, S: 0.0, R: 0.15, C: 0.1, E: 0.5, Ec: 0.1 }
  },
  {
    id: 'university_access', label: 'Higher Education Access',
    description: 'Access to universities, colleges, and vocational training',
    theme: 'social', zone: 'civic', category: 'Education',
    type: 'slider', min: 0, max: 100, step: 5, default: 65, unit: '',
    objective: 0.8,
    axes: { L: 0.2, S: 0.0, R: 0.15, C: 0.15, E: 0.35, Ec: 0.35 }
  },
  {
    id: 'library_coverage', label: 'Library / Learning Centres',
    description: 'Public library and community learning centre provision',
    theme: 'social', zone: 'civic', category: 'Education',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
    objective: 0.75,
    axes: { L: 0.3, S: 0.0, R: 0.1, C: 0.15, E: 0.45, Ec: 0.0 }
  },
  {
    id: 'digital_inclusion', label: 'Digital Inclusion Programs',
    description: 'Training and device access programs for digitally excluded residents',
    theme: 'social', zone: 'civic', category: 'Education',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.7,
    axes: { L: 0.15, S: 0.0, R: 0.15, C: 0.3, E: 0.5, Ec: 0.1 }
  },

  {
    id: 'healthcare_primary', label: 'Primary Healthcare Coverage',
    description: 'Population within 1km of a primary healthcare facility',
    theme: 'social', zone: 'civic', category: 'Healthcare',
    type: 'slider', min: 0, max: 100, step: 5, default: 75, unit: '%',
    objective: 1.0,
    axes: { L: 0.3, S: 0.0, R: 0.2, C: 0.1, E: 0.45, Ec: 0.0 }
  },
  {
    id: 'hospital_access', label: 'Hospital / Emergency Access',
    description: 'Population within 10 minutes of a hospital by any mode',
    theme: 'social', zone: 'civic', category: 'Healthcare',
    type: 'slider', min: 0, max: 100, step: 5, default: 70, unit: '%',
    objective: 1.0,
    axes: { L: 0.25, S: 0.0, R: 0.3, C: 0.15, E: 0.35, Ec: 0.0 }
  },
  {
    id: 'mental_health', label: 'Mental Health Services',
    description: 'Community mental health provision per capita',
    theme: 'social', zone: 'civic', category: 'Healthcare',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.85,
    axes: { L: 0.3, S: 0.0, R: 0.15, C: 0.1, E: 0.5, Ec: 0.0 }
  },

  {
    id: 'childcare', label: 'Childcare Provision',
    description: 'Availability of affordable childcare and early years facilities',
    theme: 'social', zone: 'civic', category: 'Family Services',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.85,
    axes: { L: 0.25, S: 0.0, R: 0.15, C: 0.1, E: 0.5, Ec: 0.1 }
  },
  {
    id: 'elderly_care', label: 'Elderly Care Services',
    description: 'Day centres, home care, and assisted living provision',
    theme: 'social', zone: 'civic', category: 'Family Services',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.85,
    axes: { L: 0.25, S: 0.0, R: 0.15, C: 0.05, E: 0.55, Ec: 0.0 }
  },
  {
    id: 'youth_programs', label: 'Youth Programs',
    description: 'After-school, sports, arts, and employment programs for youth',
    theme: 'social', zone: 'civic', category: 'Family Services',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.75,
    axes: { L: 0.3, S: 0.0, R: 0.15, C: 0.1, E: 0.45, Ec: 0.1 }
  },

  {
    id: 'community_centres', label: 'Community Centres',
    description: 'Multi-purpose community halls and neighbourhood meeting places',
    theme: 'social', zone: 'civic', category: 'Community',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.75,
    axes: { L: 0.35, S: 0.0, R: 0.15, C: 0.15, E: 0.35, Ec: 0.0 }
  },
  {
    id: 'immigrant_services', label: 'Immigrant & Refugee Services',
    description: 'Integration services, legal aid, and language support',
    theme: 'social', zone: 'civic', category: 'Community',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.7,
    axes: { L: 0.2, S: 0.0, R: 0.2, C: 0.15, E: 0.55, Ec: 0.1 }
  },
  {
    id: 'disability_services', label: 'Disability Support Services',
    description: 'Specialist disability support, therapy, and workplace integration',
    theme: 'social', zone: 'civic', category: 'Community',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.85,
    axes: { L: 0.2, S: 0.0, R: 0.1, C: 0.1, E: 0.65, Ec: 0.0 }
  },
  {
    id: 'safety_services', label: 'Public Safety Services',
    description: 'Community policing, CCTV, and crime prevention programs',
    theme: 'social', zone: 'civic', category: 'Community',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
    objective: 0.9,
    axes: { L: 0.4, S: 0.0, R: 0.3, C: 0.1, E: 0.2, Ec: 0.0 }
  },

  // ───────────────────────────────────────────────
  // ENVIRONMENTAL RESILIENCE
  // ───────────────────────────────────────────────
  {
    id: 'climate_adaptation', label: 'Climate Adaptation Measures',
    description: 'Integrated strategy and investment for climate change adaptation',
    theme: 'resilience', zone: 'mixed', category: 'Climate',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.9,
    axes: { L: 0.15, S: 0.2, R: 0.5, C: 0.0, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'heat_island', label: 'Heat Island Mitigation',
    description: 'Measures reducing urban heat island effect (albedo, trees, water)',
    theme: 'resilience', zone: 'mixed', category: 'Climate',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.8,
    axes: { L: 0.3, S: 0.3, R: 0.3, C: 0.0, E: 0.1, Ec: 0.0 }
  },
  {
    id: 'flood_risk', label: 'Flood Risk Management',
    description: 'Strategic planning and mapping to reduce flood risk exposure',
    theme: 'resilience', zone: 'mixed', category: 'Climate',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.85,
    axes: { L: 0.15, S: 0.15, R: 0.55, C: 0.0, E: 0.15, Ec: 0.0 }
  },
  {
    id: 'seismic_resilience', label: 'Seismic Resilience',
    description: 'Building codes and retrofitting for earthquake resistance',
    theme: 'resilience', zone: 'mixed', category: 'Climate',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.75,
    axes: { L: 0.1, S: 0.0, R: 0.65, C: 0.0, E: 0.15, Ec: 0.1 }
  },
  {
    id: 'drought_resilience', label: 'Drought Management',
    description: 'Water conservation and drought response preparedness',
    theme: 'resilience', zone: 'mixed', category: 'Climate',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.7,
    axes: { L: 0.1, S: 0.3, R: 0.5, C: 0.0, E: 0.15, Ec: 0.0 }
  },

  {
    id: 'air_quality', label: 'Air Quality Management',
    description: 'Policies and monitoring to maintain clean air standards',
    theme: 'resilience', zone: 'mixed', category: 'Pollution',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
    objective: 0.95,
    axes: { L: 0.4, S: 0.3, R: 0.15, C: 0.05, E: 0.15, Ec: 0.0 }
  },
  {
    id: 'noise_management', label: 'Noise Pollution Management',
    description: 'Policies and design to reduce urban noise exposure',
    theme: 'resilience', zone: 'mixed', category: 'Pollution',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.75,
    axes: { L: 0.5, S: 0.1, R: 0.1, C: 0.0, E: 0.2, Ec: 0.1 }
  },
  {
    id: 'carbon_footprint', label: 'Carbon Footprint Target',
    description: 'Per capita CO₂ emission reduction target from baseline',
    theme: 'resilience', zone: 'mixed', category: 'Pollution',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.9,
    axes: { L: 0.1, S: 0.55, R: 0.2, C: 0.0, E: 0.1, Ec: 0.05 }
  },

  {
    id: 'food_security', label: 'Local Food Security',
    description: 'Resilience of local food supply chains and production',
    theme: 'resilience', zone: 'green', category: 'Resource Security',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.8,
    axes: { L: 0.25, S: 0.2, R: 0.35, C: 0.0, E: 0.2, Ec: 0.1 }
  },
  {
    id: 'water_security', label: 'Water Security Measures',
    description: 'Long-term security of water supply under various scenarios',
    theme: 'resilience', zone: 'mixed', category: 'Resource Security',
    type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
    objective: 0.9,
    axes: { L: 0.2, S: 0.2, R: 0.45, C: 0.0, E: 0.15, Ec: 0.0 }
  },
  {
    id: 'energy_security', label: 'Energy Security',
    description: 'Diversity and reliability of energy supply and storage',
    theme: 'resilience', zone: 'mixed', category: 'Resource Security',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.9,
    axes: { L: 0.1, S: 0.25, R: 0.5, C: 0.0, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'ecological_corridors', label: 'Ecological Corridors',
    description: 'Connected green networks allowing wildlife movement through city',
    theme: 'resilience', zone: 'green', category: 'Resource Security',
    type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
    objective: 0.65,
    axes: { L: 0.15, S: 0.5, R: 0.25, C: 0.0, E: 0.1, Ec: 0.0 }
  },

  // ───────────────────────────────────────────────
  // GOVERNANCE & CULTURE
  // ───────────────────────────────────────────────
  {
    id: 'participatory_planning', label: 'Participatory Planning',
    description: 'Depth of community involvement in planning decisions',
    theme: 'governance', zone: 'civic', category: 'Planning',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.8,
    axes: { L: 0.2, S: 0.05, R: 0.2, C: 0.15, E: 0.45, Ec: 0.1 }
  },
  {
    id: 'zoning_flexibility', label: 'Zoning Flexibility',
    description: 'Ability of zoning regulations to adapt to changing needs',
    theme: 'governance', zone: 'mixed', category: 'Planning',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.7,
    axes: { L: 0.15, S: 0.1, R: 0.25, C: 0.1, E: 0.15, Ec: 0.35 }
  },
  {
    id: 'heritage_preservation', label: 'Heritage Preservation',
    description: 'Protection of historic buildings, districts, and cultural memory',
    theme: 'governance', zone: 'civic', category: 'Planning',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.6,
    axes: { L: 0.3, S: 0.15, R: 0.1, C: 0.05, E: 0.2, Ec: 0.2 }
  },
  {
    id: 'local_governance', label: 'Local / Neighbourhood Governance',
    description: 'Devolution of decision-making to neighbourhood councils',
    theme: 'governance', zone: 'civic', category: 'Planning',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.65,
    axes: { L: 0.2, S: 0.05, R: 0.2, C: 0.15, E: 0.45, Ec: 0.1 }
  },

  {
    id: 'cultural_identity', label: 'Local Cultural Identity',
    description: 'Strength of policies supporting local culture and identity',
    theme: 'governance', zone: 'civic', category: 'Culture',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.6,
    axes: { L: 0.3, S: 0.0, R: 0.15, C: 0.1, E: 0.3, Ec: 0.15 }
  },
  {
    id: 'diversity_inclusion', label: 'Diversity & Inclusion Policy',
    description: 'Active policies promoting social diversity and inclusion',
    theme: 'governance', zone: 'civic', category: 'Culture',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.75,
    axes: { L: 0.2, S: 0.0, R: 0.15, C: 0.1, E: 0.55, Ec: 0.1 }
  },
  {
    id: 'religious_facilities', label: 'Places of Worship',
    description: 'Provision of space for diverse faith and spiritual communities',
    theme: 'governance', zone: 'civic', category: 'Culture',
    type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
    objective: 0.5,
    axes: { L: 0.2, S: 0.0, R: 0.1, C: 0.1, E: 0.5, Ec: 0.1 }
  },
  {
    id: 'language_services', label: 'Multi-Language Services',
    description: 'Availability of key services in multiple community languages',
    theme: 'governance', zone: 'civic', category: 'Culture',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.65,
    axes: { L: 0.2, S: 0.0, R: 0.1, C: 0.15, E: 0.55, Ec: 0.1 }
  },

  {
    id: 'transparency', label: 'Government Transparency',
    description: 'Openness of city data, decisions, and budget processes',
    theme: 'governance', zone: 'civic', category: 'Policy',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.75,
    axes: { L: 0.15, S: 0.05, R: 0.2, C: 0.15, E: 0.4, Ec: 0.05 }
  },
  {
    id: 'data_governance', label: 'City Data Governance',
    description: 'Ethical governance of city data, privacy, and smart systems',
    theme: 'governance', zone: 'civic', category: 'Policy',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.65,
    axes: { L: 0.1, S: 0.0, R: 0.2, C: 0.3, E: 0.35, Ec: 0.05 }
  },
  {
    id: 'sustainability_policy', label: 'Sustainability Policy Strength',
    description: 'Binding commitments and enforcement of environmental policy',
    theme: 'governance', zone: 'civic', category: 'Policy',
    type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
    objective: 0.85,
    axes: { L: 0.1, S: 0.5, R: 0.25, C: 0.0, E: 0.1, Ec: 0.05 }
  },
  {
    id: 'innovation_policy', label: 'Innovation-Friendly Policy',
    description: 'Regulatory sandbox, pilot programs, and innovation incentives',
    theme: 'governance', zone: 'civic', category: 'Policy',
    type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
    objective: 0.5,
    axes: { L: 0.1, S: 0.05, R: 0.15, C: 0.2, E: 0.1, Ec: 0.5 }
  },
  {
    id: 'international_links', label: 'International Connectivity',
    description: 'Trade, cultural, and diplomatic links with other cities/nations',
    theme: 'governance', zone: 'civic', category: 'Policy',
    type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
    objective: 0.45,
    axes: { L: 0.1, S: 0.0, R: 0.15, C: 0.35, E: 0.1, Ec: 0.4 }
  },
]
