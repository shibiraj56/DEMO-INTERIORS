import type { NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/portfolio' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Packages', href: '/packages' },
  { name: 'Contact', href: '/contact' },
]

export const ANNOUNCEMENT_DATA = {
  atelierLocation: 'Tamil Nadu Showcase: Chennai • Coimbatore • Madurai (Demo)',
  phone: '+91 00000 00000 (Demo)',
  email: 'enquiries@aurelia-demo.example',
  workingHours: 'Consultations by Appointment',
  consultationNote: 'Illustrative Portfolio Preview',
}

export const TAMIL_NADU_CITIES = [
  'Chennai',
  'Coimbatore',
  'Tiruppur',
  'Madurai',
  'Salem',
  'Erode',
  'Tiruchirappalli',
  'Other Tamil Nadu City',
] as const
