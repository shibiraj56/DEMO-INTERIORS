import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Quote } from 'lucide-react'
import { ILLUSTRATIVE_TESTIMONIALS } from '../../data/testimonials'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = ILLUSTRATIVE_TESTIMONIALS[activeIndex]

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-parchment section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="kicker mb-3">Client Perspectives</div>
            <h2
              id="testimonials-heading"
              className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight"
            >
              How spaces feel once inhabited.
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-[11px] uppercase tracking-widest text-taupe">
              Illustrative demo examples — not verified client reviews
            </span>
            <Link to="/testimonials" className="btn-link">
              <span>View All Perspectives</span>
              <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Featured Editorial Quote */}
          <div className="lg:col-span-7 bg-linen border border-champagne p-8 sm:p-12 flex flex-col justify-between gap-8">
            <div className="flex items-center justify-between">
              <Quote className="w-7 h-7 text-bronze/70" aria-hidden="true" />
              <span className="tag-editorial">{activeItem.label}</span>
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[1.7rem] leading-snug text-charcoal">
              “{activeItem.quote}”
            </blockquote>

            <div className="pt-5 border-t border-champagne/70">
              <div className="font-serif text-base text-charcoal font-medium">
                {activeItem.attribution}
              </div>
              <div className="text-xs text-taupe tracking-wide mt-0.5">
                {activeItem.projectContext}
              </div>
            </div>
          </div>

          {/* Scenario Selector List */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-champagne border-t border-b border-champagne">
            {ILLUSTRATIVE_TESTIMONIALS.map((item, idx) => {
              const isSelected = idx === activeIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isSelected}
                  className={`flex-1 text-left p-6 transition-colors duration-300 cursor-pointer flex flex-col justify-center ${
                    isSelected
                      ? 'bg-linen border-l-2 border-l-bronze'
                      : 'bg-transparent hover:bg-linen/60'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-widest text-bronze font-semibold mb-1">
                    {item.label} • 0{idx + 1}
                  </span>
                  <span className="font-serif text-lg text-charcoal block mb-1">
                    {item.attribution}
                  </span>
                  <span className="text-xs text-taupe">
                    {item.projectContext}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
