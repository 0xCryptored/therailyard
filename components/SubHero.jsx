import React from 'react'

const SubHero = ({ heading, img }) => {
  return (
    <div className={`flex items-center justify-center h-screen mb-12 bg-fixed custom-shadow bg-center bg-cover ${img}`}>
        <div className='flexCenter flex-col text-white z-[2]'>
            <h2 className='text-4xl font-bold'>{heading}</h2>
        </div>
    </div>
  )
}

export default SubHero