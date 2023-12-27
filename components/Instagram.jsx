import React from 'react'
import { InstaData } from '@/constants/index'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-white text-2xl font-bold'>Follow us on Instagram</p>
        <p className='text-white pb-4'>@therailyard</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {InstaData.map((img, imgIndex) => (
              <InstagramImg key={imgIndex} socialImg={img.img}/>
            ))}
        </div>
    </div>
  )
}

export default Instagram