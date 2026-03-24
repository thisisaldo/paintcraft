'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How much does house painting cost in Melbourne?',
    answer:
      'Costs vary by property size, surface condition, number of colours, and access. As a guide, interior painting for a 3-bedroom home starts from around $3,500–$5,000. Exterior painting starts from $4,500–$8,000. We provide detailed fixed-price written quotes — no hourly rates, no surprises.',
  },
  {
    question: 'Are you licensed and insured to paint in Victoria?',
    answer:
      'Yes. We are registered with the Victorian Building Authority (VBA) and carry comprehensive public liability insurance and workers compensation insurance. We provide certificates on request before any job commences.',
  },
  {
    question: 'How long does it take to paint a house in Melbourne?',
    answer:
      'A typical interior repaint of a 3-bedroom home takes 3–5 working days. A full interior and exterior repaint takes 7–10 days depending on size and prep requirements. All timelines are confirmed in your written quote.',
  },
  {
    question: 'Do you offer colour consulting?',
    answer:
      'Yes — colour consultation is included with every quote at no additional charge. We work with the full Dulux, Taubmans, and Haymes colour ranges and help you arrive at a palette that suits your property and personal taste.',
  },
  {
    question: 'Do you paint in my suburb?',
    answer:
      'We service the entire Melbourne metropolitan area including inner suburbs like South Yarra, Toorak, Fitzroy, and Richmond, and outer suburbs across the east, north, south, and west. Call us on (03) 9547 2863 to confirm your suburb.',
  },
  {
    question: 'What paint brands do you use?',
    answer:
      'We use premium Australian brands — primarily Dulux, Taubmans, and Haymes. These offer superior durability, washability, and colour retention. We never substitute materials without your consent, and always apply exactly what we quote.',
  },
  {
    question: 'Do you move furniture and what preparation do you do?',
    answer:
      'Yes — we move and protect all furniture, and we take preparation seriously. This includes filling, sanding, priming, and masking all surfaces. Thorough preparation is what separates a paint job that lasts from one that chips within a year. We leave the property clean on completion.',
  },
  {
    question: 'What is your workmanship guarantee?',
    answer:
      'We provide a written 5-year workmanship guarantee on all jobs. If any paint defect arises from our application within that period, we return and rectify it at no charge.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-4 bg-[#FAFAF8] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
            Questions
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            Frequently asked
          </h2>
        </div>

        {/* Accordion */}
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
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#FAFAF8] pointer-events-none" />
    </section>
  )
}
