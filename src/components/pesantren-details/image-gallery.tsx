'use client'
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery({ photos }: { photos: { file: string }[] }) {
    const data = photos

    const [active, setActive] = useState(data[0].file)

    return (
        <div className="grid gap-4">
            <div className="w-full h-[30rem] rounded-lg overflow-hidden bg-slate-600 flex justify-center items-center">
                <Image
                    src={active}
                    alt="photo-main"
                    height={1200}
                    width={1200}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="grid grid-cols-10 gap-2 w-full">
                {data.map(({ file }, index) => (
                    <div
                        className={`w-full h-14 overflow-hidden rounded-lg flex items-center justify-center cursor-pointer ${active === file ? 'border-4 border-primary' : ''}`}
                        key={index}
                    >
                        <Image
                            onClick={() => setActive(file)}
                            src={file}
                            height={400}
                            width={400}
                            alt="gallery-feature"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
