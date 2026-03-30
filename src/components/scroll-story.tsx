'use client'

import { useEffect, useRef } from 'react'

const CARD = {
  eyebrow: 'South East Melbourne',
  heading: "We treat your home\nlike it's our own",
  body: 'From prep to final coat, every job is handled by our local SE Melbourne team — VBA licensed, fully insured, and focused on getting it right the first time. No subcontractors, no shortcuts.',
  stat: 'SE Melbourne',
  statLabel: 'local team, every job',
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

// Fades in over the first 20% of the scroll, then stays fully visible
function cardOpacity(p: number) {
  const ENTER = 0.05
  const FULL  = 0.20
  if (p < ENTER) return 0
  if (p >= FULL) return 1
  return easeInOut((p - ENTER) / (FULL - ENTER))
}

export default function ScrollStory() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const cardRef     = useRef<HTMLDivElement | null>(null)
  const hintRef     = useRef<HTMLDivElement>(null)

  const durationRef   = useRef(0)
  const rafRef        = useRef<number | null>(null)
  const pendingSeek   = useRef(false)
  const targetTimeRef = useRef(0)
  const videoNatW     = useRef(1920)
  const videoNatH     = useRef(1080)

  // ── Draw video frame into canvas using object-fit: cover math ─────────────
  const drawCover = (ctx: CanvasRenderingContext2D, video: HTMLVideoElement) => {
    const cw = ctx.canvas.width
    const ch = ctx.canvas.height
    const vw = videoNatW.current
    const vh = videoNatH.current
    const videoAspect = vw / vh
    const canvasAspect = cw / ch

    let sx = 0, sy = 0, sw = vw, sh = vh
    if (videoAspect > canvasAspect) {
      // Video is wider — crop the sides
      sw = vh * canvasAspect
      sx = (vw - sw) / 2
    } else {
      // Video is taller — crop top/bottom
      sh = vw / canvasAspect
      sy = (vh - sh) / 2
    }

    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, cw, ch)
  }

  // ── Size canvas to its actual CSS pixel dimensions ────────────────────────
  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const w = canvas.offsetWidth  || window.innerWidth
    const h = canvas.offsetHeight || window.innerHeight
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w
      canvas.height = h
    }
  }

  // ── Canvas draw: called every time the video finishes a seek ──────────────
  useEffect(() => {
    const video  = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const drawFrame = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      drawCover(ctx, video)

      // If another seek arrived while this one was in flight, apply it now
      if (pendingSeek.current) {
        pendingSeek.current = false
        const target = targetTimeRef.current
        if (video.fastSeek) video.fastSeek(target)
        else video.currentTime = target
      }
    }

    const onMeta = () => {
      durationRef.current = video.duration
      videoNatW.current = video.videoWidth  || 1920
      videoNatH.current = video.videoHeight || 1080
      resizeCanvas()
    }

    // Resize canvas and redraw on viewport/orientation changes
    const onResize = () => {
      resizeCanvas()
      if (video.readyState >= 2) {
        const ctx = canvas.getContext('2d')
        if (ctx) drawCover(ctx, video)
      }
    }

    video.addEventListener('loadedmetadata', onMeta)
    video.addEventListener('seeked', drawFrame)
    window.addEventListener('resize', onResize)

    if (video.readyState >= 1) onMeta()

    return () => {
      video.removeEventListener('loadedmetadata', onMeta)
      video.removeEventListener('seeked', drawFrame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // ── Scroll → rAF → seek (only one in-flight seek at a time) ──────────────
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const section = sectionRef.current
        const video   = videoRef.current
        if (!section || !video || durationRef.current === 0) return

        const { top, height } = section.getBoundingClientRect()
        const p = Math.max(0, Math.min(1, -top / (height - window.innerHeight)))

        const target = p * durationRef.current
        targetTimeRef.current = target

        // Only issue a new seek if the video is not already seeking
        if (!video.seeking) {
          pendingSeek.current = false
          if (video.fastSeek) video.fastSeek(target)
          else video.currentTime = target
        } else {
          // Video is busy — flag it, drawFrame will pick it up when ready
          pendingSeek.current = true
        }

        // Update card — direct DOM write, zero React overhead
        const el = cardRef.current
        if (el) {
          const op = cardOpacity(p)
          el.style.opacity = String(op)
          el.style.transform = `translateY(${(1 - op) * 18}px)`
          el.style.pointerEvents = op > 0.1 ? 'auto' : 'none'
        }

        if (hintRef.current) hintRef.current.style.opacity = String(Math.max(0, 1 - p * 12))
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative h-[280vh] bg-[#FAFAF8] sm:h-[300vh] md:h-[320vh]">

      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#FAFAF8] md:h-screen">

        {/* Hidden video — only used for decoding, never painted directly */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute"
          style={{ opacity: 0, pointerEvents: 'none', width: 1, height: 1 }}
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>

        {/* Canvas — sized to viewport, drawn with cover-fit math */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.82, willChange: 'contents' }}
        />

        {/* Top gradient */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: '40%',
            background: 'linear-gradient(to bottom, #FAFAF8 0%, #FAFAF8 15%, rgba(250,250,248,0.75) 55%, transparent 100%)',
          }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '40%',
            background: 'linear-gradient(to top, #FAFAF8 0%, #FAFAF8 15%, rgba(250,250,248,0.75) 55%, transparent 100%)',
          }}
        />
        {/* Side gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(250,250,248,0.5) 0%, transparent 18%, transparent 82%, rgba(250,250,248,0.5) 100%)',
          }}
        />

        {/* Card */}
        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4">
          <div
            ref={cardRef}
            className="max-w-md w-full"
            style={{ opacity: 0, transform: 'translateY(18px)', pointerEvents: 'none' }}
          >
            <div
              className="rounded-[1.75rem] border border-black/8 px-4 py-5 sm:px-5 sm:py-6 md:px-8 md:py-8"
              style={{
                background: 'rgba(250,250,248,0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.18em] text-[#A8A29E] sm:text-[10px]">
                {CARD.eyebrow}
              </p>
              <h2
                className="mb-4 whitespace-pre-line text-[1.85rem] leading-[1.05] tracking-tight text-[#111110] sm:text-2xl md:mb-5 md:text-4xl"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                {CARD.heading}
              </h2>
              <p className="mb-5 text-xs leading-relaxed text-[#78716C] sm:text-sm md:mb-7">{CARD.body}</p>
              <div
                className="inline-flex flex-wrap items-baseline gap-2 rounded-full border border-black/8 px-4 py-2"
                style={{ background: 'rgba(17,17,16,0.05)' }}
              >
                <span className="text-[#111110] text-sm font-semibold tracking-tight">{CARD.stat}</span>
                <span className="text-[#A8A29E] text-xs">{CARD.statLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        >
          <div className="w-px h-8 bg-[#78716C]/40" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          <span className="text-[9px] tracking-[0.15em] text-[#A8A29E] uppercase">Scroll</span>
        </div>
      </div>
    </div>
  )
}
