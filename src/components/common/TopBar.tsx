import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { ANNOUNCEMENT_DATA } from '../../data/navigation'

export default function TopBar() {
  return (
    <aside
      aria-label="Studio Announcement & Contact"
      className="bg-parchment/80 border-b border-champagne/60 text-xs text-taupe hidden lg:block transition-colors duration-300"
    >
      <div className="site-container py-2 flex items-center justify-between">
        {/* Left: Studio Locations & Hours */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-bronze shrink-0" aria-hidden="true" />
            <span className="tracking-wide font-normal">{ANNOUNCEMENT_DATA.atelierLocation}</span>
          </div>
          <span className="text-champagne-dark" aria-hidden="true">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-bronze shrink-0" aria-hidden="true" />
            <span className="tracking-wide font-normal">{ANNOUNCEMENT_DATA.workingHours}</span>
          </div>
        </div>

        {/* Right: Phone, Email & Private Consultation trigger */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${ANNOUNCEMENT_DATA.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-charcoal transition-colors duration-200"
          >
            <Phone className="w-3 h-3 text-bronze shrink-0" aria-hidden="true" />
            <span>{ANNOUNCEMENT_DATA.phone}</span>
          </a>
          <span className="text-champagne-dark" aria-hidden="true">•</span>
          <a
            href={`mailto:${ANNOUNCEMENT_DATA.email}`}
            className="flex items-center gap-1.5 hover:text-charcoal transition-colors duration-200"
          >
            <Mail className="w-3 h-3 text-bronze shrink-0" aria-hidden="true" />
            <span>{ANNOUNCEMENT_DATA.email}</span>
          </a>
          <span className="text-champagne-dark" aria-hidden="true">•</span>
          <span className="font-medium text-bronze uppercase tracking-widest text-[10px]">
            {ANNOUNCEMENT_DATA.consultationNote}
          </span>
        </div>
      </div>
    </aside>
  )
}
