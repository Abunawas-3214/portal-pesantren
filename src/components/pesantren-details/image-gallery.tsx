'use client'
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Maximize2 } from "lucide-react";

// Import styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function GalleryImage({ src, alt, className = "" }: { src: string, alt: string, className?: string }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative w-full h-full ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse z-0" />
            )}
            <Image
                src={src}
                alt={alt}
                fill
                className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
}

export default function ImageGallery({ photos }: { photos: { file: string }[] }) {
    const data = photos
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = data.map((photo) => ({ src: photo.file }));

    return (
        <div className="space-y-4">
            {/* Main Slider */}
            <div className="relative group w-full h-[25rem] md:h-[30rem] rounded-lg overflow-hidden flex justify-center items-center bg-slate-100">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
                    className="w-full h-full"
                >
                    {data.map(({ file }, idx) => (
                        <SwiperSlide key={idx} className="relative cursor-pointer" onClick={() => setOpen(true)}>
                            <GalleryImage src={file} alt={`photo-${idx}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Center Point Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20"
                    title="View Full Image"
                >
                    <Maximize2 size={24} />
                </button>
            </div>

            {/* Thumbnail Slider - Hidden on Mobile */}
            <div className="hidden md:block">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="thumbnail-swiper h-20 w-full"
                >
                    {data.map(({ file }, idx) => (
                        <SwiperSlide key={idx} className="relative w-full h-20 overflow-hidden rounded-lg cursor-pointer border-2 border-transparent swiper-slide-thumb-active:border-primary">
                            <GalleryImage src={file} alt={`thumb-${idx}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                plugins={[Thumbnails, Zoom]}
                thumbnails={{
                    position: "bottom",
                    width: 120,
                    height: 80,
                    border: 1,
                    gap: 10,
                    showToggle: true
                }}
                animation={{ fade: 250 }}
            />

            <style jsx global>{`
                .thumbnail-swiper .swiper-slide-thumb-active {
                    border-color: #026634 !important;
                }
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                    background: rgba(0,0,0,0.2) !important;
                    width: 40px !important;
                    height: 40px !important;
                    border-radius: 50% !important;
                    backdrop-filter: blur(4px) !important;
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 20px !important;
                }
                /* Lightbox Mobile Adjustments */
                .yarl__container {
                    background-color: rgba(0, 0, 0, 0.98) !important;
                }
                .yarl__slide_image {
                    max-height: 85vh !important;
                    object-fit: contain !important;
                }
                .yarl__thumbnails {
                    background-color: transparent !important;
                    padding-bottom: env(safe-area-inset-bottom);
                }
                @media (max-width: 768px) {
                    .yarl__thumbnails_container {
                        display: none !important;
                    }
                    .yarl__slide_image {
                        max-height: 90vh !important;
                    }
                }
            `}</style>
        </div>
    )
}
