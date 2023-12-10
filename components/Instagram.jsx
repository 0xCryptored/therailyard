import React from 'react'
import insc1 from '../public/insc-1.jpg'
import insc2 from '../public/insc-2.jpg'
import insc3 from '../public/insc-3.jpg'
import insc4 from '../public/insc-4.jpg'
import insc5 from '../public/insc-5.jpg'
import insc6 from '../public/insc-6.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow us on Instagram</p>
        <p className='pb-4'>@Therailyard</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={insc1}/>
            <InstagramImg socialImg={insc2}/>
            <InstagramImg socialImg={insc3}/>
            <InstagramImg socialImg={insc4}/>
            <InstagramImg socialImg={insc5}/>
            <InstagramImg socialImg={insc6}/>
        </div>
    </div>
  )
}

export default Instagram