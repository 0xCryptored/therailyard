import React from 'react'

const SubHero = ({ heading, img }) => {
  return (
    <div className={`flex items-center justify-center md:h-screen h-[200px] mb-12 bg-fixed md:bg-center bg-top md:bg-cover bg-contain ${img}`}>
        <div className='flexCenter flex-col text-white z-[2]'>
            <h2 className='dark-shadow text-6xl font-bold font-titleFont'>{heading}</h2>
        </div>
    </div>
  )
}

export default SubHero