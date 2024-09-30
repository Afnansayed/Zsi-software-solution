"use client";
import Nabvar from "@/components/sheared/navbar/Nabvar";
import React from "react";
import { GiSundial } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import logo  from '@/../public/image/logo-1.png'
import Image from "next/image";

const Banner = () => {
  const navLink = (
    <>
      <li className="mr-6 text-xl font-semibold">Our Services</li>
      <li className="mr-6 text-xl font-semibold"> Package</li>
      <li className="mr-6 text-xl font-semibold">About</li>
    </>
  );
  return (
    <div className="w-full bg-gradient-to-r from-sky-300 via-yellow-300 via-green-400 to-cyan-200 p-6">
      {/* Navbar Start */}
      <div className="w-full md:w-[90%]  mx-auto ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLink}
              </ul>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-5xl md:text-8xl mb-3 text-sky-700">
                <Image className="text-blue w-20  md:w-40 " src='https://zsi.ai/wp-content/uploads/2023/12/logo-1.png' alt="logo" width={100} height={100}/>
              </span>{" "}
              
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            <button className="w-24 rounded-md py-2 border-2 text-black border-black mr-4 shadow-lg shadow-[#fff] hover:scale-105 transform transition-transform duration-300 ease-in-out font-semibold px-2 md:px-0">
              Register
            </button>
            <button className="w-24 rounded-md py-2 border-2 text-black border-black shadow-lg shadow-[#fff] hover:scale-105 transform transition-transform duration-300 ease-in-out font-semibold px-2 md:px-0">
              Login
            </button>
          </div>
        </div>
      </div>
      {/* Navbar end */}

      {/* Banner Content*/}
      <div className="w-full md:w-[90%] mx-auto mt-6">
        <h1 className="text-4xl md:text-8xl font-bold uppercase text-gray-800">
          <span className="block mb-5">we help your</span>
          <span className="block mb-5">business grow</span>
          <span className="block mb-5">
            with{" "}
            <span className="bg-gradient-to-t from-sky-900 to-cyan-500 bg-clip-text text-transparent">
              <TypeAnimation
                style={{
                  wordBreak: "break-all",
                }}
                sequence={["digital", 1000, "", 1000]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </span>
          <span className="block">marketing</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
