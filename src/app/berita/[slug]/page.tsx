import Image from "next/image"
import imgBerita from "/public/images/alhikam.jpg"
import CreatedByPesantren from "@/components/berita-details/created-by-pesantren"
import RelatedPostList from "@/components/berita-details/related-post-list"
export default function BeritaDetailsPage() {
  return (
    <main>
      <div className="container mx-auto max-w-2xl py-40 space-y-12">
        <div className="space-y-4">
          <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam deserunt nostrum quae corporis at illum fuga distinctio ducimus, officiis, ipsa ratione, nisi quo odio. Eligendi accusantium totam error itaque.</h1>
          <p className="font-medium">Admin - 25 Sept 2024</p>
          <Image
            src={imgBerita}
            alt="featured image berita"
            height={1000}
            width={1000}
          />
          <p className="text-sm">Category</p>
        </div>
        <div className="w-1/2 space-y-2">
          <p className="text-secondary">Dibuat oleh</p>
          <CreatedByPesantren />
        </div>
        <RelatedPostList />
      </div>
    </main>
  )
}