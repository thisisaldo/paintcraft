import Link from 'next/link'

const serviceLinks = [
  { label: 'Residential Painting', href: '#services' },
  { label: 'Commercial Painting', href: '#services' },
  { label: 'Interior Painting', href: '#services' },
  { label: 'Exterior Painting', href: '#services' },
  { label: 'Strata Painting', href: '#services' },
  { label: 'Colour Consulting', href: '#contact' },
]

const areaLinks = [
  'South Yarra',
  'Toorak',
  'Richmond',
  'Fitzroy',
  'Carlton',
  'Brighton',
  'Hawthorn',
  'Kew',
  'St Kilda',
  'Melbourne CBD',
]

export default function Footer() {
  return (
    <footer className="bg-[#111110] border-t border-white/5 px-4 pt-16 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="PaintCraft" style={{ height: '36px', width: 'auto', display: 'block', maxWidth: 'none' }} />
            </div>
            <p className="text-[#4A4A48] text-xs leading-relaxed mb-5">
              Melbourne&apos;s trusted residential and commercial painting specialists. Licensed,
              insured, and serving greater Melbourne since 2009.
            </p>
            <div className="text-[#3A3A38] text-xs leading-relaxed">
              <p>VBA Registered Painter</p>
              <p>Melbourne, Victoria 3000</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#5A5A58] text-[10px] font-medium tracking-[0.12em] uppercase mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#4A4A48] text-xs hover:text-[#78716C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas — keyword-rich for local SEO */}
          <div>
            <h4 className="text-[#5A5A58] text-[10px] font-medium tracking-[0.12em] uppercase mb-4">
              Painters in Melbourne
            </h4>
            <ul className="flex flex-col gap-2.5">
              {areaLinks.map((area) => (
                <li key={area}>
                  <span className="text-[#4A4A48] text-xs">Painters {area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#5A5A58] text-[10px] font-medium tracking-[0.12em] uppercase mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+61395472863"
                  className="text-[#4A4A48] text-xs hover:text-[#78716C] transition-colors"
                >
                  (03) 9547 2863
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@prestigepainters.com.au"
                  className="text-[#4A4A48] text-xs hover:text-[#78716C] transition-colors"
                >
                  hello@prestigepainters.com.au
                </a>
              </li>
              <li>
                <p className="text-[#4A4A48] text-xs">Melbourne, Victoria 3000</p>
              </li>
              <li>
                <p className="text-[#4A4A48] text-xs leading-relaxed">
                  Mon–Fri: 7am–5pm
                  <br />
                  Saturday: 8am–2pm
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[#3A3A38] text-xs">
            © {new Date().getFullYear()} PaintCraft Melbourne. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-[#3A3A38] text-xs hover:text-[#4A4A48] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#3A3A38] text-xs hover:text-[#4A4A48] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
