import React from 'react';
import shopbg from '../../../assets/SHop_bg.png'

function Hero() {
    return (
     <div className="relative w-full h-[400px] overflow-hidden">
          <img
            src={shopbg}
            alt="Shop Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
  
          <div className="absolute inset-0 bg-black/50"></div>
  
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFC107]">
               Blog
            </h1>
  
            <p className="mt-4 text-lg text-gray-300">Home / Blog</p>
          </div>
        </div>
    );
}

export default Hero;