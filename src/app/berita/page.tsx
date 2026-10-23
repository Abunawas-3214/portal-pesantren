import CardBeritaLarge from "@/components/berita/card-berita-large";
import BeritaList from "@/components/berita/berita-list";
import { fetchBerita } from "@/lib/Api/Berita";
import { Berita } from "@/types/berita";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita & Artikel - Portal Pesantren RMI NU",
  description: "Kumpulan berita terbaru, artikel, dan informasi seputar kegiatan pesantren di Kota Malang.",
  openGraph: {
    title: "Berita & Artikel - Portal Pesantren RMI NU",
    description: "Kumpulan berita terbaru dan informasi seputar kegiatan pesantren di Kota Malang.",
    type: "website",
  },
};

export default async function BeritaPage() {
  const berita: Berita[] = (await fetchBerita()).data;
  return (
    <main>
      <div className="container text-center mx-auto max-w-screen-xl py-24 md:py-40 space-y-12 md:space-y-24 px-4 md:px-0">
        {berita.length > 0 && (
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold">Berita Terbaru</h1>
            <div className="flex w-full justify-center">
              <div className="h-fit w-full md:w-2/3">
                <CardBeritaLarge berita={berita[0]} />
              </div>
            </div>
          </div>
        )}
        {berita.length > 1 && (
          <div className="space-y-8 md:space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold">Berita Lainnya</h1>
            <BeritaList initialBerita={berita.slice(1)} pageSize={6} />
          </div>
        )}
      </div>
    </main>
  );
}
