'use client'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchPesantren() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') ?? '')
    const [inputValue, setInputValue] = useState(searchParams.get('search') ?? '')

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const deleteQueryString = useCallback((name: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete(name)
        return params.toString()
    }, [searchParams])

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchTerm(inputValue)
        }, 2000)

        return () => {
            clearTimeout(handler)
        }
    }, [inputValue])

    useEffect(() => {
        if (searchTerm) {
            router.push(pathname + '?' + createQueryString('search', searchTerm))
        } else {
            router.push(pathname + '?' + deleteQueryString('search'))
        }
    }, [searchTerm])

    useEffect(() => {
        if (searchParams.size == 0) {
            setInputValue('')
        }
    }, [searchParams])

    return (
        <div className='flex justify-center w-full'>
            <form action="" className='flex w-3/5'>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Cari Pesantren"
                />
                <Button type='submit'>
                    Cari
                </Button>
            </form>
        </div>
    )
}
