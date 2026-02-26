import BeritaSection from "@/components/landing-page/berita-section";
import HeroSection from "@/components/landing-page/hero-section";
import PartnerSection from "@/components/landing-page/partner-section";
import PesantrenSection from "@/components/landing-page/pesantren-section";
import SearchPesantren from "@/components/landing-page/search-pesantren";
import { fetchBeranda } from "@/lib/Api/Beranda";
import { BerandaData } from "@/types/beranda-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Pesantren RMI NU Kota Malang",
  description: "Pusat informasi dan direktori Pesantren di bawah naungan RMI NU Kota Malang. Temukan informasi lengkap pendaftaran dan profil pesantren.",
  openGraph: {
    title: "Portal Pesantren RMI NU Kota Malang",
    description: "Pusat informasi dan direktori Pesantren di bawah naungan RMI NU Kota Malang.",
    type: "website",
    url: "https://portalpesantren.or.id",
    images: ["/images/og-image.jpg"],
  },
};

export default async function Home() {
  let dataBeranda: BerandaData = await fetchBeranda();
  return (
    <main>
      <HeroSection meta={dataBeranda.meta} />
      <div className="px-6 md:px-0 container mx-auto max-w-screen-xl py-40 space-y-32">
        <SearchPesantren />
        <PesantrenSection pesantren={dataBeranda.pesantren} />
        <PartnerSection />
        <BeritaSection posts={dataBeranda.posts} />
      </div>
    </main>
  );
}
