import Image, { StaticImageData } from "next/image"
import CardBeritaPattern from "./card-berita-pattern"
import { Button } from "../ui/button"

interface CardBeritaProps {
    date: String,
    title: string,
    author: string,
    image: StaticImageData
}

export default function CardBerita(props: CardBeritaProps) {
    return (
        <div className='h-full'>
            <div className="grid grid-rows-2 h-full bg-indigo-200">
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
                            <p className="font-normal text-xs line-clamp-1">{props.date} - {props.author}</p>
                            <div className='grow'>
                                <h6 className='text-sm font-semibold line-clamp-2 grow'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod fugit quos nemo itaque aperiam cum enim</h6>
                            </div>
                        </div>
                        <Button variant={"secondary"}>
                            Selengkapnya
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
