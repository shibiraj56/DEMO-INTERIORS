export default function DesignPhilosophy() {
  const pillars = [
    {
      title: 'Restraint & Spatial Calm',
      text: 'We edit away visual noise so natural light, ceiling volume, and sightlines carry the room.',
    },
    {
      title: 'Tactile Materiality',
      text: 'Every surface is selected for how it feels underhand—honed stone, matte limewash, and open-grain timber.',
    },
    {
      title: 'Enduring Proportion',
      text: 'Proportions rooted in classical architectural geometry ensure spaces remain relevant beyond seasonal trends.',
    },
  ]

  return (
    <section
      aria-labelledby="philosophy-heading"
      className="bg-linen section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Architectural Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div data-reveal="image" className="aspect-[4/5] max-h-[620px] w-full overflow-hidden bg-parchment border border-champagne">
              <img
                data-reveal="parallax"
                src="/images/tn-pooja-living.jpg"
                alt="Contemporary Tamil Nadu pooja alcove with carved teakwood mandir, brass bells, and Athangudi geometric tiles"
                loading="lazy"
                width={1400}
                height={1050}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Philosophy Narrative */}
          <div data-reveal="fade-up" className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="kicker">Design Philosophy</div>
              <h2
                id="philosophy-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight"
              >
                Quiet architecture shaped around daily rituals.
              </h2>
              <p className="lead text-base sm:text-lg">
                We believe an interior should feel effortless to live in—supporting morning
                routines, focused work, and unhurried gatherings without competing for attention.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-champagne">
              {pillars.map((pillar, idx) => (
                <div key={pillar.title} className="flex gap-5 items-start">
                  <span className="font-serif text-lg text-bronze shrink-0 pt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-charcoal mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-taupe leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
