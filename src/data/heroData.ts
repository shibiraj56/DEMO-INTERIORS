import type { HeroSlide } from '../types'

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'Private Residence • The Courtyard House',
    title: 'Spaces sculpted for Tamil Nadu light, climate, and living.',
    description:
      'An illustrative Chennai residence crafted with seasoned Indian teak joinery, honed granite surfaces, breathable lime plaster, and cross-ventilated living volumes.',
    image: '/images/hero-chennai-courtyard.jpg',
    location: 'Illustrative Concept • Chennai, Tamil Nadu',
    metric: '4,800 SQ. FT. • TURNKEY RESIDENCE',
    primaryCta: {
      label: 'Explore Portfolio',
      href: '/portfolio',
    },
    secondaryCta: {
      label: 'Book Consultation',
      href: '/contact',
    },
  },
  {
    id: 'slide-2',
    eyebrow: 'Culinary Architecture • The Granite & Teak Kitchen',
    title: 'Refined modular kitchens engineered for Indian cooking.',
    description:
      'Harmonizing moisture-resistant marine-ply carcasses with fluted teak fronts, honed granite islands, and discrete utility ventilation.',
    image: '/images/hero-coimbatore-kitchen.jpg',
    location: 'Illustrative Concept • Coimbatore, Tamil Nadu',
    metric: 'BESPOKE MODULAR • DESIGN STUDY',
    primaryCta: {
      label: 'Explore Services',
      href: '/services',
    },
    secondaryCta: {
      label: 'Schedule Consultation',
      href: '/contact',
    },
  },
  {
    id: 'slide-3',
    eyebrow: 'Master Sanctuary • The Veranda Villa',
    title: 'Harmonious proportions crafted for serene daily rest.',
    description:
      'Quiet luxury articulated through terracotta and Athangudi-inspired accents, timber louvers for tropical shading, and calm ambient lighting.',
    image: '/images/hero-madurai-villa.jpg',
    location: 'Illustrative Concept • Madurai, Tamil Nadu',
    metric: '6,200 SQ. FT. • INTERIOR ARCHITECTURE',
    primaryCta: {
      label: 'View Project Gallery',
      href: '/gallery',
    },
    secondaryCta: {
      label: 'Enquire for Project',
      href: '/contact',
    },
  },
]
