'use client'
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Menu({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const activeStyle = (path: string): string => {
        return `font-semibold transition-all duration-100 ease-in ${pathname === path ? "text-primary" : "hover:text-secondary"}`;
    };


    return (
        <div className={cn(className)} {...props}>
            <nav className="flex gap-8 text-lg font-normal items-center justify-center text-black">
                <Link href="/" className={activeStyle("/")}>
                    Beranda
                </Link>
                <Link href="/pesantren" className={activeStyle("/pesantren")}>
                    Portal
                </Link>
                <Link href="/berita" className={activeStyle("/berita")}>
                    Berita
                </Link>
            </nav>
        </div>
    )
}
