"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import * as actions from '@/actions'

export default function SearchPesantren() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h4 className='text-2xl font-semibold text-black'>Temukan <span className='text-primary'>Pesantren</span></h4>
            </div>
            <div className='flex justify-center w-full'>
                <form action={actions.searchPesantren} className='flex flex-col sm:flex-row w-full md:w-3/5 gap-2 px-4 md:px-0'>
                    <Input
                        placeholder="Cari Pesantren"
                        name='term'
                        className="grow"
                    />
                    <Button type='submit' className="w-full sm:w-fit">
                        Cari
                    </Button>
                </form>
            </div>
        </div>
    )
}