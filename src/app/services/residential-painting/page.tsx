import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'
import ServiceFAQAccordion from '@/components/service-faq-accordion'
import OpenChatButton from '@/components/open-chat-button'

export const metadata: Metadata = {
  title: 'Residential Painters Melbourne | House Painting South East Melbourne',
  description:
    'Expert residential painters serving South East Melbourne. Interior and exterior house painting for homes and apartments across Dandenong, Oakleigh, Frankston, Cheltenham and all SE suburbs. VBA licensed, fixed-price quotes within 24 hours.',
  alternates: { canonical: '/services/residential-painting' },
  openGraph: {
    title: 'Residential Painters Melbourne | Orbit Painting',
    description:
      'Professional residential painting for SE Melbourne homes and apartments. VBA licensed, fixed-price written quotes within 24 hours.',
    url: 'https://www.orbitpaintingmelbourne.com.au/services/residential-painting',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential Painting Melbourne',
  description:
    'Professional interior and exterior house painting for homes and apartments across South East Melbourne.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Orbit Painting Melbourne',
    '@id': 'https://www.orbitpaintingmelbourne.com.au/#business',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: -37.8136, longitude: 144.9631 },
    geoRadius: '50000',
  },
  serviceType: 'Residential Painting',
  url: 'https://www.orbitpaintingmelbourne.com.au/services/residential-painting',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to paint a house in Melbourne?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 3–4 bedroom house interior repaint in South East Melbourne costs $3,500–$8,000. Exterior repaints range from $4,000–$12,000 depending on size, surface condition, and prep required. We provide fixed-price written quotes within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a residential repaint take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full interior repaint of a 3-bedroom home takes 3–5 working days. A combined interior and exterior repaint takes 7–10 days. All timelines are confirmed in your written quote.',
      },
    },
  ],
}

const included = [
  {
    title: 'Interior Painting',
    desc: 'Walls, ceilings, doors, trim, and skirtings — all included in your quote with clean, precise lines.',
  },
  {
    title: 'Exterior Painting',
    desc: 'Facades, weatherboards, render, eaves, and fascias with weather-resistant finishes built for Melbourne.',
  },
  {
    title: 'Feature Walls',
    desc: 'Accent walls, textured finishes, and statement colours executed with precision and care.',
  },
  {
    title: 'Free Colour Consulting',
    desc: 'Included at no extra cost — full Dulux, Taubmans, and Haymes range guidance from start to finish.',
  },
  {
    title: 'Cornice & Trim',
    desc: 'Clean lines on all joinery, cornices, and skirtings — meticulous masking, no shortcuts.',
  },
  {
    title: 'Deck & Fence Painting',
    desc: 'Timber preparation, staining, and painting for outdoor surfaces that last through every season.',
  },
]

const process = [
  {
    step: '01',
    title: 'Free Quote',
    desc: 'Detailed, itemised, written quote returned within 24 hours. Fixed price — what we quote is exactly what you pay.',
  },
  {
    step: '02',
    title: 'Surface Preparation',
    desc: 'Fill, sand, prime, and mask every surface. Thorough prep is what separates a lasting result from a job that peels.',
  },
  {
    step: '03',
    title: 'Professional Application',
    desc: 'Premium Dulux, Taubmans, or Haymes paints applied with care. We never substitute materials without your consent.',
  },
  {
    step: '04',
    title: 'Clean Up & Handover',
    desc: 'Full clean-up, furniture back in place, and a walkthrough with you before we leave the job.',
  },
]

const stats = [
  { value: '15+', label: 'Years in SE Melbourne' },
  { value: '2,400+', label: 'Projects completed' },
  { value: '40+', label: 'SE suburbs covered' },
  { value: '100%', label: 'Local SE Melbourne team' },
]

const faqs = [
  {
    question: 'How much does it cost to paint a house in Melbourne?',
    answer:
      'A typical 3–4 bedroom house interior repaint in South East Melbourne costs $3,500–$8,000. Exterior repaints range from $4,000–$12,000 depending on size, surface condition, and prep required. We provide fixed-price written quotes within 24 hours — no surprises.',
  },
  {
    question: 'How long does a residential repaint take?',
    answer:
      'A full interior repaint of a 3-bedroom SE Melbourne home takes 3–5 working days. A combined interior and exterior repaint takes 7–10 days. All timelines are confirmed in your written quote before work begins.',
  },
  {
    question: 'Do you paint period homes and weatherboards?',
    answer:
      'Yes — period homes, weatherboards, brick veneer, and rendered walls are a core part of our work in SE Melbourne. We understand the surface preparation and primer requirements for each building type and never cut corners on prep.',
  },
  {
    question: 'Is colour consulting included?',
    answer:
      'Yes. Colour consultation is included with every residential quote at no extra charge. We work with the full Dulux, Taubmans, and Haymes ranges and help you arrive at a palette that suits your home and personal taste.',
  },
  {
    question: 'Do you protect furniture and floors?',
    answer:
      'Absolutely. We move and protect all furniture, cover floors with drop sheets, and mask all surfaces carefully before a brush touches anything. We leave your home exactly as we found it — just with better walls.',
  },
  {
    question: 'Do you stand behind your work?',
    answer:
      'We take pride in every job. If you have a concern with the finish after completion, contact us and we will return to assess and resolve it. Our reputation in SE Melbourne is everything to us.',
  },
]

