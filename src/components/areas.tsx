'use client'

import { useEffect, useRef } from 'react'

const areaGroups = [
  {
    region: 'Melbourne CBD',
    suburbs: [
      'Melbourne CBD',
      'Southbank',
      'South Melbourne',
      'Port Melbourne',
      'Albert Park',
      'Middle Park',
      'East Melbourne',
      'Docklands',
    ],
  },
  {
    region: 'Inner South East',
    suburbs: [
      'St Kilda',
      'Elwood',
      'Windsor',
      'Prahran',
      'South Yarra',
      'Armadale',
      'Malvern',
      'Glen Iris',
    ],
  },
  {
    region: 'South East',
    suburbs: [
      'Caulfield',
      'Carnegie',
      'Murrumbeena',
      'Oakleigh',
      'Clayton',
      'Huntingdale',
      'Moorabbin',
      'Cheltenham',
    ],
  },
  {
    region: 'Outer South East',
    suburbs: [
      'Springvale',
      'Noble Park',
      'Dandenong',
      'Keysborough',
      'Endeavour Hills',
      'Hallam',
      'Narre Warren',
      'Berwick',
    ],
  },
  {
    region: 'Bayside & Frankston',
    suburbs: [
      'Sandringham',
      'Hampton',
      'Mentone',
      'Mordialloc',
      'Aspendale',
      'Chelsea',
      'Seaford',
      'Frankston',
    ],
  },
]

export default function ServiceAreas() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="areas" className="relative py-24 px-4 bg-[#FAFAF8] overflow-hidden">

      {/* Background video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.38 }}
      >
        <source src="/video 4.mp4" type="video/mp4" />
      </video>

      {/* Blend into #FAFAF8 on all four edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/20 to-[#FAFAF8]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FAFAF8]/60 via-transparent to-[#FAFAF8]/60" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              Service areas
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              We paint across
              <br />
              <em>greater Melbourne</em>
            </h2>
          </div>
          <p className="text-[#78716C] text-sm max-w-[44ch] leading-relaxed">
            Based in South East Melbourne, we cover the SE corridor and nearby CBD. Not sure if we reach your suburb? Call us — we travel across the full south east.
          </p>
        </div>

        {/* Area columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {areaGroups.map((group) => (
            <div key={group.region}>
              <h3 className="text-[#111110] font-medium text-[11px] tracking-[0.1em] uppercase mb-4 pb-3 border-b border-[#E8E8E5]">
                {group.region}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.suburbs.map((suburb) => (
                  <li key={suburb}>
                    <span className="text-[#78716C] text-xs leading-relaxed hover:text-[#111110] transition-colors duration-150 cursor-default">
                      {suburb}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-14 p-8 md:p-10 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#E8E8E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[#111110] font-medium text-sm mb-1">
              Don&apos;t see your suburb listed?
            </h3>
            <p className="text-[#78716C] text-sm">
              We regularly service outer Melbourne and regional areas. Get in touch and we&apos;ll confirm availability.
            </p>
          </div>
          <a
            href="tel:+61344279403"
            className="flex-shrink-0 w-full md:w-auto flex items-center justify-center gap-2 bg-[#111110] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200"
          >
            Call +61 (3) 4427 9403
          </a>
        </div>
      </div>
    </section>
  )
}
