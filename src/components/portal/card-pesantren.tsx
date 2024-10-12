import CardPesantrenPattern from './card-pesantren-pattern'
import { Backpack, Book, User } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import fallbackImagePesantren from "/public/images/fallback/pesantren_sampul.jpg"
import Link from 'next/link'
import { PesantrenData } from '@/lib/Api/Pesantren'

export default function CardPesantren({ pesantren }: { pesantren: PesantrenData }) {

    return (
        <div className="h-[28rem] w-72 grid grid-rows-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            <div className="relative row-span-4">
                <div className="h-full overflow-hidden">
                    <Image
                        src={pesantren.foto_sampul ?? fallbackImagePesantren}
                        alt="pesantren"
                        height={1000}
                        width={1000}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/60 to-black/10 p-6 " >
                    <div className='text-center text-white'>
                        <h6 className='text-2xl font-semibold'>{pesantren.name}</h6>
                        {pesantren.kecamatan &&
                            <p className='text-lg font-normal capitalize'>{pesantren.kecamatan}</p>
                        }
                    </div>
                </div>
            </div>
            <div className="relative row-span-3">
                <div className='absolute w-full h-full overflow-hidden flex items-center justify-center'>
                    <CardPesantrenPattern />
                </div>
                <div className="absolute top-0 flex flex-col h-full w-full justify-between py-4 px-5">
                    <div className="text-white text-lg font-normal">
                        {(pesantren.tingkat && pesantren.tingkat.length > 0) &&
                            <div className="grid grid-cols-8 gap-2">
                                <Backpack className="my-auto" />
                                <div className="col-span-7">
                                    {
                                        pesantren.tingkat?.map((tingkat, index) => {
                                            return (
                                                <span key={tingkat}>
                                                    <span className="capitalize">{tingkat}</span>
                                                    {index < (pesantren.tingkat?.length ?? 0) - 1 && ', '}
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                        {pesantren.gender &&
                            <div className="grid grid-cols-8 gap-2">
                                <User className="my-auto" />
                                <p className="col-span-7 capitalize">
                                    {(pesantren.gender === 'putra_putri' ? 'Putra & Putri' : pesantren.gender)}
                                </p>
                            </div>
                        }
                        {pesantren.program && pesantren.program.length > 0 &&
                            <div className="grid grid-cols-8 gap-2">
                                <Book className="my-auto" />
                                <div className="col-span-7">
                                    {
                                        pesantren.program?.map((program, index) => {
                                            return (
                                                <span key={program}>
                                                    <span className="capitalize">{program}</span>
                                                    {index < (pesantren.program?.length ?? 0) - 1 && ', '}
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <div className="flex justify-end">
                        <Link href={`/pesantren/${pesantren.slug}`}>
                            <Button variant={'secondary'}>
                                Detail
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
