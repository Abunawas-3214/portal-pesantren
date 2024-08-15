import Link from "next/link"
import { Button } from "../ui/button"
import CardPesantren from "./card-pesantren"
import imgAlhikam from "/public/images/alhikam.jpg"

export default function PesantrenSection() {
    return (
        <div className="space-y-12">
            <div className="text-center space-y-2">
                <h4 className='text-2xl font-semibold text-black'>Daftar <span className='text-primary'>Pesantren</span></h4>
                <h5 className='text-lg font-normal text-stone-500'>Berikut Beberapa Daftar Pesantren di Kota Malang</h5>
            </div>
            <div className="flex justify-between gap-x-8">
                <CardPesantren nama="Al-hikam" kecamatan="Lowokwaru" image={imgAlhikam} />
                <CardPesantren nama="Al-hikam" kecamatan="Lowokwaru" image={imgAlhikam} />
                <CardPesantren nama="Al-hikam" kecamatan="Lowokwaru" image={imgAlhikam} />
                <CardPesantren nama="Al-hikam" kecamatan="Lowokwaru" image={imgAlhikam} />
            </div>
            <div className="flex justify-center">
                <Link href='/pesantren'>
                    <Button>
                        Lihat Semua Pesantren
                    </Button>
                </Link>
            </div>
        </div>
    )
}
