'use client'
import UsePublic from '@/hooks/usePublic/UsePublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Service from './Service';

const Services = () => {
    const axiosPublic = UsePublic();
         const {data: services = [], refetch, isLoading} = useQuery({
             queryKey: ['services'],
             queryFn: async () => {
                 const res = await axiosPublic.get('api?collection=services');
                 return res.data;
             }
         })

         //console.log(services);
    return (
        <div className='p-4 md:p-8 bg-gradient-to-r from-sky-400 to-green-200'>
               <h3 className='text-3xl font-semibold  text-center mb-12'>Our Services</h3>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6'>
                    {
                      services.map((service) => <Service key={service._id} service={service}></Service>)
                    }
               </div>
        </div>
    );
};

export default Services;