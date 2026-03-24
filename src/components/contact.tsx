'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react'

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  suburb: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    suburb: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error?.message || data?.error || 'Failed to send')
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors w-full'

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#111110]">
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#FAFAF8] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.12em] text-[#78716C] uppercase mb-3">
                Get in touch
              </p>
              <h2
                className="text-4xl md:text-5xl text-white leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Ready to
                <br />
                <em>transform</em>
                <br />
                your space?
              </h2>
            </div>

            <p className="text-[#78716C] text-sm leading-relaxed">
              Tell us about your project and we&apos;ll respond within one business day with a
              detailed, no-obligation quote.
            </p>

            <div className="flex flex-col gap-5">
              <a href="tel:+61395472863" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Call us directly</p>
                  <p className="text-white text-sm font-medium group-hover:text-white/75 transition-colors">
                    (03) 9547 2863
                  </p>
                </div>
              </a>

              <a href="mailto:hello@prestigepainters.com.au" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Email us</p>
                  <p className="text-white text-sm font-medium group-hover:text-white/75 transition-colors">
                    hello@prestigepainters.com.au
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
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2">Quote request received</h3>
                  <p className="text-[#78716C] text-sm">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs">Full name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      className={inputClass}
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs">Phone number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      className={inputClass}
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs">Email address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className={inputClass}
                    placeholder="sarah@example.com.au"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs">Service required</label>
                    <select
                      value={form.service}
                      onChange={update('service')}
                      className={inputClass}
                    >
                      <option value="" className="bg-[#111110]">Select a service…</option>
                      <option value="residential-interior" className="bg-[#111110]">Residential — Interior</option>
                      <option value="residential-exterior" className="bg-[#111110]">Residential — Exterior</option>
                      <option value="residential-full" className="bg-[#111110]">Residential — Full repaint</option>
                      <option value="commercial" className="bg-[#111110]">Commercial painting</option>
                      <option value="strata" className="bg-[#111110]">Strata / body corporate</option>
                      <option value="other" className="bg-[#111110]">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs">Property suburb</label>
                    <input
                      type="text"
                      value={form.suburb}
                      onChange={update('suburb')}
                      className={inputClass}
                      placeholder="e.g. South Yarra VIC 3141"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs">Project details</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className={`${inputClass} resize-none`}
                    placeholder="Property type, approximate size, what needs painting, any specific requirements…"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-white text-[#111110] text-sm font-medium px-6 py-3.5 rounded-full hover:bg-[#FAFAF8] active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Request Free Quote'}
                  {!loading && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
