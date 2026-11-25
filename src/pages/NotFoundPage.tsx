import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta(
    'Page Not Found | Aurelia Interiors — Tamil Nadu',
    'The requested page could not be found on Aurelia Interiors. Return to our Tamil Nadu interior architecture showcase.'
  )

  return (
    <section
      aria-labelledby="not-found-heading"
      className="bg-linen section-spacing border-b border-champagne/70 min-h-[68vh] flex items-center"
    >
      <div className="site-container">
        <div className="max-w-2xl space-y-6">
          <div className="kicker">404 • Page Not Found</div>

          <h1
            id="not-found-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.12] tracking-tight"
          >
            This space is not on our architectural plan.
          </h1>

          <p className="lead text-base sm:text-lg max-w-xl">
            The page you requested may have been moved or does not exist. Return to the
            homepage or explore our Tamil Nadu interior architecture portfolio.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link to="/" className="btn btn-primary justify-center">
              <ArrowLeft className="w-4 h-4 text-champagne" aria-hidden="true" />
              <span>Return to Home</span>
            </Link>

            <Link to="/portfolio" className="btn btn-secondary justify-center">
              <span>Explore Portfolio</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
