import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div className='flexCenter flex-col text-white z-[2]'>
            <h2 className='text-4xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='hover:font-bold px-7 py-2 border rounded-md'>
              Gallery
            </button>
        </div>
    </div>
  )
}

export default Hero