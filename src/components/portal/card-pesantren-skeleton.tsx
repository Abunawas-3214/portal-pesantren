import { Image } from 'lucide-react'
import React from 'react'

export default function CardPesantrenSkeleton() {
    return (
        <div className='h-[28rem] w-72 animate-pulse grid grid-rows-7'>
            <div className='bg-slate-200 h-full w-full row-span-4 flex justify-center items-center'>
                <Image className='h-14 w-14 text-slate-300' />
            </div>
            <div className="row-span-3 bg-slate-300 py-4 px-5 flex flex-col justify-between">
                <div className='space-y-4'>
                    <div className='w-full h-6 bg-slate-200'></div>
                    <div className='w-full h-6 bg-slate-200'></div>
                </div>
                <div className="flex justify-end">
                    <div className='w-24 h-8 bg-slate-200'></div>
                </div>
            </div>

        </div>
    )
}
