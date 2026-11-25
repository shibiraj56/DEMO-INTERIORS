import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import PageHero from '../components/common/PageHero'
import InquiryCTA from '../components/home/InquiryCTA'
import { FEATURED_PROJECTS } from '../data/projects'
import { prefersReducedMotion } from '../lib/animations'
import { usePageMeta } from '../hooks/usePageMeta'

const CATEGORIES = [
  'All',
  'Turnkey Residence',
  'Jewellery Showroom',
  'Residential',
  'Commercial',
  'Modular Kitchen',
] as const

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const gridRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const grid = gridRef.current
    if (!grid || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.children,
        { opacity: 0.6, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [selectedCategory])

  usePageMeta(
    'Portfolio | Aurelia Interiors — Illustrative Tamil Nadu Projects',
    'Browse illustrative residential, commercial, modular kitchen, and turnkey interior studies across Chennai, Coimbatore, Madurai, Tiruppur, Salem, and Erode.'
  )

  const filteredProjects =
    selectedCategory === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory)

  return (
    <>
      <PageHero
        kicker="Illustrative Portfolio"
        title="Architectural studies across Tamil Nadu."
        description="Explore illustrative residential residences, modular kitchens, and commercial workspaces designed for Chennai, Coimbatore, Madurai, Tiruppur, Salem, and Erode."
        breadcrumbs={[{ label: 'Portfolio' }]}
        disclosure="Note: All projects shown are illustrative design concepts created to demonstrate spatial, material, and regional capabilities."
      />

      {/* Category Filter & Project Grid */}
      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container">
          {/* Category Filter Bar */}
          <div
            className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 mb-10 border-b border-champagne"
            role="group"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-medium border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-charcoal text-linen border-charcoal'
                      : 'bg-transparent text-taupe border-champagne hover:border-bronze hover:text-charcoal'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Filtered Projects */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-parchment/40 border border-champagne flex flex-col justify-between group"
              >
                <div>
                  <Link
                    to={project.href}
                    className="block aspect-[16/10] w-full overflow-hidden bg-parchment border-b border-champagne/70"
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      width={1200}
                      height={750}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-widest">
                      <span className="text-bronze font-semibold">{project.category}</span>
                      <span className="text-taupe font-mono">{project.area}</span>
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-charcoal leading-snug mb-1">
                        <Link to={project.href} className="hover:text-bronze transition-colors">
                          {project.title}
                        </Link>
                      </h2>
                      <p className="text-[11px] uppercase tracking-wider text-taupe">
                        {project.locationLabel}
                      </p>
                    </div>

                    <p className="text-sm text-taupe leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.materials.map((mat) => (
                        <span key={mat} className="tag-editorial">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-champagne/60">
                  <Link to={project.href} className="btn-link">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryCTA />
    </>
  )
}
