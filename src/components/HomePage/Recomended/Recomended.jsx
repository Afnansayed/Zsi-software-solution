'use client'
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import React from 'react';

const Recomended = () => {
    const controls = useAnimation(); 
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); 
 
    React.useEffect(() => {
        console.log('In View:', inView);
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
    
      const boxVariants = {
        hidden: { opacity: 0, x: "-10vw" }, 
        visible: { opacity: 1, x: "0vw", transition: { duration: 1 } }, 
      }; 

      const boxVariantsTwos = {
        hidden: { opacity: 0, x: "-10vw" }, 
        visible: { opacity: 1, x: "0vw", transition: { duration: 3 , delay: 1 } }, 
      }; 

    return (
        <div className='bg-gray-100 p-8 pb-[250px]'>
              <div className='flex flex-col md:flex-row '>
                   <motion.div className='w-full md:w-1/2 lg:w-1/2'
                   ref={ref}
                   initial="hidden"
                   animate={controls}
                   variants={boxVariants}
                  
                   >
                       <h1 className='text-4xl mb-6 md:mb-0 md:text-6xl font-bold text-gray-500'><span>Our </span> <br />
                       <span>recomended </span><br/>
                        <span>digital strategy</span></h1>
                   </motion.div>
                   <div className='w-full md:w-1/2 flex'>
                      <p className='w-2 h-36 md:h-16 rounded-lg bg-sky-400 mr-2'></p>
                      <h3 className='text-xl text-gray-900'>Here’s how our services can transform your business ​and deliver the best return on investment. Visual aids ​will highlight key benefits.</h3>
                   </div>
              </div>
              <div className='flex flex-col md:flex-row mt-12' >
                 <motion.div
                  style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)', overflow: 'hidden'}}
                  className='bg-gradient-to-r from-sky-400 to-green-400 p-16 text-center py-32'
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={boxVariants}
                 >
                     <motion.h3 className='text-xl text-[#fff] mb-12'
                     ref={ref}
                     animate={controls}
                    initial="hidden"
                     variants={boxVariantsTwos}
                     >Exceptional digital ​marketing results</motion.h3>
                 </motion.div>
                 <div className='flex justify-center items-center text-center'>
                    <h3 className='text-xl text-gray-600 '>A fully aligned and cohesive ​marketing approach</h3>
                 </div>
                 <motion.div
                  style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)', overflow: 'hidden'}}
                  className='bg-gradient-to-r from-sky-400 to-green-400 p-16 text-center py-32'
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={
                     {
                        hidden: { opacity: 0, x: "10vw" }, 
                        visible: { opacity: 1, x: "0vw", transition: { duration: 1 } }, 
                      }
                  }
                 >
                     <motion.h3 className='text-xl text-[#fff] mb-12'
                     ref={ref}
                     animate={controls} 
                     initial="hidden"
                     variants={boxVariantsTwos}
                     >Exceptional digital ​marketing results</motion.h3>
                 </motion.div>
              </div>
        </div>
    );

    
};
export default Recomended;