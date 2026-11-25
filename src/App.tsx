import { lazy, Suspense, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import Header from './components/common/Header'
import PageLoader from './components/common/PageLoader'
import ScrollToTop from './components/common/ScrollToTop'
import Footer from './components/layout/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import { prefersReducedMotion } from './lib/animations'
import HomePage from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const PackagesPage = lazy(() => import('./pages/PackagesPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  const mainRef = useRef<HTMLElement>(null)
  const location = useLocation()

  // Scroll-triggered editorial reveals across all routes
  useScrollReveal(mainRef, location.pathname)

  // Subtle non-blocking page transition on route change
  useEffect(() => {
    const el = mainRef.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0.9, y: 6 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      )
    }, mainRef)

    return () => ctx.revert()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-linen text-charcoal flex flex-col selection:bg-bronze/20 selection:text-charcoal">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-charcoal focus:text-linen focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Header />

      <main id="main-content" ref={mainRef} className="flex-1" tabIndex={-1}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetailsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
