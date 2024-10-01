'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Checkbox from '../ui/checkbox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface CheckboxSearchInputProps {
    params: string
    options: string[]
}

export default function CheckboxSearchInput({ params, options }: CheckboxSearchInputProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [selectedOptions, setSelectedOptions] = useState<string[]>(searchParams.get(params)?.split(",") ?? []);

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

    const handleCheckboxChange = (value: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedOptions([...selectedOptions, value]);
        } else {
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        }
    };

    useEffect(() => {
        if (selectedOptions.length > 0) {
            router.push(pathname + '?' + createQueryString(params, selectedOptions.join(',')))
        } else {
            router.push(pathname + '?' + deleteQueryString(params))
        }
    }, [selectedOptions])

    return (
        <div className="space-y-2">
            <h4 className="font-bold text-md capitalize">{params}</h4>
            {options.map((option) => (
                <Checkbox key={option} isChecked={selectedOptions.some(item => item === option)} value={option} onChange={handleCheckboxChange} />
            ))}
            {/* <p>Selected options: {selectedOptions.join(',')}</p> */}
        </div>
    )
}
