'use client'
import React from 'react'
import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn, staggerContainer } from '../utils/motion'

const About = ({ content }) => {
  return (
    <section className={`relative ${styles.paddings} z-2`}>
        <div className="gradient-02 z-0" />
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
        >
            <motion.p 
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
            >
                {content}
            </motion.p>

            <motion.img 
                variants={fadeIn('up', 'tween', 1, 1)}
                src="/ry-logo-sm.png"
                alt="railyard logo"
                className="w-[80px] h-[80px] object-contain mt-[28px]"
            />
        </motion.div>
    </section>
  )
}

export default About