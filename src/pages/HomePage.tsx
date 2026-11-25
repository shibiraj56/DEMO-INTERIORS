import HeroSlider from '../components/hero/HeroSlider'
import StudioIntroduction from '../components/home/StudioIntroduction'
import StudioCapabilities from '../components/home/StudioCapabilities'
import StudioFacts from '../components/home/StudioFacts'
import ServicesSection from '../components/home/ServicesSection'
import FeaturedProjects from '../components/home/FeaturedProjects'
import DesignPhilosophy from '../components/home/DesignPhilosophy'
import DesignCategories from '../components/home/DesignCategories'
import DesignProcess from '../components/home/DesignProcess'
import TestimonialsSection from '../components/home/TestimonialsSection'
import PackagesSection from '../components/home/PackagesSection'
import FAQSection from '../components/home/FAQSection'
import InquiryCTA from '../components/home/InquiryCTA'
import { usePageMeta } from '../hooks/usePageMeta'

export default function HomePage() {
  usePageMeta(
    'Aurelia Interiors | Tamil Nadu Interior Architecture & Turnkey Design',
    'AURELIA INTERIORS — Spaces that reflect the art of living. Residential, commercial, modular kitchen, and turnkey interior architecture across Chennai, Coimbatore, Madurai, and Tamil Nadu.'
  )

  return (
    <>
      <HeroSlider />
      <StudioIntroduction />
      <StudioCapabilities />
      <StudioFacts />
      <ServicesSection />
      <FeaturedProjects />
      <DesignPhilosophy />
      <DesignCategories />
      <DesignProcess />
      <TestimonialsSection />
      <PackagesSection />
      <FAQSection />
      <InquiryCTA />
    </>
  )
}
