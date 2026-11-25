import type { CapabilityItem, ServiceItem, StudioFactItem } from '../types'

export const STUDIO_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'cap-1',
    index: '01',
    title: 'Climate-Responsive Spatial Flow',
    description:
      'Every floor plan is calibrated for Tamil Nadu heat, coastal humidity, cross-ventilation, and natural daylight shading before selecting a single finish.',
  },
  {
    id: 'cap-2',
    index: '02',
    title: 'Regional Craft & Material Honesty',
    description:
      'We pair enduring local materials—seasoned Indian teak, honed granite, terracotta, Athangudi tiles, and breathable lime plaster—with contemporary precision.',
  },
  {
    id: 'cap-3',
    index: '03',
    title: 'Bespoke Millwork & Joinery',
    description:
      'Custom wardrobes, pooja niches, fluted timber screens, and architectural cabinetry detailed to millimeter tolerances for seamless wall integration.',
  },
  {
    id: 'cap-4',
    index: '04',
    title: 'Single-Point Turnkey Delivery',
    description:
      'Coordinated civil, electrical, HVAC, lighting, and custom furniture execution managed under one unified architectural brief across Tamil Nadu.',
  },
]

export const STUDIO_FACTS: StudioFactItem[] = [
  {
    id: 'fact-1',
    value: '07',
    label: 'Core Design Disciplines',
    note: 'Residential, commercial, jewellery showrooms, kitchens, joinery, planning, and turnkey',
  },
  {
    id: 'fact-2',
    value: '05',
    label: 'Structured Delivery Phases',
    note: 'From spatial brief and 3D visualization to final styling',
  },
  {
    id: 'fact-3',
    value: '100%',
    label: 'Bespoke Millwork Detailing',
    note: 'Tailored to site dimensions and Tamil Nadu climate demands',
  },
  {
    id: 'fact-4',
    value: '03',
    label: 'Illustrative Scope Tiers',
    note: 'Essential, Signature, and Sovereign turnkey frameworks in INR',
  },
]

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'residential-interiors',
    index: '01',
    title: 'Residential Interior Design',
    category: 'Homes, Apartments & Villas',
    description:
      'Cohesive living environments for contemporary Tamil Nadu apartments, independent houses, and courtyard villas—balancing cross-ventilation, warmth, storage, and calm architectural rhythm.',
    deliverables: [
      'Living, dining & pooja room choreography',
      'Master suite & acoustic bedrooms',
      'Layered architectural & daylighting plans',
    ],
    scopeOfWork: [
      'Complete spatial zoning for 2 BHK, 3 BHK, duplexes, and independent villas',
      'False ceiling, cove lighting, and concealed air-conditioning integration',
      'Natural stone flooring, Athangudi tile inlays, and breathable wall finishes',
      'Dedicated utility, balcony shading, and indoor-outdoor transition detailing',
    ],
    useCases: [
      'New high-rise apartments in Chennai and Coimbatore',
      'Independent family homes in Madurai, Salem, and Tiruchirappalli',
      'Multi-generational courtyard villas across Tamil Nadu',
    ],
    image: '/images/tn-coimbatore-living.jpg',
    imageAlt: 'Contemporary Tamil Nadu residential living space with cane-and-teak screens and warm daylight',
  },
  {
    id: 'commercial-interiors',
    index: '02',
    title: 'Commercial Interior Design',
    category: 'Workspaces, Textile Offices & Retail',
    description:
      'Purpose-built corporate offices, textile and garment business headquarters, and retail showrooms engineered for acoustic comfort, brand poise, and spatial clarity.',
    deliverables: [
      'Executive & boardroom planning',
      'Acoustic zoning & workstations',
      'Showroom displays & client lounges',
    ],
    scopeOfWork: [
      'Buyer meeting suites, fabric-sampling galleries, and executive cabins',
      'Acoustic timber baffles, glass partitions, and glare-free linear lighting',
      'Custom retail display fixtures, reception desks, and signage integration',
      'HVAC, data cabling, and fire-safety coordination within ceiling grids',
    ],
    useCases: [
      'Textile & apparel export offices in Tiruppur, Erode, and Coimbatore',
      'Retail jewellery, apparel, and lifestyle showrooms in Chennai and Madurai',
      'Consulting studios, clinics, and corporate offices across Tamil Nadu',
    ],
    image: '/images/tn-tiruppur-office.jpg',
    imageAlt: 'Contemporary Tiruppur textile executive office with ribbed teak paneling and honed granite desk',
  },
  {
    id: 'modular-kitchens',
    index: '03',
    title: 'Modular Kitchen Design',
    category: 'Culinary Architecture',
    description:
      'Ergonomic culinary workspaces engineered for Indian cooking—pairing moisture-resistant marine-ply carcasses and soft-close hardware with honed granite counters and concealed utility zones.',
    deliverables: [
      'Island, L-shaped & parallel layouts',
      'Indian granite & quartz countertops',
      'Wet-kitchen & dry-pantry separation',
    ],
    scopeOfWork: [
      'BWR / marine-grade plywood carcasses suited for coastal and humid climates',
      'Tall pantry units, corner carousels, and heavy-duty spice pull-outs',
      'High-suction chimney ducting, hob integration, and heat-resistant backsplashes',
      'Adjacent utility balcony cabinetry for washing and heavy prep',
    ],
    useCases: [
      'Compact urban apartment kitchens in Chennai and Coimbatore',
      'Dual dry-and-wet kitchens for independent homes in Salem and Erode',
      'Open-plan island kitchens in contemporary villas',
    ],
    image: '/images/hero-coimbatore-kitchen.jpg',
    imageAlt: 'Refined Tamil Nadu modular kitchen with fluted teak cabinetry and honed granite island',
  },
  {
    id: 'custom-furniture-joinery',
    index: '04',
    title: 'Custom Furniture & Joinery',
    category: 'Bespoke Craft',
    description:
      'Made-to-measure wardrobes, carved or fluted teak pooja mandirs, dining tables, and sculptural seating crafted to fit exact room proportions.',
    deliverables: [
      'Floor-to-ceiling wardrobes & lofts',
      'Teak pooja units & wall paneling',
      'Bespoke solid-wood dining & seating',
    ],
    scopeOfWork: [
      'Seasoned Indian teak and veneer millwork finished in matte PU or natural oil',
      'Sliding and hinged wardrobe systems with internal drawer organizers',
      'Cane-weaved shutters, brass inlays, and breathable louvered cabinetry',
      'Custom bedframes, study desks, and media consoles scaled to each room',
    ],
    useCases: [
      'Apartments requiring space-maximizing built-in storage and lofts',
      'Homes blending traditional teakwood heritage with minimalist forms',
      'Executive suites needing bespoke conference tables and credenzas',
    ],
    image: '/images/tn-teak-joinery.jpg',
    imageAlt: 'Custom Indian teakwood and woven cane wardrobe joinery with antique brass hardware',
  },
  {
    id: 'space-planning',
    index: '05',
    title: 'Space Planning',
    category: 'Spatial Strategy',
    description:
      'Technical layout optimization, partition re-alignment, electrical and reflected ceiling plans, and 3D photorealistic visualization before site work begins.',
    deliverables: [
      '2D furniture & circulation plans',
      'Reflected ceiling & lighting maps',
      '3D renders & material mood boards',
    ],
    scopeOfWork: [
      'Measured site survey and structural column/beam mapping',
      'Cross-ventilation, solar heat gain, and daylighting orientation analysis',
      'Detailed electrical, switching, plumbing, and AC point drawings',
      'Physical material sample curation across stone, timber, tile, and fabric',
    ],
    useCases: [
      'Pre-handover builder apartments needing layout modifications',
      'Older independent houses undergoing structural interior renovation',
      'Commercial floorplates requiring efficient team and client zoning',
    ],
    image: '/images/tn-chettinad-dining.jpg',
    imageAlt: 'Open-plan Tamil Nadu courtyard dining pavilion demonstrating cross-ventilation and spatial flow',
  },
  {
    id: 'turnkey-execution',
    index: '06',
    title: 'Turnkey Interior Execution',
    category: 'End-to-End Delivery',
    description:
      'Complete site execution covering civil alterations, false ceilings, stone cladding, painting, carpentry, and final soft-furnishing handover under single-point accountability.',
    deliverables: [
      'Dedicated site supervision',
      'Milestone quality & tolerance checks',
      'Final styling & handover',
    ],
    scopeOfWork: [
      'Civil masonry, waterproofing, tiling, and granite/marble laying',
      'Electrical wiring, architectural fixtures, and plumbing fixture installation',
      'On-site and factory-finished carpentry, polishing, and low-VOC painting',
      'Curtains, blinds, rugs, and final snag-list clearance prior to move-in',
    ],
    useCases: [
      'NRI homeowners renovating residences in Chennai, Coimbatore, or Madurai',
      'Busy professionals seeking predictable single-team project delivery',
      'Commercial showrooms and offices with fixed launch schedules',
    ],
    image: '/images/tn-erode-showroom.jpg',
    imageAlt: 'Completed Erode handloom retail interior with terracotta plinths and teak display rails',
  },
  {
    id: 'jewellery-showroom-interiors',
    index: '07',
    title: 'Jewellery Showroom Interiors',
    category: 'Luxury Retail Architecture',
    description:
      'Bespoke gold, diamond, and bridal jewellery showroom architecture tailored for Tamil Nadu retailers—uniting champagne-bronze display counters, ivory marble flooring, calibrated high-CRI lighting, and discreet security planning.',
    deliverables: [
      'Gold & bridal display counter systems',
      'High-CRI jewellery spotlighting & chandeliers',
      'Customer circulation & back-office vault zoning',
    ],
    scopeOfWork: [
      'Custom champagne-bronze and laminated safety-glass vitrines and island counters',
      'Dedicated private bridal jewellery consultation lounges with plush seating',
      'Architectural storefront elevation, double-airlock entry, and CCTV sightline planning',
      'Secure back-office strongroom integration, appraisal desks, and staff circulation',
    ],
    useCases: [
      'Flagship gold and diamond showrooms in Coimbatore and Chennai',
      'Heritage family jewellery boutiques in Madurai, Salem, and Tiruchirappalli',
      'Bridal couture jewellery lounges in Tiruppur and Erode',
    ],
    image: '/images/jewellery-showroom-main.jpg',
    imageAlt: 'Luxury Tamil Nadu jewellery showroom interior with champagne-bronze display counters and ivory marble flooring',
  },
]
