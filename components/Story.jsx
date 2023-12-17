"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants/index";
import Image from "next/image";

const Story = () => {
  return (
    <section id='story' className="relative sm:p-16 xs:p-8 px-6 py-12 z-2">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.75 }}
            className="lg:w-[80%] w-[100%] mx-auto flex lg:flex-row flex-col gap-8 z-2"
        >
            <div className="flex-[0.75] flex justify-center flex-col">
                <TypingText title="| Our Story" />
                <TitleText title={<>Meet Our Hosts</>} />
                <Image
                    src="/hosts.jpg"
                    alt="get-started"
                    width={512}
                    height={342}
                    className="object-contain border rounded-3xl"
                />
            </div>
            <motion.div
                variants={planetVariants("right")}
                className="flex-1 flex justify-center items-center"
            >
                <div className="mt-[48px] flex flex-wrap items-center justify-between gap-[24px]">
                {newFeatures.map((feature) => (
                    <NewFeatures key={feature.title} {...feature} />
                ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Story