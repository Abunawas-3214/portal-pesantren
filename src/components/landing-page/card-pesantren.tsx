import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface cardPesantrenProps {
    nama: string,
    kecamatan: string,
    image: StaticImageData

}

export default function CardPesantren(props: cardPesantrenProps) {
    return (
        <div className="relative h-[30rem] w-72 group hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
            <div className='h-full overflow-hidden'>
                <Image
                    src={props.image}
                    alt="pesantren"
                    height={1000}
                    width={1000}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className="absolute top-0 flex flex-col items-center justify-between p-6 h-full w-full bg-gradient-to-b from-black/70 to-black/10 group-hover:from-black/50">
                <div className="text-center text-white">
                    <h6 className="text-2xl font-semibold">{props.nama}</h6>
                    <p className='text-lg font-normal'>{props.kecamatan}</p>
                </div>
                <Link href='/pesantren/alhikam'>
                    <Button>
                        Detail
                    </Button>
                </Link>
            </div>
        </div>
    )
}
