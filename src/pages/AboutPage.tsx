import PageHero from '../components/common/PageHero'
import StudioCapabilities from '../components/home/StudioCapabilities'
import DesignPhilosophy from '../components/home/DesignPhilosophy'
import DesignProcess from '../components/home/DesignProcess'
import InquiryCTA from '../components/home/InquiryCTA'
import { usePageMeta } from '../hooks/usePageMeta'

const REGIONAL_MATERIALS = [
  {
    name: 'Seasoned Indian Teak',
    origin: 'Joinery, Louvers & Heirloom Furniture',
    note: 'Naturally resistant to humidity and warping, seasoned teak forms the structural warmth of our wardrobes, pooja mandirs, and shading screens.',
  },
  {
    name: 'Honed Indian Granite',
    origin: 'Kitchen Counters, Vanities & Plinths',
    note: 'Sourced across South India in muted charcoal and earth tones, honed to a tactile matte finish ideal for daily culinary preparation.',
  },
  {
    name: 'Athangudi Tiles & Terracotta',
    origin: 'Thresholds, Verandas & Courtyard Accents',
    note: 'Handcrafted cement and kiln-fired clay surfaces that stay cool underfoot and anchor contemporary interiors in Tamil Nadu craft heritage.',
  },
  {
    name: 'Breathable Lime Plaster',
    origin: 'Living Volumes & Feature Walls',
    note: 'Mineral-based wall finishes that soften harsh tropical daylight while allowing masonry to breathe naturally.',
  },
]

export default function AboutPage() {
  usePageMeta(
    'About Us | Aurelia Interiors — Tamil Nadu Interior Architecture Studio',
    'Discover Aurelia Interiors’ approach to climate-responsive residential and commercial interior architecture across Chennai, Coimbatore, Madurai, and Tamil Nadu.'
  )

  return (
    <>
      <PageHero
        kicker="About The Practice"
        title="Interior architecture rooted in Tamil Nadu light, climate, and craft."
        description="Aurelia Interiors is a design and turnkey execution practice shaping quiet, enduring residences and workplaces across Tamil Nadu."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Approach to Tamil Nadu Residential & Commercial Interiors */}
      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="kicker">Regional Context</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
                Designed for coastal humidity, inland sun, and multi-generational living.
              </h2>
              <p className="text-sm sm:text-base text-taupe leading-relaxed">
                Designing an interior in Chennai, Coimbatore, or Madurai demands more than
                catalog aesthetics. Strong western sun, monsoon humidity, heavy culinary
                preparation, and bustling commercial workflows require thoughtful spatial
                orientation and durable material choices.
              </p>
              <p className="text-sm sm:text-base text-taupe leading-relaxed">
                Whether planning a compact 2 BHK apartment, an independent courtyard residence,
                or a textile export office in Tiruppur, we pair regional Indian craft with
                disciplined modern joinery and lighting.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden bg-parchment border border-champagne">
                <img
                  src="/images/tn-coimbatore-living.jpg"
                  alt="Contemporary Tamil Nadu residential interior with cane-and-teak screens and natural daylight"
                  loading="lazy"
                  width={1400}
                  height={1050}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Craftsmanship */}
      <section className="bg-parchment section-spacing border-b border-champagne/70">
        <div className="site-container">
          <div className="max-w-2xl mb-12">
            <div className="kicker mb-3">Materials &amp; Craftsmanship</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
              Tactile palettes grounded in regional materiality.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {REGIONAL_MATERIALS.map((mat) => (
              <article
                key={mat.name}
                className="bg-linen border border-champagne p-7 sm:p-8 space-y-3"
              >
                <span className="text-[11px] uppercase tracking-widest text-bronze font-semibold block">
                  {mat.origin}
                </span>
                <h3 className="font-serif text-2xl text-charcoal">{mat.name}</h3>
                <p className="text-sm text-taupe leading-relaxed">{mat.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StudioCapabilities />
      <DesignPhilosophy />
      <DesignProcess />
      <InquiryCTA />
    </>
  )
}
