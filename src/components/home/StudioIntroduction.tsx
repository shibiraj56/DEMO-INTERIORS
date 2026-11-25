import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function StudioIntroduction() {
  return (
    <section
      aria-labelledby="studio-intro-heading"
      className="bg-linen section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Editorial Narrative */}
          <div data-reveal="fade-up" className="lg:col-span-5 space-y-6">
            <div className="kicker">The Studio</div>

            <h2
              id="studio-intro-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-charcoal"
            >
              Architecture for the way you truly inhabit a space.
            </h2>

            <p className="lead text-base sm:text-lg">
              Aurelia Interiors is a Tamil Nadu-focused architectural interior design practice
              dedicated to quiet, climate-responsive spaces across residences and workplaces.
            </p>

            <p className="text-sm sm:text-base text-taupe leading-relaxed">
              From coastal apartments in Chennai to courtyard villas in Madurai and textile
              offices in Tiruppur, we shape cross-ventilation, seasoned teak joinery, and
              natural stone into cohesive environments built for Indian living.
            </p>

            <blockquote className="pullquote text-base sm:text-lg my-6">
              “True luxury in interior architecture is measured by stillness, proportion, and
              the honesty of every material junction.”
            </blockquote>

            <div className="pt-2">
              <Link to="/about" className="btn-link group">
                <span>Explore Studio Ethos</span>
                <ArrowUpRight
                  className="w-4 h-4 text-bronze transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right Architectural Image Frame */}
          <div className="lg:col-span-7">
            <figure className="relative">
              <div data-reveal="image" className="aspect-[4/3] w-full overflow-hidden bg-parchment border border-champagne/80">
                <img
                  data-reveal="parallax"
                  src="/images/tn-chettinad-dining.jpg"
                  alt="Contemporary Tamil Nadu courtyard dining pavilion with carved teak pillars and Athangudi border tiles"
                  loading="lazy"
                  width={1400}
                  height={1050}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-taupe tracking-wide">
                <span>Spatial study: Carved teak pillars, terracotta &amp; Athangudi tile courtyard dining.</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-bronze">
                  Illustrative Studio Reference
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
