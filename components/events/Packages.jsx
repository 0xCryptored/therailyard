'use client'
import React from 'react'
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import { PackagesInfo } from "../../constants/events";
import PackagesFeatures from './PackagesFeatures';
import { TitleText } from '../CustomTexts';

const Packages = () => {
  return (
    <section id='WeddingPackages' className='relative sm:p-16 xs:p-8 px-6 py-10 z-2'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className='lg:w-[80%] w-[100%] mx-auto flex lg:flex-row flex-col gap-8'
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TitleText title={<>All Inclusive Wedding Packages</>} />
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className='flex-1 flexCenter'
        >
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {PackagesInfo.map((feature) => (
              <PackagesFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Packages