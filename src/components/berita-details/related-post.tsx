import Link from 'next/link'
import React from 'react'

export default function RelatedPost({ index, title, slug }: { index: number, title: string, slug: string }) {
    return (
        <div className="flex items-center w-full gap-4 group">
            <div className="flex-shrink-0 size-10 md:size-12 bg-primary flex justify-center items-center rounded-sm transition-transform duration-300 group-hover:scale-110 shadow-md">
                <p className="text-white font-bold text-lg md:text-xl cursor-default">{index + 1}</p>
            </div>
            <Link href={`/berita/${slug}`} className="flex-grow">
                <h4 className="text-sm md:text-base font-semibold line-clamp-3 hover:text-primary transition-colors duration-300 leading-snug">
                    {title}
                </h4>
            </Link>
        </div>
    )
}
