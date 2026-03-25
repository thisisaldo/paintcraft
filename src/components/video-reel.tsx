'use client'

import { useEffect, useRef } from 'react'

export default function VideoReel() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden" style={{ height: '56vw', maxHeight: '680px', minHeight: '320px' }}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video 4.mp4" type="video/mp4" />
      </video>

      {/* Subtle vignette so it doesn't feel raw */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/40 via-transparent to-[#FAFAF8]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/20 via-transparent to-[#111110]/20 pointer-events-none" />

      {/* Caption */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white/70 text-[11px] tracking-[0.18em] uppercase font-medium">
          Orbit Painting Melbourne · In the field
        </p>
      </div>
    </section>
  )
}
