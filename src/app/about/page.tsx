import logoRMI from "@/components/svg/logos/logo_rmi.svg";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import { Metadata } from "next";
import { FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami - Portal Pesantren RMI NU",
  description: "Informasi mengenai Portal Pesantren RMI NU Kota Malang dan tim pengembang di baliknya.",
};
export default function AboutPage() {
  return (
    <main>
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="space-y-8">
          <Image
            src={logoRMI}
            alt="logo RMI"
            width={250}
            height={250}
            className="mx-auto"
          />
          <div className="space-y-2 text-center">
            <h2 className="font-semibold text-xl">Portal Pesantren App</h2>
            <div className="space-y-0.5">
              <p className="font-normal text-sm">Version 1.2.2</p>
              <p className="font-normal text-xs">Release Date: 3 Maret 2026</p>
            </div>
            <div className="space-y-2">
              <p className="font-normal text-sm text-primary">Developed by</p>
              <div className="flex gap-2">
                <Button asChild>
                  <a href="https://www.instagram.com/afrijalrizqiramadan" target="_blank" rel="noopener noreferrer">Afrijal</a>
                </Button>
                <Button asChild>
                  <a href="https://www.instagram.com/itsabun_dis" target="_blank" rel="noopener noreferrer">Abun</a>
                </Button>
                <Button asChild>
                  <a href="https://www.instagram.com/ahdanelmuna" target="_blank" rel="noopener noreferrer">Emha</a>
                </Button>
              </div>
            </div>
            <div className="pt-10 space-y-2">
              <p className="text-sm">For further colloboration</p>
              <Button variant={'secondary'} asChild>
                <a href="https://wa.me/6282330809192" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </Button>

            </div>
            <div className="pt-10 space-y-2">
              <p className="text-sm">RMI NU Kota Malang Brand Guidlines</p>
              <Button variant={'secondary'} asChild>
                <a href="https://drive.google.com/file/d/1R6UU_nEdv10MKQzOB-k1PYCFSL0aq6qf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileCheck className="h-4 w-4 mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}