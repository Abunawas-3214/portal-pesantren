'use client'
import React, { useCallback } from 'react'
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

    // Derive selected options directly from URL to avoid sync issues between multiple instances
    const selectedOptions = searchParams.get(params)?.split(",").filter(v => v !== "") ?? [];

    const handleCheckboxChange = useCallback((value: string, isChecked: boolean) => {
        const current = new URLSearchParams(searchParams.toString())
        let newValues = current.get(params)?.split(",").filter(v => v !== "") ?? []

        if (isChecked) {
            if (!newValues.includes(value)) {
                newValues.push(value);
            }
        } else {
            newValues = newValues.filter((option) => option !== value);
        }

        if (newValues.length > 0) {
            current.set(params, newValues.join(','))
        } else {
            current.delete(params)
        }

        router.push(pathname + '?' + current.toString(), { scroll: false })
    }, [searchParams, params, pathname, router]);

    return (
        <div className="space-y-2">
            <h4 className="font-bold text-md capitalize">{params}</h4>
            {options.map((option) => (
                <Checkbox
                    key={option}
                    isChecked={selectedOptions.includes(option)}
                    value={option}
                    onChange={handleCheckboxChange}
                />
            ))}
        </div>
    )
}
