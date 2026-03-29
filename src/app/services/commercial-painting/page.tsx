import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'
import ServiceFAQAccordion from '@/components/service-faq-accordion'
import OpenChatButton from '@/components/open-chat-button'

export const metadata: Metadata = {
  title: 'Commercial Painters Melbourne | Office & Retail Painting SE Melbourne',
  description:
    'Professional commercial painters serving South East Melbourne. Office fit-outs, retail, strata, and body corporate painting. After-hours and weekend scheduling available. VBA licensed, fully insured, fixed-price quotes.',
  alternates: { canonical: '/services/commercial-painting' },
  openGraph: {
    title: 'Commercial Painters Melbourne | Orbit Painting',
    description:
      'Commercial painting for offices, retail, strata, and hospitality across SE Melbourne. After-hours scheduling, VBA licensed, fixed-price quotes.',
    url: 'https://www.orbitpaintingmelbourne.com.au/services/commercial-painting',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.orbitpaintingmelbourne.com.au' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.orbitpaintingmelbourne.com.au/#services' },
    { '@type': 'ListItem', position: 3, name: 'Commercial Painting', item: 'https://www.orbitpaintingmelbourne.com.au/services/commercial-painting' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Painting Melbourne',
  description:
    'Professional commercial painting services for offices, retail, strata, and hospitality across South East Melbourne.',
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
  serviceType: 'Commercial Painting',
  url: 'https://www.orbitpaintingmelbourne.com.au/services/commercial-painting',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you work after hours and weekends for commercial jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We regularly schedule commercial painting work outside business hours — evenings and weekends — so your operations are not disrupted. This is included as standard for all commercial clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you insured for commercial painting work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We carry full public liability and workers compensation insurance, and are VBA registered. Certificates of currency are available on request and can be submitted for site inductions.',
      },
    },
  ],
}

const included = [
  {
    title: 'Office & Fit-out Painting',
    desc: 'Offices, boardrooms, reception areas, and commercial fit-outs — painted to specification with minimal disruption.',
  },
  {
    title: 'Retail & Hospitality',
    desc: 'Retail stores, cafés, restaurants, and hotels — finished to a standard that reflects your brand.',
  },
  {
    title: 'Strata & Body Corporate',
    desc: 'Common areas, car parks, lobbies, and stairwells across multi-storey and multi-dwelling buildings.',
  },
  {
    title: 'Industrial & Warehouse',
    desc: 'Floor coatings, wall painting, and protective coatings for industrial and warehouse environments.',
  },
  {
    title: 'After-Hours Scheduling',
    desc: 'Evening and weekend scheduling available as standard — your business never misses a beat.',
  },
  {
    title: 'Scope of Works & Safety',
    desc: 'Detailed written scope, SWMS documentation, and full site induction compliance for every commercial job.',
  },
]

const process = [
  {
    step: '01',
    title: 'Site Assessment & Quote',
    desc: 'On-site assessment, detailed scope of works, and fixed-price quote within 24 hours. SWMS documentation included.',
  },
  {
    step: '02',
    title: 'Scheduling Around You',
    desc: 'We work around your operating hours — evenings, weekends, or staged sections to keep the business running.',
  },
  {
    step: '03',
    title: 'Professional Application',
    desc: 'Commercial-grade Dulux, Taubmans, and Haymes products applied to specification, on time.',
  },
  {
    step: '04',
    title: 'Inspection & Handover',
    desc: 'Full walkthrough inspection before handover. Defects rectified on the spot — no follow-up required.',
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
    question: 'Do you work after hours and weekends for commercial jobs?',
    answer:
      'Yes. We regularly schedule commercial painting outside business hours — evenings and weekends — so your operations are not disrupted. After-hours scheduling is available as standard for all commercial clients across SE Melbourne.',
  },
  {
    question: 'Are you insured for commercial painting work?',
    answer:
      'Yes. We carry full public liability and workers compensation insurance and are VBA registered. Certificates of currency are available on request and can be submitted directly for site inductions.',
  },
  {
    question: 'Do you paint strata and body corporate buildings?',
    answer:
      'Yes — strata and body corporate work makes up a significant part of our commercial portfolio. We manage common areas, lobbies, car parks, and stairwells across multi-dwelling buildings, and we are experienced in body corporate approval and documentation processes.',
  },
  {
    question: 'Can you match existing paint colours?',
    answer:
      'Yes. We use digital colour matching tools and work with Dulux, Taubmans, and Haymes colour libraries to achieve precise matches on touch-ups and staged repaints.',
  },
  {
    question: 'Do you provide a scope of works document?',
    answer:
      'Absolutely. Every commercial quote includes a detailed, itemised scope of works. For larger sites we also provide SWMS documentation and can submit paperwork for site inductions on request.',
  },
  {
    question: 'What size commercial projects do you handle?',
    answer:
      'We work across the full range — from single-tenancy office repaints to multi-level strata buildings and large-scale fit-outs. Contact us to discuss your project and we will advise on feasibility and scheduling.',
  },
]

const trustTags = ['VBA Licensed', 'Fully Insured', 'After-Hours Available', 'SWMS Documentation', 'Fixed-Price Quotes']

export default function CommercialPaintingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
            <span className="text-[#78716C]">Commercial Painting</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-4">
                Commercial service
              </p>
              <h1
                className="text-5xl md:text-6xl text-[#111110] leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Commercial Painters
                <br />
                <em>South East Melbourne</em>
              </h1>
            </div>
            <div className="max-w-[44ch] lg:pb-2">
              <p className="text-[#78716C] text-base leading-relaxed mb-8">
                Offices, retail, strata, and hospitality across SE Melbourne. We work after hours and weekends so
                your business never misses a beat.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <OpenChatButton className="inline-flex items-center gap-2 bg-[#111110] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200">
                  Get Free Quote
                </OpenChatButton>
                <a
                  href="tel:+61493929947"
                  className="inline-flex items-center gap-2 border border-[#E8E8E5] text-[#111110] text-sm px-5 py-2.5 rounded-full hover:border-[#D6D3CF] hover:bg-white transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  0493 929 947
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
              Commercial painting areas
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {[
                'Melbourne CBD', 'South Melbourne', 'St Kilda', 'Caulfield', 'Oakleigh',
                'Clayton', 'Cheltenham', 'Moorabbin', 'Dandenong', 'Springvale',
                'Narre Warren', 'Berwick', 'Frankston', 'Cranbourne', 'Noble Park',
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
              Built for business,
              <br />
              <em>delivered on schedule</em>
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
              Minimum disruption,
              <br />
              <em>maximum result</em>
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
              Commercial painting
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
            Let&apos;s discuss your project
          </h2>
          <p className="text-[#5A5A58] text-sm mb-8 max-w-[40ch] mx-auto leading-relaxed">
            Free site assessment and fixed-price quote within 24 hours. After-hours scheduling available from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <OpenChatButton className="inline-flex items-center gap-2 bg-white text-[#111110] text-sm px-6 py-3 rounded-full hover:bg-[#FAFAF8] active:scale-[0.98] transition-all duration-200 font-medium">
              Get Free Quote
            </OpenChatButton>
            <a
              href="tel:+61493929947"
              className="inline-flex items-center gap-2 border border-white/10 text-white text-sm px-6 py-3 rounded-full hover:border-white/20 transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              0493 929 947
            </a>
          </div>
          <p className="text-[#3A3A38] text-xs mt-8">
            Looking for house painting instead?{' '}
            <Link
              href="/services/residential-painting"
              className="text-[#4A4A48] hover:text-[#78716C] underline underline-offset-2 transition-colors"
            >
              View residential painting
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
