import logoRMI from "@/components/svg/logos/logo_rmi.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import paths from "@/lib/paths";

export default function HeaderBrand({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)} {...props}>
            <div className="flex items-center justify-center h-full w-fit">
                <Link href={paths.homePath()}>
                    <Image
                        src={logoRMI}
                        alt="Logo RMI"
                        height={50}
                    />
                </Link>
            </div>
        </div>
    )
}
