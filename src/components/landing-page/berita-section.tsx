import { Button } from "../ui/button";
import CardBeritaLarge from "./card-berita-large";
import imgBeritaLarge from "/public/images/beritaTerbaru.jpg";
import imgBerita from "/public/images/berita.jpg"
import CardBerita from "./card-berita";
import { BerandaData } from "@/types/beranda-data";
import fallbackImageBerita from "/public/images/fallback/featured_berita.jpg"
import Link from "next/link";

export default function BeritaSection({ posts }: { posts?: BerandaData['posts'] }) {
    const latestPost = posts?.[0];
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h4 className='text-2xl font-semibold text-black'>Berita <span className='text-primary'>Terbaru</span></h4>
                <h5 className='text-lg font-normal text-stone-500'>Update Berita Terbaru Pesantren</h5>
            </div>
            <div className="grid grid-rows-1 md:grid-rows-2 md:grid-flow-col gap-8">
                {latestPost &&
                    <>
                        <CardBerita className="block md:hidden"
                            key={latestPost.title}
                            date={latestPost.created_at}
                            title={latestPost.title}
                            author={latestPost.user}
                            image={latestPost.featured_image ?? fallbackImageBerita}
                            slug={latestPost.slug}

                        />
                        <div className="hidden md:block md:row-span-2">
                            <CardBeritaLarge className="hidden md:block"
                                date={latestPost.created_at}
                                title={latestPost.title}
                                author={latestPost.user}
                                image={latestPost.featured_image ?? fallbackImageBerita}
                                slug={latestPost.slug}
                            />
                        </div>
                    </>
                }
                {posts?.slice(1, 5).map((post, index) => (
                    <CardBerita
                        key={index}
                        date={post.created_at}
                        title={post.title}
                        author={post.user}
                        image={post.featured_image ?? fallbackImageBerita}
                        slug={post.slug}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <Link href='/berita'>
                    <Button>
                        Lihat Semua Berita
                    </Button>
                </Link>
            </div>
        </div>
    )
}
