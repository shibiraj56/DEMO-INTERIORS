export interface NavItem {
  name: string
  href: string
  description?: string
}

export interface HeroSlide {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  location: string
  metric: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
}

export interface CapabilityItem {
  id: string
  index: string
  title: string
  description: string
}

export interface StudioFactItem {
  id: string
  value: string
  label: string
  note: string
}

export interface ServiceItem {
  id: string
  index: string
  title: string
  category: string
  description: string
  deliverables: string[]
  scopeOfWork: string[]
  useCases: string[]
  image: string
  imageAlt: string
}

export interface ProjectSpaceShot {
  title: string
  caption: string
  image: string
  imageAlt: string
}

export interface ProjectItem {
  id: string
  title: string
  category:
    | 'Residential'
    | 'Commercial'
    | 'Jewellery Showroom'
    | 'Modular Kitchen'
    | 'Turnkey Residence'
  city: string
  locationLabel: string
  area: string
  description: string
  overview: string
  concept: string
  challenges: string
  solutions: string
  materials: string[]
  image: string
  imageAlt: string
  href: string
  spaces: ProjectSpaceShot[]
}

export interface ProcessStage {
  stage: string
  title: string
  durationLabel: string
  description: string
  deliverable: string
}

export interface TestimonialItem {
  id: string
  quote: string
  attribution: string
  projectContext: string
  label: string
}

export interface PackageTier {
  id: string
  name: string
  subtitle: string
  indicativeRangeInr: string
  timelineEstimate: string
  scopeSummary: string
  idealFor: string
  inclusions: string[]
  exclusions: string[]
  featured?: boolean
  ctaLabel: string
  href: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export type GalleryCategory =
  | 'All'
  | 'Living Rooms'
  | 'Bedrooms'
  | 'Modular Kitchens'
  | 'Dining Spaces'
  | 'Commercial & Offices'
  | 'Jewellery Showrooms'
  | 'Custom Furniture'
  | 'Architectural Details'

export interface GalleryItem {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'All'>
  locationLabel: string
  materialNote: string
  image: string
  imageAlt: string
}
