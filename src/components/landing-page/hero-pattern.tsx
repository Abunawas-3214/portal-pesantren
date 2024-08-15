import { cn } from "@/lib/utils";
import Image from "next/image";
import * as patterns from "@/components/svg/patterns"

export default function HeroPattern({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)} {...props}>
            <Image
                src={patterns.pattern1}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
            <Image
                src={patterns.pattern2}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
            <Image
                src={patterns.pattern3}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
            <Image
                src={patterns.pattern4}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
            <Image
                src={patterns.pattern5}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
            <Image
                src={patterns.pattern6}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
            <Image
                src={patterns.pattern7}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
            <Image
                src={patterns.pattern8}
                alt="pattern"
                width={120}
                height={120}
                style={{
                    height: "calc(100%/8)",
                    width: "fit-content",
                }}
            />
        </div>
    )
}
