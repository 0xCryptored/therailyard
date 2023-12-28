import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div>
      <div className="hidden md:flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute h-screen md:h-auto top-0 left-0 right-0 bottom-0 bg-black/70 z-2" />
        <div className="flexCenter flex-col text-white z-[2]">
          <h2 className="text-6xl text-center font-titleFont">{heading}</h2>
          <p className="py-5 text-xl text-center">{message}</p>
        </div>
      </div>

      {/* Smaller Screen Size */}

      <div className="md:hidden flex items-center justify-center bg-fixed bg-top bg-contain h-auto custom-imgR">
        {/* Overlay */}
        <div className="absolute h-auto top-0 left-0 right-0 bottom-0 bg-black/70 z-2" />
        <div className="flexCenter flex-col text-white z-[2]">
          <h2 className="text-6xl text-center font-titleFont">{heading}</h2>
          <p className="py-5 text-xl text-center">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
