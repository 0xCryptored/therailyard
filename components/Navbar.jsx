'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('transparent')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            }else{
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1120px m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/' className=''>
                <Image
                    src="/ry-logo-xl.png"
                    alt="RailYard-logo"
                    width={120}
                    height={45}
                />
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex text-lg'>
                <li className='p-4'>
                    <Link href='/' className='hover:font-bold'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#story' className='hover:font-bold'>Our Story</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#moments' className='hover:font-bold'>Moments</Link>
                </li>
                <li className='p-4'>
                    <Link href='/events' className='hover:font-bold'>Wedding & Events</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#contact' className='hover:font-bold'>Get In Touch</Link>
                </li>
                <li className='p-4'>
                    <Link href='/policy' className='hover:font-bold'>Policies</Link>
                </li>
            </ul>
            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/' onClick={handleNav}>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#story' onClick={handleNav}>Our Story</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#moments' onClick={handleNav}>Moments</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/events' onClick={handleNav}>Wedding & Events</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#contact' onClick={handleNav}>Get In Touch</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/policy' onClick={handleNav}>Policies</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar