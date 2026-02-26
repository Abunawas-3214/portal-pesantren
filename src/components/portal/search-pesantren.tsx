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
            const current = new URLSearchParams(searchParams.toString())
            current.set(name, value)
            return current.toString()
        },
        [searchParams]
    )

    const deleteQueryString = useCallback((name: string) => {
        const current = new URLSearchParams(searchParams.toString())
        current.delete(name)
        return current.toString()
    }, [searchParams])

    // Debounce: wait 500ms after user stops typing before triggering search
    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchTerm(inputValue)
        }, 500)
        return () => clearTimeout(handler)
    }, [inputValue])

    useEffect(() => {
        if (searchTerm) {
            router.push(pathname + '?' + createQueryString('search', searchTerm))
        } else {
            router.push(pathname + '?' + deleteQueryString('search'))
        }
    }, [searchTerm, router, pathname, createQueryString, deleteQueryString])

    // Reset input when all search params are cleared
    useEffect(() => {
        if (searchParams.size === 0) {
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
