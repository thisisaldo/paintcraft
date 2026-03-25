import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: {
    default: 'PaintCraft Melbourne | Residential & Commercial Painting',
    template: '%s | PaintCraft Melbourne',
  },
  description:
    "South East Melbourne's trusted painting specialists. Expert residential and commercial painters serving Dandenong, Oakleigh, Clayton, Frankston, Narre Warren, Berwick, Cheltenham, St Kilda and all SE Melbourne suburbs. Licensed, insured, 15+ years experience.",
  keywords: [
    'painters South East Melbourne',
    'painting services South East Melbourne',
    'residential painters Dandenong',
    'painters Oakleigh',
    'painters Clayton',
    'painters Frankston',
    'painters Narre Warren',
    'painters Cheltenham',
    'painters St Kilda',
    'painters South Melbourne',
    'painting contractor Melbourne',
    'Melbourne painting company',
  ],
  authors: [{ name: 'PaintCraft Melbourne' }],
  metadataBase: new URL('https://prestigepainters.com.au'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://prestigepainters.com.au',
    siteName: 'PaintCraft Melbourne',
    title: 'PaintCraft Melbourne | Residential & Commercial Painting',
    description:
      "Melbourne's trusted painting specialists. Expert residential and commercial painters serving all Melbourne suburbs.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'PaintCraft Melbourne' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PaintCraft Melbourne | Residential & Commercial Painting',
    description: "Melbourne's trusted painting specialists.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://prestigepainters.com.au/#business',
  name: 'PaintCraft Melbourne',
  image: 'https://prestigepainters.com.au/og-image.jpg',
  description: "Melbourne's trusted residential and commercial painting specialists.",
  url: 'https://prestigepainters.com.au',
  telephone: '+61-3-9547-2863',
  email: 'hello@prestigepainters.com.au',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3000',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.8136,
    longitude: 144.9631,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: -37.8136, longitude: 144.9631 },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Painting Services Melbourne',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Painting Melbourne', description: 'Professional interior and exterior painting for homes and apartments across Melbourne.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Painting Melbourne', description: 'Commercial painting services for offices, retail, hospitality, and strata properties.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Painting Melbourne', description: 'Interior painting, feature walls, and colour consulting for Melbourne properties.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior Painting Melbourne', description: 'Exterior painting, weatherboard, render, and deck painting across Melbourne.' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased bg-[#FAFAF8] text-[#111110]">{children}</body>
    </html>
  )
}
