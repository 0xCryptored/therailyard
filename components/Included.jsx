'use client';

import Image from 'next/image'
import { motion } from "framer-motion";
import styles from '@/styles/index'
import { TitleText } from './CustomTexts'
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion';
import { bulletPoints } from '@/constants';
import StartSteps from './StartSteps';

const Included = () => {
  return (
    <section className={`relative ${styles.paddings} z-2`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
        <motion.div
            variants={planetVariants("left")}
            className={`flex-1 ${styles.flexCenter}`}
        >
            <Image
            src="/WhatsIncluded.svg"
            alt="Old Truck with flowers"
            width={550}
            height={550}
            />
        </motion.div>
        <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
        >
            <TitleText title={<>Whats Included</>} />
            <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {bulletPoints.map((feature, index) => (
                <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
            </div>
        </motion.div>
        </motion.div>
  </section>
  )
}

export default Included