import Image, { StaticImageData } from "next/image"
import CardBeritaLargePattern from "./card-berita-large-pattern"
import { Button } from "../ui/button"
import Link from "next/link"
import React from "react"
import { cn } from "@/lib/utils"

interface CardBeritaProps {
    date: String,
    title: string,
    author: string,
    image: string | StaticImageData
    slug: string
}

export default function CardBeritaLarge({ className, date, title, author, image, slug }: CardBeritaProps & React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)}>
            <div className='h-[38rem] w-full max-w-md'>
                <div className="grid grid-rows-3 h-full">
                    <div className="relative overflow-hidden">
                        <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
                            <Image
                                src={image}
                                alt="featured image berita"
                                height={1000}
                                width={1000}
                            />
                        </div>
                    </div>
                    <div className="relative row-span-2">
                        <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
                            <CardBeritaLargePattern />
                        </div>
                        <div className="absolute text-white px-8 py-4 flex flex-col justify-between h-full">
                            <div className="space-y-2">
                                <p className="font-normal text-xs">{date}</p>
                                <div className='grow'>
                                    <h6 className='text-2xl font-semibold line-clamp-4 grow'>{title}</h6>
                                </div>
                                <p className="font-normal text-lg">{author}</p>
                            </div>
                            <Link href={`/berita/${slug}`}>
                                <Button variant={"secondary"}>
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
