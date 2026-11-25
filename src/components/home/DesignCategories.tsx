import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function DesignCategories() {
  const categories = [
    {
      id: 'residential',
      eyebrow: 'Private Living',
      title: 'Residential Architecture',
      description:
        'Bespoke living rooms, serene master suites, modular kitchens, and custom wardrobes tailored for apartments, penthouses, and private villas.',
      spaces: ['Living & Dining', 'Modular Kitchens', 'Master Bedrooms', 'Custom Wardrobes'],
      image: '/images/tn-coimbatore-living.jpg',
      imageAlt: 'Contemporary Tamil Nadu residential living room with cane-and-teak screens and natural light',
      href: '/services',
    },
    {
      id: 'commercial',
      eyebrow: 'Jewellery Showrooms, Textile Offices & Retail',
      title: 'Commercial & Showroom Interiors',
      description:
        'Luxury gold jewellery showrooms, bridal consultation lounges, Tiruppur textile offices, and handloom retail stores engineered for poise, lighting precision, and security.',
      spaces: ['Jewellery Showrooms', 'Bridal Lounges', 'Textile Offices', 'Retail Galleries'],
      image: '/images/jewellery-showroom-main.jpg',
      imageAlt: 'Luxury Tamil Nadu jewellery showroom interior with champagne-bronze display counters and ivory marble flooring',
      href: '/portfolio/golden-atelier-jewellery',
    },
  ]

  return (
    <section
      aria-labelledby="design-categories-heading"
      className="bg-parchment section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="max-w-2xl mb-12">
          <div className="kicker mb-3">Practice Verticals</div>
          <h2
            id="design-categories-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight"
          >
            Residential sanctuary &amp; commercial precision.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="bg-linen border border-champagne flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    loading="lazy"
                    width={1200}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-5 left-6 right-6 text-linen">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-bronze-light font-medium block mb-1">
                      {cat.eyebrow}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-linen">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm sm:text-base text-taupe leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.spaces.map((space) => (
                      <span key={space} className="tag-editorial">
                        {space}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-champagne/60">
                <Link to={cat.href} className="btn-link">
                  <span>Explore {cat.title}</span>
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
