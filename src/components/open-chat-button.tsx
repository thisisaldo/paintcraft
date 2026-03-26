'use client'

import { ArrowRight } from 'lucide-react'

interface OpenChatButtonProps {
  children?: React.ReactNode
  className?: string
  showArrow?: boolean
}

export default function OpenChatButton({ children, className, showArrow = true }: OpenChatButtonProps) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new Event('orbit:open-chat'))}
    >
      {children}
      {showArrow && <ArrowRight className="w-3.5 h-3.5" />}
    </button>
  )
}
