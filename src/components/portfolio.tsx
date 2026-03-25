'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const projects = [
  { src: '/photo1.jpeg', aspect: 'aspect-[16/9]', span: 'lg:col-span-2', alt: 'Interior painting project — feature wall and trim in a South East Melbourne home' },
  { src: '/photo2.jpeg', aspect: 'aspect-square', span: '', alt: 'Exterior house painting in Cheltenham by Orbit Painting Melbourne' },
  { src: '/photo3.jpeg', aspect: 'aspect-square', span: '', alt: 'Residential interior repaint in Oakleigh — walls and ceiling' },
  { src: '/photo4.jpeg', aspect: 'aspect-square', span: '', alt: 'Commercial painting project in South East Melbourne office fitout' },
  { src: '/photo5.jpeg', aspect: 'aspect-square', span: '', alt: 'Exterior weatherboard painting in Frankston by Orbit Painting' },
  { src: '/photo6.jpeg', aspect: 'aspect-square', span: '', alt: 'Interior feature wall painting in a Dandenong home' },
  { src: '/photo8.png', aspect: 'aspect-[4/3]', span: 'lg:col-span-2', alt: 'Full exterior repaint of a period home in St Kilda — Orbit Painting Melbourne' },
]

export default function Portfolio() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('[data-card]')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.delay ?? 0)
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="relative py-24 px-4 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              Our work
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Projects across
              <br />
              <em>greater Melbourne</em>
            </h2>
          </div>
          <p className="text-[#78716C] text-sm max-w-[40ch] leading-relaxed">
            A selection of recent residential and commercial painting projects from across Melbourne.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, i) => (
            <div
              key={project.src}
              data-card
              data-delay={i * 80}
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
              className={`relative overflow-hidden rounded-2xl group ${project.aspect} ${project.span}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#111110]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#FAFAF8] pointer-events-none" />
    </section>
  )
}
