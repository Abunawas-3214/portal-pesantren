import Image, { StaticImageData } from "next/image"
import CardBeritaPattern from "./card-berita-pattern"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CardBeritaProps {
    date: String,
    title: string,
    author: string,
    image: string | StaticImageData
    slug: string
}

export default function CardBerita({ className, ...props }: CardBeritaProps & React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={`${cn(className)} h-[18rem] md:h-full w-full md:max-w-md`}>
            <div className="grid grid-rows-2 h-full">
                <div className="relative overflow-hidden">
                    <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
                        <Image
                            src={props.image}
                            alt="featured image berita"
                            height={1000}
                            width={1000}
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
                        <CardBeritaPattern />
                    </div>
                    <div className="absolute text-white px-8 py-4 flex flex-col justify-between h-full">
                        <div className="space-y-2">
                            <p className="font-normal text-[0.6rem] md:text-xs line-clamp-1">{props.date} - {props.author}</p>
                            <div className='grow'>
                                <h6 className='text-xs md:text-sm font-semibold line-clamp-2 grow'>{props.title}</h6>
                            </div>
                        </div>
                        <Link href={`/berita/${props.slug}`}>
                            <Button variant={"secondary"}>
                                Selengkapnya
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
