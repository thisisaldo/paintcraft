'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-5">
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm border border-[#E8E8E5] shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="PaintCraft"
            style={{ height: '40px', width: 'auto', display: 'block', maxWidth: 'none' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#78716C] hover:text-[#111110] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden md:flex items-center gap-1.5 bg-[#111110] text-white text-sm px-4 py-2 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200"
          >
            Free Quote
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            className="md:hidden p-2 text-[#111110]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 bg-white border border-[#E8E8E5] rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#78716C] hover:text-[#111110] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="flex items-center justify-center gap-1.5 bg-[#111110] text-white text-sm px-4 py-2.5 rounded-full mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Quote
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
