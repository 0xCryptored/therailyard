'use client'
import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "@/constants";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { TitleText } from "./CustomTexts";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section id="moments" className='relative sm:p-16 xs:p-8 px-6 py-12 z-2'>
        <div className="flexCenter">
          <TitleText title={<>Moments</>} />
        </div>
        <div className="relative flex justify-center p-4">
          {SliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? 'opacity-[1] ease-in duration-300'
                    : 'opacity-0'
                }
              >   
                <FaArrowCircleLeft className='absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]' size={50} onClick={prevSlide}/>
                <FaArrowCircleRight className='absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]' size={50} onClick={nextSlide} />

                  {index === current && (
                      <Image
                      src={slide.img}
                      alt={slide.title}
                      width="650"
                      height="300"
                      />
                  )}

              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Slider;
