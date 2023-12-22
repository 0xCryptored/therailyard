'use client'
import React from 'react'
import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn, staggerContainer } from '../utils/motion'

const About2 = ({ content }) => {
  return (
    <section className={`relative ${styles.paddings} z-2`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
        >
            <motion.p 
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className="my-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
            >
                {content}
            </motion.p>
            <div className='flexBetween flex-row w-[70%]'>
                <div className='bg-[#D5BA91] w-[200px] p-3 rounded-xl'>
                    <ul className='text-white text-center font-bold custom-shadow'>
                        <li>Community Events</li>
                        <li>Photoshoots</li>
                        <li>Fundraisers</li>
                        <li>Babyshowers</li>
                    </ul>
                </div>
                <motion.img
                    variants={fadeIn('up', 'tween', 1, 1)}
                    src="/ry-logo-sm.png"
                    alt="railyard logo"
                    className="w-[80px] h-[80px] object-contain"
                />
                <div className='bg-[#D5BA91] w-[200px] p-3 rounded-xl'>
                    <ul className='text-white text-center font-bold custom-shadow'>
                        <li>Filming Events</li>
                        <li>Anniversaries</li>
                        <li>Graduations</li>
                        <li>Bridalshowers</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default About2