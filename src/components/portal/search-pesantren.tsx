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

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setSearchTerm(inputValue);
    };

    useEffect(() => {
        const currentParams = new URLSearchParams(searchParams.toString());
        if (searchTerm) {
            currentParams.set('search', searchTerm);
        } else {
            currentParams.delete('search');
        }

        const newUrl = pathname + '?' + currentParams.toString();
        // Only push if the URL actually changed to avoid redundant history entries
        if (pathname + '?' + searchParams.toString() !== newUrl) {
            router.push(newUrl, { scroll: false });
        }
    }, [searchTerm, router, pathname, searchParams]);

    // Reset input when all search params are cleared
    useEffect(() => {
        if (!searchParams.get('search')) {
            setInputValue('')
            setSearchTerm('')
        }
    }, [searchParams])

    return (
        <div className='flex justify-center w-full'>
            <form onSubmit={handleSearch} className='flex w-full md:w-3/5'>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Cari Pesantren"
                    className="rounded-r-none border-r-0"
                />
                <Button type='submit' className="rounded-l-none">
                    Cari
                </Button>
            </form>
        </div>
    )
}
