import React, { useState } from 'react';
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from 'lucide-react';

interface CheckboxProps {
    value: string;
    isChecked?: boolean;
    onChange: (value: string, isChecked: boolean) => void;
}

const Checkbox = ({ value, isChecked = false, onChange }: CheckboxProps) => {
    const [checked, setChecked] = useState(isChecked);

    const handleChange = () => {
        setChecked(!checked);
        onChange(value, !checked);
    };

    return (
        <div className='flex items-center space-x-2'>
            <CheckboxPrimitive.Root
                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                defaultChecked={checked}
                id={value}
                value={value}
                onCheckedChange={handleChange}
            >
                <CheckboxPrimitive.Indicator className='flex items-center justify-center text-current'>
                    <Check className="h-4 w-4 text-white" />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            <label className='capitalize text-sm' htmlFor={value}>{value}</label>
        </div>
    );
};

export default Checkbox;
