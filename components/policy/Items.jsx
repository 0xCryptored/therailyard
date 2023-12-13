import { EventLogistics, DecorationAtmosphere, FoodCatering, LogisticsFacilities, ResponsabilitiesDamages, Others } from '@/constants/policies'
import Image from 'next/image'
import React from 'react'


const Items = () => {
  return (
    <div className='max-w-[1240px] mx-auto mb-16'>
        <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1 md:flex max-w-sm hidden'>
                <Image 
                    src='/policy-1.jpg'
                    alt="Railyard barn"
                    width={500}
                    height={800}
                />
            </div>
            <div className='flex-1 flex-col mx-auto'>
                {EventLogistics.map((logistic, logisticIndex) => (
                    <div key={logisticIndex} className='mb-5'>
                        <h1 className='flexCenter text-lg font-bold'>{logistic.title}</h1>
                        <div className='flex flex-col text-center'>
                            <p className='mb-2'>{logistic.summary}</p>
                            <p>{logistic.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1 flex-col mx-auto'>
                {DecorationAtmosphere.map((logistic, logisticIndex) => (
                    <div key={logisticIndex} className='mb-5'>
                        <h1 className='flexCenter text-lg font-bold'>{logistic.title}</h1>
                        <div className='flex flex-col text-center'>
                            <p className='mb-2'>{logistic.summary}</p>
                            <p>{logistic.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 md:flex max-w-sm hidden'>
                <Image 
                    src='/policy-1.jpg'
                    alt="Railyard barn"
                    width={500}
                    height={800}
                />
            </div>
        </div>
        <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1 flex-col mx-auto'>
                {FoodCatering.map((logistic, logisticIndex) => (
                    <div key={logisticIndex} className='mb-5'>
                        <h1 className='flexCenter text-lg font-bold'>{logistic.title}</h1>
                        <div className='flex flex-col text-center'>
                            <p className='mb-2'>{logistic.summary}</p>
                            <p>{logistic.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-1 md:flex max-w-sm hidden'>
                <Image 
                    src='/policy-1.jpg'
                    alt="Railyard barn"
                    width={500}
                    height={800}
                />
            </div>
        </div>
    </div>
  )
}

export default Items