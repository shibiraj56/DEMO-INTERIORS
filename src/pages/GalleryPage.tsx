import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import PageHero from '../components/common/PageHero'
import InquiryCTA from '../components/home/InquiryCTA'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery'
import { prefersReducedMotion } from '../lib/animations'
import type { GalleryCategory } from '../types'
import { usePageMeta } from '../hooks/usePageMeta'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
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
        { opacity: 0.6, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [activeCategory])

  usePageMeta(
    'Visual Gallery | Aurelia Interiors — Tamil Nadu Interior Architecture',
    'Curated architectural interior photography across living rooms, bedrooms, modular kitchens, dining spaces, commercial offices, and custom furniture.'
  )

  const visibleItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <>
      <PageHero
        kicker="Architectural Visual Index"
        title="Curated spaces, textures, and joinery details."
        description="Browse illustrative interior compositions across residences, modular kitchens, commercial studios, and bespoke timber furniture."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container">
          {/* Category Filter Bar */}
          <div
            className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-champagne"
            role="group"
            aria-label="Filter gallery by space category"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isSelected}
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest font-medium border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-charcoal text-linen border-charcoal'
                      : 'bg-transparent text-taupe border-champagne hover:border-bronze hover:text-charcoal'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Responsive Image Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleItems.map((item) => (
              <figure
                key={item.id}
                className="bg-parchment/40 border border-champagne flex flex-col justify-between group"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-parchment">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="p-5 space-y-1.5 border-t border-champagne/60">
                  <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-widest">
                    <span className="text-bronze font-semibold">{item.category}</span>
                    <span className="text-taupe">{item.locationLabel}</span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl text-charcoal">
                    {item.title}
                  </h2>
                  <p className="text-xs text-taupe">{item.materialNote}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <InquiryCTA />
    </>
  )
}
