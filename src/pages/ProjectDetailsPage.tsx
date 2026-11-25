import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import InquiryCTA from '../components/home/InquiryCTA'
import { FEATURED_PROJECTS } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = FEATURED_PROJECTS.find((p) => p.id === projectId)

  usePageMeta(
    project
      ? `${project.title} | Aurelia Interiors — ${project.city}, Tamil Nadu`
      : 'Project Not Found | Aurelia Interiors',
    project
      ? `${project.title} (${project.area}, ${project.city}, Tamil Nadu) — ${project.description}`
      : 'Illustrative project study not found.'
  )

  if (!project) {
    return (
      <section className="bg-linen section-spacing border-b border-champagne">
        <div className="site-container max-w-2xl text-center space-y-6">
          <div className="kicker mx-auto">Portfolio</div>
          <h1 className="font-serif text-3xl sm:text-5xl text-charcoal">
            Project study not found.
          </h1>
          <p className="lead text-base">
            The requested architectural study could not be located. Return to our Tamil Nadu
            portfolio index to explore all illustrative concepts.
          </p>
          <div className="pt-2">
            <Link to="/portfolio" className="btn btn-primary">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Return to Portfolio</span>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const relatedProjects = FEATURED_PROJECTS.filter((p) => p.id !== project.id).slice(0, 2)

  return (
    <>
      <PageHero
        kicker={`${project.category} • ${project.city}, Tamil Nadu`}
        title={project.title}
        description={project.description}
        breadcrumbs={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: project.title },
        ]}
        disclosure={project.locationLabel}
      />

      {/* Primary Architectural Image & Specs Strip */}
      <section className="bg-linen section-spacing-compact border-b border-champagne/70">
        <div className="site-container space-y-10">
          <div className="aspect-[16/9] max-h-[680px] w-full overflow-hidden bg-parchment border border-champagne">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-parchment/60 border border-champagne p-6 sm:p-8">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-taupe block mb-1">
                Location Context
              </span>
              <span className="font-serif text-lg text-charcoal">
                {project.city}, Tamil Nadu (Illustrative)
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-taupe block mb-1">
                Estimated Area
              </span>
              <span className="font-serif text-lg text-charcoal">{project.area}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-taupe block mb-1">
                Discipline
              </span>
              <span className="font-serif text-lg text-charcoal">{project.category}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-taupe block mb-1">
                Key Materials
              </span>
              <span className="font-serif text-base text-charcoal">
                {project.materials.join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview, Concept, Challenges & Solutions */}
      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-taupe leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
                  Design Concept
                </h2>
                <p className="text-sm sm:text-base text-taupe leading-relaxed">
                  {project.concept}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 bg-parchment/50 border border-champagne p-6 sm:p-10">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-bronze mb-2">
                  Site &amp; Climate Challenges
                </h3>
                <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <hr className="hairline-divider" />

              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-bronze mb-2">
                  Architectural Solutions
                </h3>
                <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                  {project.solutions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space-by-Space Photography */}
      {project.spaces.length > 0 && (
        <section className="bg-parchment section-spacing border-b border-champagne/70">
          <div className="site-container">
            <div className="max-w-2xl mb-10">
              <div className="kicker mb-3">Space-by-Space Study</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Materiality &amp; spatial details.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.spaces.map((space) => (
                <figure key={space.title} className="bg-linen border border-champagne">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-parchment">
                    <img
                      src={space.image}
                      alt={space.imageAlt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="p-6 space-y-1.5">
                    <h3 className="font-serif text-xl text-charcoal">{space.title}</h3>
                    <p className="text-xs sm:text-sm text-taupe">{space.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="bg-linen section-spacing-compact border-b border-champagne/70">
        <div className="site-container">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Related Tamil Nadu Studies
            </h2>
            <Link to="/portfolio" className="btn-link">
              <span>All Projects</span>
              <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={rel.href}
                className="bg-parchment/40 border border-champagne grid grid-cols-1 sm:grid-cols-12 group hover:border-bronze transition-colors"
              >
                <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.imageAlt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="sm:col-span-7 p-6 flex flex-col justify-center space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold">
                    {rel.category} • {rel.city}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal group-hover:text-bronze transition-colors">
                    {rel.title}
                  </h3>
                  <span className="text-xs text-taupe">{rel.area}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquiryCTA />
    </>
  )
}
