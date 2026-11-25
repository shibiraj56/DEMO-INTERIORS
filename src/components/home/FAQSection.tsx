import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { HOMEPAGE_FAQS } from '../../data/faqs'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(HOMEPAGE_FAQS[0].id)

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-parchment section-spacing border-b border-champagne/70"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="kicker">Common Inquiries</div>
            <h2
              id="faq-heading"
              className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight"
            >
              Frequently asked questions.
            </h2>
            <p className="text-sm sm:text-base text-taupe leading-relaxed">
              Clarity on how our studio structures consultations, custom joinery, timelines,
              and turnkey site delivery.
            </p>
          </div>

          {/* Right Interactive Accordion */}
          <div className="lg:col-span-8 divide-y divide-champagne border-t border-b border-champagne">
            {HOMEPAGE_FAQS.map((faq) => {
              const isOpen = openId === faq.id
              const panelId = `faq-panel-${faq.id}`
              const buttonId = `faq-button-${faq.id}`

              return (
                <div key={faq.id} className="py-2">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full py-5 flex items-center justify-between gap-6 text-left cursor-pointer group"
                    >
                      <span className="font-serif text-lg sm:text-xl text-charcoal group-hover:text-bronze transition-colors">
                        {faq.question}
                      </span>
                      <span
                        className={`p-1.5 border transition-colors shrink-0 ${
                          isOpen
                            ? 'border-bronze text-bronze bg-bronze/10'
                            : 'border-champagne text-taupe group-hover:border-bronze group-hover:text-bronze'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-8 text-sm sm:text-base text-taupe leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
