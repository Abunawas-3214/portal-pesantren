'use client'
import { useEffect, useState } from "react";
import HeaderBrand from "./header-brand";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

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
            <div className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"} transtition-all duration-200 ease-in`}>
                <div className="h-16 md:h-20 bg-transparent">
                    <div className="md:relative md:container md:mx-auto flex items-center w-screen md:max-w-screen-xl h-full">
                        <div className="block md:hidden h-10 w-32 mx-auto">
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
                    </div>
                </div>
            </div>

        </div>

    )
}
