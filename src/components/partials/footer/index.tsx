import Image from "next/image";
import logoNU from "@/components/svg/logos/logo_nu.svg";
import logoRMI from "@/components/svg/logos/logo_rmi.svg";
import FooterPattern from "./footer-pattern";

export default function Footer() {


    return (
        <footer className="relative h-96 overflow-hidden flex items-center justify-center">
            <Image
                src="/images/footerImage.jpg"
                alt="footer image"
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />
            <div className="absolute top-0 w-full h-full bg-white/90">
                <div className="container mx-auto max-w-screen-xl h-full flex flex-col justify-center gap-8">
                    <div className="flex gap-10 justify-center h-24 w-fit">
                        <Image
                            src={logoNU}
                            alt="logo NU"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                        <Image
                            src={logoRMI}
                            alt="logo NU"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-stone-500 text-lg font-normal">
                        <h3 className="text-black text-2xl font-bold">Rabithah Ma'ahid Islamiyah</h3>
                        <p>Nahdlatul Ulama Kota Malang</p>
                        <p>Jl. K.H. Hasyim Ashari No.21, Kauman, Kec. Klojen,<br /> Kota Malang, Jawa Timur, 65119</p>
                    </div>
                    <p className="text-sm">Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-fit h-full">
                <FooterPattern />
            </div>
        </footer>
    )
}
