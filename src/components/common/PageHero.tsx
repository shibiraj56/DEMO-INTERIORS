import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  kicker: string
  title: string
  description: string
  breadcrumbs?: BreadcrumbItem[]
  disclosure?: string
}

export default function PageHero({
  kicker,
  title,
  description,
  breadcrumbs,
  disclosure,
}: PageHeroProps) {
  return (
    <section className="bg-parchment/70 border-b border-champagne pt-12 pb-14 sm:pt-16 sm:pb-20">
      <div className="site-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-widest text-taupe">
              <li>
                <Link to="/" className="hover:text-bronze transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-champagne-dark" aria-hidden="true" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-bronze transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-charcoal font-medium" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl space-y-4">
          <div className="kicker">{kicker}</div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.12] tracking-tight">
            {title}
          </h1>
          <p className="lead text-base sm:text-lg max-w-2xl pt-1">
            {description}
          </p>
          {disclosure && (
            <p className="text-[11px] uppercase tracking-widest text-bronze font-medium pt-2">
              {disclosure}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
