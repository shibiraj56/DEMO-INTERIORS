import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section
      aria-labelledby="inquiry-cta-heading"
      className="bg-charcoal text-linen py-20 sm:py-28 border-b border-linen/10"
    >
      <div className="site-container">
        <div data-reveal="fade-up" className="border border-linen/20 p-8 sm:p-14 lg:p-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-medium text-bronze-light">
              <span className="w-8 h-[1px] bg-bronze-light" aria-hidden="true" />
              <span>Begin a Dialogue</span>
            </div>

            <h2
              id="inquiry-cta-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-linen leading-tight"
            >
              Planning a residence or commercial space?
            </h2>

            <p className="text-sm sm:text-base text-champagne/90 leading-relaxed max-w-xl">
              Share your architectural floor plan or project brief to arrange an initial
              consultation with our design team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link to="/contact" className="btn btn-light justify-center">
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
            </Link>
            <Link
              to="/packages"
              className="btn btn-secondary !border-linen/40 !text-linen hover:!bg-linen hover:!text-charcoal justify-center"
            >
              <span>Explore Packages</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
