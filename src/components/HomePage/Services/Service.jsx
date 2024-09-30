'use client'
import Image from "next/image";
import React from "react";
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Service = ({ service }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); 

  React.useEffect(() => {
      console.log('In View:', inView);
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    const boxVariants = {
      hidden: { opacity: 0, x: "10vw" }, 
      visible: { opacity: 1, x: "0vw", transition: { duration: 1 } }, 
    }; 
  return (
    <div className="card glass w-72 mx-auto mt-12 md:mt-16 relative">
      <div className="card-body backdrop-blur-lg bg-white/10 rounded-xl ">
      <motion.figure
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
      whileHover={{ scale: window.innerWidth < 640 ? 0.5 : 1.1, transition: { duration: 1 } }}
      >
         <Image
          className="w-[220px] h-[150px]" 
          src={service?.service_image} alt="service image" width={200} height={200}></Image>
      </motion.figure>
        <h2 className="text-md text-gray-800 font-semibold">{service?.service_name}</h2>
          <div className="h-32 ">
            <p className="mt-3 text-gray-900">{service?.service_details}</p>
          </div>
        <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: '-10vw' }, 
          visible: { opacity: 1, x: '0vw', transition: { duration: 3 }, delay: 2 }, 
        }}
        className="absolute -top-10 right-1">
          <button className="w-24 rounded-md py-2 text-gray-800 border-2 border-black shadow-lg shadow-[#fff] hover:scale-105 transform transition-transform duration-300 ease-in-out font-semibold ">Learn now!</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
