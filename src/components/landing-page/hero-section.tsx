import { BerandaData } from "@/types/beranda-data";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import HeroPattern from "./hero-pattern";

export default function HeroSection({ meta }: { meta?: BerandaData["meta"] }) {
    return (
        <div className="relative h-screen">
            <HeroPattern className="hidden md:block absolute top-0 left-0 h-full w-fit" />
            <HeroContent meta={meta} className="absolute top-0 w-full h-full" />
            <HeroImage className="md:block absolute top-0 md:right-0 h-full w-screen md:w-1/2 -z-10" />
        </div>
    )
}
