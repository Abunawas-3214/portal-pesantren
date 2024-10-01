import React from 'react'
import imgBerita from "/public/images/berita.jpg"
import Image from 'next/image'
import CardBeritaPattern from './card-berita-pattern'
import Link from 'next/link'
import { Berita } from '@/types/berita'

export default function CardBerita({ berita }: { berita: Berita }) {
    return (
        <Link href={`/berita/${berita.slug}`}>
            <div className='h-64 w-full hover:-translate-y-1 hover:shadow-xl transition-all duration-200'>
                <div className="relative h-1/2">
                    <Image
                        src={berita.featured_image ?? imgBerita}
                        alt="featured image berita"
                        height={500}
                        width={500}
                        className='absolute top-0 left-0 h-full w-full object-cover'
                    />
                </div>
                <div className="relative h-1/2">
                    <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
                        <CardBeritaPattern />
                    </div>
                    <div className="absolute text-left text-white px-8 py-4 flex flex-col justify-between h-full">
                        <div className="flex flex-col justify-between gap-2">
                            <p className="font-normal text-xs line-clamp-1">{berita.user} - {berita.created_at}</p>
                            <div className='grow'>
                                <h6 className='text-lg font-semibold line-clamp-3 grow'>{berita.title}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
