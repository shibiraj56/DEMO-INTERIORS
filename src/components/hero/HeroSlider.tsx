import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react'
import gsap from 'gsap'
import { HERO_SLIDES } from '../../data/heroData'

const SLIDE_DURATION = 6500 // 6.5 seconds per slide

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const timerRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const touchStartXRef = useRef<number | null>(null)

  const totalSlides = HERO_SLIDES.length
  const currentSlide = HERO_SLIDES[currentIndex]

  // Check user motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  // Transition to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setProgress(0)
    startTimeRef.current = null
  }, [totalSlides])

  // Transition to previous slide
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setProgress(0)
    startTimeRef.current = null
  }, [totalSlides])

  // Direct slide selection
  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setCurrentIndex(index)
    setProgress(0)
    startTimeRef.current = null
  }

  // Handle GSAP editorial animations on slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return

      // Animate text reveal
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll('.animate-hero')
        gsap.fromTo(
          elements,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power2.out',
          }
        )
      }

      // Animate active image architectural subtle scale
      const activeImg = imageRefs.current[currentIndex]
      if (activeImg) {
        gsap.fromTo(
          activeImg,
          { scale: 1.05 },
          { scale: 1.0, duration: 6.5, ease: 'sine.out' }
        )
      }
    })

    return () => ctx.revert()
  }, [currentIndex, prefersReducedMotion])

  // Autoplay and progress bar interval
  useEffect(() => {
    if (isPaused) return

    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION
    }

    const updateProgress = () => {
      const now = Date.now()
      const elapsed = now - (startTimeRef.current ?? now)
      const currentProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(currentProgress)

      if (elapsed >= SLIDE_DURATION) {
        goToNext()
      } else {
        timerRef.current = requestAnimationFrame(updateProgress)
      }
    }

    timerRef.current = requestAnimationFrame(updateProgress)

    return () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current)
      }
    }
  }, [currentIndex, isPaused, goToNext, progress])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      goToNext()
    } else if (e.key === 'ArrowLeft') {
      goToPrev()
    }
  }

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const deltaX = touchStartXRef.current - touchEndX

    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
    touchStartXRef.current = null
  }

  return (
    <section
      aria-label="Featured Architectural Projects Showcase"
      aria-roledescription="carousel"
      className="relative w-full min-h-[560px] sm:min-h-[640px] lg:h-[90vh] lg:min-h-[680px] lg:max-h-[940px] overflow-hidden bg-charcoal focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      {/* Background Architectural Images */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <img
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className="w-full h-full object-cover object-center transform-gpu will-change-transform"
              />
              {/* Refined Architectural Gradient Scrim — Preserves Photography Warmth & Guarantees Contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-charcoal/15"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/25"
                aria-hidden="true"
              />
            </div>
          )
        })}
      </div>

      {/* Editorial Content Layer */}
      <div className="relative z-20 site-container min-h-[inherit] lg:h-full flex flex-col justify-between gap-8 sm:gap-10 py-8 sm:py-12 lg:py-16 text-linen">
        <span className="sr-only" aria-live="polite">
          Slide {currentIndex + 1} of {totalSlides}: {currentSlide.eyebrow} — {currentSlide.title}
        </span>

        {/* Central Editorial Narrative */}
        <div ref={contentRef} className="max-w-3xl my-auto">
          {/* Eyebrow Label */}
          <div className="animate-hero inline-flex items-center gap-3 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium text-bronze-light mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[1px] bg-bronze-light shrink-0" aria-hidden="true" />
            <span>{currentSlide.eyebrow}</span>
          </div>

          {/* Heading in Playfair Display */}
          <h1 className="animate-hero font-serif text-linen text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight mb-4 sm:mb-6 text-balance">
            {currentSlide.title}
          </h1>

          {/* Supporting Copy in DM Sans */}
          <p className="animate-hero text-sm sm:text-base lg:text-lg text-parchment/95 font-light leading-relaxed max-w-2xl mb-6 sm:mb-8">
            {currentSlide.description}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="animate-hero flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to={currentSlide.primaryCta.href}
              className="btn btn-light group w-full sm:w-auto"
              aria-label={`${currentSlide.primaryCta.label} — ${currentSlide.title}`}
            >
              <span>{currentSlide.primaryCta.label}</span>
              <ArrowUpRight className="w-4 h-4 text-bronze group-hover:text-white transition-colors" aria-hidden="true" />
            </Link>

            <Link
              to={currentSlide.secondaryCta.href}
              className="btn btn-secondary !border-linen/50 !text-linen hover:!bg-linen hover:!text-charcoal w-full sm:w-auto"
              aria-label={`${currentSlide.secondaryCta.label}`}
            >
              <span>{currentSlide.secondaryCta.label}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Architectural Slider Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-linen/20">
          {/* Slide Progress Line & Indicators */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-serif text-lg text-linen font-medium">
                0{currentIndex + 1}
              </span>
              <span className="text-linen/45 text-sm">/</span>
              <span className="font-serif text-sm text-linen/60">
                0{totalSlides}
              </span>
            </div>

            {/* Linear Progress Bar */}
            <div
              className="relative flex-1 sm:flex-none sm:w-44 h-[2px] bg-linen/25 overflow-hidden"
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Slide Autoplay Progress"
            >
              <div
                className="absolute inset-y-0 left-0 bg-bronze-light transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Direct Slide Selectors */}
            <div className="flex items-center gap-2 ml-1 shrink-0" role="group" aria-label="Slide selection">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-bronze-light'
                      : 'w-2.5 bg-linen/40 hover:bg-linen/80'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${slide.eyebrow}`}
                  aria-current={idx === currentIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </div>

          {/* Navigation Controls: Prev, Next & Pause/Play */}
          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 text-linen/80 hover:text-linen border border-linen/25 hover:border-linen/60 transition-colors"
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Pause className="w-3.5 h-3.5" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={goToPrev}
              className="p-2.5 text-linen/85 hover:text-linen border border-linen/25 hover:border-bronze-light hover:bg-bronze/25 transition-all"
              aria-label="Previous architectural slide"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="p-2.5 text-linen/85 hover:text-linen border border-linen/25 hover:border-bronze-light hover:bg-bronze/25 transition-all"
              aria-label="Next architectural slide"
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
