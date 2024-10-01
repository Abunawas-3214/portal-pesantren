import React from 'react'
import CardBeritaLargePattern from './card-berita-large-pattern'
import Image from 'next/image'
import imgBerita from "/public/images/berita.jpg"
import { Button } from '../ui/button'
import Link from 'next/link'
import { Berita } from '@/types/berita'
export default function CardBeritaLarge({ berita }: { berita: Berita }) {
    return (
        <div className='h-[30rem] w-full'>
            <div className="h-full w-full grid grid-rows-5">
                <div className="row-span-3 relative w-full h-full">
                    <Image
                        src={berita.featured_image ?? imgBerita}
                        alt="featured image berita"
                        height={1000}
                        width={1000}
                        className='absolute top-0 left-0 h-full w-full object-cover'
                    />
                </div>
                <div className="row-span-2 relative">
                    <div className="absolute overflow-hidden flex items-center justify-center h-full w-full">
                        <CardBeritaLargePattern />
                    </div>
                    <div className="absolute text-white text-left px-8 py-4 flex flex-col justify-beetween h-full w-full">
                        <div className="flex flex-col gap-2 h-full">
                            <div className="flex justify-between">
                                <p className="font-medium text-lg">{berita.user} - {berita.created_at}</p>
                                <p className='text-sm font-normal capitalize'>
                                    {berita.categories && berita.categories.length >= 2 ? berita.categories.join(', ') : berita.categories}
                                </p>
                            </div>
                            <div className='grow'>
                                <h6 className='text-3xl font-semibold line-clamp-2 grow'>{berita.title}</h6>
                            </div>
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
    )
}
