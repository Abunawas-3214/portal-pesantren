import CardBerita from "@/components/berita/card-berita";
import CardBeritaLarge from "@/components/berita/card-berita-large";

export default function BeritaPage() {
  return (
    <main>
      <div className="container text-center mx-auto max-w-screen-xl py-40 space-y-24">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Berita Terbaru</h1>
          <div className="flex w-full justify-center">
            <div className="h-fit w-2/3">
              <CardBeritaLarge />
            </div>
          </div>

        </div>
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">Berita Lainnya</h1>
          <div className="grid grid-cols-3 gap-8 w-full h-fit">
            <CardBerita />
            <CardBerita />
            <CardBerita />
            <CardBerita />
            <CardBerita />
            <CardBerita />
            <CardBerita />
            <CardBerita />
          </div>
        </div>
      </div>
    </main>
  );
}