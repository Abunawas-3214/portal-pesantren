import { MetadataRoute } from 'next'
import { fetchPesantren } from '@/lib/Api/Pesantren'
import { fetchBerita } from '@/lib/Api/Berita'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pesantrennu.id'

  // Fetch all pesantren slugs
  const pesantrenResponse = await fetchPesantren({})
  const pesantrenUrls = (pesantrenResponse.data || []).map((p) => ({
    url: `${baseUrl}/pesantren/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Fetch all berita slugs
  const beritaResponse = await fetchBerita()
  const beritaUrls = (beritaResponse.data || []).map((b) => ({
    url: `${baseUrl}/berita/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pesantren`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/berita`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ]

  return [...staticUrls, ...pesantrenUrls, ...beritaUrls]
}
