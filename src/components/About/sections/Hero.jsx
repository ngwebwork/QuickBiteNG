import React from "react";
import shopbg from "../../../assets/SHop_bg.png";

function Hero() {
  return (
    // <div className='w-full h-full'>
    //     <div className='z-[-1] absolute w-full h-full py-20 top-0 right-0 left-0 m-auto'>
    //         <img src={shopbg} alt="background image" className='object-cover sm:object-cover h-100 w-full bg-left-top' />
    //     </div>

    //     <div className='w-full justify-center items-center flex m-auto h-70 lg:h-100'>
    //         <div className=' h-full items-center justify-center flex flex-col '>
    //             <h1 className='py-4 md:text-4xl text-2xl leading-tight'>About</h1>
    //             <p className='flex text-xl'>
    //                 <a className='px-2 transition-all duration-500 hover:text-amber-700' href="#">Home </a> /
    //                 {/* <a className='px-2 transition-all duration-500 hover:text-amber-700' href="#">All Collections </a> / */}
    //                 <a className='px-2' href="#">About</a>
    //             </p>
    //         </div>

    //     </div >
    // </div >
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src={shopbg}
        alt="Shop Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FFC107]">
          About 
        </h1>

        <p className="mt-4 text-lg text-gray-300">Home / About</p>
      </div>
    </div>
  );
}

export default Hero;
