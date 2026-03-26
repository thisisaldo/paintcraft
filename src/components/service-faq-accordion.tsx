'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function ServiceFAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col divide-y divide-[#E8E8E5]">
      {faqs.map((faq, index) => (
        <div key={index} className="py-5">
          <button
            className="w-full flex items-start justify-between gap-4 text-left group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-[#111110] text-sm font-medium leading-snug group-hover:text-[#111110]/75 transition-colors">
              {faq.question}
            </span>
            <div className="flex-shrink-0 mt-0.5 text-[#A8A29E]">
              {openIndex === index ? (
                <Minus className="w-4 h-4" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4" strokeWidth={1.5} />
              )}
            </div>
          </button>
          {openIndex === index && (
            <p className="mt-3 text-[#78716C] text-sm leading-relaxed pr-8">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  )
}
