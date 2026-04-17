'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.97,
    filter: 'blur(14px)',
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.985,
    filter: 'blur(8px)',
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
      staggerChildren: 0.05,
      staggerDirection: -1 as const,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: 'blur(2px)',
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
}

const HERO_REVEAL_TIME = 4

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      setTextVisible(true)
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) {
      setTextVisible(true)
      return
    }

    const revealText = () => setTextVisible(true)
    video.playbackRate = 0.6

    const handleTimeUpdate = () => {
      if (video.currentTime >= HERO_REVEAL_TIME) {
        revealText()
      }
    }

    const attemptPlay = () => {
      if (video.ended) return
      if (video.currentTime >= HERO_REVEAL_TIME) {
        revealText()
        return
      }
      video.play().catch(() => {
        revealText()
      })
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('error', revealText)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          attemptPlay()
        } else {
          if (!video.ended) video.pause()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('error', revealText)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FAFAF8] md:min-h-[100dvh]">
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
          style={{ opacity: 0.88 }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Edge fade — blends video into site background on all four sides */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#FAFAF8] via-transparent to-[#FAFAF8]/70" style={{ backgroundImage: 'linear-gradient(to bottom, #FAFAF8 0%, #FAFAF8 7%, rgba(250,250,248,0.1) 24%, transparent 50%, rgba(250,250,248,0.7) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FAFAF8]/22 via-transparent to-[#FAFAF8]/22" />

      {/* Content */}
      <div className="relative z-10 flex w-full items-center justify-center px-3 pt-24 sm:px-4 sm:pt-28">
        <AnimatePresence>
          {textVisible && (
            <motion.div
              key="hero-content"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full max-w-2xl rounded-[2rem] px-5 py-8 text-center sm:px-8 sm:py-10 md:px-12 md:py-14"
              style={{
                background: 'rgba(250, 250, 248, 0.32)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.55)',
                boxShadow: '0 8px 48px rgba(17, 17, 16, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)',
              }}
            >
              {/* Badge */}
              <motion.div variants={item} className="mb-6 inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-[#E0DDD9] bg-white/60 px-3 py-1.5 sm:mb-8 sm:px-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-center text-[10px] font-medium uppercase leading-relaxed tracking-[0.12em] text-[#78716C] sm:text-[11px]">
                  Booking now · SE Melbourne · Free quotes in 24 hrs
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={item}
                className="mb-5 text-[2.85rem] leading-[0.92] tracking-[-0.025em] text-[#111110] sm:mb-6 sm:text-4xl md:text-[3.5rem] lg:text-[4.25rem]"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Your home, painted
                <br />
                <em>perfectly</em> — one team,
                <br />
                start to finish
              </motion.h2>

              {/* Subtext */}
              <motion.p variants={item} className="mx-auto mb-7 max-w-[44ch] text-sm leading-relaxed text-[#78716C] sm:mb-8 sm:text-base md:text-lg">
                SE Melbourne&apos;s local painting specialists — no subcontractors, no hand-offs.
                VBA licensed, fully insured, serving homes and businesses from St Kilda to Frankston.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={item} className="mb-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={() => window.dispatchEvent(new Event('orbit:open-chat'))}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#111110] px-6 py-3.5 text-sm text-white shadow-[0_2px_16px_rgba(17,17,16,0.22)] transition-all duration-200 hover:bg-[#2A2A29] active:scale-[0.98] sm:w-auto"
                >
                  Get My Free Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/#portfolio"
                  className="flex w-full items-center justify-center gap-1.5 text-sm text-[#78716C] transition-colors duration-200 hover:text-[#111110] sm:w-auto"
                >
                  See recent work
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Trust line */}
              <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-[#E0DDD9]/60 pt-6 sm:gap-x-5">
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
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none sm:h-28" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-35 sm:flex">
        <div
          className="w-px h-8 bg-[#78716C]"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />
        <span className="text-[9px] tracking-[0.15em] text-[#78716C] uppercase">Scroll</span>
      </div>
    </section>
  )
}
