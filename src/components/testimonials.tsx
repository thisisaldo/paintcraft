const testimonials = [
  {
    quote:
      'The team repainted our entire Victorian terrace in South Yarra — inside and out. The preparation was extraordinarily thorough, and the finish is flawless two years on. We\'ve had countless compliments from the street.',
    author: 'Catherine M.',
    location: 'South Yarra',
    service: 'Residential — Full Repaint',
  },
  {
    quote:
      'We needed three levels of office space repainted over a long weekend with zero disruption to Monday operations. They delivered on time, on budget, and the quality was better than our brief asked for.',
    author: 'James T.',
    location: 'Melbourne CBD',
    service: 'Commercial — Office Fitout',
  },
  {
    quote:
      'Incredibly professional from initial quote to the final walk-through. The colour consultation saved us from a decision we would have regretted, and the trim detail in the hallways is something previous painters always cut corners on.',
    author: 'Sophie & Daniel K.',
    location: 'Hawthorn',
    service: 'Residential — Interior',
  },
  {
    quote:
      'Third time using PaintCraft. They\'ve done our investment property in Richmond, our home in Kew, and now our office in the CBD. The consistency across jobs and crews is what keeps us coming back.',
    author: 'Robert H.',
    location: 'Kew',
    service: 'Repeat Client — Residential & Commercial',
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#111110]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
            Client reviews
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            What Melbourne
            <br />
            <em>clients say</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E8E8E5] p-8 flex flex-col gap-5"
            >
              <StarRow />
              <p className="text-[#111110] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#F0EEEb]">
                <div>
                  <p className="text-[#111110] font-medium text-sm">{t.author}</p>
                  <p className="text-[#A8A29E] text-xs">{t.location}</p>
                </div>
                <span className="text-[11px] text-[#78716C] bg-[#F4F4F2] px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#FAFAF8] pointer-events-none" />
    </section>
  )
}
