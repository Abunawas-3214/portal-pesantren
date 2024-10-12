import logoRMI from "@/components/svg/logos/logo_rmi.svg";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Image from "next/image";
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
              <p className="font-normal text-sm">Version 1.0.0</p>
              <p className="font-normal text-xs">Release Date: 1 November 2024</p>
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
          </div>
        </div>
      </div>
    </main>
  )
}