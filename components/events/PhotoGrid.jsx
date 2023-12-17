import React from 'react'
import InstagramImg from '../InstagramImg'
import { InstaData } from '@/constants/index'

const PhotoGrid = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        {InstaData.map((img, imgIndex) => (
        <InstagramImg key={imgIndex} socialImg={img.img}/>
        ))}
    </div>
  )
}

export default PhotoGrid