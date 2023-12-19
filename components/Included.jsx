'use client';

import React from 'react'
import Image from 'next/image'
import styles from '@/styles/index'
import { TitleText } from './CustomTexts'
import { bulletPoints } from '@/constants';

const Included = () => {
  return (
    <section className={`relative ${styles.paddings}`}>
        <TitleText title={<>What is Included</>} />
        <div className={`h-full w-full mx-auto flex lg:flex-row lg:justify-between flex-col gap-4 z-2`}>
            <div className="flex h-500 w-fit justify-center flex-row gap-4">
                <Image
                    src="/truck2.png"
                    alt="Vintage truck with flowers"
                    width={300}
                    height={400}
                    className="object-cover rounded-lg"
                />
                <Image
                    src="/truck3.png"
                    alt="Vintage truck with flowers"
                    width={300}
                    height={600}
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="flex justify-center items-center">
                <ul className='list-disc text-white font-bold text-lg'>
                    {bulletPoints.map((bullet) => (
                    <li>{bullet}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Included