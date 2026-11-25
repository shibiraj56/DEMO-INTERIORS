import type { ProcessStage } from '../types'

export const DESIGN_PROCESS: ProcessStage[] = [
  {
    stage: 'Stage 01',
    title: 'Discovery & Spatial Brief',
    durationLabel: 'Week 01–02',
    description:
      'On-site architectural measurement, lifestyle or operational mapping, daylight assessment, and alignment on aesthetic direction and budget parameters.',
    deliverable: 'Measured Site Survey & Design Brief',
  },
  {
    stage: 'Stage 02',
    title: 'Concept & Space Planning',
    durationLabel: 'Week 03–04',
    description:
      'Iterative 2D furniture layouts, circulation optimization, zoning diagrams, and curated physical material palettes across wood, stone, and textiles.',
    deliverable: 'Approved 2D Layouts & Material Board',
  },
  {
    stage: 'Stage 03',
    title: '3D Visualization & Technical Detailing',
    durationLabel: 'Week 05–07',
    description:
      'Photorealistic architectural renders alongside working drawings for electrical, plumbing, reflected ceilings, and custom joinery elevations.',
    deliverable: '3D Renders & Good-for-Construction Drawings',
  },
  {
    stage: 'Stage 04',
    title: 'Fabrication & Site Execution',
    durationLabel: 'Week 08–16',
    description:
      'Coordinated civil works, modular kitchen and wardrobe fabrication, stone masonry, and custom furniture crafting with scheduled quality checkpoints.',
    deliverable: 'Site Milestones & Joinery Installation',
  },
  {
    stage: 'Stage 05',
    title: 'Styling, Inspection & Handover',
    durationLabel: 'Final Week',
    description:
      'Lighting calibration, soft furnishings placement, snag-list resolution, and a thorough walkthrough prior to space occupancy.',
    deliverable: 'Completed Space & As-Built Documentation',
  },
]
