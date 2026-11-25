import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import InquiryCTA from '../components/home/InquiryCTA'
import { CORE_SERVICES } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServicesPage() {
  usePageMeta(
    'Interior Design Services | Aurelia Interiors — Tamil Nadu',
    'Explore residential interior design, commercial offices, modular kitchens, custom furniture & joinery, space planning, and turnkey interior execution across Tamil Nadu.'
  )

  return (
    <>
      <PageHero
        kicker="Practice Disciplines"
        title="Six integrated interior architecture & execution services."
        description="From spatial planning and modular kitchens to turnkey residential and commercial fitouts across Chennai, Coimbatore, Tiruppur, Madurai, Salem, and Erode."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Detailed Service Index */}
      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container space-y-16 lg:space-y-24">
          {CORE_SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0
            return (
              <article
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pb-16 border-b border-champagne last:border-b-0 last:pb-0"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-parchment border border-champagne">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-bronze font-semibold">
                    <span>{service.index}</span>
                    <span className="w-6 h-[1px] bg-bronze" aria-hidden="true" />
                    <span>{service.category}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-taupe leading-relaxed">
                    {service.description}
                  </p>

                  {/* Scope of Work */}
                  <div className="pt-2 space-y-3">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-charcoal">
                      Scope of Work &amp; Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {service.scopeOfWork.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-charcoal"
                        >
                          <Check
                            className="w-4 h-4 text-bronze shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable Use Cases */}
                  <div className="bg-parchment/70 border border-champagne p-5 space-y-2">
                    <h3 className="text-[11px] uppercase tracking-widest font-semibold text-taupe">
                      Suitable Use Cases in Tamil Nadu
                    </h3>
                    <ul className="space-y-1 text-xs sm:text-sm text-charcoal">
                      {service.useCases.map((useCase) => (
                        <li key={useCase}>• {useCase}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link to="/contact" className="btn btn-primary btn-sm">
                      <span>Enquire About {service.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-champagne" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <InquiryCTA />
    </>
  )
}
