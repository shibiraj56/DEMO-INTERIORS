import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Minus } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import DesignProcess from '../components/home/DesignProcess'
import FAQSection from '../components/home/FAQSection'
import InquiryCTA from '../components/home/InquiryCTA'
import { INTERIOR_PACKAGES } from '../data/packages'
import { usePageMeta } from '../hooks/usePageMeta'

export default function PackagesPage() {
  usePageMeta(
    'Interior Design Packages | Aurelia Interiors — Tamil Nadu',
    'Compare Essential, Signature, and Sovereign interior architecture packages in INR for apartments, villas, and commercial spaces across Tamil Nadu.'
  )

  return (
    <>
      <PageHero
        kicker="Scope & Investment Frameworks"
        title="Structured packages tailored to your property."
        description="Transparent architectural scope tiers calibrated for 2 BHK / 3 BHK apartments, independent villas, and commercial studios across Tamil Nadu."
        breadcrumbs={[{ label: 'Packages' }]}
        disclosure="Note: All INR (₹) ranges shown are illustrative demonstration estimates. Formal quotations are prepared only after a measured site survey and material sign-off."
      />

      {/* Detailed Package Comparison */}
      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {INTERIOR_PACKAGES.map((pkg) => {
              const isFeatured = Boolean(pkg.featured)
              return (
                <article
                  key={pkg.id}
                  className={`p-7 sm:p-9 border flex flex-col justify-between gap-8 ${
                    isFeatured
                      ? 'bg-charcoal text-linen border-charcoal'
                      : 'bg-parchment/50 text-charcoal border-champagne'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span
                        className={`text-[11px] uppercase tracking-[0.2em] font-semibold block ${
                          isFeatured ? 'text-bronze-light' : 'text-bronze'
                        }`}
                      >
                        {pkg.subtitle}
                      </span>
                      <h2
                        className={`font-serif text-2xl sm:text-3xl ${
                          isFeatured ? 'text-linen' : 'text-charcoal'
                        }`}
                      >
                        {pkg.name}
                      </h2>
                      <p
                        className={`text-sm leading-relaxed ${
                          isFeatured ? 'text-champagne/90' : 'text-taupe'
                        }`}
                      >
                        {pkg.scopeSummary}
                      </p>
                    </div>

                    {/* Illustrative INR Range & Timeline */}
                    <div
                      className={`p-4 border space-y-2 ${
                        isFeatured
                          ? 'border-linen/20 bg-linen/5'
                          : 'border-champagne bg-linen'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] uppercase tracking-widest opacity-75 block">
                          Illustrative Estimate (INR)
                        </span>
                        <span
                          className={`font-serif text-lg font-medium ${
                            isFeatured ? 'text-bronze-light' : 'text-charcoal'
                          }`}
                        >
                          {pkg.indicativeRangeInr}
                        </span>
                      </div>
                      <div className="text-xs opacity-80">
                        Typical Schedule: {pkg.timelineEstimate}
                      </div>
                    </div>

                    <div
                      className={`py-3 border-y text-xs ${
                        isFeatured
                          ? 'border-linen/15 text-champagne'
                          : 'border-champagne text-taupe'
                      }`}
                    >
                      <span className="uppercase tracking-widest text-[10px] block mb-1 opacity-75">
                        Suitable Property Types
                      </span>
                      <span className={isFeatured ? 'text-linen font-medium' : 'text-charcoal font-medium'}>
                        {pkg.idealFor}
                      </span>
                    </div>

                    {/* Included */}
                    <div className="space-y-3">
                      <h3 className="text-xs uppercase tracking-widest font-semibold opacity-80">
                        Included in Scope
                      </h3>
                      <ul className="space-y-2.5">
                        {pkg.inclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm">
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

                    {/* Excluded */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs uppercase tracking-widest font-semibold opacity-70">
                        Typically Excluded
                      </h3>
                      <ul className="space-y-2">
                        {pkg.exclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs opacity-80">
                            <Minus className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className={`btn w-full justify-center ${
                        isFeatured ? 'btn-light' : 'btn-primary'
                      }`}
                    >
                      <span>Request Consultation</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <DesignProcess />
      <FAQSection />
      <InquiryCTA />
    </>
  )
}
