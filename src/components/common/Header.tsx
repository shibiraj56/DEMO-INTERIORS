import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { NAV_ITEMS, ANNOUNCEMENT_DATA } from '../../data/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)
  const wasMenuOpenRef = useRef(false)

  // Track scroll position to trigger sticky transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on Esc key and manage focus return
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
      wasMenuOpenRef.current = true
      const focusTimer = window.setTimeout(() => {
        firstMobileLinkRef.current?.focus()
      }, 50)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.clearTimeout(focusTimer)
      }
    } else if (wasMenuOpenRef.current) {
      wasMenuOpenRef.current = false
      menuToggleRef.current?.focus()
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-400 ${
          isScrolled
            ? 'bg-linen/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(41,39,32,0.06)] border-b border-champagne/80 py-3.5'
            : 'bg-linen/90 backdrop-blur-xs border-b border-champagne/50 py-5'
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex flex-col focus-visible:outline-2 focus-visible:outline-bronze"
            aria-label="Aurelia Interiors — Return to Homepage"
          >
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-[0.14em] text-charcoal group-hover:text-bronze transition-colors duration-300">
              AURELIA
            </span>
            <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-taupe font-medium -mt-0.5">
              INTERIORS
            </span>
          </Link>

          {/* Central Main Navigation — Desktop (lg and above) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-4 xl:gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-[11px] xl:text-xs tracking-wider xl:tracking-widest uppercase font-medium transition-colors duration-300 py-1 whitespace-nowrap after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-bronze after:transition-transform after:duration-300 ${
                    isActive
                      ? 'text-bronze font-semibold after:scale-x-100 after:origin-left'
                      : 'text-charcoal/80 hover:text-bronze after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Consultation CTA — Desktop (lg and above) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact"
              className="btn btn-sm btn-primary lg:!px-3.5 xl:!px-5 group"
              aria-label="Book a private design consultation"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-champagne group-hover:text-white transition-colors duration-200" />
            </Link>
          </div>

          {/* Mobile & Tablet Menu Toggle Button */}
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-bronze transition-colors focus-visible:outline-2 focus-visible:outline-bronze"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Full-width Mobile & Tablet Navigation Panel */}
        <div
          id="mobile-navigation-drawer"
          className={`lg:hidden fixed inset-x-0 top-full bg-linen border-b border-champagne shadow-2xl transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? 'max-h-[calc(100vh-72px)] opacity-100 visible py-6 overflow-y-auto'
              : 'max-h-0 opacity-0 invisible py-0 overflow-hidden'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="site-container flex flex-col justify-between h-full space-y-6">
            {/* Navigation Links */}
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    ref={idx === 0 ? firstMobileLinkRef : undefined}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-base py-2.5 border-b border-champagne/40 tracking-wider uppercase font-medium transition-colors ${
                      isActive
                        ? 'text-bronze font-semibold'
                        : 'text-charcoal hover:text-bronze'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-taupe/60" />
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Contact & Action Bar */}
            <div className="pt-4 space-y-4 border-t border-champagne/60">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary w-full justify-center text-center"
              >
                <span>Book Private Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-champagne" />
              </Link>

              <div className="grid grid-cols-1 gap-2 pt-2 text-xs text-taupe">
                <a
                  href={`tel:${ANNOUNCEMENT_DATA.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 py-1 hover:text-charcoal"
                >
                  <Phone className="w-3.5 h-3.5 text-bronze shrink-0" />
                  <span>{ANNOUNCEMENT_DATA.phone}</span>
                </a>
                <a
                  href={`mailto:${ANNOUNCEMENT_DATA.email}`}
                  className="flex items-center gap-2 py-1 hover:text-charcoal"
                >
                  <Mail className="w-3.5 h-3.5 text-bronze shrink-0" />
                  <span>{ANNOUNCEMENT_DATA.email}</span>
                </a>
                <div className="flex items-center gap-2 py-1">
                  <MapPin className="w-3.5 h-3.5 text-bronze shrink-0" />
                  <span>{ANNOUNCEMENT_DATA.atelierLocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
