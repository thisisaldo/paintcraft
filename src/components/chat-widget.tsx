'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  text: string
}

const GREETING: Message = {
  role: 'assistant',
  text: "G'day! I'm Mick from PaintCraft. I can help with questions about our services, pricing, suburbs we cover, or get you sorted with a free quote. What can I do for ya?",
}

const PLACEHOLDER_REPLY =
  "Thanks for your message! Our AI assistant is coming soon. In the meantime, call us on (03) 9547 2863 or use the contact form below."

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(() => crypto.randomUUID())
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // Auto-open once per browser session after a short delay, with a pop sound
  useEffect(() => {
    if (sessionStorage.getItem('chat_greeted')) return
    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem('chat_greeted', '1')
      try {
        const ctx = new AudioContext()
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.type = 'sine'
        osc.frequency.setValueAtTime(600, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08)
        gain.gain.setValueAtTime(0.4, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
        osc.start(ctx.currentTime)
        osc.stop(ctx.currentTime + 0.12)
      } catch {
        // AudioContext not available (e.g. SSR guard)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return

    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setLoading(true)

    try {
      // Phase 1: placeholder. Phase 2: swap this for fetch('/api/chat', ...)
      await new Promise((resolve) => setTimeout(resolve, 800))
      setMessages((prev) => [...prev, { role: 'assistant', text: PLACEHOLDER_REPLY }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Sorry, something went wrong. Please try calling us on (03) 9547 2863.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 sm:w-96 rounded-2xl shadow-xl border border-[#E8E8E5] overflow-hidden flex flex-col bg-white">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111110]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white text-sm font-medium">Mick — PaintCraft</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 p-4 overflow-y-auto max-h-96 bg-[#FAFAF9]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={
                    msg.role === 'user'
                      ? 'max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm bg-[#111110] text-white'
                      : 'max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm bg-[#F4F4F2] border border-[#E8E8E5] text-[#111110]'
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#F4F4F2] border border-[#E8E8E5] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111110]/40 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111110]/40 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111110]/40 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-3 border-t border-[#E8E8E5] bg-white">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
              disabled={loading}
              className="flex-1 rounded-lg border border-[#E8E8E5] bg-[#F4F4F2] px-3 py-2 text-sm text-[#111110] placeholder:text-[#999997] outline-none focus:border-[#111110] transition-colors disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#111110] text-white flex items-center justify-center hover:bg-[#333330] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-13 h-13 rounded-full bg-[#111110] text-white shadow-lg flex items-center justify-center hover:bg-[#333330] transition-colors"
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{ width: 52, height: 52 }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
