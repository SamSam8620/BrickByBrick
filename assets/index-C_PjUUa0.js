(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const _r=[{id:"housing",label:"Housing & Shelter",color:"#FF7043",icon:"🏘"},{id:"mobility",label:"Mobility & Transport",color:"#42A5F5",icon:"🚇"},{id:"public",label:"Public Space & Nature",color:"#66BB6A",icon:"🌳"},{id:"economy",label:"Economic Activity",color:"#AB47BC",icon:"🏙"},{id:"infra",label:"Infrastructure & Utilities",color:"#26C6DA",icon:"⚡"},{id:"social",label:"Social Services",color:"#EC407A",icon:"🏥"},{id:"resilience",label:"Environmental Resilience",color:"#FFA726",icon:"🌿"},{id:"governance",label:"Governance & Culture",color:"#78909C",icon:"🏛"}],Ut=[{id:"L",label:"Livability",color:"#66BB6A",desc:"Quality of daily life, comfort, amenities"},{id:"S",label:"Sustainability",color:"#26C6DA",desc:"Environmental impact, resources, emissions"},{id:"R",label:"Resilience",color:"#FFA726",desc:"Climate adaptation, redundancy, durability"},{id:"C",label:"Connectivity",color:"#42A5F5",desc:"Transport networks, digital, social links"},{id:"E",label:"Equity",color:"#EC407A",desc:"Access, affordability, inclusion for all"},{id:"Ec",label:"Economy",color:"#AB47BC",desc:"Productivity, diversity, opportunity"}],rl=[{id:"scale",label:"City Scale",type:"select",options:[{value:"neighbourhood",label:"Neighbourhood (1k–20k)"},{value:"district",label:"District (20k–200k)"},{value:"city",label:"City (200k–2M)"},{value:"metropolis",label:"Metropolis (2M+)"}],default:"city"},{id:"topography",label:"Topography",type:"select",options:[{value:"flat",label:"Flat / Plains"},{value:"hilly",label:"Hilly / Rolling"},{value:"coastal",label:"Coastal"},{value:"valley",label:"River Valley"},{value:"mountain",label:"Mountain / Highland"}],default:"flat"},{id:"climate",label:"Climate",type:"select",options:[{value:"tropical",label:"Tropical / Humid"},{value:"arid",label:"Arid / Desert"},{value:"temperate",label:"Temperate"},{value:"continental",label:"Continental / Cold"},{value:"polar",label:"Polar / Subarctic"}],default:"temperate"}],oi=[{id:"residential_density",label:"Residential Density",description:"Dwelling units per hectare in residential zones",theme:"housing",zone:"residential",category:"Density",type:"slider",min:0,max:100,step:5,default:40,unit:"u/ha",objective:.95,axes:{L:.25,S:.1,R:.1,C:.15,E:.3,Ec:.2}},{id:"floor_area_ratio",label:"Floor Area Ratio",description:"Ratio of total floor area to plot area (FAR)",theme:"housing",zone:"residential",category:"Density",type:"slider",min:0,max:100,step:5,default:35,unit:"FAR×0.05",objective:.7,axes:{L:.2,S:.1,R:.1,C:.1,E:.15,Ec:.35}},{id:"lot_coverage",label:"Max Lot Coverage",description:"Maximum percentage of a lot that can be built upon",theme:"housing",zone:"residential",category:"Density",type:"slider",min:0,max:100,step:5,default:60,unit:"%",objective:.6,axes:{L:.2,S:.25,R:.15,C:0,E:.15,Ec:.25}},{id:"housing_affordability",label:"Affordability Target",description:"Target: households spending <30% of income on housing",theme:"housing",zone:"residential",category:"Affordability",type:"slider",min:0,max:100,step:5,default:65,unit:"%",objective:.9,axes:{L:.3,S:0,R:.1,C:0,E:.55,Ec:.15}},{id:"social_housing",label:"Social Housing Share",description:"Percentage of stock reserved as social or affordable housing",theme:"housing",zone:"residential",category:"Affordability",type:"slider",min:0,max:100,step:5,default:20,unit:"%",objective:.85,axes:{L:.2,S:0,R:.15,C:0,E:.65,Ec:.1}},{id:"anti_displacement",label:"Anti-Displacement Policy",description:"Strength of policies preventing displacement of existing residents",theme:"housing",zone:"residential",category:"Affordability",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.75,axes:{L:.15,S:0,R:.2,C:0,E:.65,Ec:.1}},{id:"mixed_housing_types",label:"Housing Type Mix",description:"Diversity of typologies: detached, terraced, apartment, etc.",theme:"housing",zone:"residential",category:"Typology",type:"slider",min:0,max:100,step:5,default:60,unit:"",objective:.75,axes:{L:.3,S:.1,R:.2,C:0,E:.35,Ec:.15}},{id:"building_height",label:"Max Building Height",description:"Permitted maximum height in storeys",theme:"housing",zone:"residential",category:"Typology",type:"slider",min:0,max:100,step:5,default:30,unit:"flrs",objective:.6,axes:{L:.2,S:.1,R:.1,C:.1,E:.1,Ec:.4}},{id:"adaptive_reuse",label:"Adaptive Reuse Priority",description:"Preference for converting existing buildings over new construction",theme:"housing",zone:"mixed",category:"Typology",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.6,axes:{L:.15,S:.35,R:.2,C:0,E:.2,Ec:.2}},{id:"live_work",label:"Live-Work Units",description:"Percentage of stock designed as combined live-work spaces",theme:"housing",zone:"mixed",category:"Typology",type:"slider",min:0,max:100,step:5,default:15,unit:"%",objective:.4,axes:{L:.2,S:.1,R:.1,C:.1,E:.2,Ec:.3}},{id:"tenure_diversity",label:"Tenure Mix",description:"Balance of ownership, rental, cooperative, and community land",theme:"housing",zone:"residential",category:"Tenure",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.7,axes:{L:.2,S:0,R:.2,C:0,E:.5,Ec:.2}},{id:"community_ownership",label:"Community Land Trust",description:"Share of land held in community ownership to prevent speculation",theme:"housing",zone:"residential",category:"Tenure",type:"slider",min:0,max:100,step:5,default:20,unit:"%",objective:.5,axes:{L:.1,S:.1,R:.2,C:0,E:.55,Ec:.15}},{id:"green_roofs",label:"Green Roof Mandate",description:"Requirement for green or cool roofs on new buildings",theme:"housing",zone:"residential",category:"Sustainability",type:"toggle",default:50,objective:.6,axes:{L:.2,S:.4,R:.25,C:0,E:.1,Ec:.05}},{id:"passive_design",label:"Passive Solar Design",description:"Requirement for passive solar/ventilation in building design",theme:"housing",zone:"residential",category:"Sustainability",type:"slider",min:0,max:100,step:5,default:60,unit:"%",objective:.7,axes:{L:.15,S:.45,R:.2,C:0,E:.1,Ec:.1}},{id:"materials_local",label:"Local Materials Priority",description:"Preference for locally sourced and low-embodied-carbon materials",theme:"housing",zone:"residential",category:"Sustainability",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.5,axes:{L:.1,S:.45,R:.2,C:0,E:.1,Ec:.25}},{id:"housing_elderly",label:"Elderly Housing Provision",description:"Percentage of stock designed and reserved for elderly residents",theme:"housing",zone:"residential",category:"Inclusion",type:"slider",min:0,max:100,step:5,default:15,unit:"%",objective:.8,axes:{L:.25,S:0,R:.1,C:0,E:.65,Ec:0}},{id:"housing_disabled",label:"Accessible Housing",description:"Percentage of stock meeting full wheelchair/disability access",theme:"housing",zone:"residential",category:"Inclusion",type:"slider",min:0,max:100,step:5,default:30,unit:"%",objective:.85,axes:{L:.2,S:0,R:.1,C:0,E:.7,Ec:0}},{id:"temporary_housing",label:"Emergency Housing",description:"Provision for emergency and transitional housing needs",theme:"housing",zone:"residential",category:"Inclusion",type:"slider",min:0,max:100,step:5,default:10,unit:"%",objective:.7,axes:{L:.1,S:0,R:.45,C:0,E:.45,Ec:0}},{id:"walkability",label:"Walkability Index",description:"Proportion of daily needs reachable on foot within 15 minutes",theme:"mobility",zone:"mixed",category:"Active Transport",type:"slider",min:0,max:100,step:5,default:65,unit:"",objective:.95,axes:{L:.35,S:.2,R:.15,C:.2,E:.1,Ec:.1}},{id:"cycling_network",label:"Cycling Network Coverage",description:"Percentage of streets with protected cycling infrastructure",theme:"mobility",zone:"mixed",category:"Active Transport",type:"slider",min:0,max:100,step:5,default:45,unit:"%",objective:.8,axes:{L:.25,S:.3,R:.15,C:.25,E:.15,Ec:.1}},{id:"pedestrian_priority",label:"Pedestrian Street Priority",description:"Proportion of streets designed with pedestrian priority",theme:"mobility",zone:"mixed",category:"Active Transport",type:"slider",min:0,max:100,step:5,default:55,unit:"%",objective:.85,axes:{L:.4,S:.2,R:.1,C:.2,E:.15,Ec:.15}},{id:"micro_mobility",label:"Micro-Mobility Lanes",description:"Dedicated lanes for e-scooters, e-bikes, and micro-vehicles",theme:"mobility",zone:"mixed",category:"Active Transport",type:"slider",min:0,max:100,step:5,default:30,unit:"%",objective:.5,axes:{L:.2,S:.2,R:.1,C:.35,E:.15,Ec:.1}},{id:"transit_coverage",label:"Transit Coverage",description:"Population within 400m of a frequent transit stop",theme:"mobility",zone:"mixed",category:"Public Transit",type:"slider",min:0,max:100,step:5,default:70,unit:"%",objective:.95,axes:{L:.3,S:.2,R:.15,C:.25,E:.2,Ec:.1}},{id:"bus_frequency",label:"Bus/Tram Frequency",description:"Average peak-hour frequency of bus and tram services",theme:"mobility",zone:"mixed",category:"Public Transit",type:"slider",min:0,max:100,step:5,default:55,unit:"min⁻¹",objective:.85,axes:{L:.3,S:.15,R:.15,C:.3,E:.2,Ec:.1}},{id:"rail_connection",label:"Rail / Metro Connection",description:"Quality and extent of heavy rail and metro infrastructure",theme:"mobility",zone:"mixed",category:"Public Transit",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.75,axes:{L:.25,S:.15,R:.15,C:.35,E:.15,Ec:.2}},{id:"shared_mobility",label:"Shared Mobility Programs",description:"Availability of car-share, bike-share, and on-demand transit",theme:"mobility",zone:"mixed",category:"Public Transit",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.6,axes:{L:.25,S:.25,R:.1,C:.3,E:.2,Ec:.1}},{id:"car_restriction",label:"Private Car Restriction",description:"Level of restriction on private car access in the city core",theme:"mobility",zone:"mixed",category:"Roads & Cars",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.6,axes:{L:.25,S:.35,R:.1,C:.1,E:.15,Ec:.05}},{id:"parking_ratio",label:"Parking Ratio",description:"Parking spaces per dwelling (lower = more urban, active)",theme:"mobility",zone:"residential",category:"Roads & Cars",type:"slider",min:0,max:100,step:5,default:40,unit:"sp/u",objective:.5,axes:{L:.1,S:.1,R:.05,C:.2,E:.1,Ec:.05}},{id:"traffic_calming",label:"Traffic Calming Measures",description:"Prevalence of speed tables, chicanes, and low-speed zones",theme:"mobility",zone:"residential",category:"Roads & Cars",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.7,axes:{L:.35,S:.15,R:.1,C:.15,E:.2,Ec:.05}},{id:"electric_vehicle",label:"EV Charging Infrastructure",description:"Coverage and density of public EV charging points",theme:"mobility",zone:"mixed",category:"Roads & Cars",type:"slider",min:0,max:100,step:5,default:35,unit:"%",objective:.65,axes:{L:.1,S:.35,R:.15,C:.2,E:.1,Ec:.1}},{id:"block_size",label:"Block Size",description:"Average block perimeter (smaller = more walkable, permeable)",theme:"mobility",zone:"mixed",category:"Street Network",type:"slider",min:0,max:100,step:5,default:50,unit:"m",objective:.75,axes:{L:.3,S:.1,R:.1,C:.35,E:.1,Ec:.15}},{id:"intersection_density",label:"Intersection Density",description:"Number of intersections per km² (high = fine-grained grid)",theme:"mobility",zone:"mixed",category:"Street Network",type:"slider",min:0,max:100,step:5,default:55,unit:"/km²",objective:.7,axes:{L:.25,S:.1,R:.1,C:.4,E:.1,Ec:.15}},{id:"water_transport",label:"Water Transport",description:"Availability of ferry and water-based public transport",theme:"mobility",zone:"mixed",category:"Street Network",type:"slider",min:0,max:100,step:5,default:20,unit:"",objective:.3,axes:{L:.2,S:.2,R:.2,C:.25,E:.1,Ec:.15}},{id:"autonomous_vehicles",label:"AV Infrastructure Readiness",description:"Road infrastructure and legal readiness for autonomous vehicles",theme:"mobility",zone:"mixed",category:"Street Network",type:"slider",min:0,max:100,step:5,default:20,unit:"",objective:.3,axes:{L:.1,S:.1,R:.2,C:.35,E:.1,Ec:.25}},{id:"park_per_capita",label:"Park Area per Capita",description:"Square metres of public green space per resident",theme:"public",zone:"green",category:"Green Space",type:"slider",min:0,max:100,step:5,default:50,unit:"m²/p",objective:.9,axes:{L:.4,S:.25,R:.2,C:.05,E:.15,Ec:.05}},{id:"tree_canopy",label:"Street Tree Canopy",description:"Percentage of street network shaded by tree canopy",theme:"public",zone:"green",category:"Green Space",type:"slider",min:0,max:100,step:5,default:40,unit:"%",objective:.8,axes:{L:.35,S:.3,R:.25,C:0,E:.1,Ec:0}},{id:"biodiversity",label:"Biodiversity Corridors",description:"Connectivity of ecological networks through the urban fabric",theme:"public",zone:"green",category:"Green Space",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.7,axes:{L:.2,S:.45,R:.25,C:.05,E:.1,Ec:0}},{id:"community_gardens",label:"Community Gardens",description:"Availability of community growing and allotment spaces",theme:"public",zone:"green",category:"Green Space",type:"slider",min:0,max:100,step:5,default:35,unit:"",objective:.5,axes:{L:.3,S:.25,R:.2,C:.05,E:.3,Ec:0}},{id:"urban_forest",label:"Urban Forest / Woodland",description:"Area of woodland and forest within city limits",theme:"public",zone:"green",category:"Green Space",type:"slider",min:0,max:100,step:5,default:25,unit:"%",objective:.6,axes:{L:.25,S:.4,R:.25,C:0,E:.1,Ec:0}},{id:"wetlands",label:"Wetland Preservation",description:"Protection and integration of wetland habitats",theme:"public",zone:"green",category:"Green Space",type:"slider",min:0,max:100,step:5,default:30,unit:"%",objective:.65,axes:{L:.15,S:.4,R:.35,C:0,E:.1,Ec:0}},{id:"public_plaza",label:"Public Plaza Provision",description:"Density of public squares, plazas, and gathering spaces",theme:"public",zone:"civic",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.8,axes:{L:.45,S:.05,R:.1,C:.15,E:.2,Ec:.1}},{id:"cultural_venues",label:"Cultural Venue Density",description:"Museums, theatres, galleries, and cultural centres per capita",theme:"public",zone:"civic",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.7,axes:{L:.4,S:0,R:.05,C:.1,E:.25,Ec:.25}},{id:"sports_facilities",label:"Sports & Recreation",description:"Availability of public sports fields, pools, and leisure centres",theme:"public",zone:"civic",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.75,axes:{L:.4,S:.05,R:.1,C:.1,E:.3,Ec:.05}},{id:"market_spaces",label:"Market & Vendor Spaces",description:"Outdoor and covered market infrastructure for local trade",theme:"public",zone:"commercial",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.65,axes:{L:.3,S:.1,R:.1,C:.15,E:.25,Ec:.25}},{id:"public_art",label:"Public Art Provision",description:"Investment in public art, murals, and cultural installations",theme:"public",zone:"civic",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:35,unit:"",objective:.4,axes:{L:.4,S:0,R:0,C:.1,E:.3,Ec:.2}},{id:"street_furniture",label:"Street Furniture Quality",description:"Seating, lighting, wayfinding, and public amenity quality",theme:"public",zone:"mixed",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.65,axes:{L:.5,S:.05,R:.05,C:.1,E:.2,Ec:.1}},{id:"water_access",label:"Waterfront / Water Access",description:"Public access to rivers, lakes, coastline, or water features",theme:"public",zone:"green",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.5,axes:{L:.4,S:.15,R:.15,C:.1,E:.2,Ec:.1}},{id:"event_spaces",label:"Event & Festival Spaces",description:"Dedicated spaces for civic events, festivals, and gatherings",theme:"public",zone:"civic",category:"Public Spaces",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.5,axes:{L:.35,S:0,R:.1,C:.2,E:.2,Ec:.2}},{id:"commercial_gf",label:"Active Ground Floors",description:"Percentage of ground-floor space with active commercial use",theme:"economy",zone:"commercial",category:"Land Use",type:"slider",min:0,max:100,step:5,default:60,unit:"%",objective:.85,axes:{L:.35,S:0,R:.1,C:.15,E:.15,Ec:.35}},{id:"mixed_use_ratio",label:"Mixed-Use Development",description:"Percentage of buildings with vertical mixed use",theme:"economy",zone:"mixed",category:"Land Use",type:"slider",min:0,max:100,step:5,default:55,unit:"%",objective:.85,axes:{L:.3,S:.1,R:.15,C:.15,E:.15,Ec:.35}},{id:"industrial_land",label:"Industrial Land Reserve",description:"Percentage of city area protected for industrial and logistics use",theme:"economy",zone:"industrial",category:"Land Use",type:"slider",min:0,max:100,step:5,default:25,unit:"%",objective:.75,axes:{L:.05,S:.1,R:.2,C:.15,E:.15,Ec:.45}},{id:"employment_density",label:"Employment Density",description:"Jobs per hectare in commercial and mixed-use zones",theme:"economy",zone:"commercial",category:"Land Use",type:"slider",min:0,max:100,step:5,default:50,unit:"j/ha",objective:.8,axes:{L:.2,S:0,R:.15,C:.15,E:.2,Ec:.5}},{id:"local_business",label:"Local Business Support",description:"Policies favouring independent and local businesses over chains",theme:"economy",zone:"commercial",category:"Business Mix",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.7,axes:{L:.25,S:.1,R:.2,C:.1,E:.25,Ec:.3}},{id:"retail_diversity",label:"Retail Type Diversity",description:"Mix of retail formats: local shops, markets, anchors, services",theme:"economy",zone:"commercial",category:"Business Mix",type:"slider",min:0,max:100,step:5,default:60,unit:"",objective:.7,axes:{L:.3,S:.05,R:.15,C:.1,E:.2,Ec:.3}},{id:"informal_economy",label:"Informal Economy Support",description:"Legal and spatial support for street vendors, hawkers, informal trade",theme:"economy",zone:"mixed",category:"Business Mix",type:"slider",min:0,max:100,step:5,default:35,unit:"",objective:.55,axes:{L:.2,S:.05,R:.15,C:.1,E:.35,Ec:.25}},{id:"night_economy",label:"Night-Time Economy",description:"Provisions for safe and active nightlife and evening commerce",theme:"economy",zone:"mixed",category:"Business Mix",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.5,axes:{L:.35,S:0,R:.1,C:.15,E:.1,Ec:.35}},{id:"innovation_cluster",label:"Innovation Clusters",description:"Designated innovation, tech, and research districts",theme:"economy",zone:"mixed",category:"Knowledge Economy",type:"slider",min:0,max:100,step:5,default:35,unit:"",objective:.5,axes:{L:.1,S:.05,R:.15,C:.2,E:.1,Ec:.5}},{id:"maker_spaces",label:"Maker / Fabrication Spaces",description:"Workshops, fab labs, and hands-on production facilities",theme:"economy",zone:"mixed",category:"Knowledge Economy",type:"slider",min:0,max:100,step:5,default:30,unit:"",objective:.5,axes:{L:.15,S:.1,R:.1,C:.15,E:.25,Ec:.45}},{id:"co_working",label:"Co-Working Spaces",description:"Density of shared professional workspaces across city",theme:"economy",zone:"mixed",category:"Knowledge Economy",type:"slider",min:0,max:100,step:5,default:35,unit:"",objective:.45,axes:{L:.15,S:.05,R:.1,C:.25,E:.2,Ec:.4}},{id:"circular_economy",label:"Circular Economy Facilities",description:"Repair cafes, reuse centres, materials exchanges",theme:"economy",zone:"mixed",category:"Knowledge Economy",type:"slider",min:0,max:100,step:5,default:30,unit:"",objective:.55,axes:{L:.1,S:.45,R:.2,C:.1,E:.15,Ec:.2}},{id:"urban_agriculture",label:"Urban Agriculture",description:"Integration of food production into urban fabric",theme:"economy",zone:"green",category:"Knowledge Economy",type:"slider",min:0,max:100,step:5,default:25,unit:"%",objective:.5,axes:{L:.2,S:.3,R:.25,C:0,E:.2,Ec:.15}},{id:"tourism",label:"Tourism Infrastructure",description:"Investment in visitor economy, hospitality, and attractions",theme:"economy",zone:"commercial",category:"Knowledge Economy",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.4,axes:{L:.15,S:0,R:.05,C:.2,E:.1,Ec:.5}},{id:"economic_resilience",label:"Economic Diversification",description:"Spread across sectors to reduce vulnerability to shocks",theme:"economy",zone:"mixed",category:"Knowledge Economy",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.8,axes:{L:.1,S:.05,R:.35,C:.1,E:.15,Ec:.45}},{id:"water_supply",label:"Water Supply Reliability",description:"Reliability and quality of potable water supply",theme:"infra",zone:"mixed",category:"Water",type:"slider",min:0,max:100,step:5,default:80,unit:"%",objective:1,axes:{L:.3,S:.15,R:.35,C:0,E:.25,Ec:.1}},{id:"water_recycling",label:"Water Recycling & Reuse",description:"Proportion of wastewater treated and recycled for non-potable use",theme:"infra",zone:"mixed",category:"Water",type:"slider",min:0,max:100,step:5,default:35,unit:"%",objective:.75,axes:{L:.1,S:.45,R:.3,C:0,E:.1,Ec:.05}},{id:"stormwater",label:"Stormwater Management",description:"Capacity to manage and absorb heavy rainfall events",theme:"infra",zone:"mixed",category:"Water",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.85,axes:{L:.15,S:.3,R:.45,C:0,E:.1,Ec:0}},{id:"sewage_treatment",label:"Sewage Treatment Quality",description:"Level of wastewater treatment before discharge",theme:"infra",zone:"mixed",category:"Water",type:"slider",min:0,max:100,step:5,default:75,unit:"",objective:.95,axes:{L:.2,S:.4,R:.2,C:0,E:.2,Ec:0}},{id:"renewable_energy",label:"Renewable Energy Share",description:"Percentage of city energy from renewable sources",theme:"infra",zone:"mixed",category:"Energy",type:"slider",min:0,max:100,step:5,default:40,unit:"%",objective:.9,axes:{L:.1,S:.5,R:.25,C:0,E:.1,Ec:.05}},{id:"energy_efficiency",label:"Building Energy Efficiency",description:"Average energy use intensity of building stock",theme:"infra",zone:"mixed",category:"Energy",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.85,axes:{L:.15,S:.5,R:.2,C:0,E:.1,Ec:.05}},{id:"district_energy",label:"District Heating / Cooling",description:"Centralised district energy systems for heating and cooling",theme:"infra",zone:"mixed",category:"Energy",type:"slider",min:0,max:100,step:5,default:30,unit:"%",objective:.65,axes:{L:.1,S:.4,R:.3,C:0,E:.1,Ec:.1}},{id:"solar_panels",label:"Solar PV Coverage",description:"Percentage of suitable roof area fitted with solar panels",theme:"infra",zone:"mixed",category:"Energy",type:"slider",min:0,max:100,step:5,default:30,unit:"%",objective:.7,axes:{L:.05,S:.5,R:.25,C:0,E:.1,Ec:.1}},{id:"battery_storage",label:"Energy Storage Systems",description:"Grid-scale battery storage capacity",theme:"infra",zone:"mixed",category:"Energy",type:"slider",min:0,max:100,step:5,default:20,unit:"",objective:.6,axes:{L:.05,S:.25,R:.5,C:0,E:.1,Ec:.1}},{id:"waste_management",label:"Waste Collection Quality",description:"Coverage and reliability of waste collection services",theme:"infra",zone:"mixed",category:"Waste",type:"slider",min:0,max:100,step:5,default:75,unit:"%",objective:.95,axes:{L:.3,S:.35,R:.15,C:0,E:.2,Ec:0}},{id:"recycling_rate",label:"Recycling / Composting Rate",description:"Percentage of waste diverted from landfill",theme:"infra",zone:"mixed",category:"Waste",type:"slider",min:0,max:100,step:5,default:45,unit:"%",objective:.8,axes:{L:.1,S:.55,R:.15,C:0,E:.1,Ec:.1}},{id:"internet_coverage",label:"Broadband / 5G Coverage",description:"Population with access to high-speed internet",theme:"infra",zone:"mixed",category:"Digital",type:"slider",min:0,max:100,step:5,default:70,unit:"%",objective:.9,axes:{L:.2,S:0,R:.2,C:.45,E:.15,Ec:.2}},{id:"smart_grid",label:"Smart Grid Infrastructure",description:"Digital monitoring and optimisation of utilities grid",theme:"infra",zone:"mixed",category:"Digital",type:"slider",min:0,max:100,step:5,default:35,unit:"",objective:.6,axes:{L:.05,S:.3,R:.35,C:.2,E:.05,Ec:.05}},{id:"emergency_infra",label:"Emergency Service Coverage",description:"Response time and coverage of emergency services",theme:"infra",zone:"mixed",category:"Safety Infrastructure",type:"slider",min:0,max:100,step:5,default:70,unit:"%",objective:1,axes:{L:.25,S:0,R:.5,C:.1,E:.2,Ec:0}},{id:"flood_infra",label:"Flood Defence Infrastructure",description:"Levees, barriers, and drainage to manage flood risk",theme:"infra",zone:"mixed",category:"Safety Infrastructure",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.8,axes:{L:.1,S:.15,R:.6,C:0,E:.15,Ec:0}},{id:"school_coverage",label:"School Coverage",description:"Percentage of children within 800m of a quality school",theme:"social",zone:"civic",category:"Education",type:"slider",min:0,max:100,step:5,default:80,unit:"%",objective:1,axes:{L:.25,S:0,R:.15,C:.1,E:.5,Ec:.1}},{id:"university_access",label:"Higher Education Access",description:"Access to universities, colleges, and vocational training",theme:"social",zone:"civic",category:"Education",type:"slider",min:0,max:100,step:5,default:65,unit:"",objective:.8,axes:{L:.2,S:0,R:.15,C:.15,E:.35,Ec:.35}},{id:"library_coverage",label:"Library / Learning Centres",description:"Public library and community learning centre provision",theme:"social",zone:"civic",category:"Education",type:"slider",min:0,max:100,step:5,default:60,unit:"",objective:.75,axes:{L:.3,S:0,R:.1,C:.15,E:.45,Ec:0}},{id:"digital_inclusion",label:"Digital Inclusion Programs",description:"Training and device access programs for digitally excluded residents",theme:"social",zone:"civic",category:"Education",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.7,axes:{L:.15,S:0,R:.15,C:.3,E:.5,Ec:.1}},{id:"healthcare_primary",label:"Primary Healthcare Coverage",description:"Population within 1km of a primary healthcare facility",theme:"social",zone:"civic",category:"Healthcare",type:"slider",min:0,max:100,step:5,default:75,unit:"%",objective:1,axes:{L:.3,S:0,R:.2,C:.1,E:.45,Ec:0}},{id:"hospital_access",label:"Hospital / Emergency Access",description:"Population within 10 minutes of a hospital by any mode",theme:"social",zone:"civic",category:"Healthcare",type:"slider",min:0,max:100,step:5,default:70,unit:"%",objective:1,axes:{L:.25,S:0,R:.3,C:.15,E:.35,Ec:0}},{id:"mental_health",label:"Mental Health Services",description:"Community mental health provision per capita",theme:"social",zone:"civic",category:"Healthcare",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.85,axes:{L:.3,S:0,R:.15,C:.1,E:.5,Ec:0}},{id:"childcare",label:"Childcare Provision",description:"Availability of affordable childcare and early years facilities",theme:"social",zone:"civic",category:"Family Services",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.85,axes:{L:.25,S:0,R:.15,C:.1,E:.5,Ec:.1}},{id:"elderly_care",label:"Elderly Care Services",description:"Day centres, home care, and assisted living provision",theme:"social",zone:"civic",category:"Family Services",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.85,axes:{L:.25,S:0,R:.15,C:.05,E:.55,Ec:0}},{id:"youth_programs",label:"Youth Programs",description:"After-school, sports, arts, and employment programs for youth",theme:"social",zone:"civic",category:"Family Services",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.75,axes:{L:.3,S:0,R:.15,C:.1,E:.45,Ec:.1}},{id:"community_centres",label:"Community Centres",description:"Multi-purpose community halls and neighbourhood meeting places",theme:"social",zone:"civic",category:"Community",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.75,axes:{L:.35,S:0,R:.15,C:.15,E:.35,Ec:0}},{id:"immigrant_services",label:"Immigrant & Refugee Services",description:"Integration services, legal aid, and language support",theme:"social",zone:"civic",category:"Community",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.7,axes:{L:.2,S:0,R:.2,C:.15,E:.55,Ec:.1}},{id:"disability_services",label:"Disability Support Services",description:"Specialist disability support, therapy, and workplace integration",theme:"social",zone:"civic",category:"Community",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.85,axes:{L:.2,S:0,R:.1,C:.1,E:.65,Ec:0}},{id:"safety_services",label:"Public Safety Services",description:"Community policing, CCTV, and crime prevention programs",theme:"social",zone:"civic",category:"Community",type:"slider",min:0,max:100,step:5,default:60,unit:"",objective:.9,axes:{L:.4,S:0,R:.3,C:.1,E:.2,Ec:0}},{id:"climate_adaptation",label:"Climate Adaptation Measures",description:"Integrated strategy and investment for climate change adaptation",theme:"resilience",zone:"mixed",category:"Climate",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.9,axes:{L:.15,S:.2,R:.5,C:0,E:.1,Ec:.05}},{id:"heat_island",label:"Heat Island Mitigation",description:"Measures reducing urban heat island effect (albedo, trees, water)",theme:"resilience",zone:"mixed",category:"Climate",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.8,axes:{L:.3,S:.3,R:.3,C:0,E:.1,Ec:0}},{id:"flood_risk",label:"Flood Risk Management",description:"Strategic planning and mapping to reduce flood risk exposure",theme:"resilience",zone:"mixed",category:"Climate",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.85,axes:{L:.15,S:.15,R:.55,C:0,E:.15,Ec:0}},{id:"seismic_resilience",label:"Seismic Resilience",description:"Building codes and retrofitting for earthquake resistance",theme:"resilience",zone:"mixed",category:"Climate",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.75,axes:{L:.1,S:0,R:.65,C:0,E:.15,Ec:.1}},{id:"drought_resilience",label:"Drought Management",description:"Water conservation and drought response preparedness",theme:"resilience",zone:"mixed",category:"Climate",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.7,axes:{L:.1,S:.3,R:.5,C:0,E:.15,Ec:0}},{id:"air_quality",label:"Air Quality Management",description:"Policies and monitoring to maintain clean air standards",theme:"resilience",zone:"mixed",category:"Pollution",type:"slider",min:0,max:100,step:5,default:60,unit:"",objective:.95,axes:{L:.4,S:.3,R:.15,C:.05,E:.15,Ec:0}},{id:"noise_management",label:"Noise Pollution Management",description:"Policies and design to reduce urban noise exposure",theme:"resilience",zone:"mixed",category:"Pollution",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.75,axes:{L:.5,S:.1,R:.1,C:0,E:.2,Ec:.1}},{id:"carbon_footprint",label:"Carbon Footprint Target",description:"Per capita CO₂ emission reduction target from baseline",theme:"resilience",zone:"mixed",category:"Pollution",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.9,axes:{L:.1,S:.55,R:.2,C:0,E:.1,Ec:.05}},{id:"food_security",label:"Local Food Security",description:"Resilience of local food supply chains and production",theme:"resilience",zone:"green",category:"Resource Security",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.8,axes:{L:.25,S:.2,R:.35,C:0,E:.2,Ec:.1}},{id:"water_security",label:"Water Security Measures",description:"Long-term security of water supply under various scenarios",theme:"resilience",zone:"mixed",category:"Resource Security",type:"slider",min:0,max:100,step:5,default:60,unit:"",objective:.9,axes:{L:.2,S:.2,R:.45,C:0,E:.15,Ec:0}},{id:"energy_security",label:"Energy Security",description:"Diversity and reliability of energy supply and storage",theme:"resilience",zone:"mixed",category:"Resource Security",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.9,axes:{L:.1,S:.25,R:.5,C:0,E:.1,Ec:.05}},{id:"ecological_corridors",label:"Ecological Corridors",description:"Connected green networks allowing wildlife movement through city",theme:"resilience",zone:"green",category:"Resource Security",type:"slider",min:0,max:100,step:5,default:35,unit:"%",objective:.65,axes:{L:.15,S:.5,R:.25,C:0,E:.1,Ec:0}},{id:"participatory_planning",label:"Participatory Planning",description:"Depth of community involvement in planning decisions",theme:"governance",zone:"civic",category:"Planning",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.8,axes:{L:.2,S:.05,R:.2,C:.15,E:.45,Ec:.1}},{id:"zoning_flexibility",label:"Zoning Flexibility",description:"Ability of zoning regulations to adapt to changing needs",theme:"governance",zone:"mixed",category:"Planning",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.7,axes:{L:.15,S:.1,R:.25,C:.1,E:.15,Ec:.35}},{id:"heritage_preservation",label:"Heritage Preservation",description:"Protection of historic buildings, districts, and cultural memory",theme:"governance",zone:"civic",category:"Planning",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.6,axes:{L:.3,S:.15,R:.1,C:.05,E:.2,Ec:.2}},{id:"local_governance",label:"Local / Neighbourhood Governance",description:"Devolution of decision-making to neighbourhood councils",theme:"governance",zone:"civic",category:"Planning",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.65,axes:{L:.2,S:.05,R:.2,C:.15,E:.45,Ec:.1}},{id:"cultural_identity",label:"Local Cultural Identity",description:"Strength of policies supporting local culture and identity",theme:"governance",zone:"civic",category:"Culture",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.6,axes:{L:.3,S:0,R:.15,C:.1,E:.3,Ec:.15}},{id:"diversity_inclusion",label:"Diversity & Inclusion Policy",description:"Active policies promoting social diversity and inclusion",theme:"governance",zone:"civic",category:"Culture",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.75,axes:{L:.2,S:0,R:.15,C:.1,E:.55,Ec:.1}},{id:"religious_facilities",label:"Places of Worship",description:"Provision of space for diverse faith and spiritual communities",theme:"governance",zone:"civic",category:"Culture",type:"slider",min:0,max:100,step:5,default:40,unit:"",objective:.5,axes:{L:.2,S:0,R:.1,C:.1,E:.5,Ec:.1}},{id:"language_services",label:"Multi-Language Services",description:"Availability of key services in multiple community languages",theme:"governance",zone:"civic",category:"Culture",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.65,axes:{L:.2,S:0,R:.1,C:.15,E:.55,Ec:.1}},{id:"transparency",label:"Government Transparency",description:"Openness of city data, decisions, and budget processes",theme:"governance",zone:"civic",category:"Policy",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.75,axes:{L:.15,S:.05,R:.2,C:.15,E:.4,Ec:.05}},{id:"data_governance",label:"City Data Governance",description:"Ethical governance of city data, privacy, and smart systems",theme:"governance",zone:"civic",category:"Policy",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.65,axes:{L:.1,S:0,R:.2,C:.3,E:.35,Ec:.05}},{id:"sustainability_policy",label:"Sustainability Policy Strength",description:"Binding commitments and enforcement of environmental policy",theme:"governance",zone:"civic",category:"Policy",type:"slider",min:0,max:100,step:5,default:55,unit:"",objective:.85,axes:{L:.1,S:.5,R:.25,C:0,E:.1,Ec:.05}},{id:"innovation_policy",label:"Innovation-Friendly Policy",description:"Regulatory sandbox, pilot programs, and innovation incentives",theme:"governance",zone:"civic",category:"Policy",type:"slider",min:0,max:100,step:5,default:45,unit:"",objective:.5,axes:{L:.1,S:.05,R:.15,C:.2,E:.1,Ec:.5}},{id:"international_links",label:"International Connectivity",description:"Trade, cultural, and diplomatic links with other cities/nations",theme:"governance",zone:"civic",category:"Policy",type:"slider",min:0,max:100,step:5,default:50,unit:"",objective:.45,axes:{L:.1,S:0,R:.15,C:.35,E:.1,Ec:.4}}],co={};for(const i of Ut){let e=0;for(const t of oi)e+=(t.axes[i.id]||0)*t.objective;co[i.id]=e||1}function sl(i){const e={};for(const n of Ut)e[n.id]=0;for(const n of oi){const r=i[n.id]??n.default,s=n.type==="toggle"?r>50?1:0:r/100;for(const o of Ut)e[o.id]+=s*(n.axes[o.id]||0)*n.objective}const t={};for(const n of Ut)t[n.id]=Math.round(e[n.id]/co[n.id]*100);return t}function al(i){const e=Ut.map(n=>i[n.id]),t=e.reduce((n,r)=>n+r,0)/e.length;return Math.round(t)}const ol=[{id:"no_water",title:"Water Supply Crisis",desc:"Water supply reliability is critically low — a basic urban requirement.",severity:"critical",test:i=>(i.water_supply??80)<30},{id:"no_emergency",title:"Emergency Coverage Gap",desc:"Emergency service coverage is dangerously insufficient.",severity:"critical",test:i=>(i.emergency_infra??70)<30},{id:"no_schools",title:"Education Access Failure",desc:"School coverage is too low for a functional society.",severity:"critical",test:i=>(i.school_coverage??80)<30},{id:"no_healthcare",title:"Primary Healthcare Gap",desc:"Primary healthcare coverage is critically low.",severity:"critical",test:i=>(i.healthcare_primary??75)<30},{id:"low_equity",title:"Equity Deficit",desc:"High economic output but very low equity — risk of social instability.",severity:"critical",test:(i,e)=>e.E<35&&e.Ec>65},{id:"no_transit",title:"Transit Void",desc:"High density with very low transit coverage creates gridlock and exclusion.",severity:"critical",test:i=>(i.residential_density??40)>60&&(i.transit_coverage??70)<30},{id:"heat_risk",title:"Urban Heat Island Risk",desc:"Low tree canopy and park provision with insufficient heat mitigation.",severity:"warning",test:i=>(i.tree_canopy??40)<25&&(i.heat_island??45)<30},{id:"low_resilience",title:"Climate Resilience Gap",desc:"City has inadequate adaptation measures for climate risks.",severity:"warning",test:(i,e)=>e.R<40},{id:"no_affordability",title:"Housing Affordability Crisis",desc:"Affordability target is very low — severe cost-of-living burden on residents.",severity:"warning",test:i=>(i.housing_affordability??65)<30},{id:"no_green",title:"Green Space Deprivation",desc:"Park provision is far below the WHO minimum of 9m² per person.",severity:"warning",test:i=>(i.park_per_capita??50)<20},{id:"poor_air",title:"Poor Air Quality",desc:"Insufficient air quality management threatens public health.",severity:"warning",test:i=>(i.air_quality??60)<30},{id:"no_walkability",title:"Walkability Failure",desc:"Low walkability undermines livability, health, and sustainability.",severity:"warning",test:i=>(i.walkability??65)<25},{id:"low_sustainability",title:"Sustainability Shortfall",desc:"Sustainability score is very low — city has a large ecological footprint.",severity:"warning",test:(i,e)=>e.S<35},{id:"density_without_services",title:"Density Without Services",desc:"High residential density with insufficient social services coverage.",severity:"warning",test:(i,e)=>(i.residential_density??40)>65&&e.E<50}];function ll(i,e){return ol.filter(t=>t.test(i,e))}const cl="https://api.anthropic.com/v1/messages",dl="sk-ant-YOUR_KEY_HERE";async function ul({scores:i,config:e,faults:t,responses:n,onChunk:r,onDone:s,onError:o}){var T;const a=[...Ut].sort((v,M)=>i[M.id]-i[v.id]),l=a.slice(0,2).map(v=>`${v.label} (${i[v.id]})`),c=a.slice(-2).map(v=>`${v.label} (${i[v.id]})`),d=t.length?t.map(v=>`- [${v.severity.toUpperCase()}] ${v.title}: ${v.desc}`).join(`
`):"None detected",h=n.residential_density??40,p=n.walkability??65,m=n.park_per_capita??50,g=n.transit_coverage??70,y=n.mixed_use_ratio??55,f=n.renewable_energy??40,u=`You are an urban design critic and storyteller. Based on the following city parameters, write a vivid, specific, and architecturally grounded description of this city in 3 short paragraphs.

CITY CONFIGURATION
Scale: ${e.scale}
Topography: ${e.topography}
Climate: ${e.climate}

PERFORMANCE SCORES (0–100)
Livability:     ${i.L}
Sustainability: ${i.S}
Resilience:     ${i.R}
Connectivity:   ${i.C}
Equity:         ${i.E}
Economy:        ${i.Ec}

KEY PARAMETERS
Residential density: ${h}/100
Walkability index:   ${p}/100
Green space:         ${m}/100
Transit coverage:    ${g}/100
Mixed-use ratio:     ${y}/100
Renewable energy:    ${f}%

STRONGEST DIMENSIONS: ${l.join(", ")}
AREAS FOR IMPROVEMENT: ${c.join(", ")}

ACTIVE ISSUES:
${d}

Write the description in present tense, as if a visitor is experiencing the city. Be concrete — describe the streets, architecture, rhythms of daily life, what makes this city's character. In a final short sentence, name the single most impactful intervention this city needs.`;try{const v=await fetch(cl,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":dl,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-opus-4-6",max_tokens:600,stream:!0,messages:[{role:"user",content:u}]})});if(!v.ok){const w=await v.text();throw new Error(`API error ${v.status}: ${w}`)}const M=v.body.getReader(),L=new TextDecoder;let R="";for(;;){const{done:w,value:z}=await M.read();if(w)break;R+=L.decode(z,{stream:!0});const K=R.split(`
`);R=K.pop();for(const _ of K){if(!_.startsWith("data: "))continue;const A=_.slice(6).trim();if(A!=="[DONE]")try{const H=JSON.parse(A);H.type==="content_block_delta"&&((T=H.delta)==null?void 0:T.type)==="text_delta"&&r(H.delta.text)}catch{}}}s()}catch(v){o(v.message||String(v))}}function hl(i,e,t,n){const r=document.getElementById("topbar");r.innerHTML="";const s=Ae("div","brand");s.innerHTML='<span class="brand-name">Brick by Brick</span><span class="brand-sub">Adaptive City Model</span>',r.appendChild(s),r.appendChild(Ts());for(const l of rl){const c=Ae("div","config-group"),d=Ae("span","config-label");d.textContent=l.label;const h=document.createElement("select");for(const p of l.options){const m=document.createElement("option");m.value=p.value,m.textContent=p.label,p.value===i.config[l.id]&&(m.selected=!0),h.appendChild(m)}h.addEventListener("change",()=>n(l.id,h.value)),c.appendChild(d),c.appendChild(h),r.appendChild(c)}r.appendChild(Ts());const o=Ae("div","view-toggle");for(const l of["2d","3d"]){const c=Ae("button","view-btn"+(i.view===l?" active":""));c.textContent=l.toUpperCase(),c.dataset.view=l,c.addEventListener("click",()=>e(l)),o.appendChild(c)}r.appendChild(o),r.appendChild(Ae("div","spacer"));const a=Ae("button","gen-btn"+(i.generating?" loading":""));a.id="gen-btn",a.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>${i.generating?"Generating…":"Generate City"}`,a.addEventListener("click",t),r.appendChild(a)}function uo(i,e,t){const n=document.getElementById("panel-left");n.innerHTML="";const r=Ae("div","panel-header");r.innerHTML=`<div class="panel-title">City Inputs — ${oi.length} parameters</div>`,n.appendChild(r);const s=Ae("div","theme-tabs"),o=Ae("button","theme-tab"+(i.activeTheme==="all"?" active":""));o.textContent="All",o.addEventListener("click",()=>t("all")),s.appendChild(o);for(const c of _r){const d=Ae("button","theme-tab"+(i.activeTheme===c.id?" active":""));d.textContent=c.label.split(" ")[0],d.style.color=c.color,d.addEventListener("click",()=>t(c.id)),s.appendChild(d)}n.appendChild(s);const a=Ae("div","inputs-scroll");n.appendChild(a);const l=i.activeTheme==="all"?_r:_r.filter(c=>c.id===i.activeTheme);for(const c of l){const d=oi.filter(y=>y.theme===c.id);if(!d.length)continue;const h=Ae("div","theme-section"),p=Ae("div","theme-section-header"),m=Ae("span","theme-dot");m.style.background=c.color,p.appendChild(m),p.appendChild(pl(c.label)),h.appendChild(p);const g=[...new Set(d.map(y=>y.category))];for(const y of g){const f=d.filter(v=>v.category===y),u=Ae("div","category-group"),T=Ae("div","category-label");T.textContent=y,u.appendChild(T);for(const v of f){const M=i.faults.some(L=>{var R;return((R=L.desc)==null?void 0:R.toLowerCase().includes(v.label.toLowerCase()))||v.objective>=.8&&(i.responses[v.id]??v.default)<30});if(v.type==="toggle"){const L=Ae("div","toggle-row"+(M?" input-row has-fault":" input-row"));L.title=v.description;const R=Ae("span","input-label");R.textContent=v.label;const w=Ae("label","toggle-switch"),z=document.createElement("input");z.type="checkbox",z.checked=(i.responses[v.id]??v.default)>50,z.addEventListener("change",()=>e(v.id,z.checked?100:0));const K=Ae("span","toggle-slider");w.appendChild(z),w.appendChild(K),L.appendChild(R),L.appendChild(w),u.appendChild(L)}else{const L=Ae("div","input-row"+(M?" has-fault":""));L.title=v.description;const R=Ae("div","input-meta"),w=Ae("span","input-label");w.textContent=v.label;const z=Ae("span","input-value"),K=i.responses[v.id]??v.default;z.textContent=K+(v.unit?" "+v.unit:""),R.appendChild(w),R.appendChild(z);const _=document.createElement("input");_.type="range",_.min=v.min,_.max=v.max,_.step=v.step,_.value=K,_.addEventListener("input",()=>{z.textContent=_.value+(v.unit?" "+v.unit:""),e(v.id,Number(_.value))}),L.appendChild(R),L.appendChild(_),u.appendChild(L)}}h.appendChild(u)}a.appendChild(h)}}function ho(i,e){const t=document.getElementById("panel-right");t.innerHTML="";const n=Ae("div","overall-score"),r=Ae("div","overall-num"),{grade:s,color:o}=ml(i.overall);r.textContent=i.overall;const a=Ae("div","overall-label");a.innerHTML="Overall<br>City Score";const l=Ae("div","overall-grade");l.textContent=s,l.style.color=o,n.appendChild(r),n.appendChild(a),n.appendChild(l),t.appendChild(n);const c=Ae("div","radar-wrap");c.id="radar-wrap",c.appendChild(e),t.appendChild(c);const d=Ae("div","axis-list");for(const m of Ut){const g=i.scores[m.id]??0,y=Ae("div","axis-item"),f=Ae("span","axis-dot");f.style.background=m.color;const u=Ae("span","axis-name");u.textContent=m.label;const T=Ae("div","axis-bar-wrap"),v=Ae("div","axis-bar");v.style.width=g+"%",v.style.background=m.color,T.appendChild(v);const M=Ae("span","axis-score");M.textContent=g,M.style.color=m.color,y.appendChild(f),y.appendChild(u),y.appendChild(T),y.appendChild(M),d.appendChild(y)}t.appendChild(d);const h=Ae("div","faults-section"),p=Ae("div","faults-header");if(p.textContent=`Issues (${i.faults.length})`,h.appendChild(p),i.faults.length)for(const m of i.faults){const g=Ae("div","fault-item"+(m.severity==="critical"?" critical":"")),y=Ae("div","fault-icon");y.textContent=m.severity==="critical"?"🔴":"⚠️";const f=Ae("div","fault-body"),u=Ae("div","fault-title");u.textContent=m.title;const T=Ae("div","fault-desc");T.textContent=m.desc,f.appendChild(u),f.appendChild(T),g.appendChild(y),g.appendChild(f),h.appendChild(g)}else{const m=Ae("div","no-faults");m.textContent="✓ No critical issues detected",h.appendChild(m)}t.appendChild(h)}function fl(){const i=document.getElementById("canvas-wrap");if(document.querySelector(".canvas-overlay"))return;const e=Ae("div","canvas-overlay"),t=Ae("div","");t.id="narrative-box",t.innerHTML='<span style="color:var(--text-muted);font-size:11px;letter-spacing:0.05em">Click <strong style="color:var(--accent)">Generate City</strong> for an AI description of your city →</span>',e.appendChild(t),i.appendChild(e)}function Ae(i,e){const t=document.createElement(i);return e&&(t.className=e),t}function pl(i){return document.createTextNode(i)}function Ts(){return Ae("div","topbar-sep")}function ml(i){return i>=90?{grade:"A+",color:"#00e676"}:i>=80?{grade:"A",color:"#66BB6A"}:i>=70?{grade:"B",color:"#26C6DA"}:i>=60?{grade:"C",color:"#42A5F5"}:i>=50?{grade:"D",color:"#FFA726"}:{grade:"F",color:"#ef5350"}}const yt=22,vr=48,wi=24,Ci=7,As=2,Ri={civic:{top:"#4DD0E1",left:"#00ACC1",right:"#006064"},commercial:{top:"#64B5F6",left:"#1E88E5",right:"#0D47A1"},mixed:{top:"#CE93D8",left:"#AB47BC",right:"#6A1B9A"},residential:{top:"#FFAB76",left:"#F4511E",right:"#BF360C"},res_low:{top:"#FFCC80",left:"#FFA726",right:"#E65100"},industrial:{top:"#B0BEC5",left:"#607D8B",right:"#263238"},green:{top:"#81C784",left:"#388E3C",right:"#1B5E20"},ground:{top:"#1a2540",left:"#141d35",right:"#0f1629"}};function ws(i,e,t=0){return Math.abs(Math.sin(i*127.1+e*311.7+t*419.7)*43758.5453%1)}function gl(i){const e=yt/2,t=yt/2,n=[],r=(i.park_per_capita??50)/100,s=(i.industrial_land??25)/100,o=(i.mixed_use_ratio??55)/100,a=(i.residential_density??40)/100,l=(i.building_height??30)/100,c=(i.floor_area_ratio??35)/100,d=(i.green_roofs??50)>50;for(let h=0;h<yt;h++){n[h]=[];for(let p=0;p<yt;p++){const m=h-e,g=p-t,f=Math.sqrt(m*m+g*g)/(yt*.5),u=ws(h,p,1),T=ws(h,p,2);if(f>.25&&u<r*.35){n[h][p]={zone:"green",floors:0};continue}if(f>.8&&u<s*.6){const L=Math.max(1,Math.round(T*4*(1+c)));n[h][p]={zone:"industrial",floors:L};continue}let v,M;f<.12?(v="civic",M=Math.max(3,Math.round((5+T*8)*(1+l*1.5)*(1+c)))):f<.28?(v=u<.5?"commercial":"mixed",M=Math.max(2,Math.round((4+T*6)*(1+l)*(1+c)))):f<.45?(v=u<o?"mixed":"residential",M=Math.max(1,Math.round((2+T*5)*(.5+a)*(1+c*.5)))):f<.65?(v="residential",M=Math.max(1,Math.round((1+T*3)*(.3+a*.8)))):f<.8?(v="res_low",M=Math.max(1,Math.round(1+T*2))):(v=u<r*.5?"green":"res_low",M=v==="green"?0:1),n[h][p]={zone:v,floors:M,greenRoof:d&&v!=="green"&&M>0&&u>.5}}}return n}class _l{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.radarCanvas=document.createElement("canvas"),this.radarCanvas.width=240,this.radarCanvas.height=240,this.radarCtx=this.radarCanvas.getContext("2d")}resize(){const e=this.canvas.parentElement;this.canvas.width=e.clientWidth,this.canvas.height=e.clientHeight}render(e,t,n){var p;const r=this.ctx,s=this.canvas.width,o=this.canvas.height;r.clearRect(0,0,s,o);const a=r.createLinearGradient(0,0,0,o);a.addColorStop(0,"#0a0e1a"),a.addColorStop(1,"#0f1629"),r.fillStyle=a,r.fillRect(0,0,s,o);const l=(yt+yt)*(wi/2)+yt*Ci*6,c=s/2,d=(o-l)/2+60;for(let m=0;m<=2*(yt-1);m++)for(let g=0;g<yt;g++){const y=m-g;y<0||y>=yt||this._drawTile(r,g,y,c,d,"ground",0,!1)}new Set(n.map(m=>m.id));const h=n.some(m=>m.severity==="critical");for(let m=0;m<=2*(yt-1);m++)for(let g=0;g<yt;g++){const y=m-g;if(y<0||y>=yt)continue;const f=(p=e[g])==null?void 0:p[y];!f||f.floors===0||this._drawBuilding(r,g,y,c,d,f,h)}this._drawRadar(t),r.drawImage(this.radarCanvas,s-260,10),r.fillStyle="rgba(138,155,181,0.4)",r.font='10px "Segoe UI", sans-serif',r.textAlign="left",r.fillText(`${yt}×${yt} GRID  ·  ISOMETRIC VIEW`,16,o-16)}_isoProject(e,t,n,r){return{sx:n+(e-t)*(vr/2),sy:r+(e+t)*(wi/2)}}_drawTile(e,t,n,r,s,o,a,l){const c=Ri[o]||Ri.ground,{sx:d,sy:h}=this._isoProject(t,n,r,s),p=vr/2,m=wi/2;e.beginPath(),e.moveTo(d,h-m),e.lineTo(d+p,h),e.lineTo(d,h+m),e.lineTo(d-p,h),e.closePath(),e.fillStyle=c.top,e.fill()}_drawBuilding(e,t,n,r,s,o,a){const l=Ri[o.zone]||Ri.residential,{sx:c,sy:d}=this._isoProject(t,n,r,s),h=vr/2-As,p=wi/2-As/2,m=o.floors*Ci;e.beginPath(),e.moveTo(c-h,d),e.lineTo(c,d+p),e.lineTo(c,d+p-m),e.lineTo(c-h,d-m),e.closePath(),e.fillStyle=l.left,e.fill(),e.beginPath(),e.moveTo(c+h,d),e.lineTo(c,d+p),e.lineTo(c,d+p-m),e.lineTo(c+h,d-m),e.closePath(),e.fillStyle=l.right,e.fill();const g=o.greenRoof?"#4CAF50":l.top;if(e.beginPath(),e.moveTo(c,d-p-m),e.lineTo(c+h,d-m),e.lineTo(c,d+p-m),e.lineTo(c-h,d-m),e.closePath(),e.fillStyle=g,e.fill(),o.floors>=3&&o.zone!=="green"){e.fillStyle="rgba(255,255,255,0.18)";const y=Math.min(o.floors-1,4);for(let f=0;f<y;f++){const u=d+p-m+f*Ci+Ci*.4;e.fillRect(c-h+4,u,4,2),e.fillRect(c-h+10,u,4,2),e.fillRect(c+4,u,4,2),e.fillRect(c+10,u,4,2)}}}_drawRadar(e){const t=this.radarCtx,n=240,r=240,s=n/2,o=r/2,a=88,l=Ut.length;t.clearRect(0,0,n,r),t.beginPath(),t.arc(s,o,a+10,0,Math.PI*2),t.fillStyle="rgba(10,14,26,0.85)",t.fill(),t.strokeStyle="rgba(30,45,74,0.8)",t.lineWidth=1,t.stroke();for(let c=1;c<=4;c++){const d=a*c/4;t.beginPath();for(let h=0;h<=l;h++){const p=h/l*Math.PI*2-Math.PI/2,m=s+Math.cos(p)*d,g=o+Math.sin(p)*d;h===0?t.moveTo(m,g):t.lineTo(m,g)}t.closePath(),t.strokeStyle="rgba(30,45,74,0.6)",t.lineWidth=.5,t.stroke()}for(let c=0;c<l;c++){const d=c/l*Math.PI*2-Math.PI/2;t.beginPath(),t.moveTo(s,o),t.lineTo(s+Math.cos(d)*a,o+Math.sin(d)*a),t.strokeStyle="rgba(30,45,74,0.8)",t.lineWidth=.5,t.stroke()}t.beginPath();for(let c=0;c<l;c++){const d=c/l*Math.PI*2-Math.PI/2,h=e[Ut[c].id]??0,p=a*h/100,m=s+Math.cos(d)*p,g=o+Math.sin(d)*p;c===0?t.moveTo(m,g):t.lineTo(m,g)}t.closePath(),t.fillStyle="rgba(0,212,255,0.12)",t.fill(),t.strokeStyle="rgba(0,212,255,0.7)",t.lineWidth=1.5,t.stroke(),t.textAlign="center",t.textBaseline="middle";for(let c=0;c<l;c++){const d=c/l*Math.PI*2-Math.PI/2,h=e[Ut[c].id]??0,p=a*h/100,m=s+Math.cos(d)*p,g=o+Math.sin(d)*p;t.beginPath(),t.arc(m,g,3,0,Math.PI*2),t.fillStyle=Ut[c].color,t.fill();const y=s+Math.cos(d)*(a+18),f=o+Math.sin(d)*(a+18);t.font='bold 9px "Segoe UI", sans-serif',t.fillStyle=Ut[c].color,t.fillText(Ut[c].id,y,f)}t.font='9px "Segoe UI", sans-serif',t.fillStyle="rgba(138,155,181,0.5)",t.fillText("SCORES",s,o)}getRadarCanvas(){return this.radarCanvas}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ls="161",On={ROTATE:0,DOLLY:1,PAN:2},Bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vl=0,Cs=1,xl=2,fo=1,po=2,Qt=3,_n=0,Ct=1,en=2,pn=0,ri=1,Rs=2,Ls=3,Ps=4,yl=5,An=100,Sl=101,El=102,Ds=103,Us=104,Ml=200,bl=201,Tl=202,Al=203,Jr=204,Qr=205,wl=206,Cl=207,Rl=208,Ll=209,Pl=210,Dl=211,Ul=212,Il=213,Nl=214,Fl=0,Ol=1,Bl=2,nr=3,zl=4,Gl=5,Hl=6,kl=7,mo=0,Vl=1,Wl=2,mn=0,Xl=1,jl=2,ql=3,Yl=4,Kl=5,$l=6,go=300,li=301,ci=302,es=303,ts=304,lr=306,ns=1e3,Ht=1001,is=1002,Mt=1003,Is=1004,gi=1005,wt=1006,xr=1007,Cn=1008,gn=1009,Zl=1010,Jl=1011,cs=1012,_o=1013,fn=1014,tn=1015,Ei=1016,vo=1017,xo=1018,Rn=1020,Ql=1021,kt=1023,ec=1024,tc=1025,Ln=1026,di=1027,nc=1028,yo=1029,ic=1030,So=1031,Eo=1033,yr=33776,Sr=33777,Er=33778,Mr=33779,Ns=35840,Fs=35841,Os=35842,Bs=35843,Mo=36196,zs=37492,Gs=37496,Hs=37808,ks=37809,Vs=37810,Ws=37811,Xs=37812,js=37813,qs=37814,Ys=37815,Ks=37816,$s=37817,Zs=37818,Js=37819,Qs=37820,ea=37821,br=36492,ta=36494,na=36495,rc=36283,ia=36284,ra=36285,sa=36286,bo=3e3,Pn=3001,sc=3200,ac=3201,To=0,oc=1,Ot="",pt="srgb",rn="srgb-linear",ds="display-p3",cr="display-p3-linear",ir="linear",Qe="srgb",rr="rec709",sr="p3",zn=7680,aa=519,lc=512,cc=513,dc=514,Ao=515,uc=516,hc=517,fc=518,pc=519,oa=35044,la="300 es",rs=1035,nn=2e3,ar=2001;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],er=Math.PI/180,ss=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function mc(i,e){return(i%e+e)%e}function Tr(i,e,t){return(1-t)*i+t*e}function ca(i){return(i&i-1)===0&&i!==0}function as(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gc={DEG2RAD:er};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],m=n[5],g=n[8],y=r[0],f=r[3],u=r[6],T=r[1],v=r[4],M=r[7],L=r[2],R=r[5],w=r[8];return s[0]=o*y+a*T+l*L,s[3]=o*f+a*v+l*R,s[6]=o*u+a*M+l*w,s[1]=c*y+d*T+h*L,s[4]=c*f+d*v+h*R,s[7]=c*u+d*M+h*w,s[2]=p*y+m*T+g*L,s[5]=p*f+m*v+g*R,s[8]=p*u+m*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,p=a*l-d*s,m=c*s-o*l,g=t*h+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-d*n)*y,e[2]=(a*n-r*o)*y,e[3]=p*y,e[4]=(d*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new We;function wo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _c(){const i=or("canvas");return i.style.display="block",i}const da={};function si(i){i in da||(da[i]=!0,console.warn(i))}const ua=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ha=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Li={[rn]:{transfer:ir,primaries:rr,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:Qe,primaries:rr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[cr]:{transfer:ir,primaries:sr,toReference:i=>i.applyMatrix3(ha),fromReference:i=>i.applyMatrix3(ua)},[ds]:{transfer:Qe,primaries:sr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ha),fromReference:i=>i.applyMatrix3(ua).convertLinearToSRGB()}},vc=new Set([rn,cr]),$e={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Li[e].toReference,r=Li[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Li[i].primaries},getTransfer:function(i){return i===Ot?ir:Li[i].transfer}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class Co{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=or("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xc=0;class Ro{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cr(r[o].image)):s.push(Cr(r[o]))}else s=Cr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yc=0;class Rt extends Fn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Ht,r=Ht,s=wt,o=Cn,a=kt,l=gn,c=Rt.DEFAULT_ANISOTROPY,d=Ot){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Mi(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Pn?pt:Ot),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?Pn:bo}set encoding(e){si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pn?pt:Ot}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=go;Rt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],y=l[2],f=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,L=(u+1)/2,R=(d+p)/4,w=(h+y)/4,z=(g+f)/4;return v>M&&v>L?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=R/n,s=w/n):M>L?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=R/r,s=z/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=w/s,r=z/s),this.set(n,r,s,t),this}let T=Math.sqrt((f-g)*(f-g)+(h-y)*(h-y)+(p-d)*(p-d));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(h-y)/T,this.z=(p-d)/T,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sc extends Fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pn?pt:Ot),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lo extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ec extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==p||c!==m||d!==g){let f=1-a;const u=l*p+c*m+d*g+h*y,T=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const L=Math.sqrt(v),R=Math.atan2(L,u*T);f=Math.sin(f*R)/L,a=Math.sin(a*R)/L}const M=a*T;if(l=l*f+p*M,c=c*f+m*M,d=d*f+g*M,h=h*f+y*M,f===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=s[o],p=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*h+l*m-c*p,e[t+1]=l*g+d*p+c*h-a*m,e[t+2]=c*g+d*m+a*p-l*h,e[t+3]=d*g-a*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),h=a(s/2),p=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*d*h+c*m*g,this._y=c*m*h-p*d*g,this._z=c*d*g+p*m*h,this._w=c*d*h-p*m*g;break;case"YXZ":this._x=p*d*h+c*m*g,this._y=c*m*h-p*d*g,this._z=c*d*g-p*m*h,this._w=c*d*h+p*m*g;break;case"ZXY":this._x=p*d*h-c*m*g,this._y=c*m*h+p*d*g,this._z=c*d*g+p*m*h,this._w=c*d*h-p*m*g;break;case"ZYX":this._x=p*d*h-c*m*g,this._y=c*m*h+p*d*g,this._z=c*d*g-p*m*h,this._w=c*d*h+p*m*g;break;case"YZX":this._x=p*d*h+c*m*g,this._y=c*m*h+p*d*g,this._z=c*d*g-p*m*h,this._w=c*d*h-p*m*g;break;case"XZY":this._x=p*d*h-c*m*g,this._y=c*m*h-p*d*g,this._z=c*d*g+p*m*h,this._w=c*d*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,p=Math.sin(t*d)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new D,fa=new In;class bi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bt):Bt.fromBufferAttribute(s,o),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pi.copy(n.boundingBox)),Pi.applyMatrix4(e.matrixWorld),this.union(Pi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Di.subVectors(this.max,vi),Hn.subVectors(e.a,vi),kn.subVectors(e.b,vi),Vn.subVectors(e.c,vi),sn.subVectors(kn,Hn),an.subVectors(Vn,kn),Sn.subVectors(Hn,Vn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-Sn.z,Sn.y,sn.z,0,-sn.x,an.z,0,-an.x,Sn.z,0,-Sn.x,-sn.y,sn.x,0,-an.y,an.x,0,-Sn.y,Sn.x,0];return!Lr(t,Hn,kn,Vn,Di)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,Hn,kn,Vn,Di))?!1:(Ui.crossVectors(sn,an),t=[Ui.x,Ui.y,Ui.z],Lr(t,Hn,kn,Vn,Di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new D,new D,new D,new D,new D,new D,new D,new D],Bt=new D,Pi=new bi,Hn=new D,kn=new D,Vn=new D,sn=new D,an=new D,Sn=new D,vi=new D,Di=new D,Ui=new D,En=new D;function Lr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){En.fromArray(i,s);const a=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),d=n.dot(En);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Mc=new bi,xi=new D,Pr=new D;class dr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Pr)),this.expandByPoint(xi.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new D,Dr=new D,Ii=new D,on=new D,Ur=new D,Ni=new D,Ir=new D;class us{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Dr.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Dr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ii),a=on.dot(this.direction),l=-on.dot(Ii),c=on.lengthSq(),d=Math.abs(1-o*o);let h,p,m,g;if(d>0)if(h=o*l-a,p=o*a-l,g=s*d,h>=0)if(p>=-g)if(p<=g){const y=1/d;h*=y,p*=y,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dr).addScaledVector(Ii,p),m}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),r=Kt.dot(Kt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,r,s){Ur.subVectors(t,e),Ni.subVectors(n,e),Ir.crossVectors(Ur,Ni);let o=this.direction.dot(Ir),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,e);const l=a*this.direction.dot(Ni.crossVectors(on,Ni));if(l<0)return null;const c=a*this.direction.dot(Ur.cross(on));if(c<0||l+c>o)return null;const d=-a*on.dot(Ir);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,r,s,o,a,l,c,d,h,p,m,g,y,f){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,h,p,m,g,y,f)}set(e,t,n,r,s,o,a,l,c,d,h,p,m,g,y,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=m,u[7]=g,u[11]=y,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wn.setFromMatrixColumn(e,0).length(),s=1/Wn.setFromMatrixColumn(e,1).length(),o=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*d,m=o*h,g=a*d,y=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=p-y*c,t[9]=-a*l,t[2]=y-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*d,m=l*h,g=c*d,y=c*h;t[0]=p+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=y+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*d,m=l*h,g=c*d,y=c*h;t[0]=p-y*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=y-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*d,m=o*h,g=a*d,y=a*h;t[0]=l*d,t[4]=g*c-m,t[8]=p*c+y,t[1]=l*h,t[5]=y*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=y-p*h,t[8]=g*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+g,t[10]=p-y*h}else if(e.order==="XZY"){const p=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=p*h+y,t[5]=o*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*d,t[10]=y*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bc,e,Tc)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),ln.crossVectors(n,Pt),ln.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),ln.crossVectors(n,Pt)),ln.normalize(),Fi.crossVectors(Pt,ln),r[0]=ln.x,r[4]=Fi.x,r[8]=Pt.x,r[1]=ln.y,r[5]=Fi.y,r[9]=Pt.y,r[2]=ln.z,r[6]=Fi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],m=n[13],g=n[2],y=n[6],f=n[10],u=n[14],T=n[3],v=n[7],M=n[11],L=n[15],R=r[0],w=r[4],z=r[8],K=r[12],_=r[1],A=r[5],H=r[9],j=r[13],P=r[2],k=r[6],F=r[10],Y=r[14],W=r[3],X=r[7],q=r[11],re=r[15];return s[0]=o*R+a*_+l*P+c*W,s[4]=o*w+a*A+l*k+c*X,s[8]=o*z+a*H+l*F+c*q,s[12]=o*K+a*j+l*Y+c*re,s[1]=d*R+h*_+p*P+m*W,s[5]=d*w+h*A+p*k+m*X,s[9]=d*z+h*H+p*F+m*q,s[13]=d*K+h*j+p*Y+m*re,s[2]=g*R+y*_+f*P+u*W,s[6]=g*w+y*A+f*k+u*X,s[10]=g*z+y*H+f*F+u*q,s[14]=g*K+y*j+f*Y+u*re,s[3]=T*R+v*_+M*P+L*W,s[7]=T*w+v*A+M*k+L*X,s[11]=T*z+v*H+M*F+L*q,s[15]=T*K+v*j+M*Y+L*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],m=e[14],g=e[3],y=e[7],f=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*m-n*l*m)+y*(+t*l*m-t*c*p+s*o*p-r*o*m+r*c*d-s*l*d)+f*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*d-n*c*d)+u*(-r*a*d-t*l*h+t*a*p+r*o*h-n*o*p+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],m=e[11],g=e[12],y=e[13],f=e[14],u=e[15],T=h*f*c-y*p*c+y*l*m-a*f*m-h*l*u+a*p*u,v=g*p*c-d*f*c-g*l*m+o*f*m+d*l*u-o*p*u,M=d*y*c-g*h*c+g*a*m-o*y*m-d*a*u+o*h*u,L=g*h*l-d*y*l-g*a*p+o*y*p+d*a*f-o*h*f,R=t*T+n*v+r*M+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=T*w,e[1]=(y*p*s-h*f*s-y*r*m+n*f*m+h*r*u-n*p*u)*w,e[2]=(a*f*s-y*l*s+y*r*c-n*f*c-a*r*u+n*l*u)*w,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*m-n*l*m)*w,e[4]=v*w,e[5]=(d*f*s-g*p*s+g*r*m-t*f*m-d*r*u+t*p*u)*w,e[6]=(g*l*s-o*f*s-g*r*c+t*f*c+o*r*u-t*l*u)*w,e[7]=(o*p*s-d*l*s+d*r*c-t*p*c-o*r*m+t*l*m)*w,e[8]=M*w,e[9]=(g*h*s-d*y*s-g*n*m+t*y*m+d*n*u-t*h*u)*w,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*u+t*a*u)*w,e[11]=(d*a*s-o*h*s-d*n*c+t*h*c+o*n*m-t*a*m)*w,e[12]=L*w,e[13]=(d*y*r-g*h*r+g*n*p-t*y*p-d*n*f+t*h*f)*w,e[14]=(g*a*r-o*y*r-g*n*l+t*y*l+o*n*f-t*a*f)*w,e[15]=(o*h*r-d*a*r+d*n*l-t*h*l-o*n*p+t*a*p)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,p=s*c,m=s*d,g=s*h,y=o*d,f=o*h,u=a*h,T=l*c,v=l*d,M=l*h,L=n.x,R=n.y,w=n.z;return r[0]=(1-(y+u))*L,r[1]=(m+M)*L,r[2]=(g-v)*L,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(p+u))*R,r[6]=(f+T)*R,r[7]=0,r[8]=(g+v)*w,r[9]=(f-T)*w,r[10]=(1-(p+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Wn.set(r[0],r[1],r[2]).length();const o=Wn.set(r[4],r[5],r[6]).length(),a=Wn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const c=1/s,d=1/o,h=1/a;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=d,zt.elements[5]*=d,zt.elements[6]*=d,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=nn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let m,g;if(a===nn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ar)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=nn){const l=this.elements,c=1/(t-e),d=1/(n-r),h=1/(o-s),p=(t+e)*c,m=(n+r)*d;let g,y;if(a===nn)g=(o+s)*h,y=-2*h;else if(a===ar)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new D,zt=new st,bc=new D(0,0,0),Tc=new D(1,1,1),ln=new D,Fi=new D,Pt=new D,pa=new st,ma=new In;class ur{constructor(e=0,t=0,n=0,r=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ma.setFromEuler(this),this.setFromQuaternion(ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ac=0;const ga=new D,Xn=new In,$t=new st,Oi=new D,yi=new D,wc=new D,Cc=new In,_a=new D(1,0,0),va=new D(0,1,0),xa=new D(0,0,1),Rc={type:"added"},Lc={type:"removed"};class mt extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new D,t=new ur,n=new In,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new We}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(yi,Oi,this.up):$t.lookAt(Oi,yi,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Xn.setFromRotationMatrix($t),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Cc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new D,Zt=new D,Nr=new D,Jt=new D,jn=new D,qn=new D,ya=new D,Fr=new D,Or=new D,Br=new D;class Xt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),Zt.subVectors(n,t),Nr.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(Zt),l=Gt.dot(Nr),c=Zt.dot(Zt),d=Zt.dot(Nr),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(c*l-a*d)*p,g=(o*d-a*l)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jt.x),l.addScaledVector(o,Jt.y),l.addScaledVector(a,Jt.z),l)}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),Zt.subVectors(e,t),Gt.cross(Zt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Gt.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,n),qn.subVectors(s,n),Fr.subVectors(e,n);const l=jn.dot(Fr),c=qn.dot(Fr);if(l<=0&&c<=0)return t.copy(n);Or.subVectors(e,r);const d=jn.dot(Or),h=qn.dot(Or);if(d>=0&&h<=d)return t.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(jn,o);Br.subVectors(e,s);const m=jn.dot(Br),g=qn.dot(Br);if(g>=0&&m<=g)return t.copy(s);const y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qn,a);const f=d*g-m*h;if(f<=0&&h-d>=0&&m-g>=0)return ya.subVectors(s,r),a=(h-d)/(h-d+(m-g)),t.copy(r).addScaledVector(ya,a);const u=1/(f+y+p);return o=y*u,a=p*u,t.copy(n).addScaledVector(jn,o).addScaledVector(qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Do={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=mc(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zr(o,s,e+1/3),this.g=zr(o,s,e),this.b=zr(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=Do[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return $e.fromWorkingColorSpace(xt.copy(this),e),Math.round(bt(xt.r*255,0,255))*65536+Math.round(bt(xt.g*255,0,255))*256+Math.round(bt(xt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,r=xt.g,s=xt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=pt){$e.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,r=xt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Bi);const n=Tr(cn.h,Bi.h,t),r=Tr(cn.s,Bi.s,t),s=Tr(cn.l,Bi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new ke;ke.NAMES=Do;let Pc=0;class fi extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=ri,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uo extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new D,zi=new Pe;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return si("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),e}}class Io extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class No extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dc=0;const Nt=new st,Gr=new mt,Yn=new D,Dt=new bi,Si=new bi,dt=new D;class Vt extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wo(e)?No:Io)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Dt.min,Si.min),Dt.expandByPoint(dt),dt.addVectors(Dt.max,Si.max),Dt.expandByPoint(dt)):(Dt.expandByPoint(Si.min),Dt.expandByPoint(Si.max))}Dt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)dt.fromBufferAttribute(a,c),l&&(Yn.fromBufferAttribute(e,c),dt.add(Yn)),r=Math.max(r,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let _=0;_<a;_++)c[_]=new D,d[_]=new D;const h=new D,p=new D,m=new D,g=new Pe,y=new Pe,f=new Pe,u=new D,T=new D;function v(_,A,H){h.fromArray(r,_*3),p.fromArray(r,A*3),m.fromArray(r,H*3),g.fromArray(o,_*2),y.fromArray(o,A*2),f.fromArray(o,H*2),p.sub(h),m.sub(h),y.sub(g),f.sub(g);const j=1/(y.x*f.y-f.x*y.y);isFinite(j)&&(u.copy(p).multiplyScalar(f.y).addScaledVector(m,-y.y).multiplyScalar(j),T.copy(m).multiplyScalar(y.x).addScaledVector(p,-f.x).multiplyScalar(j),c[_].add(u),c[A].add(u),c[H].add(u),d[_].add(T),d[A].add(T),d[H].add(T))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let _=0,A=M.length;_<A;++_){const H=M[_],j=H.start,P=H.count;for(let k=j,F=j+P;k<F;k+=3)v(n[k+0],n[k+1],n[k+2])}const L=new D,R=new D,w=new D,z=new D;function K(_){w.fromArray(s,_*3),z.copy(w);const A=c[_];L.copy(A),L.sub(w.multiplyScalar(w.dot(A))).normalize(),R.crossVectors(z,A);const j=R.dot(d[_])<0?-1:1;l[_*4]=L.x,l[_*4+1]=L.y,l[_*4+2]=L.z,l[_*4+3]=j}for(let _=0,A=M.length;_<A;++_){const H=M[_],j=H.start,P=H.count;for(let k=j,F=j+P;k<F;k+=3)K(n[k+0]),K(n[k+1]),K(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),y=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,f),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,p=new c.constructor(l.length*d);let m=0,g=0;for(let y=0,f=l.length;y<f;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*d;for(let u=0;u<d;u++)p[g++]=c[m++]}return new jt(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sa=new st,Mn=new us,Gi=new dr,Ea=new D,Kn=new D,$n=new D,Zn=new D,Hr=new D,Hi=new D,ki=new Pe,Vi=new Pe,Wi=new Pe,Ma=new D,ba=new D,Ta=new D,Xi=new D,ji=new D;class Tt extends mt{constructor(e=new Vt,t=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Hr.fromBufferAttribute(h,e),o?Hi.addScaledVector(Hr,d):Hi.addScaledVector(Hr.sub(t),d))}t.add(Hi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(s),Mn.copy(e.ray).recast(e.near),!(Gi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Gi,Ea)===null||Mn.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(Sa.copy(s).invert(),Mn.copy(e.ray).applyMatrix4(Sa),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const f=p[g],u=o[f.materialIndex],T=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let M=T,L=v;M<L;M+=3){const R=a.getX(M),w=a.getX(M+1),z=a.getX(M+2);r=qi(this,u,e,n,c,d,h,R,w,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let f=g,u=y;f<u;f+=3){const T=a.getX(f),v=a.getX(f+1),M=a.getX(f+2);r=qi(this,o,e,n,c,d,h,T,v,M),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const f=p[g],u=o[f.materialIndex],T=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=T,L=v;M<L;M+=3){const R=M,w=M+1,z=M+2;r=qi(this,u,e,n,c,d,h,R,w,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let f=g,u=y;f<u;f+=3){const T=f,v=f+1,M=f+2;r=qi(this,o,e,n,c,d,h,T,v,M),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Uc(i,e,t,n,r,s,o,a){let l;if(e.side===Ct?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===_n,a),l===null)return null;ji.copy(a),ji.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ji);return c<t.near||c>t.far?null:{distance:c,point:ji.clone(),object:i}}function qi(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Kn),i.getVertexPosition(l,$n),i.getVertexPosition(c,Zn);const d=Uc(i,e,t,n,Kn,$n,Zn,Xi);if(d){r&&(ki.fromBufferAttribute(r,a),Vi.fromBufferAttribute(r,l),Wi.fromBufferAttribute(r,c),d.uv=Xt.getInterpolation(Xi,Kn,$n,Zn,ki,Vi,Wi,new Pe)),s&&(ki.fromBufferAttribute(s,a),Vi.fromBufferAttribute(s,l),Wi.fromBufferAttribute(s,c),d.uv1=Xt.getInterpolation(Xi,Kn,$n,Zn,ki,Vi,Wi,new Pe),d.uv2=d.uv1),o&&(Ma.fromBufferAttribute(o,a),ba.fromBufferAttribute(o,l),Ta.fromBufferAttribute(o,c),d.normal=Xt.getInterpolation(Xi,Kn,$n,Zn,Ma,ba,Ta,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Xt.getNormal(Kn,$n,Zn,h.normal),d.face=h}return d}class Nn extends Vt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(h,2));function g(y,f,u,T,v,M,L,R,w,z,K){const _=M/w,A=L/z,H=M/2,j=L/2,P=R/2,k=w+1,F=z+1;let Y=0,W=0;const X=new D;for(let q=0;q<F;q++){const re=q*A-j;for(let ae=0;ae<k;ae++){const we=ae*_-H;X[y]=we*T,X[f]=re*v,X[u]=P,c.push(X.x,X.y,X.z),X[y]=0,X[f]=0,X[u]=R>0?1:-1,d.push(X.x,X.y,X.z),h.push(ae/w),h.push(1-q/z),Y+=1}}for(let q=0;q<z;q++)for(let re=0;re<w;re++){const ae=p+re+k*q,we=p+re+k*(q+1),V=p+(re+1)+k*(q+1),Q=p+(re+1)+k*q;l.push(ae,we,Q),l.push(we,V,Q),W+=6}a.addGroup(m,W,K),m+=W,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=ui(i[t]);for(const r in n)e[r]=n[r]}return e}function Ic(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fo(i){return i.getRenderTarget()===null?i.outputColorSpace:$e.workingColorSpace}const Nc={clone:ui,merge:Et};var Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=Oc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=Ic(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oo extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new D,Aa=new Pe,wa=new Pe;class Ft extends Oo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dn.x,dn.y).multiplyScalar(-e/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-e/dn.z)}getViewSize(e,t){return this.getViewBounds(e,Aa,wa),t.subVectors(wa,Aa)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,Qn=1;class Bc extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ft(Jn,Qn,e,t);r.layers=this.layers,this.add(r);const s=new Ft(Jn,Qn,e,t);s.layers=this.layers,this.add(s);const o=new Ft(Jn,Qn,e,t);o.layers=this.layers,this.add(o);const a=new Ft(Jn,Qn,e,t);a.layers=this.layers,this.add(a);const l=new Ft(Jn,Qn,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Jn,Qn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bo extends Rt{constructor(e,t,n,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zc extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pn?pt:Ot),this.texture=new Bo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nn(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:pn});s.uniforms.tEquirect.value=t;const o=new Tt(r,s),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=wt),new Bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const kr=new D,Gc=new D,Hc=new We;class hn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=kr.subVectors(n,t).cross(Gc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hc.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new dr,Yi=new D;class hs{constructor(e=new hn,t=new hn,n=new hn,r=new hn,s=new hn,o=new hn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],m=r[8],g=r[9],y=r[10],f=r[11],u=r[12],T=r[13],v=r[14],M=r[15];if(n[0].setComponents(l-s,p-c,f-m,M-u).normalize(),n[1].setComponents(l+s,p+c,f+m,M+u).normalize(),n[2].setComponents(l+o,p+d,f+g,M+T).normalize(),n[3].setComponents(l-o,p-d,f-g,M-T).normalize(),n[4].setComponents(l-a,p-h,f-y,M-v).normalize(),t===nn)n[5].setComponents(l+a,p+h,f+y,M+v).normalize();else if(t===ar)n[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(e){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yi.x=r.normal.x>0?e.max.x:e.min.x,Yi.y=r.normal.y>0?e.max.y:e.min.y,Yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,d){const h=c.array,p=c.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const p=d.array,m=d._updateRange,g=d.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&g.length===0&&i.bufferSubData(h,0,p),g.length!==0){for(let y=0,f=g.length;y<f;y++){const u=g[y];t?i.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):i.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class hi extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,h=e/a,p=t/l,m=[],g=[],y=[],f=[];for(let u=0;u<d;u++){const T=u*p-o;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-T,0),y.push(0,0,1),f.push(v/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<a;T++){const v=T+c*u,M=T+c*(u+1),L=T+1+c*(u+1),R=T+1+c*u;m.push(v,M,R),m.push(M,L,R)}this.setIndex(m),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$c=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ru=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ou=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_u=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Au=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ou=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ku=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,th=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ih=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ah=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ch=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ph=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_h=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Vc,alphahash_pars_fragment:Wc,alphamap_fragment:Xc,alphamap_pars_fragment:jc,alphatest_fragment:qc,alphatest_pars_fragment:Yc,aomap_fragment:Kc,aomap_pars_fragment:$c,batching_pars_vertex:Zc,batching_vertex:Jc,begin_vertex:Qc,beginnormal_vertex:ed,bsdfs:td,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:rd,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:od,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:dd,color_vertex:ud,common:hd,cube_uv_reflection_fragment:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:yd,envmap_fragment:Sd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:Md,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Fd,envmap_vertex:Td,fog_vertex:Ad,fog_pars_vertex:wd,fog_fragment:Cd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Ld,lightmap_fragment:Pd,lightmap_pars_fragment:Dd,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Id,lights_pars_begin:Nd,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Hd,lights_physical_pars_fragment:kd,lights_fragment_begin:Vd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Yd,logdepthbuf_vertex:Kd,map_fragment:$d,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:eu,metalnessmap_pars_fragment:tu,morphcolor_vertex:nu,morphnormal_vertex:iu,morphtarget_pars_vertex:ru,morphtarget_vertex:su,normal_fragment_begin:au,normal_fragment_maps:ou,normal_pars_fragment:lu,normal_pars_vertex:cu,normal_vertex:du,normalmap_pars_fragment:uu,clearcoat_normal_fragment_begin:hu,clearcoat_normal_fragment_maps:fu,clearcoat_pars_fragment:pu,iridescence_pars_fragment:mu,opaque_fragment:gu,packing:_u,premultiplied_alpha_fragment:vu,project_vertex:xu,dithering_fragment:yu,dithering_pars_fragment:Su,roughnessmap_fragment:Eu,roughnessmap_pars_fragment:Mu,shadowmap_pars_fragment:bu,shadowmap_pars_vertex:Tu,shadowmap_vertex:Au,shadowmask_pars_fragment:wu,skinbase_vertex:Cu,skinning_pars_vertex:Ru,skinning_vertex:Lu,skinnormal_vertex:Pu,specularmap_fragment:Du,specularmap_pars_fragment:Uu,tonemapping_fragment:Iu,tonemapping_pars_fragment:Nu,transmission_fragment:Fu,transmission_pars_fragment:Ou,uv_pars_fragment:Bu,uv_pars_vertex:zu,uv_vertex:Gu,worldpos_vertex:Hu,background_vert:ku,background_frag:Vu,backgroundCube_vert:Wu,backgroundCube_frag:Xu,cube_vert:ju,cube_frag:qu,depth_vert:Yu,depth_frag:Ku,distanceRGBA_vert:$u,distanceRGBA_frag:Zu,equirect_vert:Ju,equirect_frag:Qu,linedashed_vert:eh,linedashed_frag:th,meshbasic_vert:nh,meshbasic_frag:ih,meshlambert_vert:rh,meshlambert_frag:sh,meshmatcap_vert:ah,meshmatcap_frag:oh,meshnormal_vert:lh,meshnormal_frag:ch,meshphong_vert:dh,meshphong_frag:uh,meshphysical_vert:hh,meshphysical_frag:fh,meshtoon_vert:ph,meshtoon_frag:mh,points_vert:gh,points_frag:_h,shadow_vert:vh,shadow_frag:xh,sprite_vert:yh,sprite_frag:Sh},se={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Wt={basic:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Et([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Et([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Et([se.points,se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Et([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Et([se.common,se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Et([se.sprite,se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Et([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Et([se.lights,se.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Wt.physical={uniforms:Et([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ki={r:0,b:0,g:0};function Eh(i,e,t,n,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,d,h=null,p=0,m=null;function g(f,u){let T=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),T=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===lr)?(d===void 0&&(d=new Tt(new Nn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:ui(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,(h!==v||p!==v.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tt(new hi(2,2),new vn({name:"BackgroundMaterial",uniforms:ui(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function y(f,u){f.getRGB(Ki,Fo(i)),n.buffers.color.setClear(Ki.r,Ki.g,Ki.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,y(a,l)},render:g}}function Mh(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,d=!1;function h(P,k,F,Y,W){let X=!1;if(o){const q=y(Y,F,k);c!==q&&(c=q,m(c.object)),X=u(P,Y,F,W),X&&T(P,Y,F,W)}else{const q=k.wireframe===!0;(c.geometry!==Y.id||c.program!==F.id||c.wireframe!==q)&&(c.geometry=Y.id,c.program=F.id,c.wireframe=q,X=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,z(P,k,F,Y),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,k,F){const Y=F.wireframe===!0;let W=a[P.id];W===void 0&&(W={},a[P.id]=W);let X=W[k.id];X===void 0&&(X={},W[k.id]=X);let q=X[Y];return q===void 0&&(q=f(p()),X[Y]=q),q}function f(P){const k=[],F=[],Y=[];for(let W=0;W<r;W++)k[W]=0,F[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:Y,object:P,attributes:{},index:null}}function u(P,k,F,Y){const W=c.attributes,X=k.attributes;let q=0;const re=F.getAttributes();for(const ae in re)if(re[ae].location>=0){const V=W[ae];let Q=X[ae];if(Q===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),V===void 0||V.attribute!==Q||Q&&V.data!==Q.data)return!0;q++}return c.attributesNum!==q||c.index!==Y}function T(P,k,F,Y){const W={},X=k.attributes;let q=0;const re=F.getAttributes();for(const ae in re)if(re[ae].location>=0){let V=X[ae];V===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));const Q={};Q.attribute=V,V&&V.data&&(Q.data=V.data),W[ae]=Q,q++}c.attributes=W,c.attributesNum=q,c.index=Y}function v(){const P=c.newAttributes;for(let k=0,F=P.length;k<F;k++)P[k]=0}function M(P){L(P,0)}function L(P,k){const F=c.newAttributes,Y=c.enabledAttributes,W=c.attributeDivisors;F[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),W[P]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),W[P]=k)}function R(){const P=c.newAttributes,k=c.enabledAttributes;for(let F=0,Y=k.length;F<Y;F++)k[F]!==P[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function w(P,k,F,Y,W,X,q){q===!0?i.vertexAttribIPointer(P,k,F,W,X):i.vertexAttribPointer(P,k,F,Y,W,X)}function z(P,k,F,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=Y.attributes,X=F.getAttributes(),q=k.defaultAttributeValues;for(const re in X){const ae=X[re];if(ae.location>=0){let we=W[re];if(we===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(we=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(we=P.instanceColor)),we!==void 0){const V=we.normalized,Q=we.itemSize,ue=t.get(we);if(ue===void 0)continue;const Ee=ue.buffer,be=ue.type,fe=ue.bytesPerElement,je=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||we.gpuType===_o);if(we.isInterleavedBufferAttribute){const De=we.data,I=De.stride,at=we.offset;if(De.isInstancedInterleavedBuffer){for(let ye=0;ye<ae.locationSize;ye++)L(ae.location+ye,De.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let ye=0;ye<ae.locationSize;ye++)M(ae.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ye=0;ye<ae.locationSize;ye++)w(ae.location+ye,Q/ae.locationSize,be,V,I*fe,(at+Q/ae.locationSize*ye)*fe,je)}else{if(we.isInstancedBufferAttribute){for(let De=0;De<ae.locationSize;De++)L(ae.location+De,we.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let De=0;De<ae.locationSize;De++)M(ae.location+De);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let De=0;De<ae.locationSize;De++)w(ae.location+De,Q/ae.locationSize,be,V,Q*fe,Q/ae.locationSize*De*fe,je)}}else if(q!==void 0){const V=q[re];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(ae.location,V);break;case 3:i.vertexAttrib3fv(ae.location,V);break;case 4:i.vertexAttrib4fv(ae.location,V);break;default:i.vertexAttrib1fv(ae.location,V)}}}}R()}function K(){H();for(const P in a){const k=a[P];for(const F in k){const Y=k[F];for(const W in Y)g(Y[W].object),delete Y[W];delete k[F]}delete a[P]}}function _(P){if(a[P.id]===void 0)return;const k=a[P.id];for(const F in k){const Y=k[F];for(const W in Y)g(Y[W].object),delete Y[W];delete k[F]}delete a[P.id]}function A(P){for(const k in a){const F=a[k];if(F[P.id]===void 0)continue;const Y=F[P.id];for(const W in Y)g(Y[W].object),delete Y[W];delete F[P.id]}}function H(){j(),d=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:j,dispose:K,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:M,disableUnusedAttributes:R}}function bh(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}function a(d,h){i.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,p){if(p===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,d,h,p),t.update(h,s,p)}function c(d,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(d[g],h[g]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Th(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,M=o||e.has("OES_texture_float"),L=v&&M,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:R}}function Ah(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new hn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=d(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,y=h.clipIntersection,f=h.clipShadows,u=i.get(h);if(!r||g===null||g.length===0||s&&!f)s?d(null):c();else{const T=s?0:n,v=T*4;let M=u.clippingState||null;l.value=M,M=d(g,p,v,m);for(let L=0;L!==v;++L)M[L]=t[L];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,p,m,g){const y=h!==null?h.length:0;let f=null;if(y!==0){if(f=l.value,g!==!0||f===null){const u=m+y*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<u)&&(f=new Float32Array(u));for(let v=0,M=m;v!==y;++v,M+=4)o.copy(h[v]).applyMatrix4(T,a),o.normal.toArray(f,M),f[M+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function wh(i){let e=new WeakMap;function t(o,a){return a===es?o.mapping=li:a===ts&&(o.mapping=ci),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===es||a===ts)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Go extends Oo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Ca=[.125,.215,.35,.446,.526,.582],wn=20,Vr=new Go,Ra=new ke;let Wr=null,Xr=0,jr=0;const Tn=(1+Math.sqrt(5))/2,ei=1/Tn,La=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Tn,ei),new D(0,Tn,-ei),new D(ei,0,Tn),new D(-ei,0,Tn),new D(Tn,ei,0),new D(-Tn,ei,0)];class Pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr,Xr,jr),e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Ei,format:kt,colorSpace:rn,depthBuffer:!1},r=Da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ch(s)),this._blurMaterial=Rh(s,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,n,r){const a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Ra),d.toneMapping=mn,d.autoClear=!1;const m=new Uo({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new Tt(new Nn,m);let y=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,y=!0):(m.color.copy(Ra),y=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):T===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;$i(r,T*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===li||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=La[(r-1)%La.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Tt(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wn-1),y=s/g,f=isFinite(s)?1+Math.floor(d*y):wn;f>wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${wn}`);const u=[];let T=0;for(let w=0;w<wn;++w){const z=w/y,K=Math.exp(-z*z/2);u.push(K),w===0?T+=K:w<f&&(T+=2*K)}for(let w=0;w<u.length;w++)u[w]=u[w]/T;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const M=this._sizeLods[r],L=3*M*(r>v-ni?r-v+ni:0),R=4*(this._cubeSize-M);$i(t,L,R,3*M,2*M),l.setRenderTarget(t),l.render(h,Vr)}}function Ch(i){const e=[],t=[],n=[];let r=i;const s=i-ni+1+Ca.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ni?l=Ca[o-i+ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,y=3,f=2,u=1,T=new Float32Array(y*g*m),v=new Float32Array(f*g*m),M=new Float32Array(u*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,z=R>2?0:-1,K=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];T.set(K,y*g*R),v.set(p,f*g*R);const _=[R,R,R,R,R,R];M.set(_,u*g*R)}const L=new Vt;L.setAttribute("position",new jt(T,y)),L.setAttribute("uv",new jt(v,f)),L.setAttribute("faceIndex",new jt(M,u)),e.push(L),r>ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Da(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Rh(i,e,t){const n=new Float32Array(wn),r=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ua(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ia(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lh(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===es||l===ts,d=l===li||l===ci;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Pa(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new Pa(i));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ph(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Dh(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const y=p.morphAttributes[g];for(let f=0,u=y.length;f<u;f++)e.remove(y[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const y=m[g];for(let f=0,u=y.length;f<u;f++)e.update(y[f],i.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,g=h.attributes.position;let y=0;if(m!==null){const T=m.array;y=m.version;for(let v=0,M=T.length;v<M;v+=3){const L=T[v+0],R=T[v+1],w=T[v+2];p.push(L,R,R,w,w,L)}}else if(g!==void 0){const T=g.array;y=g.version;for(let v=0,M=T.length/3-1;v<M;v+=3){const L=v+0,R=v+1,w=v+2;p.push(L,R,R,w,w,L)}}else return;const f=new(wo(p)?No:Io)(p,1);f.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,f)}function d(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Uh(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,g){i.drawElements(s,g,a,m*l),t.update(g,s,1)}function h(m,g,y){if(y===0)return;let f,u;if(r)f=i,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,g,a,m*l,y),t.update(g,s,y)}function p(m,g,y){if(y===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<y;u++)this.render(m[u]/l,g[u]);else{f.multiDrawElementsWEBGL(s,g,0,a,m,0,y);let u=0;for(let T=0;T<y;T++)u+=g[T];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function Ih(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Nh(i,e){return i[0]-e[0]}function Fh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Oh(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let f=s.get(d);if(f===void 0||f.count!==y){let k=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",k)};var m=k;f!==void 0&&f.texture.dispose();const v=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,L=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let K=0;v===!0&&(K=1),M===!0&&(K=2),L===!0&&(K=3);let _=d.attributes.position.count*K,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const H=new Float32Array(_*A*4*y),j=new Lo(H,_,A,y);j.type=tn,j.needsUpdate=!0;const P=K*4;for(let F=0;F<y;F++){const Y=R[F],W=w[F],X=z[F],q=_*A*4*F;for(let re=0;re<Y.count;re++){const ae=re*P;v===!0&&(o.fromBufferAttribute(Y,re),H[q+ae+0]=o.x,H[q+ae+1]=o.y,H[q+ae+2]=o.z,H[q+ae+3]=0),M===!0&&(o.fromBufferAttribute(W,re),H[q+ae+4]=o.x,H[q+ae+5]=o.y,H[q+ae+6]=o.z,H[q+ae+7]=0),L===!0&&(o.fromBufferAttribute(X,re),H[q+ae+8]=o.x,H[q+ae+9]=o.y,H[q+ae+10]=o.z,H[q+ae+11]=X.itemSize===4?o.w:1)}}f={count:y,texture:j,size:new Pe(_,A)},s.set(d,f),d.addEventListener("dispose",k)}let u=0;for(let v=0;v<p.length;v++)u+=p[v];const T=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const g=p===void 0?0:p.length;let y=n[d.id];if(y===void 0||y.length!==g){y=[];for(let M=0;M<g;M++)y[M]=[M,0];n[d.id]=y}for(let M=0;M<g;M++){const L=y[M];L[0]=M,L[1]=p[M]}y.sort(Fh);for(let M=0;M<8;M++)M<g&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Nh);const f=d.morphAttributes.position,u=d.morphAttributes.normal;let T=0;for(let M=0;M<8;M++){const L=a[M],R=L[0],w=L[1];R!==Number.MAX_SAFE_INTEGER&&w?(f&&d.getAttribute("morphTarget"+M)!==f[R]&&d.setAttribute("morphTarget"+M,f[R]),u&&d.getAttribute("morphNormal"+M)!==u[R]&&d.setAttribute("morphNormal"+M,u[R]),r[M]=w,T+=w):(f&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),u&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const v=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Bh(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ho extends Rt{constructor(e,t,n,r,s,o,a,l,c,d){if(d=d!==void 0?d:Ln,d!==Ln&&d!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ln&&(n=fn),n===void 0&&d===di&&(n=Rn),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ko=new Rt,Vo=new Ho(1,1);Vo.compareFunction=Ao;const Wo=new Lo,Xo=new Ec,jo=new Bo,Na=[],Fa=[],Oa=new Float32Array(16),Ba=new Float32Array(9),za=new Float32Array(4);function pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Na[r];if(s===void 0&&(s=new Float32Array(r),Na[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Vh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;za.set(n),i.uniformMatrix2fv(this.addr,!1,za),lt(t,n)}}function Wh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ba.set(n),i.uniformMatrix3fv(this.addr,!1,Ba),lt(t,n)}}function Xh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Oa.set(n),i.uniformMatrix4fv(this.addr,!1,Oa),lt(t,n)}}function jh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function $h(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function ef(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Vo:ko;t.setTexture2D(e||s,r)}function tf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xo,r)}function nf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||jo,r)}function rf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wo,r)}function sf(i){switch(i){case 5126:return zh;case 35664:return Gh;case 35665:return Hh;case 35666:return kh;case 35674:return Vh;case 35675:return Wh;case 35676:return Xh;case 5124:case 35670:return jh;case 35667:case 35671:return qh;case 35668:case 35672:return Yh;case 35669:case 35673:return Kh;case 5125:return $h;case 36294:return Zh;case 36295:return Jh;case 36296:return Qh;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return rf}}function af(i,e){i.uniform1fv(this.addr,e)}function of(i,e){const t=pi(e,this.size,2);i.uniform2fv(this.addr,t)}function lf(i,e){const t=pi(e,this.size,3);i.uniform3fv(this.addr,t)}function cf(i,e){const t=pi(e,this.size,4);i.uniform4fv(this.addr,t)}function df(i,e){const t=pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uf(i,e){const t=pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hf(i,e){const t=pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ff(i,e){i.uniform1iv(this.addr,e)}function pf(i,e){i.uniform2iv(this.addr,e)}function mf(i,e){i.uniform3iv(this.addr,e)}function gf(i,e){i.uniform4iv(this.addr,e)}function _f(i,e){i.uniform1uiv(this.addr,e)}function vf(i,e){i.uniform2uiv(this.addr,e)}function xf(i,e){i.uniform3uiv(this.addr,e)}function yf(i,e){i.uniform4uiv(this.addr,e)}function Sf(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ko,s[o])}function Ef(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Xo,s[o])}function Mf(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||jo,s[o])}function bf(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wo,s[o])}function Tf(i){switch(i){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return df;case 35675:return uf;case 35676:return hf;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return vf;case 36295:return xf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return Mf;case 36289:case 36303:case 36311:case 36292:return bf}}class Af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sf(t.type)}}class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tf(t.type)}}class Cf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function Ga(i,e){i.seq.push(e),i.map[e.id]=e}function Rf(i,e,t){const n=i.name,r=n.length;for(qr.lastIndex=0;;){const s=qr.exec(n),o=qr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ga(t,c===void 0?new Af(a,i,e):new wf(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Cf(a),Ga(t,h)),t=h}}}class tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ha(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lf=37297;let Pf=0;function Df(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Uf(i){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(i);let n;switch(e===t?n="":e===sr&&t===rr?n="LinearDisplayP3ToLinearSRGB":e===rr&&t===sr&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case cr:return[n,"LinearTransferOETF"];case pt:case ds:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ka(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Df(i.getShaderSource(e),o)}else return r}function If(i,e){const t=Uf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nf(i,e){let t;switch(e){case Xl:t="Linear";break;case jl:t="Reinhard";break;case ql:t="OptimizedCineon";break;case Yl:t="ACESFilmic";break;case $l:t="AgX";break;case Kl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ff(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function Of(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ii).join(`
`)}function Bf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ii(i){return i!==""}function Va(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(i){return i.replace(Gf,kf)}const Hf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(i,e){let t=Be[e];if(t===void 0){const n=Hf.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return os(t)}const Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(i){return i.replace(Vf,Wf)}function Wf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===po?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function jf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Yf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Vl:e="ENVMAP_BLENDING_MIX";break;case Wl:e="ENVMAP_BLENDING_ADD";break}return e}function Kf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $f(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xf(t),c=jf(t),d=qf(t),h=Yf(t),p=Kf(t),m=t.isWebGL2?"":Ff(t),g=Of(t),y=Bf(s),f=r.createProgram();let u,T,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ii).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ii).join(`
`),T.length>0&&(T+=`
`)):(u=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),T=[m,ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Be.tonemapping_pars_fragment:"",t.toneMapping!==mn?Nf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,If("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),o=os(o),o=Va(o,t),o=Wa(o,t),a=os(a),a=Va(a,t),a=Wa(a,t),o=Xa(o),a=Xa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const M=v+u+o,L=v+T+a,R=Ha(r,r.VERTEX_SHADER,M),w=Ha(r,r.FRAGMENT_SHADER,L);r.attachShader(f,R),r.attachShader(f,w),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function z(H){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(f).trim(),P=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(w).trim();let F=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,R,w);else{const W=ka(r,R,"vertex"),X=ka(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+W+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||k==="")&&(Y=!1);Y&&(H.diagnostics={runnable:F,programLog:j,vertexShader:{log:P,prefix:u},fragmentShader:{log:k,prefix:T}})}r.deleteShader(R),r.deleteShader(w),K=new tr(r,f),_=zf(r,f)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let _;this.getAttributes=function(){return _===void 0&&z(this),_};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(f,Lf)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=w,this}let Zf=0;class Jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qf(e),t.set(e,n)),n}}class Qf{constructor(e){this.id=Zf++,this.code=e,this.usedTimes=0}}function ep(i,e,t,n,r,s,o){const a=new Po,l=new Jf,c=new Set,d=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function u(_,A,H,j,P){const k=j.fog,F=P.geometry,Y=_.isMeshStandardMaterial?j.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||Y),X=W&&W.mapping===lr?W.image.height:null,q=y[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ae=re!==void 0?re.length:0;let we=0;F.morphAttributes.position!==void 0&&(we=1),F.morphAttributes.normal!==void 0&&(we=2),F.morphAttributes.color!==void 0&&(we=3);let V,Q,ue,Ee;if(q){const Xe=Wt[q];V=Xe.vertexShader,Q=Xe.fragmentShader}else V=_.vertexShader,Q=_.fragmentShader,l.update(_),ue=l.getVertexShaderID(_),Ee=l.getFragmentShaderID(_);const be=i.getRenderTarget(),fe=P.isInstancedMesh===!0,je=P.isBatchedMesh===!0,De=!!_.map,I=!!_.matcap,at=!!W,ye=!!_.aoMap,Ce=!!_.lightMap,ge=!!_.bumpMap,Je=!!_.normalMap,Ue=!!_.displacementMap,E=!!_.emissiveMap,x=!!_.metalnessMap,N=!!_.roughnessMap,ne=_.anisotropy>0,$=_.clearcoat>0,ee=_.iridescence>0,pe=_.sheen>0,oe=_.transmission>0,he=ne&&!!_.anisotropyMap,Me=$&&!!_.clearcoatMap,Ie=$&&!!_.clearcoatNormalMap,Z=$&&!!_.clearcoatRoughnessMap,Ke=ee&&!!_.iridescenceMap,ze=ee&&!!_.iridescenceThicknessMap,Re=pe&&!!_.sheenColorMap,ve=pe&&!!_.sheenRoughnessMap,ce=!!_.specularMap,Fe=!!_.specularColorMap,C=!!_.specularIntensityMap,ie=oe&&!!_.transmissionMap,le=oe&&!!_.thicknessMap,xe=!!_.gradientMap,b=!!_.alphaMap,te=_.alphaTest>0,J=!!_.alphaHash,me=!!_.extensions;let Se=mn;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Se=i.toneMapping);const qe={isWebGL2:h,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:V,fragmentShader:Q,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:je,instancing:fe,instancingColor:fe&&P.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:rn,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:I,envMap:at,envMapMode:at&&W.mapping,envMapCubeUVHeight:X,aoMap:ye,lightMap:Ce,bumpMap:ge,normalMap:Je,displacementMap:m&&Ue,emissiveMap:E,normalMapObjectSpace:Je&&_.normalMapType===oc,normalMapTangentSpace:Je&&_.normalMapType===To,metalnessMap:x,roughnessMap:N,anisotropy:ne,anisotropyMap:he,clearcoat:$,clearcoatMap:Me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Z,iridescence:ee,iridescenceMap:Ke,iridescenceThicknessMap:ze,sheen:pe,sheenColorMap:Re,sheenRoughnessMap:ve,specularMap:ce,specularColorMap:Fe,specularIntensityMap:C,transmission:oe,transmissionMap:ie,thicknessMap:le,gradientMap:xe,opaque:_.transparent===!1&&_.blending===ri&&_.alphaToCoverage===!1,alphaMap:b,alphaTest:te,alphaHash:J,combine:_.combine,mapUv:De&&f(_.map.channel),aoMapUv:ye&&f(_.aoMap.channel),lightMapUv:Ce&&f(_.lightMap.channel),bumpMapUv:ge&&f(_.bumpMap.channel),normalMapUv:Je&&f(_.normalMap.channel),displacementMapUv:Ue&&f(_.displacementMap.channel),emissiveMapUv:E&&f(_.emissiveMap.channel),metalnessMapUv:x&&f(_.metalnessMap.channel),roughnessMapUv:N&&f(_.roughnessMap.channel),anisotropyMapUv:he&&f(_.anisotropyMap.channel),clearcoatMapUv:Me&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&f(_.sheenRoughnessMap.channel),specularMapUv:ce&&f(_.specularMap.channel),specularColorMapUv:Fe&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:ie&&f(_.transmissionMap.channel),thicknessMapUv:le&&f(_.thicknessMap.channel),alphaMapUv:b&&f(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Je||ne),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(De||b),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===Ct,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:me&&_.extensions.derivatives===!0,extensionFragDepth:me&&_.extensions.fragDepth===!0,extensionDrawBuffers:me&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function T(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const H in _.defines)A.push(H),A.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(v(A,_),M(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function v(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),_.push(a.mask)}function L(_){const A=y[_.type];let H;if(A){const j=Wt[A];H=Nc.clone(j.uniforms)}else H=_.uniforms;return H}function R(_,A){let H;for(let j=0,P=d.length;j<P;j++){const k=d[j];if(k.cacheKey===A){H=k,++H.usedTimes;break}}return H===void 0&&(H=new $f(i,A,_,s),d.push(H)),H}function w(_){if(--_.usedTimes===0){const A=d.indexOf(_);d[A]=d[d.length-1],d.pop(),_.destroy()}}function z(_){l.remove(_)}function K(){l.dispose()}return{getParameters:u,getProgramCacheKey:T,getUniforms:L,acquireProgram:R,releaseProgram:w,releaseShaderCache:z,programs:d,dispose:K}}function tp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ya(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,m,g,y,f){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:y,group:f},i[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=y,u.group=f),e++,u}function a(h,p,m,g,y,f){const u=o(h,p,m,g,y,f);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(h,p,m,g,y,f){const u=o(h,p,m,g,y,f);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(h,p){t.length>1&&t.sort(h||np),n.length>1&&n.sort(p||qa),r.length>1&&r.sort(p||qa)}function d(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function ip(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ya,i.set(n,[o])):r>=s.length?(o=new Ya,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function sp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ap=0;function op(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lp(i,e){const t=new rp,n=sp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new D);const s=new D,o=new st,a=new st;function l(d,h){let p=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let y=0,f=0,u=0,T=0,v=0,M=0,L=0,R=0,w=0,z=0,K=0;d.sort(op);const _=h===!0?Math.PI:1;for(let H=0,j=d.length;H<j;H++){const P=d[H],k=P.color,F=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=k.r*F*_,m+=k.g*F*_,g+=k.b*F*_;else if(P.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(P.sh.coefficients[X],F);K++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*_),P.castShadow){const q=P.shadow,re=n.get(P);re.shadowBias=q.bias,re.shadowNormalBias=q.normalBias,re.shadowRadius=q.radius,re.shadowMapSize=q.mapSize,r.directionalShadow[y]=re,r.directionalShadowMap[y]=W,r.directionalShadowMatrix[y]=P.shadow.matrix,M++}r.directional[y]=X,y++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(F*_),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,r.spot[u]=X;const q=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,q.updateMatrices(P),P.castShadow&&z++),r.spotLightMatrix[u]=q.matrix,P.castShadow){const re=n.get(P);re.shadowBias=q.bias,re.shadowNormalBias=q.normalBias,re.shadowRadius=q.radius,re.shadowMapSize=q.mapSize,r.spotShadow[u]=re,r.spotShadowMap[u]=W,R++}u++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(k).multiplyScalar(F),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),r.rectArea[T]=X,T++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*_),X.distance=P.distance,X.decay=P.decay,P.castShadow){const q=P.shadow,re=n.get(P);re.shadowBias=q.bias,re.shadowNormalBias=q.normalBias,re.shadowRadius=q.radius,re.shadowMapSize=q.mapSize,re.shadowCameraNear=q.camera.near,re.shadowCameraFar=q.camera.far,r.pointShadow[f]=re,r.pointShadowMap[f]=W,r.pointShadowMatrix[f]=P.shadow.matrix,L++}r.point[f]=X,f++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(F*_),X.groundColor.copy(P.groundColor).multiplyScalar(F*_),r.hemi[v]=X,v++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==y||A.pointLength!==f||A.spotLength!==u||A.rectAreaLength!==T||A.hemiLength!==v||A.numDirectionalShadows!==M||A.numPointShadows!==L||A.numSpotShadows!==R||A.numSpotMaps!==w||A.numLightProbes!==K)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=T,r.point.length=f,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+w-z,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=K,A.directionalLength=y,A.pointLength=f,A.spotLength=u,A.rectAreaLength=T,A.hemiLength=v,A.numDirectionalShadows=M,A.numPointShadows=L,A.numSpotShadows=R,A.numSpotMaps=w,A.numLightProbes=K,r.version=ap++)}function c(d,h){let p=0,m=0,g=0,y=0,f=0;const u=h.matrixWorldInverse;for(let T=0,v=d.length;T<v;T++){const M=d[T];if(M.isDirectionalLight){const L=r.directional[p];L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),p++}else if(M.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),g++}else if(M.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const L=r.hemi[f];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:r}}function Ka(i,e){const t=new lp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cp(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ka(i,e),t.set(s,[l])):o>=a.length?(l=new Ka(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class dp extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class up extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pp(i,e,t){let n=new hs;const r=new Pe,s=new Pe,o=new ut,a=new dp({depthPacking:ac}),l=new up,c={},d=t.maxTextureSize,h={[_n]:Ct,[Ct]:_n,[en]:en},p=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:hp,fragmentShader:fp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Tt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let u=this.type;this.render=function(R,w,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const K=i.getRenderTarget(),_=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),H=i.state;H.setBlending(pn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=u!==Qt&&this.type===Qt,P=u===Qt&&this.type!==Qt;for(let k=0,F=R.length;k<F;k++){const Y=R[k],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const X=W.getFrameExtents();if(r.multiply(X),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||j===!0||P===!0){const re=this.type!==Qt?{minFilter:Mt,magFilter:Mt}:{};W.map!==null&&W.map.dispose(),W.map=new Un(r.x,r.y,re),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const q=W.getViewportCount();for(let re=0;re<q;re++){const ae=W.getViewport(re);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),H.viewport(o),W.updateMatrices(Y,re),n=W.getFrustum(),M(w,z,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Qt&&T(W,z),W.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(K,_,A)};function T(R,w){const z=e.update(y);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Un(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,z,p,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,z,m,y,null)}function v(R,w,z,K){let _=null;const A=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)_=A;else if(_=z.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=_.uuid,j=w.uuid;let P=c[H];P===void 0&&(P={},c[H]=P);let k=P[j];k===void 0&&(k=_.clone(),P[j]=k,w.addEventListener("dispose",L)),_=k}if(_.visible=w.visible,_.wireframe=w.wireframe,K===Qt?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,z.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=i.properties.get(_);H.light=z}return _}function M(R,w,z,K,_){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Qt)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const j=e.update(R),P=R.material;if(Array.isArray(P)){const k=j.groups;for(let F=0,Y=k.length;F<Y;F++){const W=k[F],X=P[W.materialIndex];if(X&&X.visible){const q=v(R,X,K,_);R.onBeforeShadow(i,R,w,z,j,q,W),i.renderBufferDirect(z,null,j,q,R,W),R.onAfterShadow(i,R,w,z,j,q,W)}}}else if(P.visible){const k=v(R,P,K,_);R.onBeforeShadow(i,R,w,z,j,k,null),i.renderBufferDirect(z,null,j,k,R,null),R.onAfterShadow(i,R,w,z,j,k,null)}}const H=R.children;for(let j=0,P=H.length;j<P;j++)M(H[j],w,z,K,_)}function L(R){R.target.removeEventListener("dispose",L);for(const z in c){const K=c[z],_=R.target.uuid;_ in K&&(K[_].dispose(),delete K[_])}}}function mp(i,e,t){const n=t.isWebGL2;function r(){let b=!1;const te=new ut;let J=null;const me=new ut(0,0,0,0);return{setMask:function(Se){J!==Se&&!b&&(i.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){b=Se},setClear:function(Se,qe,Xe,Ze,ht){ht===!0&&(Se*=Ze,qe*=Ze,Xe*=Ze),te.set(Se,qe,Xe,Ze),me.equals(te)===!1&&(i.clearColor(Se,qe,Xe,Ze),me.copy(te))},reset:function(){b=!1,J=null,me.set(-1,0,0,0)}}}function s(){let b=!1,te=null,J=null,me=null;return{setTest:function(Se){Se?fe(i.DEPTH_TEST):je(i.DEPTH_TEST)},setMask:function(Se){te!==Se&&!b&&(i.depthMask(Se),te=Se)},setFunc:function(Se){if(J!==Se){switch(Se){case Fl:i.depthFunc(i.NEVER);break;case Ol:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case zl:i.depthFunc(i.EQUAL);break;case Gl:i.depthFunc(i.GEQUAL);break;case Hl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=Se}},setLocked:function(Se){b=Se},setClear:function(Se){me!==Se&&(i.clearDepth(Se),me=Se)},reset:function(){b=!1,te=null,J=null,me=null}}}function o(){let b=!1,te=null,J=null,me=null,Se=null,qe=null,Xe=null,Ze=null,ht=null;return{setTest:function(Ye){b||(Ye?fe(i.STENCIL_TEST):je(i.STENCIL_TEST))},setMask:function(Ye){te!==Ye&&!b&&(i.stencilMask(Ye),te=Ye)},setFunc:function(Ye,nt,St){(J!==Ye||me!==nt||Se!==St)&&(i.stencilFunc(Ye,nt,St),J=Ye,me=nt,Se=St)},setOp:function(Ye,nt,St){(qe!==Ye||Xe!==nt||Ze!==St)&&(i.stencilOp(Ye,nt,St),qe=Ye,Xe=nt,Ze=St)},setLocked:function(Ye){b=Ye},setClear:function(Ye){ht!==Ye&&(i.clearStencil(Ye),ht=Ye)},reset:function(){b=!1,te=null,J=null,me=null,Se=null,qe=null,Xe=null,Ze=null,ht=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,y=[],f=null,u=!1,T=null,v=null,M=null,L=null,R=null,w=null,z=null,K=new ke(0,0,0),_=0,A=!1,H=null,j=null,P=null,k=null,F=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=X>=2);let re=null,ae={};const we=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),Q=new ut().fromArray(we),ue=new ut().fromArray(V);function Ee(b,te,J,me){const Se=new Uint8Array(4),qe=i.createTexture();i.bindTexture(b,qe),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<J;Xe++)n&&(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)?i.texImage3D(te,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(te+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return qe}const be={};be[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(i.DEPTH_TEST),l.setFunc(nr),Ue(!1),E(Cs),fe(i.CULL_FACE),ge(pn);function fe(b){p[b]!==!0&&(i.enable(b),p[b]=!0)}function je(b){p[b]!==!1&&(i.disable(b),p[b]=!1)}function De(b,te){return m[b]!==te?(i.bindFramebuffer(b,te),m[b]=te,n&&(b===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=te),b===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=te)),!0):!1}function I(b,te){let J=y,me=!1;if(b)if(J=g.get(te),J===void 0&&(J=[],g.set(te,J)),b.isWebGLMultipleRenderTargets){const Se=b.texture;if(J.length!==Se.length||J[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Xe=Se.length;qe<Xe;qe++)J[qe]=i.COLOR_ATTACHMENT0+qe;J.length=Se.length,me=!0}}else J[0]!==i.COLOR_ATTACHMENT0&&(J[0]=i.COLOR_ATTACHMENT0,me=!0);else J[0]!==i.BACK&&(J[0]=i.BACK,me=!0);me&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function at(b){return f!==b?(i.useProgram(b),f=b,!0):!1}const ye={[An]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[El]:i.FUNC_REVERSE_SUBTRACT};if(n)ye[Ds]=i.MIN,ye[Us]=i.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(ye[Ds]=b.MIN_EXT,ye[Us]=b.MAX_EXT)}const Ce={[Ml]:i.ZERO,[bl]:i.ONE,[Tl]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[Pl]:i.SRC_ALPHA_SATURATE,[Rl]:i.DST_COLOR,[wl]:i.DST_ALPHA,[Al]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Dl]:i.CONSTANT_COLOR,[Ul]:i.ONE_MINUS_CONSTANT_COLOR,[Il]:i.CONSTANT_ALPHA,[Nl]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(b,te,J,me,Se,qe,Xe,Ze,ht,Ye){if(b===pn){u===!0&&(je(i.BLEND),u=!1);return}if(u===!1&&(fe(i.BLEND),u=!0),b!==yl){if(b!==T||Ye!==A){if((v!==An||R!==An)&&(i.blendEquation(i.FUNC_ADD),v=An,R=An),Ye)switch(b){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.ONE,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ps:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}M=null,L=null,w=null,z=null,K.set(0,0,0),_=0,T=b,A=Ye}return}Se=Se||te,qe=qe||J,Xe=Xe||me,(te!==v||Se!==R)&&(i.blendEquationSeparate(ye[te],ye[Se]),v=te,R=Se),(J!==M||me!==L||qe!==w||Xe!==z)&&(i.blendFuncSeparate(Ce[J],Ce[me],Ce[qe],Ce[Xe]),M=J,L=me,w=qe,z=Xe),(Ze.equals(K)===!1||ht!==_)&&(i.blendColor(Ze.r,Ze.g,Ze.b,ht),K.copy(Ze),_=ht),T=b,A=!1}function Je(b,te){b.side===en?je(i.CULL_FACE):fe(i.CULL_FACE);let J=b.side===Ct;te&&(J=!J),Ue(J),b.blending===ri&&b.transparent===!1?ge(pn):ge(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const me=b.stencilWrite;c.setTest(me),me&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),N(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):je(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(b){H!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),H=b)}function E(b){b!==vl?(fe(i.CULL_FACE),b!==j&&(b===Cs?i.cullFace(i.BACK):b===xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):je(i.CULL_FACE),j=b}function x(b){b!==P&&(W&&i.lineWidth(b),P=b)}function N(b,te,J){b?(fe(i.POLYGON_OFFSET_FILL),(k!==te||F!==J)&&(i.polygonOffset(te,J),k=te,F=J)):je(i.POLYGON_OFFSET_FILL)}function ne(b){b?fe(i.SCISSOR_TEST):je(i.SCISSOR_TEST)}function $(b){b===void 0&&(b=i.TEXTURE0+Y-1),re!==b&&(i.activeTexture(b),re=b)}function ee(b,te,J){J===void 0&&(re===null?J=i.TEXTURE0+Y-1:J=re);let me=ae[J];me===void 0&&(me={type:void 0,texture:void 0},ae[J]=me),(me.type!==b||me.texture!==te)&&(re!==J&&(i.activeTexture(J),re=J),i.bindTexture(b,te||be[b]),me.type=b,me.texture=te)}function pe(){const b=ae[re];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Re(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Fe(b){Q.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),Q.copy(b))}function C(b){ue.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),ue.copy(b))}function ie(b,te){let J=h.get(te);J===void 0&&(J=new WeakMap,h.set(te,J));let me=J.get(b);me===void 0&&(me=i.getUniformBlockIndex(te,b.name),J.set(b,me))}function le(b,te){const me=h.get(te).get(b);d.get(te)!==me&&(i.uniformBlockBinding(te,me,b.__bindingPointIndex),d.set(te,me))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},re=null,ae={},m={},g=new WeakMap,y=[],f=null,u=!1,T=null,v=null,M=null,L=null,R=null,w=null,z=null,K=new ke(0,0,0),_=0,A=!1,H=null,j=null,P=null,k=null,F=null,Q.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:je,bindFramebuffer:De,drawBuffers:I,useProgram:at,setBlending:ge,setMaterial:Je,setFlipSided:Ue,setCullFace:E,setLineWidth:x,setPolygonOffset:N,setScissorTest:ne,activeTexture:$,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:he,texImage2D:ve,texImage3D:ce,updateUBOMapping:ie,uniformBlockBinding:le,texStorage2D:ze,texStorage3D:Re,texSubImage2D:Me,texSubImage3D:Ie,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ke,scissor:Fe,viewport:C,reset:xe}}function gp(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):or("canvas")}function y(E,x,N,ne){let $=1;if((E.width>ne||E.height>ne)&&($=ne/Math.max(E.width,E.height)),$<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ee=x?as:Math.floor,pe=ee($*E.width),oe=ee($*E.height);h===void 0&&(h=g(pe,oe));const he=N?g(pe,oe):h;return he.width=pe,he.height=oe,he.getContext("2d").drawImage(E,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+oe+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return ca(E.width)&&ca(E.height)}function u(E){return a?!1:E.wrapS!==Ht||E.wrapT!==Ht||E.minFilter!==Mt&&E.minFilter!==wt}function T(E,x){return E.generateMipmaps&&x&&E.minFilter!==Mt&&E.minFilter!==wt}function v(E){i.generateMipmap(E)}function M(E,x,N,ne,$=!1){if(a===!1)return x;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=x;if(x===i.RED&&(N===i.FLOAT&&(ee=i.R32F),N===i.HALF_FLOAT&&(ee=i.R16F),N===i.UNSIGNED_BYTE&&(ee=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.R8UI),N===i.UNSIGNED_SHORT&&(ee=i.R16UI),N===i.UNSIGNED_INT&&(ee=i.R32UI),N===i.BYTE&&(ee=i.R8I),N===i.SHORT&&(ee=i.R16I),N===i.INT&&(ee=i.R32I)),x===i.RG&&(N===i.FLOAT&&(ee=i.RG32F),N===i.HALF_FLOAT&&(ee=i.RG16F),N===i.UNSIGNED_BYTE&&(ee=i.RG8)),x===i.RGBA){const pe=$?ir:$e.getTransfer(ne);N===i.FLOAT&&(ee=i.RGBA32F),N===i.HALF_FLOAT&&(ee=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ee=pe===Qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function L(E,x,N){return T(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==wt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){return E===Mt||E===Is||E===gi?i.NEAREST:i.LINEAR}function w(E){const x=E.target;x.removeEventListener("dispose",w),K(x),x.isVideoTexture&&d.delete(x)}function z(E){const x=E.target;x.removeEventListener("dispose",z),A(x)}function K(E){const x=n.get(E);if(x.__webglInit===void 0)return;const N=E.source,ne=p.get(N);if(ne){const $=ne[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&_(E),Object.keys(ne).length===0&&p.delete(N)}n.remove(E)}function _(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const N=E.source,ne=p.get(N);delete ne[x.__cacheKey],o.memory.textures--}function A(E){const x=E.texture,N=n.get(E),ne=n.get(x);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(N.__webglFramebuffer[$]))for(let ee=0;ee<N.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(N.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(N.__webglFramebuffer[$]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[$])}else{if(Array.isArray(N.__webglFramebuffer))for(let $=0;$<N.__webglFramebuffer.length;$++)i.deleteFramebuffer(N.__webglFramebuffer[$]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let $=0;$<N.__webglColorRenderbuffer.length;$++)N.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[$]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let $=0,ee=x.length;$<ee;$++){const pe=n.get(x[$]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(x[$])}n.remove(x),n.remove(E)}let H=0;function j(){H=0}function P(){const E=H;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),H+=1,E}function k(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function F(E,x){const N=n.get(E);if(E.isVideoTexture&&Je(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(N,E,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function Y(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){Q(N,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function W(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){Q(N,E,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function X(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ue(N,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const q={[ns]:i.REPEAT,[Ht]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},re={[Mt]:i.NEAREST,[Is]:i.NEAREST_MIPMAP_NEAREST,[gi]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},ae={[lc]:i.NEVER,[pc]:i.ALWAYS,[cc]:i.LESS,[Ao]:i.LEQUAL,[dc]:i.EQUAL,[fc]:i.GEQUAL,[uc]:i.GREATER,[hc]:i.NOTEQUAL};function we(E,x,N){if(x.type===tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===wt||x.magFilter===xr||x.magFilter===gi||x.magFilter===Cn||x.minFilter===wt||x.minFilter===xr||x.minFilter===gi||x.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),N?(i.texParameteri(E,i.TEXTURE_WRAP_S,q[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,q[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,q[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,re[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,re[x.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ht||x.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,R(x.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Mt&&x.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Mt||x.minFilter!==gi&&x.minFilter!==Cn||x.type===tn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ei&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function V(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));const ne=x.source;let $=p.get(ne);$===void 0&&($={},p.set(ne,$));const ee=k(x);if(ee!==E.__cacheKey){$[ee]===void 0&&($[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[ee].usedTimes++;const pe=$[E.__cacheKey];pe!==void 0&&($[E.__cacheKey].usedTimes--,pe.usedTimes===0&&_(x)),E.__cacheKey=ee,E.__webglTexture=$[ee].texture}return N}function Q(E,x,N){let ne=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=i.TEXTURE_3D);const $=V(E,x),ee=x.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+N);const pe=n.get(ee);if(ee.version!==pe.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const oe=$e.getPrimaries($e.workingColorSpace),he=x.colorSpace===Ot?null:$e.getPrimaries(x.colorSpace),Me=x.colorSpace===Ot||oe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ie=u(x)&&f(x.image)===!1;let Z=y(x.image,Ie,!1,r.maxTextureSize);Z=Ue(x,Z);const Ke=f(Z)||a,ze=s.convert(x.format,x.colorSpace);let Re=s.convert(x.type),ve=M(x.internalFormat,ze,Re,x.colorSpace,x.isVideoTexture);we(ne,x,Ke);let ce;const Fe=x.mipmaps,C=a&&x.isVideoTexture!==!0&&ve!==Mo,ie=pe.__version===void 0||$===!0,le=ee.dataReady,xe=L(x,Z,Ke);if(x.isDepthTexture)ve=i.DEPTH_COMPONENT,a?x.type===tn?ve=i.DEPTH_COMPONENT32F:x.type===fn?ve=i.DEPTH_COMPONENT24:x.type===Rn?ve=i.DEPTH24_STENCIL8:ve=i.DEPTH_COMPONENT16:x.type===tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ln&&ve===i.DEPTH_COMPONENT&&x.type!==cs&&x.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=fn,Re=s.convert(x.type)),x.format===di&&ve===i.DEPTH_COMPONENT&&(ve=i.DEPTH_STENCIL,x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Rn,Re=s.convert(x.type))),ie&&(C?t.texStorage2D(i.TEXTURE_2D,1,ve,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ze,Re,null));else if(x.isDataTexture)if(Fe.length>0&&Ke){C&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Fe[0].width,Fe[0].height);for(let b=0,te=Fe.length;b<te;b++)ce=Fe[b],C?le&&t.texSubImage2D(i.TEXTURE_2D,b,0,0,ce.width,ce.height,ze,Re,ce.data):t.texImage2D(i.TEXTURE_2D,b,ve,ce.width,ce.height,0,ze,Re,ce.data);x.generateMipmaps=!1}else C?(ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Z.width,Z.height),le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ze,Re,Z.data)):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ze,Re,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){C&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ve,Fe[0].width,Fe[0].height,Z.depth);for(let b=0,te=Fe.length;b<te;b++)ce=Fe[b],x.format!==kt?ze!==null?C?le&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,ce.width,ce.height,Z.depth,ze,ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,b,ve,ce.width,ce.height,Z.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,ce.width,ce.height,Z.depth,ze,Re,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,b,ve,ce.width,ce.height,Z.depth,0,ze,Re,ce.data)}else{C&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Fe[0].width,Fe[0].height);for(let b=0,te=Fe.length;b<te;b++)ce=Fe[b],x.format!==kt?ze!==null?C?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,b,0,0,ce.width,ce.height,ze,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,b,ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?le&&t.texSubImage2D(i.TEXTURE_2D,b,0,0,ce.width,ce.height,ze,Re,ce.data):t.texImage2D(i.TEXTURE_2D,b,ve,ce.width,ce.height,0,ze,Re,ce.data)}else if(x.isDataArrayTexture)C?(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ve,Z.width,Z.height,Z.depth),le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ze,Re,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,ze,Re,Z.data);else if(x.isData3DTexture)C?(ie&&t.texStorage3D(i.TEXTURE_3D,xe,ve,Z.width,Z.height,Z.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ze,Re,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,ze,Re,Z.data);else if(x.isFramebufferTexture){if(ie)if(C)t.texStorage2D(i.TEXTURE_2D,xe,ve,Z.width,Z.height);else{let b=Z.width,te=Z.height;for(let J=0;J<xe;J++)t.texImage2D(i.TEXTURE_2D,J,ve,b,te,0,ze,Re,null),b>>=1,te>>=1}}else if(Fe.length>0&&Ke){C&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Fe[0].width,Fe[0].height);for(let b=0,te=Fe.length;b<te;b++)ce=Fe[b],C?le&&t.texSubImage2D(i.TEXTURE_2D,b,0,0,ze,Re,ce):t.texImage2D(i.TEXTURE_2D,b,ve,ze,Re,ce);x.generateMipmaps=!1}else C?(ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Z.width,Z.height),le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Re,Z)):t.texImage2D(i.TEXTURE_2D,0,ve,ze,Re,Z);T(x,Ke)&&v(ne),pe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ue(E,x,N){if(x.image.length!==6)return;const ne=V(E,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const ee=n.get($);if($.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);const pe=$e.getPrimaries($e.workingColorSpace),oe=x.colorSpace===Ot?null:$e.getPrimaries(x.colorSpace),he=x.colorSpace===Ot||pe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let b=0;b<6;b++)!Me&&!Ie?Z[b]=y(x.image[b],!1,!0,r.maxCubemapSize):Z[b]=Ie?x.image[b].image:x.image[b],Z[b]=Ue(x,Z[b]);const Ke=Z[0],ze=f(Ke)||a,Re=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),ce=M(x.internalFormat,Re,ve,x.colorSpace),Fe=a&&x.isVideoTexture!==!0,C=ee.__version===void 0||ne===!0,ie=$.dataReady;let le=L(x,Ke,ze);we(i.TEXTURE_CUBE_MAP,x,ze);let xe;if(Me){Fe&&C&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ce,Ke.width,Ke.height);for(let b=0;b<6;b++){xe=Z[b].mipmaps;for(let te=0;te<xe.length;te++){const J=xe[te];x.format!==kt?Re!==null?Fe?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te,0,0,J.width,J.height,Re,J.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te,ce,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te,0,0,J.width,J.height,Re,ve,J.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te,ce,J.width,J.height,0,Re,ve,J.data)}}}else{xe=x.mipmaps,Fe&&C&&(xe.length>0&&le++,t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ce,Z[0].width,Z[0].height));for(let b=0;b<6;b++)if(Ie){Fe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Z[b].width,Z[b].height,Re,ve,Z[b].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,ce,Z[b].width,Z[b].height,0,Re,ve,Z[b].data);for(let te=0;te<xe.length;te++){const me=xe[te].image[b].image;Fe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te+1,0,0,me.width,me.height,Re,ve,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te+1,ce,me.width,me.height,0,Re,ve,me.data)}}else{Fe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Re,ve,Z[b]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,ce,Re,ve,Z[b]);for(let te=0;te<xe.length;te++){const J=xe[te];Fe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te+1,0,0,Re,ve,J.image[b]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,te+1,ce,Re,ve,J.image[b])}}}T(x,ze)&&v(i.TEXTURE_CUBE_MAP),ee.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ee(E,x,N,ne,$,ee){const pe=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),he=M(N.internalFormat,pe,oe,N.colorSpace);if(!n.get(x).__hasExternalTextures){const Ie=Math.max(1,x.width>>ee),Z=Math.max(1,x.height>>ee);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ee,he,Ie,Z,x.depth,0,pe,oe,null):t.texImage2D($,ee,he,Ie,Z,0,pe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,$,n.get(N).__webglTexture,0,Ce(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,$,n.get(N).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(E,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||ge(x)){const $=x.depthTexture;$&&$.isDepthTexture&&($.type===tn?ne=i.DEPTH_COMPONENT32F:$.type===fn&&(ne=i.DEPTH_COMPONENT24));const ee=Ce(x);ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,ne,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ne,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const ne=Ce(x);N&&ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,x.width,x.height):ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let $=0;$<ne.length;$++){const ee=ne[$],pe=s.convert(ee.format,ee.colorSpace),oe=s.convert(ee.type),he=M(ee.internalFormat,pe,oe,ee.colorSpace),Me=Ce(x);N&&ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,he,x.width,x.height):ge(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const ne=n.get(x.depthTexture).__webglTexture,$=Ce(x);if(x.depthTexture.format===Ln)ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(x.depthTexture.format===di)ge(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function je(E){const x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");fe(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=i.createRenderbuffer(),be(x.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),be(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,x,N){const ne=n.get(E);x!==void 0&&Ee(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&je(E)}function I(E){const x=E.texture,N=n.get(E),ne=n.get(x);E.addEventListener("dispose",z),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=x.version,o.memory.textures++);const $=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultipleRenderTargets===!0,pe=f(E)||a;if($){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let he=0;he<x.mipmaps.length;he++)N.__webglFramebuffer[oe][he]=i.createFramebuffer()}else N.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)N.__webglFramebuffer[oe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ee)if(r.drawBuffers){const oe=E.texture;for(let he=0,Me=oe.length;he<Me;he++){const Ie=n.get(oe[he]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ge(E)===!1){const oe=ee?x:[x];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const Me=oe[he];N.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const Ie=s.convert(Me.format,Me.colorSpace),Z=s.convert(Me.type),Ke=M(Me.internalFormat,Ie,Z,Me.colorSpace,E.isXRRenderTarget===!0),ze=Ce(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ke,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,N.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),be(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),we(i.TEXTURE_CUBE_MAP,x,pe);for(let oe=0;oe<6;oe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)Ee(N.__webglFramebuffer[oe][he],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Ee(N.__webglFramebuffer[oe],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);T(x,pe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const oe=E.texture;for(let he=0,Me=oe.length;he<Me;he++){const Ie=oe[he],Z=n.get(Ie);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),we(i.TEXTURE_2D,Ie,pe),Ee(N.__webglFramebuffer,E,Ie,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),T(Ie,pe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?oe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ne.__webglTexture),we(oe,x,pe),a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)Ee(N.__webglFramebuffer[he],E,x,i.COLOR_ATTACHMENT0,oe,he);else Ee(N.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,oe,0);T(x,pe)&&v(oe),t.unbindTexture()}E.depthBuffer&&je(E)}function at(E){const x=f(E)||a,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,$=N.length;ne<$;ne++){const ee=N[ne];if(T(ee,x)){const pe=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(ee).__webglTexture;t.bindTexture(pe,oe),v(pe),t.unbindTexture()}}}function ye(E){if(a&&E.samples>0&&ge(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,ne=E.height;let $=i.COLOR_BUFFER_BIT;const ee=[],pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(E),he=E.isWebGLMultipleRenderTargets===!0;if(he)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){ee.push(i.COLOR_ATTACHMENT0+Me),E.depthBuffer&&ee.push(pe);const Ie=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ie===!1&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),he){const Z=n.get(x[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,N,ne,0,0,N,ne,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const Ie=n.get(x[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ce(E){return Math.min(r.maxSamples,E.samples)}function ge(E){const x=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Je(E){const x=o.render.frame;d.get(E)!==x&&(d.set(E,x),E.update())}function Ue(E,x){const N=E.colorSpace,ne=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===rs||N!==rn&&N!==Ot&&($e.getTransfer(N)===Qe?a===!1?e.has("EXT_sRGB")===!0&&ne===kt?(E.format=rs,E.minFilter=wt,E.generateMipmaps=!1):x=Co.sRGBToLinear(x):(ne!==kt||$!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=F,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=De,this.setupRenderTarget=I,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ge}function _p(i,e,t){const n=t.isWebGL2;function r(s,o=Ot){let a;const l=$e.getTransfer(o);if(s===gn)return i.UNSIGNED_BYTE;if(s===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(s===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Zl)return i.BYTE;if(s===Jl)return i.SHORT;if(s===cs)return i.UNSIGNED_SHORT;if(s===_o)return i.INT;if(s===fn)return i.UNSIGNED_INT;if(s===tn)return i.FLOAT;if(s===Ei)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ql)return i.ALPHA;if(s===kt)return i.RGBA;if(s===ec)return i.LUMINANCE;if(s===tc)return i.LUMINANCE_ALPHA;if(s===Ln)return i.DEPTH_COMPONENT;if(s===di)return i.DEPTH_STENCIL;if(s===rs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nc)return i.RED;if(s===yo)return i.RED_INTEGER;if(s===ic)return i.RG;if(s===So)return i.RG_INTEGER;if(s===Eo)return i.RGBA_INTEGER;if(s===yr||s===Sr||s===Er||s===Mr)if(l===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ns||s===Fs||s===Os||s===Bs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ns)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Os)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zs||s===Gs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zs)return l===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gs)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hs||s===ks||s===Vs||s===Ws||s===Xs||s===js||s===qs||s===Ys||s===Ks||s===$s||s===Zs||s===Js||s===Qs||s===ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hs)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ks)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vs)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ws)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xs)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===js)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qs)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ys)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ks)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$s)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zs)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Js)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qs)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ea)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===br||s===ta||s===na)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===br)return l===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ta)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===na)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rc||s===ia||s===ra||s===sa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===br)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ia)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ra)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class vp extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,n),u=this._getHandJoint(c,y);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new vn({extensions:{fragDepth:!0},vertexShader:yp,fragmentShader:Sp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tt(new hi(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Mp extends Fn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,g=null;const y=new Ep,f=t.getContextAttributes();let u=null,T=null;const v=[],M=[],L=new Pe;let R=null;const w=new Ft;w.layers.enable(1),w.viewport=new ut;const z=new Ft;z.layers.enable(2),z.viewport=new ut;const K=[w,z],_=new vp;_.layers.enable(1),_.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=v[V];return Q===void 0&&(Q=new Yr,v[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=v[V];return Q===void 0&&(Q=new Yr,v[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=v[V];return Q===void 0&&(Q=new Yr,v[V]=Q),Q.getHandSpace()};function j(V){const Q=M.indexOf(V.inputSource);if(Q===-1)return;const ue=v[Q];ue!==void 0&&(ue.update(V.inputSource,V.frame,c||o),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function P(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",k);for(let V=0;V<v.length;V++){const Q=M[V];Q!==null&&(M[V]=null,v[V].disconnect(Q))}A=null,H=null,y.reset(),e.setRenderTarget(u),m=null,p=null,h=null,r=null,T=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",P),r.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Un(m.framebufferWidth,m.framebufferHeight,{format:kt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,ue=null,Ee=null;f.depth&&(Ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=f.stencil?di:Ln,ue=f.stencil?Rn:fn);const be={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new Un(p.textureWidth,p.textureHeight,{format:kt,type:gn,depthTexture:new Ho(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const fe=e.properties.get(T);fe.__ignoreDepthValues=p.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(V){for(let Q=0;Q<V.removed.length;Q++){const ue=V.removed[Q],Ee=M.indexOf(ue);Ee>=0&&(M[Ee]=null,v[Ee].disconnect(ue))}for(let Q=0;Q<V.added.length;Q++){const ue=V.added[Q];let Ee=M.indexOf(ue);if(Ee===-1){for(let fe=0;fe<v.length;fe++)if(fe>=M.length){M.push(ue),Ee=fe;break}else if(M[fe]===null){M[fe]=ue,Ee=fe;break}if(Ee===-1)break}const be=v[Ee];be&&be.connect(ue)}}const F=new D,Y=new D;function W(V,Q,ue){F.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);const Ee=F.distanceTo(Y),be=Q.projectionMatrix.elements,fe=ue.projectionMatrix.elements,je=be[14]/(be[10]-1),De=be[14]/(be[10]+1),I=(be[9]+1)/be[5],at=(be[9]-1)/be[5],ye=(be[8]-1)/be[0],Ce=(fe[8]+1)/fe[0],ge=je*ye,Je=je*Ce,Ue=Ee/(-ye+Ce),E=Ue*-ye;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(E),V.translateZ(Ue),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const x=je+Ue,N=De+Ue,ne=ge-E,$=Je+(Ee-E),ee=I*De/N*x,pe=at*De/N*x;V.projectionMatrix.makePerspective(ne,$,ee,pe,x,N),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;y.texture!==null&&(V.near=y.depthNear,V.far=y.depthFar),_.near=z.near=w.near=V.near,_.far=z.far=w.far=V.far,(A!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,H=_.far,w.near=A,w.far=H,z.near=A,z.far=H,w.updateProjectionMatrix(),z.updateProjectionMatrix(),V.updateProjectionMatrix());const Q=V.parent,ue=_.cameras;X(_,Q);for(let Ee=0;Ee<ue.length;Ee++)X(ue[Ee],Q);ue.length===2?W(_,w,z):_.projectionMatrix.copy(w.projectionMatrix),q(V,_,Q)};function q(V,Q,ue){ue===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ss*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null};let re=null;function ae(V,Q){if(d=Q.getViewerPose(c||o),g=Q,d!==null){const ue=d.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Ee=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,Ee=!0);for(let fe=0;fe<ue.length;fe++){const je=ue[fe];let De=null;if(m!==null)De=m.getViewport(je);else{const at=h.getViewSubImage(p,je);De=at.viewport,fe===0&&(e.setRenderTargetTextures(T,at.colorTexture,p.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(T))}let I=K[fe];I===void 0&&(I=new Ft,I.layers.enable(fe),I.viewport=new ut,K[fe]=I),I.matrix.fromArray(je.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(je.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(De.x,De.y,De.width,De.height),fe===0&&(_.matrix.copy(I.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ee===!0&&_.cameras.push(I)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const fe=h.getDepthInformation(ue[0]);fe&&fe.isValid&&fe.texture&&y.init(e,fe,r.renderState)}}for(let ue=0;ue<v.length;ue++){const Ee=M[ue],be=v[ue];Ee!==null&&be!==void 0&&be.update(Ee,Q,c||o)}y.render(e,_),re&&re(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const we=new zo;we.setAnimationLoop(ae),this.setAnimationLoop=function(V){re=V},this.dispose=function(){}}}function bp(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Fo(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,T,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),h(f,u)):u.isMeshPhongMaterial?(s(f,u),d(f,u)):u.isMeshStandardMaterial?(s(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,M)):u.isMeshMatcapMaterial?(s(f,u),g(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),y(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,T,v):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ct&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ct&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(f.envMap.value=T,f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,T,v){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*T,f.scale.value=v*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function h(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,T){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function y(f,u){const T=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tp(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){const M=v.program;n.uniformBlockBinding(T,M)}function c(T,v){let M=r[T.id];M===void 0&&(g(T),M=d(T),r[T.id]=M,T.addEventListener("dispose",f));const L=v.program;n.updateUBOMapping(T,L);const R=e.render.frame;s[T.id]!==R&&(p(T),s[T.id]=R)}function d(T){const v=h();T.__bindingPointIndex=v;const M=i.createBuffer(),L=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const v=r[T.id],M=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,w=M.length;R<w;R++){const z=Array.isArray(M[R])?M[R]:[M[R]];for(let K=0,_=z.length;K<_;K++){const A=z[K];if(m(A,R,K,L)===!0){const H=A.__offset,j=Array.isArray(A.value)?A.value:[A.value];let P=0;for(let k=0;k<j.length;k++){const F=j[k],Y=y(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,H+P,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,v,M,L){const R=T.value,w=v+"_"+M;if(L[w]===void 0)return typeof R=="number"||typeof R=="boolean"?L[w]=R:L[w]=R.clone(),!0;{const z=L[w];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return L[w]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(T){const v=T.uniforms;let M=0;const L=16;for(let w=0,z=v.length;w<z;w++){const K=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,A=K.length;_<A;_++){const H=K[_],j=Array.isArray(H.value)?H.value:[H.value];for(let P=0,k=j.length;P<k;P++){const F=j[P],Y=y(F),W=M%L;W!==0&&L-W<Y.boundary&&(M+=L-W),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Y.storage}}}const R=M%L;return R>0&&(M+=L-R),T.__size=M,T.__cache={},this}function y(T){const v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function f(T){const v=T.target;v.removeEventListener("dispose",f);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class qo{constructor(e={}){const{canvas:t=_c(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),g=new Int32Array(4);let y=null,f=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const v=this;let M=!1,L=0,R=0,w=null,z=-1,K=null;const _=new ut,A=new ut;let H=null;const j=new ke(0);let P=0,k=t.width,F=t.height,Y=1,W=null,X=null;const q=new ut(0,0,k,F),re=new ut(0,0,k,F);let ae=!1;const we=new hs;let V=!1,Q=!1,ue=null;const Ee=new st,be=new Pe,fe=new D,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return w===null?Y:1}let I=n;function at(S,U){for(let B=0;B<S.length;B++){const G=S[B],O=t.getContext(G,U);if(O!==null)return O}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ls}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",b,!1),t.addEventListener("webglcontextcreationerror",te,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),I=at(U,S),I===null)throw at(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Ce,ge,Je,Ue,E,x,N,ne,$,ee,pe,oe,he,Me,Ie,Z,Ke,ze,Re,ve,ce,Fe,C;function ie(){ye=new Ph(I),Ce=new Th(I,ye,e),ye.init(Ce),ce=new _p(I,ye,Ce),ge=new mp(I,ye,Ce),Je=new Ih(I),Ue=new tp,E=new gp(I,ye,ge,Ue,Ce,ce,Je),x=new wh(v),N=new Lh(v),ne=new kc(I,Ce),Fe=new Mh(I,ye,ne,Ce),$=new Dh(I,ne,Je,Fe),ee=new Bh(I,$,ne,Je),ze=new Oh(I,Ce,E),Ie=new Ah(Ue),pe=new ep(v,x,N,ye,Ce,Fe,Ie),oe=new bp(v,Ue),he=new ip,Me=new cp(ye,Ce),Ke=new Eh(v,x,N,ge,ee,p,l),Z=new pp(v,ee,Ce),C=new Tp(I,Je,Ce,ge),Re=new bh(I,ye,Je,Ce),ve=new Uh(I,ye,Je,Ce),Je.programs=pe.programs,v.capabilities=Ce,v.extensions=ye,v.properties=Ue,v.renderLists=he,v.shadowMap=Z,v.state=ge,v.info=Je}ie();const le=new Mp(v,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(k,F,!1))},this.getSize=function(S){return S.set(k,F)},this.setSize=function(S,U,B=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,F=U,t.width=Math.floor(S*Y),t.height=Math.floor(U*Y),B===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(k*Y,F*Y).floor()},this.setDrawingBufferSize=function(S,U,B){k=S,F=U,Y=B,t.width=Math.floor(S*B),t.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,U,B,G){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,U,B,G),ge.viewport(_.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,U,B,G){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,U,B,G),ge.scissor(A.copy(re).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){ge.setScissorTest(ae=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(S=!0,U=!0,B=!0){let G=0;if(S){let O=!1;if(w!==null){const de=w.texture.format;O=de===Eo||de===So||de===yo}if(O){const de=w.texture.type,_e=de===gn||de===fn||de===cs||de===Rn||de===vo||de===xo,Te=Ke.getClearColor(),Le=Ke.getClearAlpha(),Ge=Te.r,Ne=Te.g,Oe=Te.b;_e?(m[0]=Ge,m[1]=Ne,m[2]=Oe,m[3]=Le,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ge,g[1]=Ne,g[2]=Oe,g[3]=Le,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),B&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",b,!1),t.removeEventListener("webglcontextcreationerror",te,!1),he.dispose(),Me.dispose(),Ue.dispose(),x.dispose(),N.dispose(),ee.dispose(),Fe.dispose(),C.dispose(),pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",ht),le.removeEventListener("sessionend",Ye),ue&&(ue.dispose(),ue=null),nt.stop()};function xe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=Je.autoReset,U=Z.enabled,B=Z.autoUpdate,G=Z.needsUpdate,O=Z.type;ie(),Je.autoReset=S,Z.enabled=U,Z.autoUpdate=B,Z.needsUpdate=G,Z.type=O}function te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function J(S){const U=S.target;U.removeEventListener("dispose",J),me(U)}function me(S){Se(S),Ue.remove(S)}function Se(S){const U=Ue.get(S).programs;U!==void 0&&(U.forEach(function(B){pe.releaseProgram(B)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,G,O,de){U===null&&(U=je);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Te=el(S,U,B,G,O);ge.setMaterial(G,_e);let Le=B.index,Ge=1;if(G.wireframe===!0){if(Le=$.getWireframeAttribute(B),Le===void 0)return;Ge=2}const Ne=B.drawRange,Oe=B.attributes.position;let it=Ne.start*Ge,Lt=(Ne.start+Ne.count)*Ge;de!==null&&(it=Math.max(it,de.start*Ge),Lt=Math.min(Lt,(de.start+de.count)*Ge)),Le!==null?(it=Math.max(it,0),Lt=Math.min(Lt,Le.count)):Oe!=null&&(it=Math.max(it,0),Lt=Math.min(Lt,Oe.count));const ct=Lt-it;if(ct<0||ct===1/0)return;Fe.setup(O,G,Te,B,Le);let qt,et=Re;if(Le!==null&&(qt=ne.get(Le),et=ve,et.setIndex(qt)),O.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*De()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(O.isLine){let Ve=G.linewidth;Ve===void 0&&(Ve=1),ge.setLineWidth(Ve*De()),O.isLineSegments?et.setMode(I.LINES):O.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else O.isPoints?et.setMode(I.POINTS):O.isSprite&&et.setMode(I.TRIANGLES);if(O.isBatchedMesh)et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)et.renderInstances(it,ct,O.count);else if(B.isInstancedBufferGeometry){const Ve=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fr=Math.min(B.instanceCount,Ve);et.renderInstances(it,ct,fr)}else et.render(it,ct)};function qe(S,U,B){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,Ai(S,U,B),S.side=_n,S.needsUpdate=!0,Ai(S,U,B),S.side=en):Ai(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),f=Me.get(B),f.init(),T.push(f),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),S!==B&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(v._useLegacyLights);const G=new Set;return S.traverse(function(O){const de=O.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const Te=de[_e];qe(Te,B,O),G.add(Te)}else qe(de,B,O),G.add(de)}),T.pop(),f=null,G},this.compileAsync=function(S,U,B=null){const G=this.compile(S,U,B);return new Promise(O=>{function de(){if(G.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){O(S);return}setTimeout(de,10)}ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Xe=null;function Ze(S){Xe&&Xe(S)}function ht(){nt.stop()}function Ye(){nt.start()}const nt=new zo;nt.setAnimationLoop(Ze),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(S){Xe=S,le.setAnimationLoop(S),S===null?nt.stop():nt.start()},le.addEventListener("sessionstart",ht),le.addEventListener("sessionend",Ye),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,w),f=Me.get(S,T.length),f.init(),T.push(f),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),we.setFromProjectionMatrix(Ee),Q=this.localClippingEnabled,V=Ie.init(this.clippingPlanes,Q),y=he.get(S,u.length),y.init(),u.push(y),St(S,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(W,X),this.info.render.frame++,V===!0&&Ie.beginShadows();const B=f.state.shadowsArray;if(Z.render(B,S,U),V===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Ke.render(y,S),f.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let O=0,de=G.length;O<de;O++){const _e=G[O];xs(y,S,_e,_e.viewport)}}else xs(y,S,U);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(v,S,U),Fe.resetDefaultState(),z=-1,K=null,T.pop(),T.length>0?f=T[T.length-1]:f=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function St(S,U,B,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||we.intersectsSprite(S)){G&&fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ee);const _e=ee.update(S),Te=S.material;Te.visible&&y.push(S,_e,Te,B,fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||we.intersectsObject(S))){const _e=ee.update(S),Te=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),fe.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),fe.copy(_e.boundingSphere.center)),fe.applyMatrix4(S.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const Le=_e.groups;for(let Ge=0,Ne=Le.length;Ge<Ne;Ge++){const Oe=Le[Ge],it=Te[Oe.materialIndex];it&&it.visible&&y.push(S,_e,it,B,fe.z,Oe)}}else Te.visible&&y.push(S,_e,Te,B,fe.z,null)}}const de=S.children;for(let _e=0,Te=de.length;_e<Te;_e++)St(de[_e],U,B,G)}function xs(S,U,B,G){const O=S.opaque,de=S.transmissive,_e=S.transparent;f.setupLightsView(B),V===!0&&Ie.setGlobalState(v.clippingPlanes,B),de.length>0&&Qo(O,de,U,B),G&&ge.viewport(_.copy(G)),O.length>0&&Ti(O,U,B),de.length>0&&Ti(de,U,B),_e.length>0&&Ti(_e,U,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Qo(S,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const de=Ce.isWebGL2;ue===null&&(ue=new Un(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ei:gn,minFilter:Cn,samples:de?4:0})),v.getDrawingBufferSize(be),de?ue.setSize(be.x,be.y):ue.setSize(as(be.x),as(be.y));const _e=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(j),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=mn,Ti(S,B,G),E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue);let Le=!1;for(let Ge=0,Ne=U.length;Ge<Ne;Ge++){const Oe=U[Ge],it=Oe.object,Lt=Oe.geometry,ct=Oe.material,qt=Oe.group;if(ct.side===en&&it.layers.test(G.layers)){const et=ct.side;ct.side=Ct,ct.needsUpdate=!0,ys(it,B,G,Lt,ct,qt),ct.side=et,ct.needsUpdate=!0,Le=!0}}Le===!0&&(E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue)),v.setRenderTarget(_e),v.setClearColor(j,P),v.toneMapping=Te}function Ti(S,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,de=S.length;O<de;O++){const _e=S[O],Te=_e.object,Le=_e.geometry,Ge=G===null?_e.material:G,Ne=_e.group;Te.layers.test(B.layers)&&ys(Te,U,B,Le,Ge,Ne)}}function ys(S,U,B,G,O,de){S.onBeforeRender(v,U,B,G,O,de),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,U,B,G,S,de),O.transparent===!0&&O.side===en&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,v.renderBufferDirect(B,U,G,O,S,de),O.side=_n,O.needsUpdate=!0,v.renderBufferDirect(B,U,G,O,S,de),O.side=en):v.renderBufferDirect(B,U,G,O,S,de),S.onAfterRender(v,U,B,G,O,de)}function Ai(S,U,B){U.isScene!==!0&&(U=je);const G=Ue.get(S),O=f.state.lights,de=f.state.shadowsArray,_e=O.state.version,Te=pe.getParameters(S,O.state,de,U,B),Le=pe.getProgramCacheKey(Te);let Ge=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||G.environment),Ge===void 0&&(S.addEventListener("dispose",J),Ge=new Map,G.programs=Ge);let Ne=Ge.get(Le);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===_e)return Es(S,Te),Ne}else Te.uniforms=pe.getUniforms(S),S.onBuild(B,Te,v),S.onBeforeCompile(Te,v),Ne=pe.acquireProgram(Te,Le),Ge.set(Le,Ne),G.uniforms=Te.uniforms;const Oe=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=Ie.uniform),Es(S,Te),G.needsLights=nl(S),G.lightsStateVersion=_e,G.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function Ss(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=tr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Es(S,U){const B=Ue.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function el(S,U,B,G,O){U.isScene!==!0&&(U=je),E.resetTextureUnits();const de=U.fog,_e=G.isMeshStandardMaterial?U.environment:null,Te=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rn,Le=(G.isMeshStandardMaterial?N:x).get(G.envMap||_e),Ge=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!B.morphAttributes.position,it=!!B.morphAttributes.normal,Lt=!!B.morphAttributes.color;let ct=mn;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ct=v.toneMapping);const qt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=qt!==void 0?qt.length:0,Ve=Ue.get(G),fr=f.state.lights;if(V===!0&&(Q===!0||S!==K)){const It=S===K&&G.id===z;Ie.setState(G,S,It)}let tt=!1;G.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==fr.state.version||Ve.outputColorSpace!==Te||O.isBatchedMesh&&Ve.batching===!1||!O.isBatchedMesh&&Ve.batching===!0||O.isInstancedMesh&&Ve.instancing===!1||!O.isInstancedMesh&&Ve.instancing===!0||O.isSkinnedMesh&&Ve.skinning===!1||!O.isSkinnedMesh&&Ve.skinning===!0||O.isInstancedMesh&&Ve.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ve.instancingColor===!1&&O.instanceColor!==null||Ve.envMap!==Le||G.fog===!0&&Ve.fog!==de||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ie.numPlanes||Ve.numIntersection!==Ie.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Ne||Ve.morphTargets!==Oe||Ve.morphNormals!==it||Ve.morphColors!==Lt||Ve.toneMapping!==ct||Ce.isWebGL2===!0&&Ve.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ve.__version=G.version);let xn=Ve.currentProgram;tt===!0&&(xn=Ai(G,U,O));let Ms=!1,mi=!1,pr=!1;const _t=xn.getUniforms(),yn=Ve.uniforms;if(ge.useProgram(xn.program)&&(Ms=!0,mi=!0,pr=!0),G.id!==z&&(z=G.id,mi=!0),Ms||K!==S){_t.setValue(I,"projectionMatrix",S.projectionMatrix),_t.setValue(I,"viewMatrix",S.matrixWorldInverse);const It=_t.map.cameraPosition;It!==void 0&&It.setValue(I,fe.setFromMatrixPosition(S.matrixWorld)),Ce.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,mi=!0,pr=!0)}if(O.isSkinnedMesh){_t.setOptional(I,O,"bindMatrix"),_t.setOptional(I,O,"bindMatrixInverse");const It=O.skeleton;It&&(Ce.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),_t.setValue(I,"boneTexture",It.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(_t.setOptional(I,O,"batchingTexture"),_t.setValue(I,"batchingTexture",O._matricesTexture,E));const mr=B.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0&&Ce.isWebGL2===!0)&&ze.update(O,B,xn),(mi||Ve.receiveShadow!==O.receiveShadow)&&(Ve.receiveShadow=O.receiveShadow,_t.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Le,yn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),mi&&(_t.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&tl(yn,pr),de&&G.fog===!0&&oe.refreshFogUniforms(yn,de),oe.refreshMaterialUniforms(yn,G,Y,F,ue),tr.upload(I,Ss(Ve),yn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(tr.upload(I,Ss(Ve),yn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(I,"center",O.center),_t.setValue(I,"modelViewMatrix",O.modelViewMatrix),_t.setValue(I,"normalMatrix",O.normalMatrix),_t.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const It=G.uniformsGroups;for(let gr=0,il=It.length;gr<il;gr++)if(Ce.isWebGL2){const bs=It[gr];C.update(bs,xn),C.bind(bs,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function tl(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function nl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,U,B){Ue.get(S.texture).__webglTexture=U,Ue.get(S.depthTexture).__webglTexture=B;const G=Ue.get(S);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const B=Ue.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){w=S,L=U,R=B;let G=!0,O=null,de=!1,_e=!1;if(S){const Le=Ue.get(S);Le.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Le.__webglFramebuffer===void 0?E.setupRenderTarget(S):Le.__hasExternalTextures&&E.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(_e=!0);const Ne=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?O=Ne[U][B]:O=Ne[U],de=!0):Ce.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?O=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[B]:O=Ne,_.copy(S.viewport),A.copy(S.scissor),H=S.scissorTest}else _.copy(q).multiplyScalar(Y).floor(),A.copy(re).multiplyScalar(Y).floor(),H=ae;if(ge.bindFramebuffer(I.FRAMEBUFFER,O)&&Ce.drawBuffers&&G&&ge.drawBuffers(S,O),ge.viewport(_),ge.scissor(A),ge.setScissorTest(H),de){const Le=Ue.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,B)}else if(_e){const Le=Ue.get(S.texture),Ge=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,B||0,Ge)}z=-1},this.readRenderTargetPixels=function(S,U,B,G,O,de,_e){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ge.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Le=S.texture,Ge=Le.format,Ne=Le.type;if(Ge!==kt&&ce.convert(Ge)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===Ei&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ne!==gn&&ce.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===tn&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&B>=0&&B<=S.height-O&&I.readPixels(U,B,G,O,ce.convert(Ge),ce.convert(Ne),de)}finally{const Le=w!==null?Ue.get(w).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(S,U,B=0){const G=Math.pow(2,-B),O=Math.floor(U.image.width*G),de=Math.floor(U.image.height*G);E.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,S.x,S.y,O,de),ge.unbindTexture()},this.copyTextureToTexture=function(S,U,B,G=0){const O=U.image.width,de=U.image.height,_e=ce.convert(B.format),Te=ce.convert(B.type);E.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,S.x,S.y,O,de,_e,Te,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,S.x,S.y,_e,Te,U.image),G===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B,G,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=S.max.x-S.min.x+1,_e=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Le=ce.convert(G.format),Ge=ce.convert(G.type);let Ne;if(G.isData3DTexture)E.setTexture3D(G,0),Ne=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Oe=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Lt=I.getParameter(I.UNPACK_SKIP_PIXELS),ct=I.getParameter(I.UNPACK_SKIP_ROWS),qt=I.getParameter(I.UNPACK_SKIP_IMAGES),et=B.isCompressedTexture?B.mipmaps[O]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Ne,O,U.x,U.y,U.z,de,_e,Te,Le,Ge,et.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ne,O,U.x,U.y,U.z,de,_e,Te,Le,et.data)):I.texSubImage3D(Ne,O,U.x,U.y,U.z,de,_e,Te,Le,Ge,et),I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt),O===0&&G.generateMipmaps&&I.generateMipmap(Ne),ge.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){L=0,R=0,w=null,ge.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ds?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===cr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?Pn:bo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pn?pt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ap extends qo{}Ap.prototype.isWebGL1Renderer=!0;class ps{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new ps(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Yo extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new D,Za=new D,Ja=new st,Kr=new us,Ji=new dr;class Cp extends mt{constructor(e=new Vt,t=new Yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)$a.fromBufferAttribute(t,r-1),Za.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=$a.distanceTo(Za);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Ji.radius+=s,e.ray.intersectsSphere(Ji)===!1)return;Ja.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(Ja);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,d=new D,h=new D,p=new D,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const u=Math.max(0,o.start),T=Math.min(g.count,o.start+o.count);for(let v=u,M=T-1;v<M;v+=m){const L=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(f,L),d.fromBufferAttribute(f,R),Kr.distanceSqToSegment(c,d,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(p);z<e.near||z>e.far||t.push({distance:z,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),T=Math.min(f.count,o.start+o.count);for(let v=u,M=T-1;v<M;v+=m){if(c.fromBufferAttribute(f,v),d.fromBufferAttribute(f,v+1),Kr.distanceSqToSegment(c,d,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(p);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Qa=new D,eo=new D;class Rp extends Cp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Qa.fromBufferAttribute(t,r),eo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qa.distanceTo(eo);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ms extends Vt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],p=[],m=[];let g=0;const y=[],f=n/2;let u=0;T(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(p,3)),this.setAttribute("uv",new gt(m,2));function T(){const M=new D,L=new D;let R=0;const w=(t-e)/n;for(let z=0;z<=s;z++){const K=[],_=z/s,A=_*(t-e)+e;for(let H=0;H<=r;H++){const j=H/r,P=j*l+a,k=Math.sin(P),F=Math.cos(P);L.x=A*k,L.y=-_*n+f,L.z=A*F,h.push(L.x,L.y,L.z),M.set(k,w,F).normalize(),p.push(M.x,M.y,M.z),m.push(j,1-_),K.push(g++)}y.push(K)}for(let z=0;z<r;z++)for(let K=0;K<s;K++){const _=y[K][z],A=y[K+1][z],H=y[K+1][z+1],j=y[K][z+1];d.push(_,A,j),d.push(A,H,j),R+=6}c.addGroup(u,R,0),u+=R}function v(M){const L=g,R=new Pe,w=new D;let z=0;const K=M===!0?e:t,_=M===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,f*_,0),p.push(0,_,0),m.push(.5,.5),g++;const A=g;for(let H=0;H<=r;H++){const P=H/r*l+a,k=Math.cos(P),F=Math.sin(P);w.x=K*F,w.y=f*_,w.z=K*k,h.push(w.x,w.y,w.z),p.push(0,_,0),R.x=k*.5+.5,R.y=F*.5*_+.5,m.push(R.x,R.y),g++}for(let H=0;H<r;H++){const j=L+H,P=A+H;M===!0?d.push(P,P+1,j):d.push(P+1,P,j),z+=3}c.addGroup(u,z,M===!0?1:2),u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gs extends Vt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new D,p=new D,m=[],g=[],y=[],f=[];for(let u=0;u<=n;u++){const T=[],v=u/n;let M=0;u===0&&o===0?M=.5/t:u===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const R=L/t;h.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),f.push(R+M,1-v),T.push(c++)}d.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){const v=d[u][T+1],M=d[u][T],L=d[u+1][T],R=d[u+1][T+1];(u!==0||o>0)&&m.push(v,M,R),(u!==n-1||l<Math.PI)&&m.push(M,L,R)}this.setIndex(m),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ti extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ko extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $r=new st,to=new D,no=new D;class Lp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;to.setFromMatrixPosition(e.matrixWorld),t.position.copy(to),no.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(no),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pp extends Lp{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class io extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dp extends Ko{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ro{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Up extends Rp{constructor(e=10,t=10,n=4473924,r=8947848){n=new ke(n),r=new ke(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let p=0,m=0,g=-a;p<=t;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=p===s?n:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const d=new Vt;d.setAttribute("position",new gt(l,3)),d.setAttribute("color",new gt(c,3));const h=new Yo({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ls}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ls);const so={type:"change"},Zr={type:"start"},ao={type:"end"},Qi=new us,oo=new hn,Ip=Math.cos(70*gc.DEG2RAD);class Np extends Fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:On.ROTATE,MIDDLE:On.DOLLY,RIGHT:On.PAN},this.touches={ONE:Bn.ROTATE,TWO:Bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Me),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Me),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(so),n.update(),s=r.NONE},this.update=function(){const C=new D,ie=new In().setFromUnitVectors(e.up,new D(0,1,0)),le=ie.clone().invert(),xe=new D,b=new In,te=new D,J=2*Math.PI;return function(Se=null){const qe=n.object.position;C.copy(qe).sub(n.target),C.applyQuaternion(ie),a.setFromVector3(C),n.autoRotate&&s===r.NONE&&H(_(Se)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Xe=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(Xe)&&isFinite(Ze)&&(Xe<-Math.PI?Xe+=J:Xe>Math.PI&&(Xe-=J),Ze<-Math.PI?Ze+=J:Ze>Math.PI&&(Ze-=J),Xe<=Ze?a.theta=Math.max(Xe,Math.min(Ze,a.theta)):a.theta=a.theta>(Xe+Ze)/2?Math.max(Xe,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(le),qe.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let ht=!1;if(n.zoomToCursor&&R){let Ye=null;if(n.object.isPerspectiveCamera){const nt=C.length();Ye=q(nt*c);const St=nt-Ye;n.object.position.addScaledVector(M,St),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const nt=new D(L.x,L.y,0);nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ht=!0;const St=new D(L.x,L.y,0);St.unproject(n.object),n.object.position.sub(St).add(nt),n.object.updateMatrixWorld(),Ye=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ye).add(n.object.position):(Qi.origin.copy(n.object.position),Qi.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Qi.direction))<Ip?e.lookAt(n.target):(oo.setFromNormalAndCoplanarPoint(n.object.up,n.target),Qi.intersectPlane(oo,n.target))))}else n.object.isOrthographicCamera&&(ht=c!==1,ht&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,R=!1,ht||xe.distanceToSquared(n.object.position)>o||8*(1-b.dot(n.object.quaternion))>o||te.distanceToSquared(n.target)>0?(n.dispatchEvent(so),xe.copy(n.object.position),b.copy(n.object.quaternion),te.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ke),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",N),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",N),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Me),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ro,l=new ro;let c=1;const d=new D,h=new Pe,p=new Pe,m=new Pe,g=new Pe,y=new Pe,f=new Pe,u=new Pe,T=new Pe,v=new Pe,M=new D,L=new Pe;let R=!1;const w=[],z={};let K=!1;function _(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function A(C){const ie=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*ie)}function H(C){l.theta-=C}function j(C){l.phi-=C}const P=function(){const C=new D;return function(le,xe){C.setFromMatrixColumn(xe,0),C.multiplyScalar(-le),d.add(C)}}(),k=function(){const C=new D;return function(le,xe){n.screenSpacePanning===!0?C.setFromMatrixColumn(xe,1):(C.setFromMatrixColumn(xe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(le),d.add(C)}}(),F=function(){const C=new D;return function(le,xe){const b=n.domElement;if(n.object.isPerspectiveCamera){const te=n.object.position;C.copy(te).sub(n.target);let J=C.length();J*=Math.tan(n.object.fov/2*Math.PI/180),P(2*le*J/b.clientHeight,n.object.matrix),k(2*xe*J/b.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(le*(n.object.right-n.object.left)/n.object.zoom/b.clientWidth,n.object.matrix),k(xe*(n.object.top-n.object.bottom)/n.object.zoom/b.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C,ie){if(!n.zoomToCursor)return;R=!0;const le=n.domElement.getBoundingClientRect(),xe=C-le.left,b=ie-le.top,te=le.width,J=le.height;L.x=xe/te*2-1,L.y=-(b/J)*2+1,M.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function re(C){h.set(C.clientX,C.clientY)}function ae(C){X(C.clientX,C.clientX),u.set(C.clientX,C.clientY)}function we(C){g.set(C.clientX,C.clientY)}function V(C){p.set(C.clientX,C.clientY),m.subVectors(p,h).multiplyScalar(n.rotateSpeed);const ie=n.domElement;H(2*Math.PI*m.x/ie.clientHeight),j(2*Math.PI*m.y/ie.clientHeight),h.copy(p),n.update()}function Q(C){T.set(C.clientX,C.clientY),v.subVectors(T,u),v.y>0?Y(A(v.y)):v.y<0&&W(A(v.y)),u.copy(T),n.update()}function ue(C){y.set(C.clientX,C.clientY),f.subVectors(y,g).multiplyScalar(n.panSpeed),F(f.x,f.y),g.copy(y),n.update()}function Ee(C){X(C.clientX,C.clientY),C.deltaY<0?W(A(C.deltaY)):C.deltaY>0&&Y(A(C.deltaY)),n.update()}function be(C){let ie=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),ie=!0;break}ie&&(C.preventDefault(),n.update())}function fe(C){if(w.length===1)h.set(C.pageX,C.pageY);else{const ie=ce(C),le=.5*(C.pageX+ie.x),xe=.5*(C.pageY+ie.y);h.set(le,xe)}}function je(C){if(w.length===1)g.set(C.pageX,C.pageY);else{const ie=ce(C),le=.5*(C.pageX+ie.x),xe=.5*(C.pageY+ie.y);g.set(le,xe)}}function De(C){const ie=ce(C),le=C.pageX-ie.x,xe=C.pageY-ie.y,b=Math.sqrt(le*le+xe*xe);u.set(0,b)}function I(C){n.enableZoom&&De(C),n.enablePan&&je(C)}function at(C){n.enableZoom&&De(C),n.enableRotate&&fe(C)}function ye(C){if(w.length==1)p.set(C.pageX,C.pageY);else{const le=ce(C),xe=.5*(C.pageX+le.x),b=.5*(C.pageY+le.y);p.set(xe,b)}m.subVectors(p,h).multiplyScalar(n.rotateSpeed);const ie=n.domElement;H(2*Math.PI*m.x/ie.clientHeight),j(2*Math.PI*m.y/ie.clientHeight),h.copy(p)}function Ce(C){if(w.length===1)y.set(C.pageX,C.pageY);else{const ie=ce(C),le=.5*(C.pageX+ie.x),xe=.5*(C.pageY+ie.y);y.set(le,xe)}f.subVectors(y,g).multiplyScalar(n.panSpeed),F(f.x,f.y),g.copy(y)}function ge(C){const ie=ce(C),le=C.pageX-ie.x,xe=C.pageY-ie.y,b=Math.sqrt(le*le+xe*xe);T.set(0,b),v.set(0,Math.pow(T.y/u.y,n.zoomSpeed)),Y(v.y),u.copy(T);const te=(C.pageX+ie.x)*.5,J=(C.pageY+ie.y)*.5;X(te,J)}function Je(C){n.enableZoom&&ge(C),n.enablePan&&Ce(C)}function Ue(C){n.enableZoom&&ge(C),n.enableRotate&&ye(C)}function E(C){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",N)),ze(C),C.pointerType==="touch"?Ie(C):ne(C))}function x(C){n.enabled!==!1&&(C.pointerType==="touch"?Z(C):$(C))}function N(C){switch(Re(C),w.length){case 0:n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",N),n.dispatchEvent(ao),s=r.NONE;break;case 1:const ie=w[0],le=z[ie];Ie({pointerId:ie,pageX:le.x,pageY:le.y});break}}function ne(C){let ie;switch(C.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case On.DOLLY:if(n.enableZoom===!1)return;ae(C),s=r.DOLLY;break;case On.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;we(C),s=r.PAN}else{if(n.enableRotate===!1)return;re(C),s=r.ROTATE}break;case On.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;re(C),s=r.ROTATE}else{if(n.enablePan===!1)return;we(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Zr)}function $(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;V(C);break;case r.DOLLY:if(n.enableZoom===!1)return;Q(C);break;case r.PAN:if(n.enablePan===!1)return;ue(C);break}}function ee(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Zr),Ee(pe(C)),n.dispatchEvent(ao))}function pe(C){const ie=C.deltaMode,le={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ie){case 1:le.deltaY*=16;break;case 2:le.deltaY*=100;break}return C.ctrlKey&&!K&&(le.deltaY*=10),le}function oe(C){C.key==="Control"&&(K=!0,n.domElement.getRootNode().addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(C){C.key==="Control"&&(K=!1,n.domElement.getRootNode().removeEventListener("keyup",he,{passive:!0,capture:!0}))}function Me(C){n.enabled===!1||n.enablePan===!1||be(C)}function Ie(C){switch(ve(C),w.length){case 1:switch(n.touches.ONE){case Bn.ROTATE:if(n.enableRotate===!1)return;fe(C),s=r.TOUCH_ROTATE;break;case Bn.PAN:if(n.enablePan===!1)return;je(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Bn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(C),s=r.TOUCH_DOLLY_PAN;break;case Bn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;at(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Zr)}function Z(C){switch(ve(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ce(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(C),n.update();break;default:s=r.NONE}}function Ke(C){n.enabled!==!1&&C.preventDefault()}function ze(C){w.push(C.pointerId)}function Re(C){delete z[C.pointerId];for(let ie=0;ie<w.length;ie++)if(w[ie]==C.pointerId){w.splice(ie,1);return}}function ve(C){let ie=z[C.pointerId];ie===void 0&&(ie=new Pe,z[C.pointerId]=ie),ie.set(C.pageX,C.pageY)}function ce(C){const ie=C.pointerId===w[0]?w[1]:w[0];return z[ie]}n.domElement.addEventListener("contextmenu",Ke),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",N),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",oe,{passive:!0,capture:!0}),this.update()}}const un=4,Fp=.9,Op=.3,Bp={civic:5099745,commercial:6600182,mixed:13538264,residential:16755574,res_low:16764032,industrial:11583173,green:8505220},zp={civic:19808,commercial:862814,mixed:3997776,residential:6037520,res_low:4859904,industrial:1713456,green:1784348};class Gp{constructor(e){this.container=e,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.buildings=[],this.trees=[],this.animId=null,this._init()}_init(){const e=this.container.clientWidth||800,t=this.container.clientHeight||600;this.scene=new wp,this.scene.background=new ke(658970),this.scene.fog=new ps(658970,.012),this.camera=new Ft(55,e/t,.1,500),this.camera.position.set(40,45,60),this.camera.lookAt(0,0,0),this.renderer=new qo({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=po,this.container.innerHTML="",this.container.appendChild(this.renderer.domElement);const n=new Dp(2241365,.8);this.scene.add(n);const r=new io(16772829,1.6);r.position.set(60,100,40),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,r.shadow.camera.near=.5,r.shadow.camera.far=300,r.shadow.camera.left=-80,r.shadow.camera.right=80,r.shadow.camera.top=80,r.shadow.camera.bottom=-80,this.scene.add(r);const s=new io(3364266,.4);s.position.set(-40,20,-40),this.scene.add(s);const o=new hi(un*22,un*22),a=new ti({color:988713,roughness:.9,metalness:.1}),l=new Tt(o,a);l.rotation.x=-Math.PI/2,l.receiveShadow=!0,this.scene.add(l);const c=new Up(un*22,22,1977674,1977674);c.material.transparent=!0,c.material.opacity=.3,this.scene.add(c),this.controls=new Np(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=10,this.controls.maxDistance=200,this.controls.maxPolarAngle=Math.PI*.48,this.controls.target.set(0,0,0)}buildCity(e){var r;const t=e.length;for(const s of this.buildings)this.scene.remove(s);for(const s of this.trees)this.scene.remove(s);this.buildings=[],this.trees=[];const n=t*un/2-un/2;for(let s=0;s<t;s++)for(let o=0;o<t;o++){const a=(r=e[s])==null?void 0:r[o];if(!a)continue;const l=s*un-n,c=o*un-n;a.zone==="green"?this._addTree(l,c):a.floors>0&&this._addBuilding(l,c,a)}}_addBuilding(e,t,n){const r=n.floors*Fp,s=un-Op,o=new Nn(s,r,s),a=new ti({color:Bp[n.zone]||11184810,emissive:zp[n.zone]||0,emissiveIntensity:.15,roughness:.7,metalness:.2}),l=new Tt(o,a);if(l.position.set(e,r/2,t),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.buildings.push(l),n.greenRoof){const c=new Nn(s*.9,.12,s*.9),d=new ti({color:5025616,roughness:.8}),h=new Tt(c,d);h.position.set(e,r+.06,t),this.scene.add(h),this.buildings.push(h)}if(n.floors>=4){const c=new hi(s*.6,r*.55),d=new ti({color:16775393,emissive:16775393,emissiveIntensity:.35,transparent:!0,opacity:.25});for(let h=0;h<4;h++){const p=new Tt(c,d),m=h/4*Math.PI*2;p.position.set(e+Math.cos(m)*(s/2+.01),r*.45,t+Math.sin(m)*(s/2+.01)),p.rotation.y=m+Math.PI/2,this.scene.add(p),this.buildings.push(p)}}}_addTree(e,t){const n=.8+Math.random()*.4,r=.6+Math.random()*.4,s=new ms(.12,.18,n,6),o=new ti({color:5125166,roughness:1}),a=new Tt(s,o);a.position.set(e,n/2,t);const l=new gs(r,7,6),c=new ti({color:3046706,roughness:.9,flatShading:!0}),d=new Tt(l,c);d.position.set(e,n+r*.7,t),a.castShadow=!0,d.castShadow=!0,this.scene.add(a),this.scene.add(d),this.trees.push(a,d)}updateAtmosphere(e){const n=(e.S??50)/100,r=new ke().lerpColors(new ke(1707277),new ke(858666),n);this.scene.background=r,this.scene.fog.color=r,this.scene.fog.density=.008+(1-n)*.012}start(){const e=()=>{this.animId=requestAnimationFrame(e),this.controls.update(),this.renderer.render(this.scene,this.camera)};e()}stop(){this.animId&&(cancelAnimationFrame(this.animId),this.animId=null)}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){this.stop(),this.renderer.dispose()}}const He={config:{scale:"city",topography:"flat",climate:"temperate"},responses:{},scores:{L:0,S:0,R:0,C:0,E:0,Ec:0},faults:[],overall:0,view:"2d",activeTheme:"all",generating:!1,cityGrid:null};for(const i of oi)He.responses[i.id]=i.default;let Dn=null,ft=null;function Hp(){kp();const i=document.getElementById("city-canvas");Dn=new _l(i),Dn.resize(),Vp(),_s(),window.addEventListener("resize",()=>{Dn.resize(),ft&&ft.resize(),He.view==="2d"&&vs()})}function kp(){document.getElementById("app").innerHTML=`
    <div id="topbar"></div>
    <div id="main">
      <div id="panel-left"></div>
      <div id="canvas-wrap">
        <canvas id="city-canvas"></canvas>
        <div id="city-3d"></div>
      </div>
      <div id="panel-right"></div>
    </div>
  `}function Vp(){hl(He,Wp,jp,Xp),uo(He,Zo,Jo),ho(He,Dn.getRadarCanvas()),fl()}function _s(){He.scores=sl(He.responses),He.faults=ll(He.responses,He.scores),He.overall=al(He.scores),He.cityGrid=gl(He.responses),He.view==="2d"?vs():ft&&(ft.buildCity(He.cityGrid),ft.updateAtmosphere(He.scores)),ho(He,Dn.getRadarCanvas()),$o()}function vs(){Dn.render(He.cityGrid,He.scores,He.faults)}function $o(){document.querySelectorAll(".input-row").forEach(i=>{i.classList.remove("has-fault")});for(const i of oi)i.objective>=.8&&(He.responses[i.id]??i.default)<30&&document.querySelectorAll(`.input-row[title="${i.description}"]`).forEach(e=>{e.classList.add("has-fault")})}function Zo(i,e){He.responses[i]=e,_s()}function Jo(i){He.activeTheme=i,uo(He,Zo,Jo),$o()}function Wp(i){He.view=i;const e=document.getElementById("city-canvas"),t=document.getElementById("city-3d");document.querySelectorAll(".view-btn").forEach(n=>{n.classList.toggle("active",n.dataset.view===i)}),i==="2d"?(e.style.display="block",t.style.display="none",ft&&ft.stop(),Dn.resize(),vs()):(e.style.display="none",t.style.display="block",ft?(ft.resize(),ft.buildCity(He.cityGrid),ft.updateAtmosphere(He.scores),ft.animId||ft.start()):(ft=new Gp(t),ft.buildCity(He.cityGrid),ft.updateAtmosphere(He.scores),ft.start()))}function Xp(i,e){He.config[i]=e,_s()}async function jp(){if(He.generating)return;He.generating=!0;const i=document.getElementById("gen-btn");i&&(i.classList.add("loading"),i.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Generating…');const e=document.getElementById("narrative-box");e&&(e.classList.add("has-content"),e.textContent="");const t=document.createElement("span");t.id="narrative-cursor",e&&e.appendChild(t);let n="";await ul({scores:He.scores,config:He.config,faults:He.faults,responses:He.responses,onChunk(r){if(n+=r,e){const s=document.getElementById("narrative-cursor");s&&s.remove(),e.textContent=n;const o=document.createElement("span");o.id="narrative-cursor",e.appendChild(o),e.scrollTop=e.scrollHeight}},onDone(){const r=document.getElementById("narrative-cursor");r&&r.remove(),He.generating=!1,lo()},onError(r){if(e){const s=document.getElementById("narrative-cursor");s&&s.remove(),e.textContent=`Error: ${r}

Check that your API key is set in src/api.js`,e.style.color="var(--danger)"}He.generating=!1,lo()}})}function lo(){const i=document.getElementById("gen-btn");i&&(i.classList.remove("loading"),i.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>Generate City')}document.addEventListener("DOMContentLoaded",Hp);
