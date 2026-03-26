import { MetadataRoute } from 'next'
import { posts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.orbitpaintingmelbourne.com.au/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: 'https://www.orbitpaintingmelbourne.com.au',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.orbitpaintingmelbourne.com.au/services/residential-painting',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.orbitpaintingmelbourne.com.au/services/commercial-painting',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.orbitpaintingmelbourne.com.au/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.orbitpaintingmelbourne.com.au/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogUrls,
  ]
}
