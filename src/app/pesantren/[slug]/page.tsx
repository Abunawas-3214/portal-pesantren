import { cache } from "react"
import Image from "next/image"
import rmiLogo from "/public/rmi.svg"
import ImageGallery from "@/components/pesantren-details/image-gallery"
import SidebarInfo from "@/components/pesantren-details/sidebar-info"
import { fetchPesantrenDetail, PesantrenDetailData } from "@/lib/Api/Pesantren"
import Media from "@/components/pesantren-details/media"
import Validasi from "@/components/pesantren-details/validasi"
import VideoProfile from "@/components/pesantren-details/video-profile"
import { Metadata } from "next"

// React.cache deduplicates the fetch — generateMetadata and the page
// component share a single network request per render cycle.
const getPesantrenDetail = cache(async (slug: string): Promise<PesantrenDetailData> => {
  const { data } = await fetchPesantrenDetail(slug)
  return data
})

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pesantren = await getPesantrenDetail(slug)
  const title = `${pesantren.name} - Portal Pesantren RMI NU`
  const description = pesantren.deskripsi?.substring(0, 160).replace(/<[^>]*>/g, '') || `Profil lengkap ${pesantren.name}, beralamat di ${pesantren.alamat}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      images: [
        {
          url: pesantren.logo || pesantren.photos?.[0]?.file || "/images/og-pesantren.jpg",
          width: 800,
          height: 600,
          alt: pesantren.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pesantren.logo || pesantren.photos?.[0]?.file || "/images/og-pesantren.jpg"],
    },
  }
}

export default async function PesantrenDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pesantren = await getPesantrenDetail(slug)
  const markup = { __html: pesantren.deskripsi ?? "" }

  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-20 px-4 md:px-0 lg:py-40 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
          <div className="col-span-1 lg:col-span-5 h-fit w-full border py-6 px-4 lg:px-9 space-y-10">
            <div className="flex items-center w-full gap-6 mb-4">
              <div className="flex-shrink-0 size-20 md:size-24 relative">
                <Image
                  src={pesantren.logo ?? rmiLogo}
                  alt="pesantren logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <h2 className='text-black text-2xl md:text-3xl font-bold leading-tight'>{pesantren.name}</h2>
                <h3 className='text-stone-500 text-sm md:text-base font-normal line-clamp-2'>{pesantren.alamat}</h3>
              </div>
            </div>
            <div>
              {pesantren.photos.length > 0 &&
                <ImageGallery photos={pesantren.photos} />
              }
            </div>
            {pesantren.deskripsi
              ? (
                <div className="space-y-2">
                  <h2 className='text-black text-xl font-semibold'>Tentang Pesantren</h2>
                  <article className="prose max-w-none prose-base text-justify leading-relaxed prose-p:text-base prose-h1:text-primary prose-h1:text-2xl prose-h1:font-bold prose-li:leading-relaxed prose-a:text-primary">
                    <div dangerouslySetInnerHTML={markup} />
                  </article>
                </div>
              )
              : (
                <h2 className='text-black text-md font-semibold'>Belum ada informasi detail tentang pesantren untuk saat ini</h2>
              )
            }
            {pesantren.program_unggulan &&
              <div className="space-y-2">
                <h2 className='text-black text-xl font-semibold'>Program Unggulan</h2>
                <p className="text-justify">
                  {pesantren.program_unggulan}
                </p>
              </div>
            }
            <Media pesantrenMediaData={pesantren.media} />
            {pesantren.validasi.length > 0 &&
              <Validasi pesantrenValidasiData={pesantren.validasi} />
            }
            {pesantren.video_profil &&
              <VideoProfile video_link={pesantren.video_profil} />
            }
          </div>
          <div className="col-span-1 lg:col-span-2 w-full">
            {(pesantren.program.length > 0 || pesantren.gender || pesantren.tingkat.length > 0 || pesantren.pendiri || pesantren.pengasuh || pesantren.jumlah_santri || pesantren.contact) &&
              <SidebarInfo className="sticky top-28" pesantrenSidebarData={pesantren} />
            }
          </div>
        </div>
      </div>
    </main>
  )
}