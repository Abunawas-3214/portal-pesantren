import { ImageIcon } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

export default function CardPesantrenSkeleton() {
    return (
        <div className='h-[28rem] w-full max-w-sm mx-auto animate-pulse grid grid-rows-7 overflow-hidden bg-white shadow-sm border border-stone-100'>
            {/* Top Section - matches row-span-4 */}
            <div className='bg-stone-200 h-full w-full row-span-4 flex flex-col justify-center items-center relative p-6'>
                <ImageIcon className='h-12 w-12 text-stone-300 mb-4' />
                <div className='w-3/4 h-6 bg-stone-300 rounded mb-2'></div>
                <div className='w-1/2 h-4 bg-stone-300 rounded'></div>
            </div>

            {/* Bottom Section - matches row-span-3 */}
            <div className="row-span-3 bg-stone-100 py-4 px-5 flex flex-col justify-between">
                <div className='space-y-3'>
                    {/* Detail Lines */}
                    <div className="flex gap-2">
                        <div className="w-5 h-5 bg-stone-200 rounded-sm"></div>
                        <div className='grow h-5 bg-stone-200 rounded-sm'></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-5 h-5 bg-stone-200 rounded-sm"></div>
                        <div className='grow h-5 bg-stone-200 rounded-sm'></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-5 h-5 bg-stone-200 rounded-sm"></div>
                        <div className='grow h-5 bg-stone-200 rounded-sm'></div>
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-end mt-4">
                    <div className='w-24 h-9 bg-stone-300 rounded-md'></div>
                </div>
            </div>
        </div>
    )
}
