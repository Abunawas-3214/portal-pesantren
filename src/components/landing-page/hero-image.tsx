import { cn } from "@/lib/utils";
import Image from "next/image";
import heroImage from "/public/images/heroImage.jpg"

export default function HeroImage({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)} {...props}>
            <div className="h-full w-full flex flex-col justify-center">
                <div className="relative h-full md:h-3/5">
                    <div className="md:hidden absolute h-full w-full top-0 bg-white opacity-90 z-10"></div>
                    <Image
                        src={heroImage}
                        alt="Hero Image"
                        fill
                        className="w-full h-full object-cover md:rounded-l-3xl"
                    />
                </div>
            </div>
        </div>
    )
}
