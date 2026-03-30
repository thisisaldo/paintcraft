'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X, ChevronDown, Home, Building2, ChefHat, Bath, Clock3 } from 'lucide-react'

const serviceItems = [
  {
    href: '/services/residential-painting',
    icon: Home,
    title: 'Residential Painting',
    desc: 'Homes & apartments',
  },
  {
    href: '/services/commercial-painting',
    icon: Building2,
    title: 'Commercial Painting',
    desc: 'Offices & strata',
  },
  {
    href: '/#services',
    icon: ChefHat,
    title: 'Kitchen Renovations',
    desc: 'Coming soon',
    comingSoon: true,
  },
  {
    href: '/#services',
    icon: Bath,
    title: 'Bathroom Renovations',
    desc: 'Coming soon',
    comingSoon: true,
  },
]

const otherNavLinks = [
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#areas', label: 'Service Areas' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-5">
      <nav
        className={`h-14 md:h-[52px] max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-5 md:px-6 rounded-full border border-white/45 backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 overflow-visible ${
          scrolled
            ? 'bg-white/72 shadow-[0_18px_45px_rgba(17,17,16,0.12),inset_0_1px_0_rgba(255,255,255,0.78)]'
            : 'bg-white/38 shadow-[0_12px_34px_rgba(17,17,16,0.08),inset_0_1px_0_rgba(255,255,255,0.62)]'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Orbit Painting Melbourne"
            className="block h-[72px] w-auto md:h-[90px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7">

          {/* Services — hover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-[#78716C] hover:text-[#111110] transition-colors duration-200">
              Services
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="w-72 rounded-2xl border border-white/50 bg-white/70 p-2 backdrop-blur-xl backdrop-saturate-150 shadow-[0_18px_44px_rgba(17,17,16,0.12),inset_0_1px_0_rgba(255,255,255,0.7)]">
                {serviceItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FAFAF8] transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F4F3F1] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EEECE9] transition-colors">
                        <Icon className="w-3.5 h-3.5 text-[#111110]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[#111110] text-sm font-medium leading-tight">{item.title}</p>
                          {item.comingSoon && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-[#E8E8E5] bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#A8A29E]">
                              <Clock3 className="h-3 w-3" strokeWidth={1.5} />
                              Soon
                            </span>
                          )}
                        </div>
                        <p className="text-[#A8A29E] text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Other links */}
          {otherNavLinks.map((link) => (
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
          <button
            onClick={() => window.dispatchEvent(new Event('orbit:open-chat'))}
            className="hidden md:flex items-center gap-1.5 bg-[#111110] text-white text-sm px-4 py-2 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200"
          >
            Free Quote
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            className="md:hidden -mr-1 p-2 text-[#111110]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-white/50 bg-white/72 p-5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_18px_44px_rgba(17,17,16,0.12),inset_0_1px_0_rgba(255,255,255,0.7)]">
          <div className="flex flex-col gap-1">

            {/* Services — expandable */}
            <button
              className="flex items-center justify-between w-full px-2 py-2.5 text-sm text-[#78716C] hover:text-[#111110] transition-colors text-left"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="flex flex-col gap-1 pb-1 pl-1">
                {serviceItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAFAF8] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#F4F3F1] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-[#111110]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[#111110] text-sm font-medium">{item.title}</p>
                          {item.comingSoon && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-[#E8E8E5] bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#A8A29E]">
                              <Clock3 className="h-3 w-3" strokeWidth={1.5} />
                              Soon
                            </span>
                          )}
                        </div>
                        <p className="text-[#A8A29E] text-xs">{item.desc}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}

            {otherNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-2.5 text-sm text-[#78716C] hover:text-[#111110] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 mt-1 border-t border-[#E8E8E5]">
              <button
                className="flex items-center justify-center gap-1.5 w-full bg-[#111110] text-white text-sm px-4 py-2.5 rounded-full mt-1"
                onClick={() => { setMobileOpen(false); window.dispatchEvent(new Event('orbit:open-chat')) }}
              >
                Get Free Quote
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
