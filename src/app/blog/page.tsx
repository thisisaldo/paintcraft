import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'
import { posts, formatDate } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Painting Tips & Advice | Blog',
  description:
    'Expert painting advice for South East Melbourne homeowners — colour guides, cost breakdowns, prep tips, and local know-how from a VBA licensed SE Melbourne painter.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Painting Tips & Advice | Orbit Painting Melbourne Blog',
    description:
      'Practical painting advice for SE Melbourne homes — costs, colours, weatherboard guides, and more.',
    url: 'https://www.orbitpaintingmelbourne.com.au/blog',
  },
}

const categoryColours: Record<string, string> = {
  'Pricing': 'bg-amber-50 text-amber-700 border-amber-200',
  'Exterior Painting': 'bg-sky-50 text-sky-700 border-sky-200',
  'Colour & Design': 'bg-violet-50 text-violet-700 border-violet-200',
  'Tips & Advice': 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] text-[#A8A29E] uppercase tracking-[0.12em] font-medium mb-10"
          >
            <Link href="/" className="hover:text-[#78716C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#78716C]">Blog</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
                Painting advice
              </p>
              <h1
                className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Tips, guides &amp;
                <br />
                <em>local know-how</em>
              </h1>
            </div>
            <p className="text-[#78716C] text-sm max-w-[40ch] leading-relaxed md:text-right">
              Practical painting advice from SE Melbourne's local painting specialists — straight answers, no fluff.
            </p>
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-2xl border border-[#E8E8E5] bg-[#FAFAF8] hover:bg-white hover:shadow-[0_4px_32px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden mb-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Colour block */}
              <div className="lg:col-span-2 bg-[#111110] flex items-center justify-center p-10 min-h-[180px] lg:min-h-[260px]">
                <p
                  className="text-white/10 text-6xl md:text-7xl text-center leading-none tracking-tight select-none"
                  style={{ fontFamily: 'var(--font-instrument-serif)' }}
                >
                  01
                </p>
              </div>
              {/* Content */}
              <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${categoryColours[featured.category] ?? 'bg-[#F4F3F1] text-[#78716C] border-[#E8E8E5]'}`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-[#A8A29E] text-xs">Featured</span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl text-[#111110] leading-snug tracking-tight mb-3 group-hover:text-[#111110]/80 transition-colors"
                    style={{ fontFamily: 'var(--font-instrument-serif)' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[#78716C] text-sm leading-relaxed">{featured.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[#A8A29E] text-xs">{formatDate(featured.date)}</span>
                    <span className="text-[#E8E8E5]">·</span>
                    <span className="text-[#A8A29E] text-xs">{featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#111110] text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E8E5] border border-[#E8E8E5] rounded-2xl overflow-hidden">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#FAFAF8] p-8 flex flex-col gap-5 hover:bg-white transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`inline-flex text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${categoryColours[post.category] ?? 'bg-[#F4F3F1] text-[#78716C] border-[#E8E8E5]'}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[#E8E8E5] text-3xl font-light font-mono select-none tabular-nums">
                    0{i + 2}
                  </span>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h2
                    className="text-[#111110] font-medium text-base leading-snug group-hover:text-[#111110]/80 transition-colors"
                    style={{ fontFamily: 'var(--font-instrument-serif)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[#78716C] text-sm leading-relaxed line-clamp-2">{post.description}</p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E8E8E5]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#A8A29E] text-xs">{formatDate(post.date)}</span>
                    <span className="text-[#E8E8E5]">·</span>
                    <span className="text-[#A8A29E] text-xs">{post.readTime}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4C1BC] group-hover:text-[#111110] transition-colors duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
