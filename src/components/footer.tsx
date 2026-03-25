'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const serviceLinks = [
  { label: 'Residential Painting', href: '#services' },
  { label: 'Commercial Painting', href: '#services' },
  { label: 'Interior Painting', href: '#services' },
  { label: 'Exterior Painting', href: '#services' },
  { label: 'Strata Painting', href: '#services' },
  { label: 'Colour Consulting', href: '#services' },
]

const areaLinks = [
  'Melbourne CBD',
  'South Melbourne',
  'St Kilda',
  'Caulfield',
  'Oakleigh',
  'Clayton',
  'Dandenong',
  'Narre Warren',
  'Frankston',
  'Cheltenham',
]

const trustBadges = [
  { label: 'VBA Registered', sub: 'Victorian Building Authority' },
  { label: '5-Year Guarantee', sub: 'Written, on every job' },
  { label: '4.9★ Google', sub: '127 verified reviews' },
  { label: 'Since 2009', sub: '15+ years in SE Melbourne' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111110] border-t border-white/5 px-4 pt-14 pb-8">
      <div className="max-w-5xl mx-auto">

        {/* Trust strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-12">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="bg-[#111110] px-5 py-4">
              <p className="text-white text-sm font-medium">{badge.label}</p>
              <p className="text-[#4A4A48] text-xs mt-0.5">{badge.sub}</p>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/orbit-clean.svg"
                alt="Orbit Painting Melbourne"
                style={{ height: '32px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-[#4A4A48] text-xs leading-relaxed mb-5">
              South East Melbourne&apos;s trusted residential and commercial painting specialists.
              Licensed, insured, and delivering flawless results since 2009.
            </p>
            <button
              onClick={() => window.dispatchEvent(new Event('orbit:open-chat'))}
              className="inline-flex items-center gap-2 text-[#4A4A48] text-xs hover:text-[#78716C] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat with Mick for a free quote
            </button>
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

          {/* Areas */}
          <div>
            <h4 className="text-[#5A5A58] text-[10px] font-medium tracking-[0.12em] uppercase mb-4">
              Painters in Melbourne
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {areaLinks.map((area) => (
                <li key={area}>
                  <span className="text-[#4A4A48] text-xs">Painters {area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[#3A3A38] text-xs">
            © {new Date().getFullYear()} Orbit Painting Melbourne. All rights reserved.
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
