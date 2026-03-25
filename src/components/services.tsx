import { Home, Building2, PaintBucket, CloudSun } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Painting',
    subtitle: 'Homes & Apartments',
    description:
      'From period homes in Caulfield to modern apartments in South Melbourne, every residential project handled with care and discretion.',
    features: ['Interior & exterior', 'Colour consulting', 'Minimal disruption', 'Thorough prep'],
  },
  {
    icon: Building2,
    title: 'Commercial Painting',
    subtitle: 'Offices & Retail',
    description:
      'Keeping Melbourne businesses looking their best. We work after hours and weekends to keep your operations uninterrupted.',
    features: ['Offices & fit-outs', 'Retail & hospitality', 'Strata buildings', 'Body corporate'],
  },
  {
    icon: PaintBucket,
    title: 'Interior Painting',
    subtitle: 'Walls, Ceilings & Trim',
    description:
      'Meticulous preparation, clean lines, and perfect finishes. Feature walls, cornices, and detailed trim work included.',
    features: ['Feature walls', 'Ceiling repairs', 'Cornice & trim', 'Colour consulting'],
  },
  {
    icon: CloudSun,
    title: 'Exterior Painting',
    subtitle: 'Facades & Outdoors',
    description:
      'Weather-resistant finishes that protect and enhance your Melbourne property through every season.',
    features: ['Weatherboard', 'Render & texture', 'Decks & fences', 'Roof painting'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              What we do
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Complete painting
              <br />
              <em>services</em> for Melbourne
            </h2>
          </div>
          <p className="text-[#78716C] text-sm max-w-[40ch] leading-relaxed md:text-right">
            Licensed, insured, and trusted by Melbourne homeowners and businesses since 2009.
          </p>
        </div>

        {/* 2×2 grid with divider lines — no heavy card borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E8E5] border border-[#E8E8E5] rounded-2xl overflow-hidden">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-[#FAFAF8] p-8 md:p-10 flex flex-col gap-5 group hover:bg-white transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E8E5] flex items-center justify-center flex-shrink-0 group-hover:border-[#D6D3CF] transition-colors">
                      <Icon className="w-4 h-4 text-[#111110]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[#111110] font-medium text-sm leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-[#A8A29E] text-xs mt-0.5">{service.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[#E8E8E5] text-3xl font-light font-mono select-none tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-[#78716C] text-sm leading-relaxed">{service.description}</p>

                <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#78716C]">
                      <div className="w-1 h-1 rounded-full bg-[#C4C1BC] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#FAFAF8] pointer-events-none" />
    </section>
  )
}
