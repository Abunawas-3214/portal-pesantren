import { cn } from "@/lib/utils";
import Image from "next/image";
import * as patterns from "@/components/svg/patterns"
import heroImage from "/public/images/heroImage.jpg"

export default function HeroImage({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)} {...props}>
            <div className="h-full w-full flex flex-col justify-center">
                <div className="h-3/5 overflow-hidden rounded-l-3xl">
                    <Image
                        width={1000}
                        height={2000}
                        src={heroImage}
                        alt="Hero Image"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
