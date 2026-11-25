import { STUDIO_CAPABILITIES } from '../../data/services'

export default function StudioCapabilities() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="bg-parchment section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="kicker">What Sets Us Apart</div>
            <h2
              id="capabilities-heading"
              className="font-serif text-3xl sm:text-4xl leading-tight text-charcoal"
            >
              Disciplined craft from concept to site handover.
            </h2>
            <p className="text-sm sm:text-base text-taupe leading-relaxed">
              Every residence and commercial studio is guided by four foundational standards
              that govern our drawings, material specifications, and site supervision.
            </p>
          </div>

          {/* Right Architectural Index List */}
          <div data-reveal="stagger" className="lg:col-span-8 divide-y divide-champagne border-t border-b border-champagne">
            {STUDIO_CAPABILITIES.map((item) => (
              <article
                key={item.id}
                data-reveal-item
                className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline group"
              >
                <div className="sm:col-span-2">
                  <span className="font-serif text-2xl sm:text-3xl text-bronze/80 group-hover:text-bronze transition-colors">
                    {item.index}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                    {item.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-sm sm:text-base text-taupe leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
