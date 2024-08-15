import { cn } from "@/lib/utils";
import Image from "next/image";
import * as patterns from "@/components/svg/patterns"

export default function CardBeritaPattern({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("grid grid-cols-3", className)} {...props}>
            <Image
                src={patterns.pattern3}
                alt="pattern"
                width={240}
                height={240}
            />
            <Image
                src={patterns.pattern4}
                alt="pattern"
                width={240}
                height={240}
            />
            <Image
                src={patterns.pattern5}
                alt="pattern"
                width={240}
                height={240}
            />
            <Image
                src={patterns.pattern6}
                alt="pattern"
                width={240}
                height={240}
            />
            <Image
                src={patterns.pattern7}
                alt="pattern"
                width={240}
                height={240}
            />
            <Image
                src={patterns.pattern8}
                alt="pattern"
                width={240}
                height={240}
            />
        </div>
    )
}
