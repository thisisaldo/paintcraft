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
    default: 'Orbit Painting Melbourne | Residential & Commercial Painting',
    template: '%s | Orbit Painting Melbourne',
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
  authors: [{ name: 'Orbit Painting Melbourne' }],
  metadataBase: new URL('https://www.orbitpaintingmelbourne.com.au'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.orbitpaintingmelbourne.com.au',
    siteName: 'Orbit Painting Melbourne',
    title: 'Orbit Painting Melbourne | Residential & Commercial Painting',
    description:
      "South East Melbourne's trusted painting specialists. Residential and commercial painters serving Dandenong, Oakleigh, Clayton, Frankston, Cheltenham, St Kilda and the entire SE corridor.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Orbit Painting Melbourne' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbit Painting Melbourne | Residential & Commercial Painting',
    description: "Melbourne's trusted painting specialists.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': 'https://www.orbitpaintingmelbourne.com.au/#business',
  name: 'Orbit Painting Melbourne',
  image: 'https://www.orbitpaintingmelbourne.com.au/og-image.jpg',
  description: "South East Melbourne's local residential and commercial painting specialists. VBA licensed, fully insured, free detailed quotes within 24 hours.",
  url: 'https://www.orbitpaintingmelbourne.com.au',
  telephone: '+61493929947',
  email: 'hello@orbitpaintingmelbourne.com.au',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Clayton',
    addressRegion: 'VIC',
    postalCode: '3168',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.9231,
    longitude: 145.1233,
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
  hasMap: 'https://maps.google.com/maps?q=South+East+Melbourne,+VIC,+Australia',
  areaServed: [
    { '@type': 'City', 'name': 'Melbourne' },
    { '@type': 'Place', 'name': 'South East Melbourne' },
    { '@type': 'Place', 'name': 'Dandenong' },
    { '@type': 'Place', 'name': 'Oakleigh' },
    { '@type': 'Place', 'name': 'Clayton' },
    { '@type': 'Place', 'name': 'Cheltenham' },
    { '@type': 'Place', 'name': 'Frankston' },
    { '@type': 'Place', 'name': 'Narre Warren' },
    { '@type': 'Place', 'name': 'Berwick' },
    { '@type': 'Place', 'name': 'St Kilda' },
    { '@type': 'Place', 'name': 'Caulfield' },
    { '@type': 'Place', 'name': 'South Melbourne' },
    { '@type': 'Place', 'name': 'Carnegie' },
    { '@type': 'Place', 'name': 'Bentleigh' },
    { '@type': 'Place', 'name': 'Moorabbin' },
    { '@type': 'Place', 'name': 'Springvale' },
    { '@type': 'Place', 'name': 'Noble Park' },
    { '@type': 'Place', 'name': 'Cranbourne' },
    { '@type': 'Place', 'name': 'Pakenham' },
  ],
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
