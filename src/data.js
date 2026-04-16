// ─────────────────────────────────────────────────────────────────
// data.js  —  World builder data: city types, 12 themes × 8 inputs,
//             influence matrix, and auto-configuration engine
// ─────────────────────────────────────────────────────────────────

export const AXES = [
  { id: 'L',  label: 'Livability',     color: '#66BB6A', desc: 'Quality of daily life, comfort, amenities' },
  { id: 'S',  label: 'Sustainability', color: '#26C6DA', desc: 'Environmental impact, resources, emissions' },
  { id: 'R',  label: 'Resilience',     color: '#FFA726', desc: 'Climate adaptation, redundancy, durability' },
  { id: 'C',  label: 'Connectivity',   color: '#42A5F5', desc: 'Transport networks, digital, social links' },
  { id: 'E',  label: 'Equity',         color: '#EC407A', desc: 'Access, affordability, inclusion for all' },
  { id: 'Ec', label: 'Economy',        color: '#AB47BC', desc: 'Productivity, diversity, opportunity' },
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

// ─── City Types ───────────────────────────────────────────────────
// Each type defines base adjustments (±points from 50) for each theme.
export const CITY_TYPES = [
  {
    id: 'port',
    name: 'Port City',
    emoji: '⚓',
    description: 'A bustling maritime hub where trade routes meet city life',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #0d2137 60%, #071520 100%)',
    adjustments: { mobility: 10, governance: 5, ecology: -10, housing: 0, economy: 15, infrastructure: 10, healthcare: 0, education: 0, energy: 0, food: 5, digital: 5, community: 0 },
  },
  {
    id: 'landlocked',
    name: 'Landlocked City',
    emoji: '🏔',
    description: 'Self-reliant and connected by land, forging its own path inland',
    gradient: 'linear-gradient(135deg, #2d3a1a 0%, #1a2410 60%, #101709 100%)',
    adjustments: { mobility: -5, governance: 0, ecology: 10, housing: 0, economy: -5, infrastructure: 5, healthcare: 0, education: 5, energy: 5, food: 10, digital: -5, community: 5 },
  },
  {
    id: 'coastal',
    name: 'Coastal City',
    emoji: '🏖',
    description: 'Sun, sea, and city culture merge in a vibrant shoreline settlement',
    gradient: 'linear-gradient(135deg, #1a3545 0%, #0e2030 60%, #071520 100%)',
    adjustments: { mobility: 5, governance: 0, ecology: -5, housing: -5, economy: 10, infrastructure: 5, healthcare: 5, education: 0, energy: 10, food: 5, digital: 0, community: 5 },
  },
  {
    id: 'river_delta',
    name: 'River Delta',
    emoji: '🌊',
    description: 'A city shaped by water, fertile land, and extraordinary biodiversity',
    gradient: 'linear-gradient(135deg, #1a3530 0%, #0e2520 60%, #071510 100%)',
    adjustments: { mobility: 0, governance: 5, ecology: 10, housing: -5, economy: 0, infrastructure: -10, healthcare: 5, education: 0, energy: 0, food: 15, digital: -5, community: 5 },
  },
  {
    id: 'mountain',
    name: 'Mountain City',
    emoji: '⛰',
    description: 'Elevated living amid dramatic terrain, pure air, and pristine wilderness',
    gradient: 'linear-gradient(135deg, #2a2a3a 0%, #1a1a28 60%, #101018 100%)',
    adjustments: { mobility: -10, governance: 0, ecology: 15, housing: -5, economy: 0, infrastructure: -10, healthcare: 0, education: 5, energy: 10, food: 5, digital: -5, community: 5 },
  },
  {
    id: 'desert',
    name: 'Desert City',
    emoji: '🌅',
    description: 'Thriving against the odds in an arid landscape of extremes and solar abundance',
    gradient: 'linear-gradient(135deg, #3a2a10 0%, #251a08 60%, #150f04 100%)',
    adjustments: { mobility: 0, governance: 5, ecology: -15, housing: 5, economy: 5, infrastructure: -5, healthcare: -5, education: 0, energy: 15, food: -15, digital: 5, community: -5 },
  },
  {
    id: 'forest',
    name: 'Forest City',
    emoji: '🌲',
    description: 'Woven into ancient woodlands, this city breathes and grows with nature',
    gradient: 'linear-gradient(135deg, #1a3020 0%, #0e2010 60%, #071008 100%)',
    adjustments: { mobility: -5, governance: 0, ecology: 20, housing: 0, economy: -5, infrastructure: -5, healthcare: 5, education: 5, energy: 5, food: 10, digital: -5, community: 10 },
  },
  {
    id: 'island',
    name: 'Island City',
    emoji: '🏝',
    description: 'An isolated world unto itself — self-sufficient, tight-knit, sea-surrounded',
    gradient: 'linear-gradient(135deg, #1a3545 0%, #0e2535 60%, #071525 100%)',
    adjustments: { mobility: -5, governance: 5, ecology: 10, housing: 0, economy: 5, infrastructure: -10, healthcare: 0, education: 0, energy: -5, food: 10, digital: -10, community: 10 },
  },
  {
    id: 'prairie',
    name: 'Prairie City',
    emoji: '🌾',
    description: 'Sprawling across fertile plains — the agricultural heartland of the region',
    gradient: 'linear-gradient(135deg, #2a2a10 0%, #1a1a08 60%, #0f0f04 100%)',
    adjustments: { mobility: -10, governance: 0, ecology: -5, housing: -5, economy: 5, infrastructure: 5, healthcare: -5, education: 0, energy: 10, food: 15, digital: -5, community: -5 },
  },
  {
    id: 'geothermal',
    name: 'Volcanic City',
    emoji: '🌋',
    description: 'Born from the earth\'s fury — powered by geothermal energy and volcanic soil',
    gradient: 'linear-gradient(135deg, #3a1a10 0%, #250f08 60%, #150704 100%)',
    adjustments: { mobility: 0, governance: 5, ecology: -5, housing: 0, economy: 5, infrastructure: -5, healthcare: 0, education: 0, energy: 20, food: 5, digital: 0, community: 5 },
  },
]

// ─── 12 Themes × 8 Inputs ─────────────────────────────────────────
export const THEMES = [
  {
    id: 'mobility',
    name: 'Mobility',
    icon: '🚇',
    color: '#4FC3F7',
    description: 'Design how people move — cycling lanes, metro networks, and pedestrian-first streets',
    inputs: [
      {
        id: 'pedestrian_priority', label: 'Pedestrian Street Priority',
        description: 'Proportion of streets designed with pedestrians first — car-free zones, wide footpaths',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '%',
        objective: 0.85,
        axes: { L: 0.40, S: 0.20, R: 0.10, C: 0.20, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'cycling_coverage', label: 'Cycling Network Coverage',
        description: 'Percentage of streets with protected, separated cycling infrastructure',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
        objective: 0.80,
        axes: { L: 0.25, S: 0.30, R: 0.15, C: 0.25, E: 0.15, Ec: 0.10 },
      },
      {
        id: 'transit_frequency', label: 'Bus/Tram Frequency',
        description: 'Average number of services per hour at a typical stop during peak hours',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: 'svc/hr',
        objective: 0.90,
        axes: { L: 0.30, S: 0.15, R: 0.15, C: 0.30, E: 0.20, Ec: 0.10 },
      },
      {
        id: 'rail_connectivity', label: 'Metro/Rail Connectivity',
        description: 'Extent and density of heavy rail and metro infrastructure across the city',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
        objective: 0.75,
        axes: { L: 0.25, S: 0.15, R: 0.15, C: 0.35, E: 0.15, Ec: 0.20 },
      },
      {
        id: 'parking_reduction', label: 'Parking Minimums (Low = Better)',
        description: 'Lower parking minimums push development to prioritize active and transit modes',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
        objective: 0.60,
        axes: { L: 0.15, S: 0.30, R: 0.05, C: 0.15, E: 0.15, Ec: 0.05 },
      },
      {
        id: 'ev_infrastructure', label: 'EV Charging Coverage',
        description: 'Percentage of public spaces and residential areas with EV charging points',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
        objective: 0.65,
        axes: { L: 0.10, S: 0.35, R: 0.15, C: 0.20, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'road_safety', label: 'Road Safety Index',
        description: 'Effectiveness of traffic calming, speed limits, and safe crossing infrastructure',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.80,
        axes: { L: 0.35, S: 0.10, R: 0.15, C: 0.15, E: 0.20, Ec: 0.05 },
      },
      {
        id: 'shared_mobility', label: 'Shared Mobility Programs',
        description: 'Availability and quality of bike-share, car-share, and on-demand transit',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
        objective: 0.60,
        axes: { L: 0.25, S: 0.25, R: 0.10, C: 0.30, E: 0.20, Ec: 0.10 },
      },
    ],
  },

  {
    id: 'governance',
    name: 'Governance',
    icon: '🏛',
    color: '#90A4AE',
    description: 'Shape how your city is managed — civic participation, transparency, and smart policy',
    inputs: [
      {
        id: 'civic_participation', label: 'Civic Participation Rate',
        description: 'Percentage of adults involved in local decision-making and city planning',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '%',
        objective: 0.80,
        axes: { L: 0.20, S: 0.05, R: 0.20, C: 0.15, E: 0.45, Ec: 0.10 },
      },
      {
        id: 'gov_transparency', label: 'Government Transparency',
        description: 'Openness of city data, budgets, and decision-making processes to the public',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.75,
        axes: { L: 0.15, S: 0.05, R: 0.20, C: 0.15, E: 0.40, Ec: 0.05 },
      },
      {
        id: 'planning_responsiveness', label: 'Planning Responsiveness',
        description: 'Speed and quality of planning approvals, permit processes, and zoning decisions',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.70,
        axes: { L: 0.15, S: 0.10, R: 0.25, C: 0.10, E: 0.15, Ec: 0.35 },
      },
      {
        id: 'anti_corruption', label: 'Anti-Corruption Measures',
        description: 'Strength of oversight bodies, whistleblower protections, and accountability systems',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
        objective: 0.85,
        axes: { L: 0.20, S: 0.05, R: 0.25, C: 0.05, E: 0.35, Ec: 0.15 },
      },
      {
        id: 'decentralization', label: 'Decentralization Level',
        description: 'Degree to which districts and neighborhoods have autonomous governance power',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.65,
        axes: { L: 0.20, S: 0.05, R: 0.20, C: 0.15, E: 0.45, Ec: 0.10 },
      },
      {
        id: 'social_budget', label: 'Social Services Budget',
        description: 'Percentage of city budget allocated to social welfare, housing, and public services',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.85,
        axes: { L: 0.25, S: 0.05, R: 0.15, C: 0.05, E: 0.55, Ec: 0.00 },
      },
      {
        id: 'emergency_capacity', label: 'Emergency Response Capacity',
        description: 'Number of emergency service units per 10,000 residents; response time index',
        type: 'slider', min: 0, max: 100, step: 5, default: 65, unit: '',
        objective: 1.00,
        axes: { L: 0.25, S: 0.00, R: 0.50, C: 0.10, E: 0.20, Ec: 0.00 },
      },
      {
        id: 'digital_gov', label: 'Digital Government Services',
        description: 'Percentage of city services available online — permits, payments, civic engagement',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
        objective: 0.70,
        axes: { L: 0.15, S: 0.00, R: 0.20, C: 0.35, E: 0.25, Ec: 0.10 },
      },
    ],
  },

  {
    id: 'ecology',
    name: 'Ecology',
    icon: '🌿',
    color: '#81C784',
    description: 'Craft the natural systems — from biodiversity corridors to urban forests and clean air',
    inputs: [
      {
        id: 'green_coverage', label: 'Urban Green Coverage',
        description: 'Percentage of city land designated as parks, forests, nature reserves, or green space',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '%',
        objective: 0.90,
        axes: { L: 0.40, S: 0.25, R: 0.20, C: 0.05, E: 0.15, Ec: 0.05 },
      },
      {
        id: 'biodiversity', label: 'Biodiversity Index',
        description: 'Percentage of native species preserved and thriving in urban ecosystems',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.70,
        axes: { L: 0.20, S: 0.45, R: 0.25, C: 0.05, E: 0.10, Ec: 0.00 },
      },
      {
        id: 'air_quality_mgmt', label: 'Air Quality Management',
        description: 'Effectiveness of policies and infrastructure to reduce PM2.5 and pollutant levels',
        type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
        objective: 0.95,
        axes: { L: 0.40, S: 0.30, R: 0.15, C: 0.05, E: 0.15, Ec: 0.00 },
      },
      {
        id: 'water_preservation', label: 'Water Body Preservation',
        description: 'Percentage of rivers, lakes, wetlands, and aquifers left intact and protected',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
        objective: 0.75,
        axes: { L: 0.20, S: 0.40, R: 0.35, C: 0.00, E: 0.10, Ec: 0.00 },
      },
      {
        id: 'heat_mitigation', label: 'Heat Island Mitigation',
        description: 'Cool surfaces, reflective materials, tree canopy, and water features reducing UHI',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.80,
        axes: { L: 0.30, S: 0.30, R: 0.30, C: 0.00, E: 0.10, Ec: 0.00 },
      },
      {
        id: 'carbon_sequestration', label: 'Carbon Sequestration',
        description: 'Trees and vegetation per 1,000 residents; urban forest carbon sink capacity',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
        objective: 0.75,
        axes: { L: 0.15, S: 0.50, R: 0.20, C: 0.00, E: 0.10, Ec: 0.05 },
      },
      {
        id: 'urban_farming_eco', label: 'Urban Farming Integration',
        description: 'Percentage of suitable city land used for food production and urban agriculture',
        type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
        objective: 0.55,
        axes: { L: 0.20, S: 0.35, R: 0.25, C: 0.00, E: 0.20, Ec: 0.10 },
      },
      {
        id: 'wildlife_corridors', label: 'Wildlife Corridor Network',
        description: 'Percentage of green areas connected to allow wildlife movement through the city',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
        objective: 0.65,
        axes: { L: 0.15, S: 0.50, R: 0.25, C: 0.00, E: 0.10, Ec: 0.00 },
      },
    ],
  },

  {
    id: 'housing',
    name: 'Housing',
    icon: '🏘',
    color: '#FF8A65',
    description: 'Build where people live — affordability, density, inclusive design, and adaptive reuse',
    inputs: [
      {
        id: 'affordable_ratio', label: 'Affordable Housing Ratio',
        description: 'Percentage of housing units affordable to households at median income',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.90,
        axes: { L: 0.30, S: 0.00, R: 0.10, C: 0.00, E: 0.55, Ec: 0.15 },
      },
      {
        id: 'mixed_income', label: 'Mixed-Income Neighborhoods',
        description: 'Income diversity index — degree to which affluent and low-income residents live together',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.75,
        axes: { L: 0.30, S: 0.05, R: 0.20, C: 0.00, E: 0.45, Ec: 0.10 },
      },
      {
        id: 'housing_density', label: 'Housing Density',
        description: 'Dwelling units per hectare in residential zones — determines city compactness',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: 'u/ha',
        objective: 0.90,
        axes: { L: 0.25, S: 0.10, R: 0.10, C: 0.15, E: 0.20, Ec: 0.30 },
      },
      {
        id: 'building_efficiency', label: 'Building Energy Efficiency',
        description: 'Percentage of building stock meeting green energy standards (insulation, passive design)',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '%',
        objective: 0.80,
        axes: { L: 0.15, S: 0.45, R: 0.20, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'homeless_support', label: 'Homeless Support Infrastructure',
        description: 'Emergency shelter capacity and transitional housing per 10,000 residents',
        type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '',
        objective: 0.85,
        axes: { L: 0.15, S: 0.00, R: 0.30, C: 0.00, E: 0.65, Ec: 0.00 },
      },
      {
        id: 'tenure_security', label: 'Tenure Security',
        description: 'Percentage of renters and occupants with strong legal tenure protections',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '%',
        objective: 0.80,
        axes: { L: 0.20, S: 0.00, R: 0.20, C: 0.00, E: 0.55, Ec: 0.15 },
      },
      {
        id: 'housing_reuse', label: 'Adaptive Reuse Priority',
        description: 'Preference for converting and retrofitting existing buildings over demolition',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.60,
        axes: { L: 0.15, S: 0.35, R: 0.20, C: 0.00, E: 0.15, Ec: 0.20 },
      },
      {
        id: 'accessible_housing', label: 'Accessible Housing',
        description: 'Percentage of housing units fully accessible to people with disabilities',
        type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
        objective: 0.85,
        axes: { L: 0.20, S: 0.00, R: 0.10, C: 0.00, E: 0.70, Ec: 0.00 },
      },
    ],
  },

  {
    id: 'economy',
    name: 'Economy',
    icon: '🏙',
    color: '#CE93D8',
    description: 'Drive prosperity — innovation hubs, local markets, living wages, and economic diversity',
    inputs: [
      {
        id: 'local_biz_support', label: 'Small Business Support',
        description: 'Policies and spaces favouring independent, local businesses over chains and franchises',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.70,
        axes: { L: 0.25, S: 0.10, R: 0.20, C: 0.10, E: 0.20, Ec: 0.35 },
      },
      {
        id: 'innovation_hubs', label: 'Innovation Hub Density',
        description: 'Concentration of tech startups, research institutions, and innovation clusters',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
        objective: 0.60,
        axes: { L: 0.10, S: 0.05, R: 0.15, C: 0.20, E: 0.10, Ec: 0.55 },
      },
      {
        id: 'living_wage', label: 'Living Wage Coverage',
        description: 'Percentage of workers in the city earning at or above a true living wage',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '%',
        objective: 0.90,
        axes: { L: 0.25, S: 0.00, R: 0.15, C: 0.00, E: 0.45, Ec: 0.25 },
      },
      {
        id: 'local_supply', label: 'Local Supply Chain',
        description: 'Percentage of goods and materials sourced from within 100km of the city',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
        objective: 0.65,
        axes: { L: 0.15, S: 0.30, R: 0.35, C: 0.10, E: 0.15, Ec: 0.20 },
      },
      {
        id: 'economic_diversity', label: 'Economic Diversity Index',
        description: 'Number of distinct major industries — prevents over-reliance on single sectors',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.80,
        axes: { L: 0.10, S: 0.05, R: 0.35, C: 0.10, E: 0.15, Ec: 0.50 },
      },
      {
        id: 'informal_integration', label: 'Informal Economy Integration',
        description: 'Legal recognition, support, and spaces for street vendors and informal workers',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
        objective: 0.60,
        axes: { L: 0.20, S: 0.05, R: 0.15, C: 0.10, E: 0.35, Ec: 0.25 },
      },
      {
        id: 'financial_inclusion', label: 'Financial Inclusion',
        description: 'Percentage of residents with access to basic banking and financial services',
        type: 'slider', min: 0, max: 100, step: 5, default: 65, unit: '%',
        objective: 0.75,
        axes: { L: 0.15, S: 0.00, R: 0.20, C: 0.10, E: 0.40, Ec: 0.30 },
      },
      {
        id: 'night_economy', label: 'Night Economy Vibrancy',
        description: 'Provisions for safe, active, and diverse economic activity after dark',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.50,
        axes: { L: 0.35, S: 0.00, R: 0.10, C: 0.15, E: 0.10, Ec: 0.40 },
      },
    ],
  },

  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: '⚡',
    color: '#4DD0E1',
    description: 'Power the essentials — water, energy, waste, broadband, and flood defence',
    inputs: [
      {
        id: 'water_reliability', label: 'Water Supply Reliability',
        description: 'Percentage uptime and quality reliability of potable water across the city',
        type: 'slider', min: 0, max: 100, step: 5, default: 80, unit: '%',
        objective: 1.00,
        axes: { L: 0.30, S: 0.15, R: 0.35, C: 0.00, E: 0.25, Ec: 0.10 },
      },
      {
        id: 'renewable_share', label: 'Renewable Energy Share',
        description: 'Percentage of the city\'s total energy demand met by renewable sources',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.90,
        axes: { L: 0.10, S: 0.50, R: 0.25, C: 0.00, E: 0.10, Ec: 0.05 },
      },
      {
        id: 'waste_diversion', label: 'Waste Diversion Rate',
        description: 'Percentage of generated waste diverted from landfill via recycling and composting',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
        objective: 0.80,
        axes: { L: 0.10, S: 0.55, R: 0.15, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'broadband_infra', label: 'Broadband Coverage',
        description: 'Percentage of households with access to high-speed broadband or fibre internet',
        type: 'slider', min: 0, max: 100, step: 5, default: 70, unit: '%',
        objective: 0.90,
        axes: { L: 0.20, S: 0.00, R: 0.20, C: 0.45, E: 0.15, Ec: 0.15 },
      },
      {
        id: 'stormwater_mgmt', label: 'Stormwater Management',
        description: 'Capacity of green infrastructure and drainage to manage extreme rainfall events',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.85,
        axes: { L: 0.15, S: 0.30, R: 0.45, C: 0.00, E: 0.10, Ec: 0.00 },
      },
      {
        id: 'infra_maintenance', label: 'Infrastructure Maintenance Budget',
        description: 'Annual spending as a percentage of total infrastructure replacement cost',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
        objective: 0.85,
        axes: { L: 0.20, S: 0.10, R: 0.50, C: 0.10, E: 0.10, Ec: 0.00 },
      },
      {
        id: 'smart_grid_int', label: 'Smart Grid Integration',
        description: 'Percentage of utility grid equipped with smart meters and real-time management',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
        objective: 0.65,
        axes: { L: 0.05, S: 0.30, R: 0.35, C: 0.20, E: 0.05, Ec: 0.05 },
      },
      {
        id: 'flood_defense', label: 'Flood Defence Infrastructure',
        description: 'Quality of levees, barriers, and natural flood management systems',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
        objective: 0.80,
        axes: { L: 0.10, S: 0.15, R: 0.60, C: 0.00, E: 0.15, Ec: 0.00 },
      },
    ],
  },

  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    color: '#F48FB1',
    description: 'Protect wellbeing — primary care networks, mental health, nutrition, and clean air',
    inputs: [
      {
        id: 'hospital_beds', label: 'Hospital Beds per 1,000',
        description: 'Total inpatient hospital bed capacity per 1,000 city residents',
        type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '/1k',
        objective: 0.95,
        axes: { L: 0.25, S: 0.00, R: 0.30, C: 0.10, E: 0.40, Ec: 0.00 },
      },
      {
        id: 'primary_care', label: 'Primary Care Coverage',
        description: 'Percentage of residents living within 1km of a primary healthcare facility',
        type: 'slider', min: 0, max: 100, step: 5, default: 70, unit: '%',
        objective: 1.00,
        axes: { L: 0.30, S: 0.00, R: 0.20, C: 0.10, E: 0.45, Ec: 0.00 },
      },
      {
        id: 'mental_health_access', label: 'Mental Health Services',
        description: 'Community mental health providers per 10,000 residents; service accessibility',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
        objective: 0.85,
        axes: { L: 0.30, S: 0.00, R: 0.15, C: 0.10, E: 0.50, Ec: 0.00 },
      },
      {
        id: 'preventive_health', label: 'Preventive Health Programs',
        description: 'Percentage of the population enrolled in preventive health and screening programs',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
        objective: 0.80,
        axes: { L: 0.35, S: 0.10, R: 0.20, C: 0.10, E: 0.30, Ec: 0.05 },
      },
      {
        id: 'food_security_h', label: 'Food Security Index',
        description: 'Percentage of residents with reliable access to nutritious, affordable food',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '%',
        objective: 0.90,
        axes: { L: 0.30, S: 0.15, R: 0.25, C: 0.00, E: 0.35, Ec: 0.05 },
      },
      {
        id: 'recreation_access', label: 'Sports & Recreation Access',
        description: 'Square metres of sports and recreation facilities per resident',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
        objective: 0.75,
        axes: { L: 0.40, S: 0.05, R: 0.10, C: 0.10, E: 0.30, Ec: 0.05 },
      },
      {
        id: 'noise_control', label: 'Noise Pollution Control',
        description: 'Percentage of residential areas with noise levels below 55dB (WHO standard)',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '%',
        objective: 0.75,
        axes: { L: 0.50, S: 0.10, R: 0.10, C: 0.00, E: 0.20, Ec: 0.10 },
      },
      {
        id: 'health_air_quality', label: 'Air Quality Health Index',
        description: 'Percentage of days meeting WHO air quality guidelines for PM2.5 and NOx',
        type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '%',
        objective: 0.90,
        axes: { L: 0.35, S: 0.30, R: 0.15, C: 0.05, E: 0.15, Ec: 0.00 },
      },
    ],
  },

  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    color: '#FFD54F',
    description: 'Foster knowledge — schools, universities, cultural venues, and youth programs',
    inputs: [
      {
        id: 'school_coverage', label: 'School Coverage',
        description: 'Percentage of school-age children living within 500m of a quality school',
        type: 'slider', min: 0, max: 100, step: 5, default: 75, unit: '%',
        objective: 1.00,
        axes: { L: 0.25, S: 0.00, R: 0.15, C: 0.10, E: 0.50, Ec: 0.10 },
      },
      {
        id: 'higher_ed_access', label: 'Higher Education Access',
        description: 'Universities, colleges, and vocational institutions per 100,000 residents',
        type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '',
        objective: 0.80,
        axes: { L: 0.20, S: 0.00, R: 0.15, C: 0.15, E: 0.35, Ec: 0.35 },
      },
      {
        id: 'cultural_density', label: 'Cultural Venues Density',
        description: 'Museums, theatres, galleries, and cultural centres per square kilometre',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.70,
        axes: { L: 0.40, S: 0.00, R: 0.05, C: 0.10, E: 0.25, Ec: 0.25 },
      },
      {
        id: 'library_network', label: 'Public Library Network',
        description: 'Public library branches and learning centres per 50,000 residents',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.75,
        axes: { L: 0.30, S: 0.00, R: 0.10, C: 0.15, E: 0.45, Ec: 0.00 },
      },
      {
        id: 'digital_literacy', label: 'Digital Literacy Programs',
        description: 'Percentage of adults enrolled in digital skills and technology training programs',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.75,
        axes: { L: 0.15, S: 0.00, R: 0.15, C: 0.30, E: 0.45, Ec: 0.15 },
      },
      {
        id: 'arts_funding', label: 'Arts & Culture Funding',
        description: 'Percentage of city budget allocated to arts, culture, and creative programs',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
        objective: 0.60,
        axes: { L: 0.40, S: 0.00, R: 0.00, C: 0.10, E: 0.30, Ec: 0.20 },
      },
      {
        id: 'multilang_services', label: 'Multi-Language Services',
        description: 'Number of languages in which key city services are officially available',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
        objective: 0.65,
        axes: { L: 0.20, S: 0.00, R: 0.10, C: 0.15, E: 0.55, Ec: 0.10 },
      },
      {
        id: 'youth_programs_ed', label: 'Youth Programs Coverage',
        description: 'Percentage of youth ages 5–18 enrolled in after-school or enrichment programs',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '%',
        objective: 0.75,
        axes: { L: 0.30, S: 0.00, R: 0.15, C: 0.10, E: 0.45, Ec: 0.10 },
      },
    ],
  },

  {
    id: 'energy',
    name: 'Energy',
    icon: '☀️',
    color: '#FFB74D',
    description: 'Harness power — solar, wind, storage, district systems, and carbon reduction',
    inputs: [
      {
        id: 'solar_coverage', label: 'Solar Panel Coverage',
        description: 'Percentage of suitable rooftops and surfaces equipped with solar photovoltaics',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
        objective: 0.75,
        axes: { L: 0.05, S: 0.50, R: 0.25, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'wind_energy', label: 'Wind Energy Harnessing',
        description: 'Percentage of city energy demand met by wind (on- or offshore)',
        type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '%',
        objective: 0.65,
        axes: { L: 0.05, S: 0.50, R: 0.25, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'energy_storage', label: 'Energy Storage Capacity',
        description: 'Grid-scale battery and storage providing city-wide backup power in hours',
        type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: 'hrs',
        objective: 0.70,
        axes: { L: 0.10, S: 0.25, R: 0.50, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'district_energy_sys', label: 'District Heating/Cooling',
        description: 'Percentage of buildings connected to centralised district energy networks',
        type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
        objective: 0.65,
        axes: { L: 0.10, S: 0.40, R: 0.30, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'peak_management', label: 'Peak Demand Management',
        description: 'Reduction in peak electricity demand achieved via smart systems and incentives',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '%',
        objective: 0.70,
        axes: { L: 0.05, S: 0.30, R: 0.35, C: 0.20, E: 0.05, Ec: 0.05 },
      },
      {
        id: 'energy_poverty_red', label: 'Energy Poverty Reduction',
        description: 'Percentage of households spending less than 10% of income on energy',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '%',
        objective: 0.85,
        axes: { L: 0.20, S: 0.10, R: 0.15, C: 0.00, E: 0.50, Ec: 0.10 },
      },
      {
        id: 'retrofit_rate', label: 'Building Retrofitting Rate',
        description: 'Percentage of existing buildings improved for energy efficiency per year',
        type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '%/yr',
        objective: 0.75,
        axes: { L: 0.10, S: 0.45, R: 0.25, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'carbon_target', label: 'Carbon Reduction Target',
        description: 'Ambition of per-capita CO₂ reduction commitment below historical baseline',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.90,
        axes: { L: 0.10, S: 0.55, R: 0.20, C: 0.00, E: 0.10, Ec: 0.05 },
      },
    ],
  },

  {
    id: 'food',
    name: 'Food & Agriculture',
    icon: '🌾',
    color: '#A5D6A7',
    description: 'Nourish the city — urban farming, local markets, food security, and waste reduction',
    inputs: [
      {
        id: 'urban_ag_coverage', label: 'Urban Agriculture Coverage',
        description: 'Percentage of suitable city land used for food production — rooftops, gardens, farms',
        type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '%',
        objective: 0.60,
        axes: { L: 0.20, S: 0.35, R: 0.25, C: 0.00, E: 0.20, Ec: 0.15 },
      },
      {
        id: 'food_market_access', label: 'Local Food Market Access',
        description: 'Percentage of residents within 500m of fresh food markets or grocery stores',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '%',
        objective: 0.85,
        axes: { L: 0.35, S: 0.15, R: 0.20, C: 0.10, E: 0.30, Ec: 0.10 },
      },
      {
        id: 'community_gardens_f', label: 'Community Garden Density',
        description: 'Shared growing spaces per 10,000 residents — social cohesion and food access',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '',
        objective: 0.60,
        axes: { L: 0.30, S: 0.25, R: 0.20, C: 0.05, E: 0.30, Ec: 0.00 },
      },
      {
        id: 'food_waste_red', label: 'Food Waste Reduction',
        description: 'Percentage of food waste composted, redirected to food banks, or eliminated',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.75,
        axes: { L: 0.10, S: 0.55, R: 0.20, C: 0.00, E: 0.10, Ec: 0.10 },
      },
      {
        id: 'farming_tech', label: 'Urban Farming Technology',
        description: 'Percentage of urban farms using vertical, hydroponic, or precision agriculture',
        type: 'slider', min: 0, max: 100, step: 5, default: 20, unit: '%',
        objective: 0.50,
        axes: { L: 0.10, S: 0.30, R: 0.20, C: 0.10, E: 0.15, Ec: 0.30 },
      },
      {
        id: 'food_security_prog', label: 'Food Security Programs',
        description: 'Percentage of food-insecure households receiving direct support and access',
        type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '%',
        objective: 0.85,
        axes: { L: 0.20, S: 0.10, R: 0.25, C: 0.00, E: 0.55, Ec: 0.00 },
      },
      {
        id: 'farmers_market', label: 'Farmers Market Frequency',
        description: 'Number of weekly farmers markets per district — local food economy vitality',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '',
        objective: 0.55,
        axes: { L: 0.30, S: 0.15, R: 0.15, C: 0.10, E: 0.20, Ec: 0.25 },
      },
      {
        id: 'food_diversity', label: 'Food System Diversity',
        description: 'Variety of food production methods, cuisines, and supply chain sources',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.65,
        axes: { L: 0.25, S: 0.25, R: 0.30, C: 0.05, E: 0.15, Ec: 0.15 },
      },
    ],
  },

  {
    id: 'digital',
    name: 'Digital & Innovation',
    icon: '💡',
    color: '#80DEEA',
    description: 'Build the future — fiber networks, smart sensors, open data, and innovation districts',
    inputs: [
      {
        id: 'fiber_coverage', label: 'Fiber Optic Coverage',
        description: 'Percentage of households and businesses connected to high-speed fibre internet',
        type: 'slider', min: 0, max: 100, step: 5, default: 60, unit: '%',
        objective: 0.85,
        axes: { L: 0.20, S: 0.00, R: 0.20, C: 0.45, E: 0.15, Ec: 0.20 },
      },
      {
        id: 'smart_sensors_net', label: 'Smart Sensor Network',
        description: 'Density of IoT sensors per km² monitoring air, traffic, utilities, and environment',
        type: 'slider', min: 0, max: 100, step: 5, default: 35, unit: '/km²',
        objective: 0.60,
        axes: { L: 0.10, S: 0.20, R: 0.30, C: 0.25, E: 0.05, Ec: 0.15 },
      },
      {
        id: 'open_data_avail', label: 'Open Data Availability',
        description: 'Number and quality of public datasets available for civic use and innovation',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '',
        objective: 0.70,
        axes: { L: 0.10, S: 0.05, R: 0.20, C: 0.30, E: 0.30, Ec: 0.10 },
      },
      {
        id: 'startup_density', label: 'Tech Startup Density',
        description: 'Number of technology startups per 10,000 workers — innovation ecosystem vitality',
        type: 'slider', min: 0, max: 100, step: 5, default: 30, unit: '/10k',
        objective: 0.55,
        axes: { L: 0.10, S: 0.05, R: 0.15, C: 0.20, E: 0.10, Ec: 0.55 },
      },
      {
        id: 'digital_inclusion_d', label: 'Digital Inclusion Programs',
        description: 'Percentage of disadvantaged residents with supported access to digital services',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.80,
        axes: { L: 0.15, S: 0.00, R: 0.15, C: 0.30, E: 0.50, Ec: 0.10 },
      },
      {
        id: 'cybersecurity', label: 'Cybersecurity Infrastructure',
        description: 'Strength of city-wide cybersecurity measures protecting critical infrastructure',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
        objective: 0.75,
        axes: { L: 0.10, S: 0.00, R: 0.40, C: 0.30, E: 0.10, Ec: 0.15 },
      },
      {
        id: 'ai_city_services', label: 'AI in City Services',
        description: 'Percentage of city services enhanced or managed by AI and automation',
        type: 'slider', min: 0, max: 100, step: 5, default: 25, unit: '%',
        objective: 0.50,
        axes: { L: 0.15, S: 0.10, R: 0.20, C: 0.30, E: 0.10, Ec: 0.25 },
      },
      {
        id: 'innovation_districts', label: 'Innovation District Coverage',
        description: 'Percentage of city land designated as mixed-use innovation and tech zones',
        type: 'slider', min: 0, max: 100, step: 5, default: 20, unit: '%',
        objective: 0.50,
        axes: { L: 0.10, S: 0.05, R: 0.15, C: 0.20, E: 0.10, Ec: 0.55 },
      },
    ],
  },

  {
    id: 'community',
    name: 'Community & Equity',
    icon: '🤝',
    color: '#EF9A9A',
    description: 'Weave the social fabric — accessibility, inclusion, gender equity, and social cohesion',
    inputs: [
      {
        id: 'gender_equity', label: 'Gender Pay Equity',
        description: 'Index measuring reduction in wage gap between genders across city industries',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.85,
        axes: { L: 0.20, S: 0.00, R: 0.15, C: 0.00, E: 0.65, Ec: 0.10 },
      },
      {
        id: 'disability_access', label: 'Disability Accessibility',
        description: 'Percentage of public spaces, transport, and buildings fully accessible to all abilities',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
        objective: 0.90,
        axes: { L: 0.25, S: 0.00, R: 0.10, C: 0.10, E: 0.65, Ec: 0.00 },
      },
      {
        id: 'immigrant_integration', label: 'Immigrant Integration',
        description: 'Percentage of newcomers supported through integration programs and services',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.75,
        axes: { L: 0.20, S: 0.00, R: 0.20, C: 0.15, E: 0.55, Ec: 0.10 },
      },
      {
        id: 'intergenerational', label: 'Intergenerational Spaces',
        description: 'Percentage of parks, community centres, and public spaces designed for all ages',
        type: 'slider', min: 0, max: 100, step: 5, default: 45, unit: '%',
        objective: 0.70,
        axes: { L: 0.30, S: 0.00, R: 0.15, C: 0.10, E: 0.45, Ec: 0.00 },
      },
      {
        id: 'diversity_index', label: 'Diversity & Inclusion Index',
        description: 'Representation equity score across race, ethnicity, religion, and background',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.75,
        axes: { L: 0.20, S: 0.00, R: 0.15, C: 0.10, E: 0.55, Ec: 0.10 },
      },
      {
        id: 'lgbtq_inclusion', label: 'LGBTQ+ Inclusive Policies',
        description: 'Comprehensiveness of legal protections and social support for LGBTQ+ residents',
        type: 'slider', min: 0, max: 100, step: 5, default: 50, unit: '',
        objective: 0.70,
        axes: { L: 0.20, S: 0.00, R: 0.10, C: 0.10, E: 0.65, Ec: 0.00 },
      },
      {
        id: 'social_cohesion', label: 'Social Cohesion Index',
        description: 'Measure of community trust, belonging, and cross-cultural social bonds',
        type: 'slider', min: 0, max: 100, step: 5, default: 55, unit: '',
        objective: 0.80,
        axes: { L: 0.35, S: 0.05, R: 0.20, C: 0.15, E: 0.30, Ec: 0.05 },
      },
      {
        id: 'poverty_reduction', label: 'Poverty Reduction Programs',
        description: 'Percentage of households below poverty line receiving meaningful support',
        type: 'slider', min: 0, max: 100, step: 5, default: 40, unit: '%',
        objective: 0.90,
        axes: { L: 0.20, S: 0.00, R: 0.20, C: 0.00, E: 0.65, Ec: 0.10 },
      },
    ],
  },
]

// Flat array of all inputs — used by scoring engine
export const INPUTS = THEMES.flatMap(t => t.inputs.map(inp => ({ ...inp, theme: t.id })))

// ─── Cross-Theme Influence Matrix ─────────────────────────────────
// How strongly does mastering theme A influence theme B?
// Values 0–1: higher = stronger influence when the chosen theme's avg moves.
export const INFLUENCE_MATRIX = {
  mobility: {
    governance: 0.25, ecology: 0.65, housing: 0.40, economy: 0.45,
    infrastructure: 0.35, healthcare: 0.55, education: 0.30, energy: 0.50,
    food: 0.30, digital: 0.20, community: 0.50,
  },
  governance: {
    mobility: 0.40, ecology: 0.60, housing: 0.65, economy: 0.45,
    infrastructure: 0.60, healthcare: 0.55, education: 0.65, energy: 0.55,
    food: 0.40, digital: 0.45, community: 0.70,
  },
  ecology: {
    mobility: 0.30, governance: 0.40, housing: 0.40, economy: 0.30,
    infrastructure: 0.35, healthcare: 0.65, education: 0.45, energy: 0.55,
    food: 0.60, digital: 0.20, community: 0.55,
  },
  housing: {
    mobility: 0.45, governance: 0.35, ecology: 0.40, economy: 0.40,
    infrastructure: 0.50, healthcare: 0.50, education: 0.45, energy: 0.55,
    food: 0.35, digital: 0.25, community: 0.60,
  },
  economy: {
    mobility: 0.50, governance: 0.40, ecology: 0.30, housing: 0.40,
    infrastructure: 0.60, healthcare: 0.50, education: 0.55, energy: 0.45,
    food: 0.40, digital: 0.55, community: 0.40,
  },
  infrastructure: {
    mobility: 0.55, governance: 0.40, ecology: 0.40, housing: 0.50,
    economy: 0.55, healthcare: 0.60, education: 0.45, energy: 0.65,
    food: 0.45, digital: 0.50, community: 0.45,
  },
  healthcare: {
    mobility: 0.30, governance: 0.40, ecology: 0.35, housing: 0.35,
    economy: 0.45, infrastructure: 0.35, education: 0.50, energy: 0.25,
    food: 0.45, digital: 0.30, community: 0.55,
  },
  education: {
    mobility: 0.25, governance: 0.50, ecology: 0.45, housing: 0.30,
    economy: 0.65, infrastructure: 0.35, healthcare: 0.45, energy: 0.30,
    food: 0.40, digital: 0.60, community: 0.60,
  },
  energy: {
    mobility: 0.50, governance: 0.35, ecology: 0.70, housing: 0.45,
    economy: 0.45, infrastructure: 0.60, healthcare: 0.40, education: 0.25,
    food: 0.35, digital: 0.40, community: 0.35,
  },
  food: {
    mobility: 0.25, governance: 0.30, ecology: 0.55, housing: 0.30,
    economy: 0.40, infrastructure: 0.35, healthcare: 0.60, education: 0.40,
    energy: 0.30, digital: 0.20, community: 0.65,
  },
  digital: {
    mobility: 0.45, governance: 0.55, ecology: 0.35, housing: 0.30,
    economy: 0.65, infrastructure: 0.55, healthcare: 0.45, education: 0.55,
    energy: 0.45, food: 0.25, community: 0.40,
  },
  community: {
    mobility: 0.45, governance: 0.65, ecology: 0.50, housing: 0.55,
    economy: 0.40, infrastructure: 0.35, healthcare: 0.55, education: 0.60,
    energy: 0.35, food: 0.60, digital: 0.40,
  },
}

// ─── Slight per-input variance offsets ───────────────────────────
// Applied when distributing a theme's aggregate score across its 8 inputs.
// Creates realistic spread rather than all inputs at the same value.
export const INPUT_VARIANCE = [+10, -8, +5, -3, +8, -6, +4, -7]

// ─── Auto-Configuration Engine ────────────────────────────────────
/**
 * Given the user's 8 primary inputs for their chosen theme, derive
 * sensible values for all other themes using the influence matrix
 * and city type adjustments.
 *
 * @param {string} chosenThemeId  - the theme the user configured
 * @param {Object} primaryValues  - { inputId: 0–100 } for 8 inputs
 * @param {string} cityTypeId     - selected city type
 * @returns {{ allValues: Object, themeScores: Object }}
 */
export function autoConfigureThemes(chosenThemeId, primaryValues, cityTypeId) {
  const cityType  = CITY_TYPES.find(c => c.id === cityTypeId) || CITY_TYPES[0]
  const influence = INFLUENCE_MATRIX[chosenThemeId] || {}

  // Compute average of the 8 chosen inputs
  const vals = Object.values(primaryValues)
  const chosenAvg = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 50

  // Start with the primary inputs themselves
  const allValues = { ...primaryValues }
  const themeScores = {}

  for (const theme of THEMES) {
    if (theme.id === chosenThemeId) {
      themeScores[theme.id] = Math.round(chosenAvg)
      continue
    }

    // Base score: 50 adjusted by city type
    const adj  = (cityType.adjustments[theme.id] || 0)
    const base = 50 + adj

    // Influence: how much the chosen theme's avg pulls this theme
    const coeff   = influence[theme.id] || 0.3
    const derived = base + (chosenAvg - 50) * coeff
    const clamped = Math.max(15, Math.min(88, Math.round(derived)))
    themeScores[theme.id] = clamped

    // Distribute the derived score across each of the theme's 8 inputs
    theme.inputs.forEach((inp, i) => {
      const variance = INPUT_VARIANCE[i] || 0
      const raw = clamped + variance
      const snapped = Math.round(Math.max(10, Math.min(95, raw)) / 5) * 5
      allValues[inp.id] = snapped
    })
  }

  return { allValues, themeScores }
}
