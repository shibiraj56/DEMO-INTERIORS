import { STUDIO_FACTS } from '../../data/services'

export default function StudioFacts() {
  return (
    <section
      aria-labelledby="studio-facts-heading"
      className="bg-charcoal text-linen py-16 sm:py-20 border-b border-linen/10"
    >
      <div className="site-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-linen/15">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-bronze-light font-medium block mb-2">
              Practice Architecture
            </span>
            <h2
              id="studio-facts-heading"
              className="font-serif text-2xl sm:text-3xl text-linen"
            >
              Structured around clarity and precision.
            </h2>
          </div>
          <p className="text-xs text-champagne/75 tracking-wide">
            Illustrative practice framework &amp; service structure
          </p>
        </div>

        <div data-reveal="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-linen/15">
          {STUDIO_FACTS.map((fact, idx) => (
            <div
              key={fact.id}
              data-reveal-item
              className={`py-6 sm:py-2 ${
                idx === 0
                  ? 'sm:pr-8'
                  : idx === STUDIO_FACTS.length - 1
                  ? 'sm:pl-8'
                  : 'sm:px-8'
              }`}
            >
              <div className="font-serif text-4xl sm:text-5xl text-bronze-light mb-3 tracking-tight">
                {fact.value}
              </div>
              <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-linen mb-2">
                {fact.label}
              </h3>
              <p className="text-xs sm:text-sm text-champagne/80 leading-relaxed">
                {fact.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
