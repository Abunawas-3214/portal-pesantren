import BeritaSection from "@/components/landing-page/berita-section";
import HeroSection from "@/components/landing-page/hero-section";
import PartnerSection from "@/components/landing-page/partner-section";
import PesantrenSection from "@/components/landing-page/pesantren-section";
import SearchPesantren from "@/components/landing-page/search-pesantren";
import { fetchBeranda } from "@/lib/Api/Beranda";
import { BerandaData } from "@/types/beranda-data";

export default async function Home() {
  let dataBeranda: BerandaData = await fetchBeranda();
  return (
    <main>
      <HeroSection meta={dataBeranda.meta} />
      <div className="container mx-auto max-w-screen-xl py-40 space-y-32">
        <SearchPesantren />
        <PesantrenSection pesantren={dataBeranda.pesantren} />
        <PartnerSection />
        <BeritaSection posts={dataBeranda.posts} />
      </div>
    </main>
  );
}
