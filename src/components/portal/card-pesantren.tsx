import CardPesantrenPattern from './card-pesantren-pattern'
import { Backpack, Book, User } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import imgAlhikam from "/public/images/alhikam.jpg"
import Link from 'next/link'

export default function CardPesantren() {
    return (
        <div className="h-[28rem] w-72 grid grid-rows-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            <div className="relative row-span-4">
                <div className="h-full overflow-hidden">
                    <Image
                        src={imgAlhikam}
                        alt="pesantren"
                        height={1000}
                        width={1000}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/60 to-black/10 p-6 " >
                    <div className='text-center text-white'>
                        <h6 className='text-2xl font-semibold'>Al-Hikam</h6>
                        <p className='text-lg font-normal'>Lowokwaru</p>
                    </div>
                </div>
            </div>
            <div className="relative row-span-3">
                <div className='absolute w-full h-full overflow-hidden flex items-center justify-center'>
                    <CardPesantrenPattern />
                </div>
                <div className="absolute top-0 flex flex-col h-full w-full justify-between py-4 px-5">
                    <div className="text-white text-lg font-normal">
                        <div className="block">
                            <Backpack className="inline mr-2" />
                            <p className="inline">Mahasiswa</p>
                        </div>
                        <div className="block">
                            <User className="inline mr-2" />
                            <p className="inline">Putra</p>
                        </div>
                        <div className="block">
                            <Book className="inline mr-2" />
                            <p className="inline">Kitab</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link href='/pesantren/alhikam'>
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
