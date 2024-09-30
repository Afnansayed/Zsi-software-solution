
import React from "react";

const Goal = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 md:p-16 py-0 md:py-24">
          <div>
            <div style={{
                clipPath: 'circle(50% at 50% 50%)',
                 backgroundImage: `url('/image/image.jpg')`,
                 backgroundSize: 'cover',  
                 backgroundPosition: 'center',  
                 width: '200px',  
                 height: '200px',
                 margin: 'auto',
                 } }> 
            
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent mt-6 text-right w-[80%] mx-auto">Your Goals, Our Mission</h2>
          </div>
          <div className='flex items-center w-full md:w-[70%] mt-6 md:mt-0'>
            <p className="h-72 w-2 bg-sky-400 mr-6 hidden md:block "></p>
            <div className=" space-y-6">
                <p className="text-2xl text-gray-600">We understand the challenges you face ​and the objectives you’re striving to ​achieve. Whether it,s increasing brand ​visibility, driving more leads, or enhancing ​customer engagement, we dive deep into ​the details to craft solutions tailored to your ​needs.</p>
                <p className="text-2xl text-ellipsis text-gray-600">We understand the challenges you face ​and the objectives you’re striving to ​achieve. Whether it,s increasing brand ​visibility, driving more leads, or enhancing ​customer engagement, we dive deep into ​the details to craft solutions tailored to your ​needs.</p>
            </div>
          </div>
    </div>
  );
};

export default Goal;
