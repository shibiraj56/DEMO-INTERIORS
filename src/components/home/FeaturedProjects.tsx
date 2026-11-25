import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { FEATURED_PROJECTS } from '../../data/projects'

export default function FeaturedProjects() {
  const [leadProject, ...secondaryProjects] = FEATURED_PROJECTS.slice(0, 4)

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="bg-parchment section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="kicker mb-3">Illustrative Portfolio</div>
            <h2
              id="featured-projects-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight"
            >
              Selected architectural studies &amp; spatial concepts.
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-[11px] uppercase tracking-widest text-taupe">
              All entries represent illustrative demo concepts
            </span>
            <Link to="/portfolio" className="btn-link group">
              <span>Explore Full Portfolio</span>
              <ArrowUpRight
                className="w-4 h-4 text-bronze transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Lead Featured Project — Asymmetric 12-Col Editorial Feature */}
        <article data-reveal="fade-up" className="bg-linen border border-champagne grid grid-cols-1 lg:grid-cols-12 mb-10 lg:mb-12 group">
          <div className="lg:col-span-7 overflow-hidden bg-parchment">
            <div className="aspect-[16/10] w-full h-full overflow-hidden">
              <img
                src={leadProject.image}
                alt={leadProject.imageAlt}
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-widest">
                <span className="text-bronze font-semibold">{leadProject.category}</span>
                <span className="text-taupe font-mono">{leadProject.area}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal leading-snug">
                {leadProject.title}
              </h3>

              <p className="text-xs uppercase tracking-wider text-taupe">
                {leadProject.locationLabel}
              </p>

              <p className="text-sm sm:text-base text-taupe leading-relaxed">
                {leadProject.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {leadProject.materials.map((mat) => (
                  <span key={mat} className="tag-editorial">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-champagne/70">
              <Link to={leadProject.href} className="btn-link group/link">
                <span>Explore Project</span>
                <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>

        {/* Secondary Projects Grid */}
        <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryProjects.map((project) => (
            <article
              key={project.id}
              data-reveal-item
              className="bg-linen border border-champagne flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-parchment border-b border-champagne/60">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest">
                    <span className="text-bronze font-semibold">{project.category}</span>
                    <span className="text-taupe font-mono">{project.area}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[11px] uppercase tracking-wider text-taupe">
                    {project.locationLabel}
                  </p>

                  <p className="text-sm text-taupe leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-champagne/60 flex items-center justify-between">
                <Link to={project.href} className="btn-link">
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
