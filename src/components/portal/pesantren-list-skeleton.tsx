import React from 'react'
import CardPesantrenSkeleton from './card-pesantren-skeleton'

export default function PesantrenListSkeleton() {
    return (
        <div className='h-fit col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            <CardPesantrenSkeleton />
            <CardPesantrenSkeleton />
            <CardPesantrenSkeleton />
            <CardPesantrenSkeleton />
            <CardPesantrenSkeleton />
            <CardPesantrenSkeleton />
        </div>
    )
}
