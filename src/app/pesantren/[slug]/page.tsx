import Image from "next/image"
import rmiLogo from "/public/rmi.svg"
import ImageGallery from "@/components/pesantren-details/image-gallery"
import { Button } from "@/components/ui/button"
import { SiFacebook, SiInstagram, SiTiktok, SiX, SiYoutube } from "@icons-pack/react-simple-icons"

import SidebarInfo from "@/components/pesantren-details/sidebar-info"
import { fetchPesantrenDetail, PesantrenDetailData } from "@/lib/Api/Pesantren"
import Media from "@/components/pesantren-details/media"
import Validasi from "@/components/pesantren-details/validasi"

export default async function PesantrenDetailsPage({ params }: { params: { slug: string } }) {
  const { data: pesantren }: { data: PesantrenDetailData } = await fetchPesantrenDetail(params.slug)

  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-40 space-y-24">
        <div className=" grid grid-cols-7 gap-10">
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
                <h3 className='text-stone-500 text-lg font-normal line-clamp-1'>{pesantren.alamat}</h3>
              </div>
            </div>
            <div>
              <ImageGallery />
            </div>
            <div className="space-y-2">
              <h2 className='text-black text-xl font-semibold'>Tentang Pesantren</h2>
              <p className="text-justify indent-10">
                {pesantren.deskripsi}
              </p>
            </div>
            <div className="space-y-2">
              <h2 className='text-black text-xl font-semibold'>Program Unggulan</h2>
              <p className="text-justify indent-10">
                {pesantren.program_unggulan}
              </p>
            </div>
            <Media pesantrenMediaData={pesantren.media} />
            <Validasi pesantrenValidasiData={pesantren.validasi} />
          </div>
          <div className="col-span-2 w-fit">
            <SidebarInfo className="sticky top-28" pesantrenSidebarData={pesantren} />
          </div>
        </div>
      </div>
    </main>
  )
}