import { ShieldCheck, Clock, Star, Palette, ThumbsUp, FileCheck } from 'lucide-react'

const credentials = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description:
      'VBA registered with full public liability and workers compensation insurance. Certificates available on request.',
  },
  {
    icon: Clock,
    title: '15+ Years in South East Melbourne',
    description:
      'Established in 2009. Deep knowledge of SE Melbourne\'s building types — weatherboards, brick veneer, render — and local conditions.',
  },
  {
    icon: Star,
    title: 'Premium Materials',
    description:
      'We specify and apply Dulux, Taubmans, and Haymes — the brands that hold colour and endure.',
  },
  {
    icon: Palette,
    title: 'Free Colour Consult',
    description:
      'Our colour consultation is included with every quote. We guide you from shortlist to final palette.',
  },
  {
    icon: ThumbsUp,
    title: 'Clean & Respectful',
    description:
      'We protect your floors, furniture, and garden. Every job ends with a full clean-up — we leave your home exactly as we found it, just with better walls.',
  },
  {
    icon: FileCheck,
    title: 'Fixed-Price Quotes',
    description:
      'Detailed, itemised, written quotes returned within 24 hours. No hidden charges — what we quote is exactly what you pay.',
  },
]

const stats = [
  { value: '15+', label: 'Years in SE Melbourne' },
  { value: '2,400+', label: 'Projects completed' },
  { value: '40+', label: 'SE suburbs covered' },
  { value: '100%', label: 'Local SE Melbourne team' },
]

export default function WhyUs() {
  return (
    <section className="relative py-24 px-4 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
            Why choose us
          </p>
          <h2
            className="max-w-[18ch] text-[2.4rem] leading-tight tracking-tight text-[#111110] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            Built on <em>reputation</em>,
            <br />
            not just results
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E8E5] border border-[#E8E8E5] rounded-2xl overflow-hidden mb-10">
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

        {/* Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {credentials.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[#E8E8E5] bg-[#FAFAF8] p-5 transition-all duration-300 hover:bg-white hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] sm:p-6"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E8E5] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#111110]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[#111110] font-medium text-sm mb-1">{item.title}</h3>
                  <p className="text-[#78716C] text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#FAFAF8] pointer-events-none" />
    </section>
  )
}
