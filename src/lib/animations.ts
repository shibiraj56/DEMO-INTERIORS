import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Initializes lightweight, accessible ScrollTrigger reveals scoped to a container.
 * Uses gsap.matchMedia() so reduced-motion users receive zero nonessential motion
 * and desktop-only parallax does not burden mobile devices.
 */
export function initScrollReveals(scope: HTMLElement): () => void {
  const mm = gsap.matchMedia()

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const fadeEls = gsap.utils.toArray<HTMLElement>('[data-reveal="fade-up"]', scope)
    fadeEls.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    })

    const staggerContainers = gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]', scope)
    staggerContainers.forEach((container) => {
      const items = gsap.utils.toArray<HTMLElement>('[data-reveal-item]', container)
      if (items.length === 0) return

      gsap.from(items, {
        opacity: 0,
        y: 18,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: container,
          start: 'top 88%',
          once: true,
        },
      })
    })

    const imageEls = gsap.utils.toArray<HTMLElement>('[data-reveal="image"]', scope)
    imageEls.forEach((el) => {
      gsap.from(el, {
        clipPath: 'inset(0 0 6% 0)',
        opacity: 0.85,
        duration: 0.85,
        ease: 'power2.out',
        clearProps: 'clipPath,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    })
  })

  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    const parallaxEls = gsap.utils.toArray<HTMLElement>('[data-reveal="parallax"]', scope)
    parallaxEls.forEach((el) => {
      gsap.fromTo(
        el,
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      )
    })
  })

  return () => {
    mm.revert()
  }
}
