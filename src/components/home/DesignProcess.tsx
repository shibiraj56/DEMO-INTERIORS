import { DESIGN_PROCESS } from '../../data/process'

export default function DesignProcess() {
  return (
    <section
      aria-labelledby="design-process-heading"
      className="bg-linen section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="kicker mb-3">Execution Methodology</div>
            <h2
              id="design-process-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight"
            >
              Five deliberate stages from brief to handover.
            </h2>
          </div>
          <p className="text-sm text-taupe max-w-md">
            A transparent, milestone-driven workflow designed to keep drawings, site
            craftsmanship, and schedules aligned.
          </p>
        </div>

        {/* 5-Stage Architectural Progression */}
        <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {DESIGN_PROCESS.map((item) => (
            <article
              key={item.stage}
              data-reveal-item
              className="border-t-2 border-bronze/70 pt-5 pb-6 flex flex-col justify-between gap-6 bg-parchment/40 px-5 border-x border-b border-champagne/60"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest">
                  <span className="text-bronze font-semibold">{item.stage}</span>
                  <span className="text-taupe font-mono">{item.durationLabel}</span>
                </div>

                <h3 className="font-serif text-xl text-charcoal leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-taupe leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-champagne/70">
                <span className="text-[10px] uppercase tracking-widest text-taupe block mb-1">
                  Key Deliverable
                </span>
                <span className="text-xs font-medium text-charcoal">
                  {item.deliverable}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
