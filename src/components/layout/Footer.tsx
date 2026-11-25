import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { ANNOUNCEMENT_DATA, NAV_ITEMS } from '../../data/navigation'

const CURRENT_YEAR = new Date().getFullYear()

const DISCIPLINE_LINKS = [
  { name: 'Residential Interiors', href: '/services' },
  { name: 'Commercial & Offices', href: '/services' },
  { name: 'Jewellery Showrooms', href: '/services#jewellery-showroom-interiors' },
  { name: 'Modular Kitchens', href: '/services' },
  { name: 'Custom Furniture & Joinery', href: '/services' },
  { name: 'Space Planning', href: '/services' },
  { name: 'Turnkey Execution', href: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-linen pt-16 pb-10">
      <div className="site-container">
        {/* Top Multi-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-linen/15">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              className="inline-flex flex-col focus-visible:outline-2 focus-visible:outline-bronze-light"
              aria-label="Aurelia Interiors — Home"
            >
              <span className="font-serif text-2xl font-medium tracking-[0.14em] text-linen">
                AURELIA
              </span>
              <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-champagne/80 -mt-0.5">
                INTERIORS
              </span>
            </Link>

            <p className="font-serif italic text-base text-bronze-light">
              Spaces that reflect the art of living.
            </p>

            <p className="text-xs sm:text-sm text-champagne/80 leading-relaxed max-w-sm">
              A Tamil Nadu-focused interior architecture showcase demonstrating residential,
              commercial, modular kitchen, and bespoke joinery craft across Chennai, Coimbatore,
              Madurai, Tiruppur, Salem, Erode, and Tiruchirappalli.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-bronze-light font-semibold">
              Studio
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-champagne/85 hover:text-linen transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-bronze-light font-semibold">
              Disciplines
            </h3>
            <ul className="space-y-2.5">
              {DISCIPLINE_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-champagne/85 hover:text-linen transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustrative Studio Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-bronze-light font-semibold">
              Consultation (Demo)
            </h3>

            <div className="space-y-3 text-sm text-champagne/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze-light shrink-0 mt-0.5" aria-hidden="true" />
                <span>{ANNOUNCEMENT_DATA.atelierLocation}</span>
              </div>

              <a
                href={`tel:${ANNOUNCEMENT_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-linen transition-colors"
              >
                <Phone className="w-4 h-4 text-bronze-light shrink-0" aria-hidden="true" />
                <span>{ANNOUNCEMENT_DATA.phone}</span>
              </a>

              <a
                href={`mailto:${ANNOUNCEMENT_DATA.email}`}
                className="flex items-center gap-2.5 hover:text-linen transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-bronze-light shrink-0" aria-hidden="true" />
                <span>{ANNOUNCEMENT_DATA.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-linen hover:text-bronze-light transition-colors border-b border-linen/30 pb-1"
              >
                <span>Request Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze-light" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Illustrative Disclosure */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-champagne/65">
          <span>
            &copy; {CURRENT_YEAR} Aurelia Interiors — Illustrative Architecture &amp; Interior Design Showcase.
          </span>
          <span>
            Portfolio entries, perspectives &amp; studio metrics are illustrative demonstration content.
          </span>
        </div>
      </div>
    </footer>
  )
}
