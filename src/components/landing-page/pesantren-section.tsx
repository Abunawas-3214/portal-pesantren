import Link from "next/link"
import { Button } from "../ui/button"
import CardPesantren from "./card-pesantren"
import fallbackImagePesantren from "/public/images/fallback/pesantren_sampul.jpg"
import { BerandaData } from "@/types/beranda-data"

export default function PesantrenSection({ pesantren }: { pesantren?: BerandaData['pesantren'] }) {
    return (
        <div className="space-y-12">
            <div className="text-center space-y-2">
                <h4 className='text-2xl font-semibold text-black'>Daftar <span className='text-primary'>Pesantren</span></h4>
                <h5 className='text-lg font-normal text-stone-500'>Berikut Beberapa Daftar Pesantren di Kota Malang</h5>
            </div>
            <div className="flex justify-center gap-x-8">
                {pesantren?.map((pesantren, index) => (
                    <CardPesantren
                        key={index}
                        nama={pesantren.name}
                        kecamatan={pesantren.kecamatan}
                        image={pesantren.foto_sampul ?? fallbackImagePesantren}
                        slug={pesantren.slug}
                    />
                ))}
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
