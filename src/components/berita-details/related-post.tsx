import Link from 'next/link'
import React from 'react'

export default function RelatedPost() {
    return (
        <div className="flex items-center w-full h-16">
            <div className="w-16 h-full bg-primary flex justify-center items-center">
                <p className="text-white font-semibold text-2xl">1</p>
            </div>
            <Link href={'/berita/slug'}>
                <h4 className="p-6 text-lg font-semibold line-clamp-2 hover:text-primary transition-colors duration-300">Lorem Ipsum</h4>
            </Link>
        </div>
    )
}
