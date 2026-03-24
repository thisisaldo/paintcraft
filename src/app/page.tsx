import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ScrollStory from '@/components/scroll-story'
import Services from '@/components/services'
import WhyUs from '@/components/why-us'
import Portfolio from '@/components/portfolio'
import ServiceAreas from '@/components/areas'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollStory />
      <Services />
      <WhyUs />
      <Portfolio />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
