import { Quote } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import InquiryCTA from '../components/home/InquiryCTA'
import { ILLUSTRATIVE_TESTIMONIALS } from '../data/testimonials'
import { usePageMeta } from '../hooks/usePageMeta'

export default function TestimonialsPage() {
  usePageMeta(
    'Client Perspectives (Illustrative) | Aurelia Interiors — Tamil Nadu',
    'Illustrative client perspective scenarios across Tamil Nadu residential apartments, villas, and commercial offices.'
  )

  return (
    <>
      <PageHero
        kicker="Client Perspectives"
        title="How spaces feel once inhabited."
        description="Representative scenarios illustrating how residential homeowners and commercial teams experience our design-to-handover methodology across Tamil Nadu."
        breadcrumbs={[{ label: 'Testimonials' }]}
        disclosure="Disclosure: All perspectives presented on this page are fictional illustrative examples for demonstration purposes—not verified customer reviews."
      />

      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ILLUSTRATIVE_TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className="bg-parchment/50 border border-champagne p-8 sm:p-10 flex flex-col justify-between gap-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-3">
                    <Quote className="w-6 h-6 text-bronze" aria-hidden="true" />
                    <span className="tag-editorial">{item.label}</span>
                  </div>

                  <blockquote className="font-serif italic text-xl leading-snug text-charcoal">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="pt-5 border-t border-champagne">
                  <div className="font-serif text-base text-charcoal font-medium">
                    {item.attribution}
                  </div>
                  <div className="text-xs text-taupe mt-1">{item.projectContext}</div>
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
