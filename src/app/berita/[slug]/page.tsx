import { cache } from "react"
import Image from "next/image"
import CreatedByPesantren from "@/components/berita-details/created-by-pesantren"
import RelatedPostList from "@/components/berita-details/related-post-list"
import { BeritaDetail } from "@/types/berita"
import { fetchBeritaDetail } from "@/lib/Api/Berita"
import { Metadata } from "next"

// React.cache deduplicates the fetch — generateMetadata and the page
// component share a single network request per render cycle.
const getBeritaDetail = cache(async (slug: string): Promise<BeritaDetail> => {
  const { data } = await fetchBeritaDetail(slug)
  return data
})

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const beritaDetail = await getBeritaDetail(slug)
  const title = `${beritaDetail.title} - Portal Pesantren RMI NU`
  const description = beritaDetail.content?.substring(0, 160).replace(/<[^>]*>/g, '') || ""

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: beritaDetail.created_at,
      authors: [beritaDetail.user || "Admin"],
      images: [
        {
          url: beritaDetail.featured_image || "/images/og-news.jpg",
          width: 1200,
          height: 630,
          alt: beritaDetail.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [beritaDetail.featured_image || "/images/og-news.jpg"],
    },
  }
}

export default async function BeritaDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const beritaDetail = await getBeritaDetail(slug)
  const markup = { __html: beritaDetail.content ?? "" }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": beritaDetail.title,
    "image": [beritaDetail.featured_image || "https://pesantrennu.id/images/og-news.jpg"],
    "datePublished": beritaDetail.created_at,
    "author": {
      "@type": "Person",
      "name": beritaDetail.user || "Admin RMI NU"
    },
    "publisher": {
      "@id": "https://pesantrennu.id/#organization"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-2xl px-4 md:px-0 pt-28 pb-20 md:py-40 space-y-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl md:text-5xl text-left md:text-center leading-tight">
              {beritaDetail.title}
            </h1>
            <p className="font-medium text-sm md:text-base text-gray-600 md:text-center">
              {beritaDetail.user} • {beritaDetail.created_at}
            </p>
          </div>

          {beritaDetail.featured_image && (
            <Image
              src={beritaDetail.featured_image}
              alt={beritaDetail.title}
              height={1000}
              width={1000}
              className="w-full h-auto"
              priority
            />
          )}

          <article className="prose prose-slate max-w-none prose-base md:prose-lg leading-relaxed prose-p:text-gray-700 prose-h3:text-2xl prose-h3:font-semibold prose-li:leading-relaxed prose-a:text-primary">
            <div dangerouslySetInnerHTML={markup} />
          </article>

          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <span className="text-sm font-semibold text-gray-500">Kategori:</span>
            {beritaDetail.categories && (
              <div className="flex gap-2">
                {Array.isArray(beritaDetail.categories)
                  ? beritaDetail.categories.map((cat, i) => (
                    <span key={i} className="text-sm text-primary hover:underline cursor-pointer">
                      {cat}{i < beritaDetail.categories.length - 1 ? ',' : ''}
                    </span>
                  ))
                  : <span className="text-sm text-primary">{beritaDetail.categories}</span>
                }
              </div>
            )}
          </div>
        </div>

        {beritaDetail.pesantren && (
          <div className="w-full md:w-1/2 space-y-2 pt-8 border-t">
            <p className="text-secondary font-semibold">Dibuat oleh</p>
            <CreatedByPesantren pesantren={beritaDetail.pesantren} />
          </div>
        )}
        {beritaDetail.related_posts.length > 0 &&
          <RelatedPostList relatedPosts={beritaDetail.related_posts} />
        }
      </div>
    </main>
  )
}