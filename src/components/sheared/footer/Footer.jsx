import Image from "next/image";
import React from "react";
import { GiSundial } from "react-icons/gi";
import image from '../../../../public/image/image-1.jpg'

const Footer = () => {
  return (
    <div  className="w-full bg-gradient-to-r relative  from-sky-300 via-yellow-300 via-green-400 to-cyan-200 p-6  mt-[200px]">
      {/*  positioning */}
      <div className="w-full md:w-3/4 h-[420px] absolute top-[-200px] right-2 md:right-24 flex flex-col md:flex-row-reverse items-center justify-between gap-5 bg-gradient-to-r from-sky-600 to-cyan-100 rounded-lg p-0 md:p-16"
      style={{ clipPath: 'polygon(96% 10%, 97% 63%, 6% 61%, 4% 29%)', overflow: 'hidden'}}
      >
        <figure>
            <Image className=" hidden md:block h-[120px] rounded-md mb-16  " src={image} alt="image" width={200} height={200}></Image>
        </figure>
        <div className="mb-40 md:mb-6 p-0 md:p-4 ml-20 w-[220px] md:w-3/4">
          <h1 className=" text-lg ml-5 md:text-2xl mb-3 font-semibold text-center">Get Updata & Special Offer</h1>
          <div className="flex flex-col md:flex-row gap-1 md:gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="p-1 rounded-md px-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-1 rounded-md px-3"
            />
            <button type="sbmit" className="w-62 md:w-48  rounded-md py-1 border-2 border-black shadow-lg shadow-[#fff] hover:scale-105 transform transition-transform duration-300 ease-in-out font-semibold px-2 md:px-0">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-12">
        <span className="text-6xl mb-3 text-sky-600">
          <GiSundial />
        </span>{" "}
        <h1 className="text-6xl font-extrabold text-sky-700 font-serif">ZSI</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between ">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-8xl text-gray-800 font-bold text-left mt-6">
            Make your{" "}
          </h1>
          <h1 className="text-5xl md:text-8xl text-gray-800 font-bold text-right mt-6">
            mark
          </h1>
        </div>

        {/* important information */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around gap-12 md:gap-0">
          <div className="text-gray-600 space-y-3">
            <h3 className="font-semibold text-xl">Company</h3>
            <h3 className=" text-xl mt-5">Home</h3>
            <h3 className=" text-xl">About</h3>
            <h3 className=" text-xl">Our Services</h3>
            <h3 className=" text-xl">Package</h3>
          </div>
          <div>
            <div className="text-gray-600">
              <h3 className="text-2xl"> Marketing@zsi.ai</h3>
              <h3 className="text-2xl mt-3">(888) 887-5027</h3>
            </div>

            <div className="text-gray-600 mt-6">
              <h3 className="text-2xl "> 74-09 37th avenue suite 203B</h3>
              <h3 className="text-2xl mt-3"> Jackson height</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
