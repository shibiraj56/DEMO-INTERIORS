import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { INTERIOR_PACKAGES } from '../../data/packages'

export default function PackagesSection() {
  return (
    <section
      aria-labelledby="packages-heading"
      className="bg-linen section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="kicker mb-3">Engagement Frameworks</div>
            <h2
              id="packages-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight"
            >
              Transparent scope tiers tailored to your architecture.
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-[11px] uppercase tracking-widest text-taupe">
              Scope estimates tailored after site survey
            </span>
            <Link to="/packages" className="btn-link">
              <span>Compare Full Scope</span>
              <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div data-reveal="stagger" className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {INTERIOR_PACKAGES.map((pkg) => {
            const isFeatured = Boolean(pkg.featured)
            return (
              <article
                key={pkg.id}
                data-reveal-item
                className={`p-7 sm:p-9 border flex flex-col justify-between gap-8 transition-colors duration-300 ${
                  isFeatured
                    ? 'bg-charcoal text-linen border-charcoal'
                    : 'bg-parchment/50 text-charcoal border-champagne hover:border-bronze'
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-[11px] uppercase tracking-[0.2em] font-semibold ${
                        isFeatured ? 'text-bronze-light' : 'text-bronze'
                      }`}
                    >
                      {pkg.subtitle}
                    </span>
                    {isFeatured && (
                      <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest border border-bronze-light/40 text-bronze-light">
                        Most Comprehensive
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      className={`font-serif text-2xl sm:text-3xl mb-2 ${
                        isFeatured ? 'text-linen' : 'text-charcoal'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isFeatured ? 'text-champagne/90' : 'text-taupe'
                      }`}
                    >
                      {pkg.scopeSummary}
                    </p>
                  </div>

                  <div
                    className={`py-3 border-y text-xs uppercase tracking-wider ${
                      isFeatured
                        ? 'border-linen/15 text-champagne'
                        : 'border-champagne text-taupe'
                    }`}
                  >
                    <span className="block text-[10px] opacity-75 mb-0.5">Ideal For</span>
                    <span className={isFeatured ? 'text-linen font-medium' : 'text-charcoal font-medium'}>
                      {pkg.idealFor}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-bronze-light' : 'text-bronze'
                          }`}
                          aria-hidden="true"
                        />
                        <span className={isFeatured ? 'text-parchment/95' : 'text-charcoal'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    to={pkg.href}
                    className={`btn w-full justify-center ${
                      isFeatured ? 'btn-light' : 'btn-secondary'
                    }`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
