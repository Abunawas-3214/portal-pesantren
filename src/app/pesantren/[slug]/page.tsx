import Image from "next/image"
import rmiLogo from "/public/rmi.svg"
import ImageGallery from "@/components/pesantren-details/image-gallery"
import SidebarInfo from "@/components/pesantren-details/sidebar-info"
import { fetchPesantrenDetail, PesantrenDetailData } from "@/lib/Api/Pesantren"
import Media from "@/components/pesantren-details/media"
import Validasi from "@/components/pesantren-details/validasi"
import VideoProfile from "@/components/pesantren-details/video-profile"

export default async function PesantrenDetailsPage({ params }: { params: { slug: string } }) {
  const { data: pesantren }: { data: PesantrenDetailData } = await fetchPesantrenDetail(params.slug)
  const markup = {
    __html: pesantren.deskripsi ?? ""
  }
  // console.log(pesantren.validasi)
  // console.log(pesantren.photos)
  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-40 space-y-24">
        <div className="grid grid-cols-7 gap-10">
          <div className="col-span-5 h-fit w-full border py-6 px-9 space-y-10">
            <div className="h-24 flex w-full gap-6">
              <Image
                src={pesantren.logo ?? rmiLogo}
                alt="pesantren logo"
                width={100}
                height={100}
              />
              <div className="flex flex-col justify-center h-full w-full">
                <h2 className='text-black text-3xl font-semibold'>{pesantren.name}</h2>
                <h3 className='text-stone-500 text-sm font-normal line-clamp-1'>{pesantren.alamat}</h3>
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
                  <article className="prose prose-base text-justify leading-5 prose-p:text-base prose-h1:text-primary prose-h1:text-2xl prose-h1:font-bold prose-li:leading-3 prose-a:text-primary">
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
            {
              pesantren.validasi.length > 0 &&
              <Validasi pesantrenValidasiData={pesantren.validasi} />
            }
            {
              pesantren.video_profil &&
              <VideoProfile video_link={pesantren.video_profil} />
            }
          </div>
          <div className="col-span-2 w-full">
            {(pesantren.program.length > 0 || pesantren.gender || pesantren.tingkat.length > 0 || pesantren.pendiri || pesantren.pengasuh || pesantren.jumlah_santri || pesantren.contact) &&
              <SidebarInfo className="sticky top-28" pesantrenSidebarData={pesantren} />
            }
          </div>
        </div>
      </div>
    </main>
  )
}