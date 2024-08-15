import { Button } from "../ui/button";
import CardBeritaLarge from "./card-berita-large";
import imgBeritaLarge from "/public/images/beritaTerbaru.jpg";
import imgBerita from "/public/images/berita.jpg"
import CardBerita from "./card-berita";

export default function BeritaSection() {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h4 className='text-2xl font-semibold text-black'>Berita <span className='text-primary'>Terbaru</span></h4>
                <h5 className='text-lg font-normal text-stone-500'>Update Berita Terbaru Pesantren</h5>
            </div>
            <div className="grid grid-cols-3 gap-8 h-[38rem]">
                <CardBeritaLarge date="26 Agustus 2024" title="Title" author="Author" image={imgBeritaLarge} />
                <div className="grid grid-rows-2 h-full gap-6">
                    <CardBerita date="26 Agustus 2024" title="Title" author="Author" image={imgBerita} />
                    <CardBerita date="26 Agustus 2024" title="Title" author="Author" image={imgBerita} />
                </div>
                <div className="grid grid-rows-2 h-full gap-6">
                    <CardBerita date="26 Agustus 2024" title="Title" author="Author" image={imgBerita} />
                    <CardBerita date="26 Agustus 2024" title="Title" author="Author" image={imgBerita} />
                </div>
            </div>
            <div className="flex justify-center">
                <Button>
                    Lihat Semua Berita
                </Button>
            </div>
        </div>
    )
}
