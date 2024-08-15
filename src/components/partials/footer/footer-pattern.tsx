import Image from "next/image";
import * as patterns from "@/components/svg/patterns"

import React from 'react'

export default function FooterPattern() {
    return (
        <div className='grid grid-cols-3'>
            <Image
                src={patterns.pattern7}
                alt="pattern"
                width={240}
                height={240}
                className='col-start-2 w-full h-32'
            />
            <Image
                src={patterns.pattern1}
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src={patterns.pattern6}
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src={patterns.pattern8}
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src={patterns.pattern3}
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src={patterns.pattern5}
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src={patterns.pattern2}
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src={patterns.pattern4}
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
        </div>
    )
}
