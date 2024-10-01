import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import HeroPattern from "./hero-pattern";

export default function HeroSection() {
    return (
        <div className="relative h-screen">
            <HeroPattern className="absolute top-0 left-0 h-full w-fit" />
            <HeroContent className="absolute top-0 w-full h-full" />
            <HeroImage className="absolute top-0 right-0 h-full w-1/2" />
        </div>
    )
}
