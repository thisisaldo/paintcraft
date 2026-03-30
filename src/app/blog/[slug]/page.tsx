import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'
import OpenChatButton from '@/components/open-chat-button'
import { posts, getPost, getRelatedPosts, formatDate } from '@/lib/blog-posts'
import type { BlogSection } from '@/lib/blog-posts'

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.orbitpaintingmelbourne.com.au/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

const categoryColours: Record<string, string> = {
  'Pricing': 'bg-amber-50 text-amber-700 border-amber-200',
  'Exterior Painting': 'bg-sky-50 text-sky-700 border-sky-200',
  'Colour & Design': 'bg-violet-50 text-violet-700 border-violet-200',
  'Tips & Advice': 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={idx}
          className="text-2xl md:text-3xl text-[#111110] leading-snug tracking-tight mt-10 mb-4 first:mt-0"
          style={{ fontFamily: 'var(--font-instrument-serif)' }}
        >
          {section.content as string}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={idx}
          className="text-xl text-[#111110] font-medium leading-snug mt-8 mb-3"
        >
          {section.content as string}
        </h3>
      )
    case 'p':
      return (
        <p key={idx} className="text-[#78716C] text-base leading-relaxed mb-4">
          {section.content as string}
        </p>
      )
    case 'ul':
      return (
        <ul key={idx} className="flex flex-col gap-2.5 mb-6 pl-1">
          {(section.content as string[]).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#78716C] text-base">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C4C1BC] flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={idx} className="flex flex-col gap-2.5 mb-6 pl-1">
          {(section.content as string[]).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#78716C] text-base">
              <span
                className="text-[#C4C1BC] text-sm font-mono tabular-nums flex-shrink-0 mt-0.5 w-5"
              >
                {i + 1}.
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Orbit Painting Melbourne',
      url: 'https://www.orbitpaintingmelbourne.com.au',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Orbit Painting Melbourne',
      '@id': 'https://www.orbitpaintingmelbourne.com.au/#business',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.orbitpaintingmelbourne.com.au/blog/${post.slug}`,
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      {/* Article header */}
      <section className="pt-36 pb-12 px-4 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#A8A29E]"
          >
            <Link href="/" className="hover:text-[#78716C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#78716C] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#78716C] truncate max-w-[20ch]">{post.category}</span>
          </nav>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`inline-flex text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${categoryColours[post.category] ?? 'bg-[#F4F3F1] text-[#78716C] border-[#E8E8E5]'}`}
            >
              {post.category}
            </span>
            <span className="text-[#A8A29E] text-xs">{formatDate(post.date)}</span>
            <span className="text-[#E8E8E5]">·</span>
            <span className="text-[#A8A29E] text-xs">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1
            className="mb-6 text-[2.4rem] leading-tight tracking-tight text-[#111110] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            {post.title}
          </h1>

          {/* Description */}
          <p className="border-b border-[#E8E8E5] pb-10 text-base leading-relaxed text-[#78716C] sm:text-lg">
            {post.description}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-4 pb-20 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto">
          <article className="prose-none">
            {post.content.map((section, idx) => renderSection(section, idx))}
          </article>

          {/* Author byline */}
          <div className="mt-12 flex items-start gap-4 border-t border-[#E8E8E5] pt-8 sm:items-center">
            <div className="w-10 h-10 rounded-full bg-[#111110] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium" style={{ fontFamily: 'var(--font-instrument-serif)' }}>O</span>
            </div>
            <div>
              <p className="text-[#111110] text-sm font-medium">Orbit Painting Melbourne</p>
              <p className="text-[#A8A29E] text-xs">VBA licensed painters · SE Melbourne · Est. 2009</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-4 bg-[#111110]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.12em] text-[#4A4A48] uppercase mb-4">
            Get started
          </p>
          <h2
            className="mb-4 text-[2.15rem] leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            Ready for a free quote?
          </h2>
          <p className="text-[#5A5A58] text-sm mb-8 max-w-[40ch] mx-auto leading-relaxed">
            Serving SE Melbourne since 2009. Written, fixed-price quote within 24 hours — no obligation.
          </p>
          <OpenChatButton className="inline-flex items-center gap-2 bg-white text-[#111110] text-sm px-6 py-3 rounded-full hover:bg-[#FAFAF8] active:scale-[0.98] transition-all duration-200 font-medium">
            Chat with Mick
          </OpenChatButton>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 px-4 bg-[#FAFAF8]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2
                className="text-2xl text-[#111110] tracking-tight"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                More articles
              </h2>
              <Link
                href="/blog"
                className="flex items-center gap-1.5 text-[#A8A29E] text-sm hover:text-[#111110] transition-colors"
              >
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-4 p-7 rounded-2xl border border-[#E8E8E5] bg-[#FAFAF8] hover:bg-white hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <span
                    className={`inline-flex self-start text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${categoryColours[p.category] ?? 'bg-[#F4F3F1] text-[#78716C] border-[#E8E8E5]'}`}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="text-[#111110] font-medium text-base leading-snug group-hover:text-[#111110]/80 transition-colors"
                    style={{ fontFamily: 'var(--font-instrument-serif)' }}
                  >
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#E8E8E5]">
                    <span className="text-[#A8A29E] text-xs">{p.readTime}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C4C1BC] group-hover:text-[#111110] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to blog */}
          <div className="max-w-5xl mx-auto mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#A8A29E] text-sm hover:text-[#111110] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to all articles
            </Link>
          </div>
        </section>
      )}

      <Footer />
      <ChatWidget />
    </main>
  )
}
