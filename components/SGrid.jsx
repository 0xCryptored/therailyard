'use client'
import React, { useState } from 'react'


const SGrid = ({ title, content, context }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='h-auto max-w-[300px]'>
        <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between items-center w-[300px] p-4 rounded-lg text-white custom-shadow bg-[#D5BA91]'>
            <span className='font-bold mx-auto'><ul><li>{title}</li>{<li>{context}</li>}</ul></span>
            <svg className="fill-[#993E25] shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/>
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/>
            </svg>
        </button>
        {/* Overlay part */ }
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out my-2 p-4 text-slate-600 text-sm rounded-lg bg-slate-50 ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>

            <div className='overflow-hidden flexCenter'>
                <ul>
                    {content}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default SGrid