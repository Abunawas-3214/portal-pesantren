'use client'
import { useEffect, useState } from "react";
import HeaderBrand from "./header-brand";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlignRightIcon, XIcon } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileNavigationMenuOpen, setIsMobileNavigationMenuOpen] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)
        return () => {
            window.removeEventListener("scroll", changeBackground)
        }
    }, [])
    return (
        <div className="relative">
            <div className={`fixed top-0 left-0 w-full z-50 ${(isScrolled && !isMobileNavigationMenuOpen) ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"} transtition-all duration-200 ease-in`}>
                <div className="h-16 md:h-20 bg-transparent">
                    <div className="md:relative container mx-auto flex items-center w-full md:max-w-screen-xl h-full px-4 md:px-0">
                        <div className="block md:hidden h-10 w-32">
                            <HeaderBrand className="h-full w-full relative" />
                        </div>
                        <div className="hidden md:block h-14 w-48 absolute left-0">
                            <HeaderBrand className="h-full w-full relative" />
                        </div>
                        <Menu className="grow hidden md:block" />
                        <Link href={'/about'} className="absolute right-0 hidden md:block">
                            <Button>
                                Tentang
                            </Button>
                        </Link>
                        <button onClick={() => setIsMobileNavigationMenuOpen(!isMobileNavigationMenuOpen)} className="md:hidden ml-auto">
                            {isMobileNavigationMenuOpen
                                ? <XIcon className="w-6 h-6 text-accent transition-all duration-200 ease-in" />
                                : <AlignRightIcon className="w-6 h-6 text-accent transition-all duration-200 ease-in" />
                            }
                        </button>
                    </div>
                </div>

            </div>
            <div className={`fixed inset-0 w-full h-[100dvh] bg-white transition-all duration-300 ${isMobileNavigationMenuOpen ? 'translate-x-0 z-40' : 'translate-x-full opacity-0 -z-50'} flex flex-col items-center justify-center`}>
                <Menu className="flex flex-col text-center space-y-8 text-2xl" onItemClick={() => setIsMobileNavigationMenuOpen(false)} />
                <Link href={'/about'} className="mt-8" onClick={() => setIsMobileNavigationMenuOpen(false)}>
                    <Button size="lg" className="px-10">
                        Tentang
                    </Button>
                </Link>
            </div>

        </div>

    )
}
