'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: 'blur(2px)',
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 0.6

    const handleEnded = () => {
      setTextVisible(true)
      // video stops here — no loop
    }

    video.addEventListener('ended', handleEnded)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // only resume if it hasn't finished yet
          if (!video.ended) video.play()
        } else {
          if (!video.ended) video.pause()
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
            'radial-gradient(ellipse 92% 85% at 50% 46%, black 30%, transparent 80%)',
          ].join(', '),
          WebkitMaskImage: [
            'radial-gradient(ellipse 92% 85% at 50% 46%, black 30%, transparent 80%)',
          ].join(', '),
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.8 }}
        >
          <source src="/video 1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Edge fade — blends video into site background on all four sides */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#FAFAF8] via-transparent to-[#FAFAF8]/80" style={{ backgroundImage: 'linear-gradient(to bottom, #FAFAF8 0%, #FAFAF8 8%, rgba(250,250,248,0.15) 28%, transparent 50%, rgba(250,250,248,0.8) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FAFAF8]/30 via-transparent to-[#FAFAF8]/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full px-4 pt-28">
        <AnimatePresence>
          {textVisible && (
            <motion.div
              key="hero-content"
              variants={container}
              initial="hidden"
              animate="show"
              className="w-full max-w-2xl text-center rounded-3xl px-8 py-10 md:px-12 md:py-14"
              style={{
                background: 'rgba(250, 250, 248, 0.32)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.55)',
                boxShadow: '0 8px 48px rgba(17, 17, 16, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)',
              }}
            >
              {/* Badge */}
              <motion.div variants={item} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E0DDD9] bg-white/60 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-medium tracking-[0.12em] text-[#78716C] uppercase">
                  Booking now · SE Melbourne · Free quotes in 24 hrs
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={item}
                className="text-4xl md:text-[3.5rem] lg:text-[4.25rem] text-[#111110] leading-[0.95] tracking-[-0.025em] mb-6"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Your home, painted
                <br />
                <em>perfectly</em> — on time,
                <br />
                on budget
              </motion.h2>

              {/* Subtext */}
              <motion.p variants={item} className="text-[#78716C] text-base md:text-lg max-w-[44ch] mx-auto leading-relaxed mb-8">
                SE Melbourne&apos;s local painting specialists — serving homes and businesses
                from St Kilda to Frankston. VBA licensed, fully insured, free quotes within 24 hours.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <button
                  onClick={() => window.dispatchEvent(new Event('orbit:open-chat'))}
                  className="flex items-center gap-2 bg-[#111110] text-white text-sm px-6 py-3.5 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200 shadow-[0_2px_16px_rgba(17,17,16,0.22)]"
                >
                  Get My Free Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/#portfolio"
                  className="flex items-center gap-1.5 text-[#78716C] text-sm hover:text-[#111110] transition-colors duration-200"
                >
                  See recent work
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Trust line */}
              <motion.div variants={item} className="flex items-center justify-center gap-5 flex-wrap pt-6 border-t border-[#E0DDD9]/60">
                {['VBA Licensed & Insured', 'Local SE Melbourne Team', 'No Mess · No Surprises', 'Free Detailed Quotes'].map((trust) => (
                  <span key={trust} className="text-[11px] text-[#A8A29E] tracking-wide">
                    {trust}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