const trustTags = ['VBA Licensed', 'Fully Insured', 'Fixed-Price Quotes', 'Free Colour Consulting', 'SE Melbourne Based']

export default function ResidentialPaintingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] text-[#A8A29E] uppercase tracking-[0.12em] font-medium mb-10"
          >
            <Link href="/" className="hover:text-[#78716C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-[#78716C] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#78716C]">Residential Painting</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-4">
                Residential service
              </p>
              <h1
                className="text-5xl md:text-6xl text-[#111110] leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Residential Painters
                <br />
                <em>South East Melbourne</em>
              </h1>
            </div>
            <div className="max-w-[44ch] lg:pb-2">
              <p className="text-[#78716C] text-base leading-relaxed mb-8">
                From period homes in Caulfield to new builds in Berwick — we arrive on time, carry out thorough
                preparation, and deliver a finish that looks great and lasts.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <OpenChatButton className="inline-flex items-center gap-2 bg-[#111110] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200">
                  Get Free Quote
                </OpenChatButton>
                <a
                  href="tel:+61344279403"
                  className="inline-flex items-center gap-2 border border-[#E8E8E5] text-[#111110] text-sm px-5 py-2.5 rounded-full hover:border-[#D6D3CF] hover:bg-white transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  (03) 9547 2863
                </a>
              </div>
            </div>
          </div>

          {/* Trust tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-10 border-t border-[#E8E8E5]">
            {trustTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 border border-[#E8E8E5] text-[#78716C] text-xs px-3 py-1.5 rounded-full bg-white"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs served */}
      <section className="py-10 px-4 bg-white border-y border-[#E8E8E5]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase flex-shrink-0">
              Suburbs we paint in
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {[
                'St Kilda', 'South Melbourne', 'Caulfield', 'Carnegie', 'Bentleigh',
                'Moorabbin', 'Cheltenham', 'Oakleigh', 'Clayton', 'Springvale',
                'Dandenong', 'Noble Park', 'Narre Warren', 'Berwick', 'Frankston', 'Cranbourne',
              ].map((suburb) => (
                <span key={suburb} className="text-xs text-[#78716C]">
                  {suburb}
                </span>
              ))}
              <span className="text-xs text-[#A8A29E]">+ more</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              What&apos;s included
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Everything your home
              <br />
              <em>needs, covered</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-[#E8E8E5] bg-[#FAFAF8] hover:bg-white hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-[#111110] flex-shrink-0" strokeWidth={1.5} />
                  <h3 className="text-[#111110] font-medium text-sm">{item.title}</h3>
                </div>
                <p className="text-[#78716C] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              How it works
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Simple process,
              <br />
              <em>zero surprises</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E8E5] border border-[#E8E8E5] rounded-2xl overflow-hidden">
            {process.map((item) => (
              <div
                key={item.step}
                className="bg-[#FAFAF8] p-8 md:p-10 hover:bg-white transition-colors duration-300"
              >
                <span className="text-[#E8E8E5] text-3xl font-light font-mono tabular-nums select-none block mb-4">
                  {item.step}
                </span>
                <h3 className="text-[#111110] font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E8E5] border border-[#E8E8E5] rounded-2xl overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#FAFAF8] p-6 md:p-8 text-center">
                <div
                  className="text-3xl md:text-4xl text-[#111110] mb-1.5"
                  style={{ fontFamily: 'var(--font-instrument-serif)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#A8A29E]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-4 bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              Questions
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Residential painting
              <br />
              <em>FAQs</em>
            </h2>
          </div>
          <ServiceFAQAccordion faqs={faqs} />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#FAFAF8] pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#111110]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.12em] text-[#4A4A48] uppercase mb-4">
            Get started
          </p>
          <h2
            className="text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            Ready for a fresh coat?
          </h2>
          <p className="text-[#5A5A58] text-sm mb-8 max-w-[40ch] mx-auto leading-relaxed">
            Free written quote returned within 24 hours. No obligation — just honest advice from a local SE Melbourne painting team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <OpenChatButton className="inline-flex items-center gap-2 bg-white text-[#111110] text-sm px-6 py-3 rounded-full hover:bg-[#FAFAF8] active:scale-[0.98] transition-all duration-200 font-medium">
              Get Free Quote
            </OpenChatButton>
            <a
              href="tel:+61344279403"
              className="inline-flex items-center gap-2 border border-white/10 text-white text-sm px-6 py-3 rounded-full hover:border-white/20 transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              (03) 9547 2863
            </a>
          </div>
          <p className="text-[#3A3A38] text-xs mt-8">
            Or explore our{' '}
            <Link
              href="/services/commercial-painting"
              className="text-[#4A4A48] hover:text-[#78716C] underline underline-offset-2 transition-colors"
            >
              commercial painting service
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
