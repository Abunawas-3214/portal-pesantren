import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as patterns from "@/components/svg/patterns"
import Image from "next/image";
import { BerandaData } from "@/types/beranda-data";

export default function HeroContent({ className, meta, ...props }: React.HTMLAttributes<HTMLElement> & { meta?: BerandaData["meta"] }) {
    return (
        <div className={cn(className)} {...props}>
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div className="flex flex-col justify-center px-16 md:px-20 gap-4 h-screen md:h-full text-center md:text-left">
                        <h1 className='font-semibold text-black text-5xl md:text-8xl'>{`Rabithah Ma'ahid Islamiyah`}</h1>
                        <h6 className='text-sm md:text-3xl font-normal text-primary'>{`Nahdlatul Ulama' Kota Malang`}</h6>
                        <Link href={"/pesantren"}>
                            <Button>
                                Portal Pesantren
                            </Button>
                        </Link>
                    </div>
                    <div className="hidden md:grid grid-rows-8 h-full w-full z-10">
                        <div className="row-start-6 row-end-8 w-full h-full flex flex-col justify-center items-end">
                            <div className="h-36 w-[30rem] flex">
                                <div className="relative w-1/2 h-full">
                                    <div className="absolute w-full h-full overflow-hidden flex justify-center items-center">
                                        <Image
                                            src={patterns.pattern7}
                                            alt="pattern"
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div className="absolute p-2 w-full h-full text-center text-white z-20 space-y-2">
                                        <p className="font-medium">Jumlah Pesantren</p>
                                        <h2 className="font-semibold text-7xl">{meta?.pesantren_total ?? '-'}</h2>
                                    </div>
                                </div>
                                <div className="relative w-1/2 h-full">
                                    <div className="absolute w-full h-full overflow-hidden flex justify-center items-center">
                                        <Image
                                            src={patterns.pattern5}
                                            alt="pattern"
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div className="absolute p-2 w-full h-full text-center text-white z-20 space-y-2">
                                        <p className="font-medium">Jumlah Santri</p>
                                        <h2 className="font-semibold text-7xl">{meta?.santri_total ?? '-'}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
