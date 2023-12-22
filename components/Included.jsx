'use client';

import React from 'react'
import Image from 'next/image'
import styles from '@/styles/index'
import { TitleText } from './CustomTexts'
import { bulletPoints } from '@/constants';

const Included = () => {
  return (
    <section className={`relative ${styles.paddings}`}>
        <div className='mb-12'>
            <TitleText title={<>What is Included</>} />
        </div>
        <div className={`h-full w-full mx-auto flex lg:flex-row lg:justify-between my-4 flex-col gap-4 z-2`}>
            <div className="flex h-full w-fit justify-center flex-row gap-4">
                <div className='absolute top-[18%] left-[42%] h-200'>
                    <Image
                        src="/truck2.png"
                        alt="Vintage truck with flowers"
                        width={225}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className='absolute bottom-10 left-[18%] h-200'>
                    <Image
                        src="/truck3.png"
                        alt="Vintage truck with flowers"
                        width={225}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
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