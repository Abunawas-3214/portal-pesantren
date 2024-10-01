import CardBerita from "@/components/berita/card-berita";
import CardBeritaLarge from "@/components/berita/card-berita-large";
import { fetchBerita } from "@/lib/Api/Berita";
import { Berita } from "@/types/berita";

export default async function BeritaPage() {
  let berita: Berita[] = (await fetchBerita()).data;
  return (
    <main>
      <div className="container text-center mx-auto max-w-screen-xl py-40 space-y-24">
        {berita.length > 0 &&
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Berita Terbaru</h1>
            <div className="flex w-full justify-center">
              <div className="h-fit w-2/3">
                <CardBeritaLarge berita={berita[0]} />
              </div>
            </div>
          </div>
        }
        {berita.length > 1 &&
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">Berita Lainnya</h1>
            <div className="grid grid-cols-3 gap-8 w-full h-fit">
              {berita.slice(1).map((berita) => (
                <CardBerita key={berita.slug} berita={berita} />
              ))}
            </div>
          </div>
        }
      </div>
    </main>
  );
}