import React from 'react'
import CardBeritaLargePattern from './card-berita-large-pattern'
import Image from 'next/image'
import imgBerita from "/public/images/berita.jpg"
import { Button } from '../ui/button'
import Link from 'next/link'
import { Berita } from '@/types/berita'

export default function CardBeritaLarge({ berita }: { berita: Berita }) {
    return (
        <div className='h-fit md:h-[32rem] w-full overflow-hidden'>
            <div className="h-full w-full flex flex-col md:grid md:grid-rows-5">
                <div className="relative w-full h-64 md:h-full md:row-span-3">
                    <Image
                        src={berita.featured_image ?? imgBerita}
                        alt="featured image berita"
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
                <div className="relative flex-grow md:row-span-2 min-h-[14rem] md:min-h-0 bg-primary">
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                        <CardBeritaLargePattern className="opacity-40" />
                    </div>
                    <div className="relative z-10 text-white text-left px-6 py-6 md:px-8 md:py-4 flex flex-col justify-between h-full w-full">
                        <div className="flex flex-col gap-3 md:gap-2 h-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                                <p className="font-medium text-sm md:text-lg opacity-90">{berita.user} - {berita.created_at}</p>
                                <p className='text-xs md:text-sm font-normal capitalize bg-black/20 px-2 py-0.5 rounded'>
                                    {berita.categories && berita.categories.length >= 2 ? berita.categories.join(', ') : berita.categories}
                                </p>
                            </div>
                            <div className='grow mt-1'>
                                <h6 className='text-xl md:text-3xl font-semibold line-clamp-2'>{berita.title}</h6>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <Link href={`/berita/${berita.slug}`}>
                                    <Button variant={'secondary'}>
                                        Selengkapnya
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
