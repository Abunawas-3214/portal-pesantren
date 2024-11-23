import logoRMI from "@/components/svg/logos/logo_rmi.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import paths from "@/lib/paths";
import Link from "next/link";

export default function HeaderBrand({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)} {...props}>
            <Link href={paths.homePath()}>
                <Image
                    src={logoRMI}
                    alt="Logo RMI"
                    fill={true}
                    className="w-full h-full object-contain"
                />
            </Link>

        </div>
    )
}
