import Image from "next/image"
import imgBerita from "/public/images/alhikam.jpg"
import CreatedByPesantren from "@/components/berita-details/created-by-pesantren"
import RelatedPostList from "@/components/berita-details/related-post-list"
import { BeritaDetail } from "@/types/berita"
import { fetchBeritaDetail } from "@/lib/Api/Berita"
export default async function BeritaDetailsPage({ params }: { params: { slug: string } }) {
  const { data: beritaDetail }: { data: BeritaDetail } = await fetchBeritaDetail(params.slug)
  const markup = {
    __html: beritaDetail.content ?? ""
  }
  return (
    <main>
      <div className="container mx-auto max-w-2xl py-40 space-y-12">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl text-center mb-16">{beritaDetail.title}</h1>
          <p className="font-medium">{beritaDetail.user} - {beritaDetail.created_at}</p>
          {beritaDetail.featured_image &&
            <Image
              src={beritaDetail.featured_image ?? imgBerita}
              alt="featured image berita"
              height={1000}
              width={1000}
            />
          }
          <article className="prose prose-base leading-6 prose-p:text-lg prose-h3:text-2xl prose-h3:font-semibold prose-li:leading-3 prose-a:text-primary">
            <div dangerouslySetInnerHTML={markup} />
          </article>
          <p className="text-sm capitalize text-primary">
            <span>Kategori:</span> {beritaDetail.categories && beritaDetail.categories.length >= 2 ? beritaDetail.categories.join(', ') : beritaDetail.categories}
          </p>
        </div>
        {beritaDetail.pesantren &&
          <div className="w-1/2 space-y-2">
            <p className="text-secondary">Dibuat oleh</p>
            <CreatedByPesantren pesantren={beritaDetail.pesantren} />
          </div>
        }
        {beritaDetail.related_posts.length > 0 &&
          <RelatedPostList relatedPosts={beritaDetail.related_posts} />
        }
      </div>
    </main>
  )
}