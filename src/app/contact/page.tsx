import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'
import OpenChatButton from '@/components/open-chat-button'

export const metadata: Metadata = {
  title: 'Contact | Orbit Painting Melbourne',
  description:
    'Get in touch with Orbit Painting Melbourne. Free written quotes within 24 hours for residential and commercial painting across South East Melbourne. Call +61 (3) 4427 9403.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Orbit Painting Melbourne',
    description:
      'Free written quotes within 24 hours. Residential and commercial painters serving South East Melbourne.',
    url: 'https://www.orbitpaintingmelbourne.com.au/contact',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Orbit Painting Melbourne',
  url: 'https://www.orbitpaintingmelbourne.com.au/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.orbitpaintingmelbourne.com.au/#business',
    name: 'Orbit Painting Melbourne',
    telephone: '+61344279403',
    email: 'hello@orbitpaintingmelbourne.com.au',
    openingHours: ['Mo-Fr 07:00-17:00', 'Sa 08:00-14:00'],
  },
}

const highlights = [
  'Fixed-price written quote within 24 hours',
  'No obligation — just honest advice',
  'Colour consultation included at no extra cost',
  'VBA licensed & fully insured',
]

const contactDetails = [
  {
    icon: Phone,
    label: 'Call us directly',
    value: '+61 (3) 4427 9403',
    href: 'tel:+61344279403',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: 'hello@orbitpaintingmelbourne.com.au',
    href: 'mailto:hello@orbitpaintingmelbourne.com.au',
  },
]

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navbar />

      {/* Page hero */}
      <section className="pt-36 pb-16 px-4 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] text-[#A8A29E] uppercase tracking-[0.12em] font-medium mb-10"
          >
            <Link href="/" className="hover:text-[#78716C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#78716C]">Contact</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-4">
                Get in touch
              </p>
              <h1
                className="text-5xl md:text-6xl text-[#111110] leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Let&apos;s talk about
                <br />
                <em>your project</em>
              </h1>
            </div>
            <div className="max-w-[44ch] lg:pb-2">
              <p className="text-[#78716C] text-base leading-relaxed mb-8">
                Chat with Mick for an instant answer on pricing, timelines, or to kick off your free quote — no forms, no waiting.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <OpenChatButton className="inline-flex items-center gap-2 bg-[#111110] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200">
                  Start free quote chat
                </OpenChatButton>
                <a
                  href="tel:+61344279403"
                  className="inline-flex items-center gap-2 border border-[#E8E8E5] text-[#111110] text-sm px-5 py-2.5 rounded-full hover:border-[#D6D3CF] hover:bg-white transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +61 (3) 4427 9403
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details + CTA card */}
      <section className="relative px-4 pt-20 pb-16 bg-[#111110]">
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#FAFAF8] to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — contact info */}
            <div className="flex flex-col gap-6">
              {/* Phone + Email */}
              {contactDetails.map((detail) => {
                const Icon = detail.icon
                return (
                  <a key={detail.label} href={detail.href} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">{detail.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-white/75 transition-colors">
                        {detail.value}
                      </p>
                    </div>
                  </a>
                )
              })}

              {/* Hours */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Business hours</p>
                  <p className="text-white text-sm font-medium">Mon–Fri 7am–5pm</p>
                  <p className="text-white/40 text-xs mt-0.5">Saturday 8am–2pm</p>
                </div>
              </div>

              {/* Service area */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Service area</p>
                  <p className="text-white text-sm font-medium">South East Melbourne, VIC</p>
                  <p className="text-white/30 text-xs mt-1 leading-relaxed">
                    St Kilda · South Melbourne · Caulfield · Oakleigh · Clayton
                    <br />
                    Cheltenham · Dandenong · Narre Warren · Frankston and 30+ more
                  </p>
                </div>
              </div>

              {/* Service links */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/30 text-xs uppercase tracking-[0.12em] font-medium mb-3">Our services</p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/services/residential-painting"
                    className="flex items-center gap-2 text-[#78716C] text-sm hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    Residential Painting
                  </Link>
                  <Link
                    href="/services/commercial-painting"
                    className="flex items-center gap-2 text-[#78716C] text-sm hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    Commercial Painting
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — chat CTA card */}
            <div className="rounded-2xl border border-white/10 bg-white/4 p-8 flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h2
                    className="text-white text-xl leading-snug mb-1"
                    style={{ fontFamily: 'var(--font-instrument-serif)' }}
                  >
                    Chat with Mick
                  </h2>
                  <p className="text-[#78716C] text-sm leading-relaxed">
                    Get answers on pricing, suburbs, timelines, or start your free quote — right now.
                  </p>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[#78716C] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <OpenChatButton
                  showArrow={false}
                  className="flex items-center justify-center gap-2 bg-white text-[#111110] text-sm font-medium px-6 py-3.5 rounded-full hover:bg-[#FAFAF8] active:scale-[0.98] transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Start free quote chat
                </OpenChatButton>
                <a
                  href="tel:+61344279403"
                  className="flex items-center justify-center gap-1.5 text-[#78716C] text-sm hover:text-white transition-colors py-1"
                >
                  Prefer to call? +61 (3) 4427 9403
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-white/10" style={{ height: '360px' }}>
            <iframe
              src="https://maps.google.com/maps?q=South+East+Melbourne,+VIC,+Australia&t=m&z=10&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) invert(5%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orbit Painting Melbourne — South East Melbourne service area"
            />
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
