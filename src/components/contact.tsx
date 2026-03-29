'use client'

import { Phone, Mail, Clock, MapPin, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Fixed-price written quote within 24 hours',
  'No obligation — just honest advice',
  'Colour consultation included at no extra cost',
  'VBA licensed & fully insured',
]

export default function Contact() {
  function openChat() {
    window.dispatchEvent(new Event('orbit:open-chat'))
  }

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#111110]">
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#FAFAF8] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline + contact info */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.12em] text-[#78716C] uppercase mb-3">
                Get in touch
              </p>
              <h2
                className="text-4xl md:text-5xl text-white leading-tight tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Ready to
                <br />
                <em>transform</em>
                <br />
                your space?
              </h2>
              <p className="text-[#78716C] text-sm leading-relaxed">
                Chat with Mick for an instant answer on pricing, timelines, or to kick off your free quote — no forms, no waiting.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a href="tel:+61344279403" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Call us directly</p>
                  <p className="text-white text-sm font-medium group-hover:text-white/75 transition-colors">
                    +61 3 4427 9403
                  </p>
                </div>
              </a>

              <a href="mailto:hello@orbitpaintingmelbourne.com.au" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Email us</p>
                  <p className="text-white text-sm font-medium group-hover:text-white/75 transition-colors">
                    hello@orbitpaintingmelbourne.com.au
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Business hours</p>
                  <p className="text-white text-sm font-medium">
                    Mon–Fri 7am–5pm · Sat 8am–2pm
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Service area</p>
                  <p className="text-white text-sm font-medium">
                    South East Melbourne, VIC
                  </p>
                  <p className="text-white/30 text-xs mt-0.5">
                    St Kilda · Caulfield · Oakleigh · Clayton · Dandenong · Frankston and 40+ more suburbs
                  </p>
                </div>
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
                <h3
                  className="text-white text-xl leading-snug mb-1"
                  style={{ fontFamily: 'var(--font-instrument-serif)' }}
                >
                  Chat with Mick
                </h3>
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
              <button
                onClick={openChat}
                className="flex items-center justify-center gap-2 bg-white text-[#111110] text-sm font-medium px-6 py-3.5 rounded-full hover:bg-[#FAFAF8] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Start free quote chat
              </button>
              <a
                href="tel:+61344279403"
                className="flex items-center justify-center gap-1.5 text-[#78716C] text-sm hover:text-white transition-colors py-1"
              >
                Prefer to call? +61 3 4427 9403
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Google Maps — service area */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10" style={{ height: '320px' }}>
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
  )
}
