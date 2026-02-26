'use client'
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Menu({ className, onItemClick, ...props }: React.HTMLAttributes<HTMLElement> & { onItemClick?: () => void }) {
    const pathname = usePathname();
    const activeStyle = (path: string): string => {
        return `font-semibold transition-all duration-100 ease-in ${pathname === path ? "text-primary" : "hover:text-secondary"}`;
    };


    return (
        <div className={cn(className)} {...props}>
            <nav className="flex flex-col md:flex-row gap-x-8 gap-y-4 text-lg font-normal items-center justify-center text-black">
                <Link href="/" className={activeStyle("/")} onClick={onItemClick}>
                    Beranda
                </Link>
                <Link href="/pesantren" className={activeStyle("/pesantren")} onClick={onItemClick}>
                    Portal
                </Link>
                <Link href="/berita" className={activeStyle("/berita")} onClick={onItemClick}>
                    Berita
                </Link>
            </nav>
        </div>
    )
}
