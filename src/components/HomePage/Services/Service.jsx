import Image from "next/image";
import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card glass w-72  mt-12 md:mt-16 relative">
      <div className="card-body backdrop-blur-lg bg-white/10 rounded-xl ">
      <figure>
         <Image className="w-[220px] h-[150px]" src={service?.service_image} alt="service image" width={200} height={200}></Image>
      </figure>
        <h2 className="text-md text-gray-800 font-semibold">{service?.service_name}</h2>
          <div className="h-32 ">
            <p className="mt-3">{service?.service_details}</p>
          </div>
        <div className="absolute -top-10 right-1">
          <button className="w-24 rounded-md py-2 border-2 border-black shadow-lg shadow-[#fff] hover:scale-105 transform transition-transform duration-300 ease-in-out font-semibold ">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
