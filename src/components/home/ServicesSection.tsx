import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import gsap from 'gsap'
import { CORE_SERVICES } from '../../data/services'
import { prefersReducedMotion } from '../../lib/animations'

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(CORE_SERVICES[0].id)
  const previewRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)
  const activeService = CORE_SERVICES.find((s) => s.id === activeId) ?? CORE_SERVICES[0]

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const el = previewRef.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0.7, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      )
    }, previewRef)

    return () => ctx.revert()
  }, [activeId])

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-linen section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="kicker mb-3">Core Disciplines</div>
            <h2
              id="services-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight"
            >
              Comprehensive interior architecture &amp; turnkey craft.
            </h2>
          </div>
          <Link to="/services" className="btn-link shrink-0 group">
            <span>View All Services</span>
            <ArrowUpRight
              className="w-4 h-4 text-bronze transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Interactive Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Interactive Service Index */}
          <div
            className="lg:col-span-6 divide-y divide-champagne border-t border-b border-champagne"
            role="tablist"
            aria-label="Core Interior Design Services"
          >
            {CORE_SERVICES.map((service) => {
              const isSelected = service.id === activeId
              return (
                <div key={service.id} className="py-1">
                  <button
                    type="button"
                    role="tab"
                    id={`service-tab-${service.id}`}
                    aria-selected={isSelected}
                    aria-controls={`service-panel-${service.id}`}
                    onClick={() => setActiveId(service.id)}
                    onMouseEnter={() => setActiveId(service.id)}
                    className={`w-full text-left py-4 sm:py-5 px-2 flex items-center justify-between gap-4 transition-colors duration-300 cursor-pointer ${
                      isSelected ? 'text-charcoal' : 'text-taupe hover:text-charcoal'
                    }`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-serif text-sm sm:text-base transition-colors ${
                          isSelected ? 'text-bronze font-medium' : 'text-taupe/70'
                        }`}
                      >
                        {service.index}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl text-current leading-snug">
                          {service.title}
                        </h3>
                        <span className="text-[11px] uppercase tracking-widest text-taupe block mt-0.5">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'text-bronze translate-x-0 opacity-100'
                          : 'text-taupe/40 -translate-x-1 opacity-60'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile Inline Preview (visible below lg) */}
                  {isSelected && (
                    <div className="lg:hidden pb-5 px-2 space-y-4">
                      <div className="aspect-[16/10] w-full overflow-hidden bg-parchment border border-champagne">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          width={1200}
                          height={750}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-taupe leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-charcoal"
                          >
                            <Check className="w-3.5 h-3.5 text-bronze shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Desktop Editorial Preview Panel */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
            <div
              ref={previewRef}
              id={`service-panel-${activeService.id}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService.id}`}
              className="bg-parchment border border-champagne p-6 xl:p-8 space-y-6"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-linen border border-champagne/60">
                <img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-champagne pb-3">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-bronze font-semibold">
                    {activeService.index} — {activeService.category}
                  </span>
                  <Link
                    to="/services"
                    className="text-xs uppercase tracking-wider font-medium text-charcoal hover:text-bronze transition-colors inline-flex items-center gap-1"
                  >
                    <span>Service Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <h3 className="font-serif text-2xl text-charcoal">
                  {activeService.title}
                </h3>

                <p className="text-sm text-taupe leading-relaxed">
                  {activeService.description}
                </p>

                <ul className="grid grid-cols-1 gap-2 pt-2">
                  {activeService.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs text-charcoal font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-bronze shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
