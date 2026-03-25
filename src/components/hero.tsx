'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 0.6

    const handleEnded = () => {
      setTimeout(() => {
        video.currentTime = 0
        video.play()
      }, 4000)
    }

    video.addEventListener('ended', handleEnded)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      video.removeEventListener('ended', handleEnded)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FAFAF8]">
      {/* Video background */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: [
            'radial-gradient(ellipse 78% 70% at 50% 46%, black 20%, transparent 72%)',
          ].join(', '),
          WebkitMaskImage: [
            'radial-gradient(ellipse 78% 70% at 50% 46%, black 20%, transparent 72%)',
          ].join(', '),
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        >
          <source src="/paint-brush.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Edge fade — blends video into site background on all four sides */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#FAFAF8]/70 via-transparent to-[#FAFAF8]/95" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FAFAF8]/60 via-transparent to-[#FAFAF8]/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E0DDD9] bg-white/70 backdrop-blur-sm mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#111110]" />
          <span className="text-[11px] font-medium tracking-[0.12em] text-[#78716C] uppercase">
            South East Melbourne · Residential &amp; Commercial
          </span>
        </div>

        {/* Headline — large italic serif matching reference screenshot aesthetic */}
        <h1
          className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] text-[#111110] leading-[0.93] tracking-[-0.025em] mb-7"
          style={{ fontFamily: 'var(--font-instrument-serif)' }}
        >
          Surfaces shaped
          <br />
          <em>by colour</em>
          <br />
          and craft
        </h1>

        {/* Subtext */}
        <p className="text-[#78716C] text-base md:text-lg max-w-[52ch] mx-auto leading-relaxed mb-10">
          South East Melbourne&apos;s most trusted painters. We deliver flawless results for homes
          and businesses across the SE corridor — from St Kilda to Frankston, with a 5-year guarantee on every job.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-[#111110] text-white text-sm px-6 py-3 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200 shadow-[0_2px_16px_rgba(17,17,16,0.18)]"
          >
            Get Free Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#portfolio"
            className="flex items-center gap-1.5 text-[#78716C] text-sm hover:text-[#111110] transition-colors duration-200"
          >
            View our work
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Floating trust line */}
        <div className="mt-14 flex items-center justify-center gap-6 flex-wrap">
          {['VBA Licensed & Insured', '15+ Years in SE Melbourne', '5-Year Written Guarantee', '4.9★ on Google (127 reviews)'].map((item) => (
            <span key={item} className="text-[11px] text-[#A8A29E] tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <div
          className="w-px h-8 bg-[#78716C]"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />
        <span className="text-[9px] tracking-[0.15em] text-[#78716C] uppercase">Scroll</span>
      </div>
    </section>
  )
}
