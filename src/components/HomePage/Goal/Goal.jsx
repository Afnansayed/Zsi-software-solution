'use client';
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Goal = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    console.log("In View:", inView);
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0, y:"-20vh" },
    visible: { opacity: 10, y: '0vh', transition: { duration: 1 , ease: "easeInOut" , delay: 1} },
  };
  return (
    <div className="flex flex-col md:flex-row p-8 md:p-16 py-6 md:py-24">
      <div>
        <motion.div
        className="hover:scale-150 "
          style={{
            clipPath: "circle(50% at 50% 50%)",
            backgroundImage: `url('/image/image.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "200px",
            height: "200px",
            margin: "auto",
          }}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          whileHover={{ scale: 1.2 , transition: { duration: 0.5 } }}
        ></motion.div>
        <motion.h2 
        className="text-3xl md:text-5xl font-bold text-gray-800 bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent mt-6 text-right w-[80%] mx-auto"
        ref={ref}
          initial="hidden"
          animate={controls}
          variants={
            {
              hidden: { opacity: 0, y: "20vh" },
              visible: { opacity: 1, y: "0vh", transition: { duration: 1.2 } },
            }
          }
        >
          Your Goals, Our Mission
        </motion.h2>
      </div>
      <div className="flex items-center w-full md:w-[70%] mt-6 md:mt-0">
        <p className="h-72 w-2 bg-sky-400 mr-6 hidden md:block "></p>
        <div className=" space-y-6">
          <motion.p 
          className="text-2xl text-gray-600"
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={boxVariants}
          >
            We understand the challenges you face ​and the objectives you’re
            striving to ​achieve. Whether it,s increasing brand ​visibility,
            driving more leads, or enhancing ​customer engagement, we dive deep
            into ​the details to craft solutions tailored to your ​needs.
          </motion.p>
          <motion.p  className="text-2xl text-ellipsis text-gray-600"
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={
             {
                hidden: { opacity: 0, y: "20vh" },
                visible: { opacity: 1, y: "0vh", transition: { duration: 1.2 } },
              }
          }
          >
            We understand the challenges you face ​and the objectives you’re
            striving to ​achieve. Whether it,s increasing brand ​visibility,
            driving more leads, or enhancing ​customer engagement, we dive deep
            into ​the details to craft solutions tailored to your ​needs.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
