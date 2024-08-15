import BeritaSection from "@/components/landing-page/berita-section";
import HeroSection from "@/components/landing-page/hero-section";
import PartnerSection from "@/components/landing-page/partner-section";
import PesantrenSection from "@/components/landing-page/pesantren-section";
import SearchPesantren from "@/components/landing-page/search-pesantren";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto max-w-screen-xl py-40 space-y-32">
        <SearchPesantren />
        <PesantrenSection />
        <PartnerSection />
        <BeritaSection />
      </div>
    </main>
  );
}
