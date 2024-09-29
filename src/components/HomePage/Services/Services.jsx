"use client";
import UsePublic from "@/hooks/usePublic/UsePublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Service from "./Service";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const Services = () => {
  const axiosPublic = UsePublic();
  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("api?collection=services");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-4 md:p-8 bg-gradient-to-r from-sky-400 to-green-200">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {Array.from({ length: 16 }).map((_, idx) => (
            <div key={idx} className="card glass w-72 mt-12 md:mt-16 relative">
              <div className="card-body backdrop-blur-lg bg-white/10 rounded-xl">
                <figure>
                  
                  <Skeleton height={150} width={220} />
                </figure>
                
                <h2 className="text-md text-gray-800 font-semibold mt-4">
                  <Skeleton height={20} width={150} />
                </h2>
               
                <div className="h-32 mt-4">
                  <Skeleton count={3} />
                </div>
               
                <div className="absolute -top-10 right-1">
                  <Skeleton height={40} width={100} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  //console.log(services);
  return (
    <div className="p-4 md:p-8 bg-gradient-to-r from-sky-400 to-green-200">
      <h3 className="text-3xl font-semibold  text-center mb-12">
        Our Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
