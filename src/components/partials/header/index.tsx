'use client'
import { useEffect, useState } from "react";
import HeaderBrand from "./header-brand";
import Menu from "./menu";

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
            <div className={`fixed top-0 left-0 w-full z-10 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"} transtition-all duration-200 ease-in`}>
                <div className="h-20 bg-transparent">
                    <div className="relative container mx-auto flex items-center max-w-screen-xl h-full">
                        <HeaderBrand className="absolute left-0" />
                        <Menu className="grow" />
                    </div>
                </div>
            </div>

        </div>

    )
}
