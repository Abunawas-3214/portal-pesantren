import Image from "next/image"
import alhikamLogo from "/public/images/pesantren/alhikam/alhikam-logo.png"
import ImageGallery from "@/components/pesantren-details/image-gallery"
import { Button } from "@/components/ui/button"
import { SiFacebook, SiInstagram, SiTiktok, SiX, SiYoutube } from "@icons-pack/react-simple-icons"
import { Globe } from "lucide-react"
import SidebarInfo from "@/components/pesantren-details/sidebar-info"

export default function PesantrenDetailsPage() {
  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-40 space-y-24">
        <div className=" grid grid-cols-7 gap-10">
          <div className="col-span-5 h-fit w-full border py-6 px-9 space-y-10">
            <div className="h-24 flex w-full">
              <Image
                src={alhikamLogo}
                alt="pesantren logo"
                width={100}
                height={100}
              />
              <div className="flex flex-col justify-center h-full w-full">
                <h2 className='text-black text-3xl font-semibold'>Pesantren Mahasiswa Al-Hikam</h2>
                <h3 className='text-stone-500 text-lg font-normal line-clamp-1'>Jalan Cengger Ayam No.25, Lowokwaru</h3>
              </div>
            </div>
            <div>
              <ImageGallery />
            </div>
            <div className="space-y-2">
              <h2 className='text-black text-xl font-semibold'>Tentang Pesantren</h2>
              <p className="text-justify indent-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium aut placeat magnam aliquid debitis at, pariatur maxime dignissimos, nihil optio laudantium! Veritatis doloremque perferendis inventore impedit perspiciatis consequatur a!
                Eos nisi voluptatem ut non illum impedit tempore. Velit corporis cupiditate quis aut necessitatibus totam! Optio repellendus assumenda quos fugit tempora iure, qui adipisci, amet natus eveniet nulla consectetur eum.
                Quis, facilis qui, placeat vitae blanditiis recusandae debitis magni labore eaque earum fugit reiciendis explicabo dolores odio sunt laboriosam nesciunt ducimus sed impedit est. Aspernatur autem provident est repellat aperiam?
                Soluta cumque aperiam esse debitis reprehenderit dolores praesentium eligendi tempora aliquid sequi quaerat, voluptate eaque id porro quis, et eum sapiente. A voluptatibus fuga delectus, libero error fugiat ut id!
                Repudiandae reiciendis nesciunt autem, eligendi fugit, nihil aliquid laudantium debitis similique veritatis voluptas expedita saepe nostrum. Voluptatibus facilis numquam mollitia eligendi reprehenderit, vel cumque iste architecto obcaecati, aliquam sapiente ratione.
                Amet fugiat nam velit, voluptatem neque magnam molestias laboriosam pariatur libero eveniet fuga numquam a, esse sit sapiente nisi facilis tempore alias odit omnis voluptatibus ratione? Excepturi unde totam aliquid.
                Eos maiores et iste incidunt fugiat rerum odio est dignissimos quaerat necessitatibus nihil debitis quas nemo, ducimus fuga asperiores. Saepe facere consectetur cupiditate dicta distinctio? Ipsam eum esse eligendi non.
                Dolor, beatae enim. Aliquam iure eaque neque optio magnam dolor accusamus blanditiis, sunt ipsa, ipsam aliquid officiis sed eligendi suscipit quo earum ad! Inventore, debitis voluptate! Voluptate nemo illum quia?
                Quas dicta porro illo repudiandae impedit eius. Quis, distinctio placeat quae facilis ab esse eaque obcaecati fugit consequatur, neque sunt cumque sint vero architecto, dolore omnis cum blanditiis porro labore!
                Nulla tempora temporibus quidem necessitatibus quasi. Provident cum, architecto consequatur facilis dolorem fugiat veniam doloribus quod veritatis nemo ut fugit repellat optio magni odit iusto voluptates iste omnis laudantium repellendus.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className='text-black text-xl font-semibold'>Program Unggulan</h2>
              <p className="text-justify indent-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam deleniti debitis numquam beatae. Explicabo tenetur itaque iure distinctio labore, dolorem illo doloribus a sed blanditiis maxime sint nesciunt. Necessitatibus?
              </p>
            </div>
            <div className="space-y-2">
              <h2 className='text-black text-xl font-semibold'>Media Pesantren</h2>
              <div className="flex gap-4">
                <Button variant={"secondary"} className="border border-secondary p-4">
                  <SiInstagram className="h-8 w-8" />
                </Button>
                <Button variant={"secondary"} className="border border-secondary p-4">
                  <SiFacebook className="h-8 w-8" />
                </Button>
                <Button variant={"secondary"} className="border border-secondary p-4">
                  <SiYoutube className="h-8 w-8" />
                </Button>
                <Button variant={"secondary"} className="border border-secondary p-4">
                  <SiTiktok className="h-8 w-8" />
                </Button>
                <Button variant={"secondary"} className="border border-secondary p-4">
                  <SiX className="h-8 w-8" />
                </Button>
                <Button variant={"secondary"} className="border border-secondary p-4">
                  <Globe className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className='text-black text-xl font-semibold'>Validitas Pesantren</h2>
              <p className="text-stone-500">Pesantren ini telah terverifikasi dan tersertifikasi di</p>
              <div className="flex gap-4">
                <Button>Kementerian Agama</Button>
                <Button>Nahdlatul Ulama</Button>
                <Button>RMI NU Kota Malang</Button>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-fit">
            <SidebarInfo className="sticky top-28" />
          </div>
        </div>
      </div>
    </main>
  )
}