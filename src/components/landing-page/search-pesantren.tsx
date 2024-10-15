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
                <form action={actions.searchPesantren} className='flex w-3/5'>
                    <Input
                        placeholder="Cari Pesantren"
                        name='term'
                    />
                    <Button type='submit'>
                        Cari
                    </Button>
                </form>
            </div>
        </div>
    )
}