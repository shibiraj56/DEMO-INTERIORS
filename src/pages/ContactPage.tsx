import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { ANNOUNCEMENT_DATA, TAMIL_NADU_CITIES } from '../data/navigation'
import { usePageMeta } from '../hooks/usePageMeta'

interface ContactFormState {
  fullName: string
  email: string
  phone: string
  projectType: string
  city: string
  areaSqFt: string
  budgetInr: string
  message: string
}

const INITIAL_FORM: ContactFormState = {
  fullName: '',
  email: '',
  phone: '',
  projectType: 'Residential Interior Design',
  city: 'Chennai',
  areaSqFt: '',
  budgetInr: '₹15L – ₹30L',
  message: '',
}

const PROJECT_TYPES = [
  'Residential Interior Design',
  'Turnkey Villa / Independent House',
  'Jewellery Showroom Interior Design',
  'Modular Kitchen & Wardrobes',
  'Commercial / Textile Office',
  'Retail Showroom',
  'Space Planning Consultation',
]

const BUDGET_RANGES = [
  'Under ₹10L (Illustrative)',
  '₹10L – ₹15L',
  '₹15L – ₹30L',
  '₹30L – ₹50L',
  'Above ₹50L',
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  usePageMeta(
    'Contact & Consultation | Aurelia Interiors — Tamil Nadu',
    'Share your Tamil Nadu residential or commercial interior brief across Chennai, Coimbatore, Tiruppur, Madurai, Salem, Erode, or Tiruchirappalli.'
  )

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {}

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your name.'
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.'
    }

    if (formData.areaSqFt.trim() && Number.isNaN(Number(formData.areaSqFt))) {
      nextErrors.areaSqFt = 'Please enter a numeric area in sq. ft.'
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      nextErrors.message = 'Please share a brief overview of your project (at least 15 characters).'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setIsSubmitted(false)
      return
    }
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      <PageHero
        kicker="Consultation & Inquiries"
        title="Discuss your Tamil Nadu interior project."
        description="Share your property type, city, approximate area in sq. ft., and architectural goals to preview our consultation intake workflow."
        breadcrumbs={[{ label: 'Contact Us' }]}
        disclosure="Demonstration Notice: Contact details and this inquiry form operate as a client-side showcase preview. No backend email or CRM submission is connected."
      />

      <section className="bg-linen section-spacing border-b border-champagne/70">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Demo Contact & Service Region Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Tamil Nadu Service Region
                </h2>
                <p className="text-sm sm:text-base text-taupe leading-relaxed">
                  Our illustrative studio framework supports residential and commercial
                  commissions across Chennai, Coimbatore, Tiruppur, Madurai, Salem, Erode,
                  and Tiruchirappalli.
                </p>
              </div>

              <div className="bg-parchment/60 border border-champagne p-6 sm:p-8 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-taupe block">
                      Showcase Region (Illustrative)
                    </span>
                    <span className="text-charcoal font-medium">
                      {ANNOUNCEMENT_DATA.atelierLocation}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-taupe block">
                      Telephone (Demo Placeholder)
                    </span>
                    <span className="text-charcoal font-medium">{ANNOUNCEMENT_DATA.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-taupe block">
                      Email (Demo Placeholder)
                    </span>
                    <span className="text-charcoal font-medium break-all">
                      {ANNOUNCEMENT_DATA.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-taupe block">
                      Schedule
                    </span>
                    <span className="text-charcoal font-medium">
                      {ANNOUNCEMENT_DATA.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Validated Architectural Inquiry Form */}
            <div className="lg:col-span-7 bg-parchment/40 border border-champagne p-6 sm:p-10">
              {isSubmitted ? (
                <div
                  role="status"
                  className="bg-linen border border-bronze p-8 space-y-4"
                >
                  <div className="flex items-center gap-3 text-bronze">
                    <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <h3 className="font-serif text-2xl text-charcoal">
                      Brief Validated (Demo Preview)
                    </h3>
                  </div>
                  <p className="text-sm text-taupe leading-relaxed">
                    Thank you, <strong className="text-charcoal">{formData.fullName}</strong>.
                    Your inquiry details for a <strong className="text-charcoal">{formData.projectType}</strong>{' '}
                    in <strong className="text-charcoal">{formData.city}, Tamil Nadu</strong> have
                    passed client-side validation.
                  </p>
                  <p className="text-xs text-taupe border-t border-champagne pt-4">
                    Note: This is an illustrative demonstration website without an active
                    backend server, so no message was transmitted externally.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(INITIAL_FORM)
                        setIsSubmitted(false)
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      Reset Inquiry Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs uppercase tracking-widest text-taupe mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Karthik Subramanian"
                        className="input-editorial"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-widest text-taupe mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="input-editorial"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-widest text-taupe mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98XXX XXXXX"
                        className="input-editorial"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-xs uppercase tracking-widest text-taupe mb-2"
                      >
                        Tamil Nadu City *
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="input-editorial"
                      >
                        {TAMIL_NADU_CITIES.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs uppercase tracking-widest text-taupe mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="input-editorial"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="areaSqFt"
                        className="block text-xs uppercase tracking-widest text-taupe mb-2"
                      >
                        Approx. Area (sq. ft.)
                      </label>
                      <input
                        id="areaSqFt"
                        name="areaSqFt"
                        type="text"
                        inputMode="numeric"
                        value={formData.areaSqFt}
                        onChange={handleChange}
                        placeholder="e.g. 2400"
                        className="input-editorial"
                        aria-invalid={Boolean(errors.areaSqFt)}
                      />
                      {errors.areaSqFt && (
                        <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.areaSqFt}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="budgetInr"
                        className="block text-xs uppercase tracking-widest text-taupe mb-2"
                      >
                        Budget Range (INR)
                      </label>
                      <select
                        id="budgetInr"
                        name="budgetInr"
                        value={formData.budgetInr}
                        onChange={handleChange}
                        className="input-editorial"
                      >
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest text-taupe mb-2"
                    >
                      Project Brief &amp; Timeline *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your property status (new handover, renovation, commercial fitout) and key design priorities..."
                      className="textarea-editorial"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button type="submit" className="btn btn-primary">
                      <span>Validate &amp; Preview Brief</span>
                    </button>
                    <span className="text-[11px] text-taupe">
                      Demo form only — no external data is transmitted.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
