import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <div className='min-h-screen  bg-gray-50 flex items-center justify-center p-4'>
    <div className="w-full max-w-6xl bg-white">
      <div className="w-full bg-[#A8996E] p-3">
        <h1 className="text-white text-2xl font-serif tracking-wider">MANZZARI</h1>
      </div>
    
      <div className="flex flex-col md:flex-row p-8 gap-12">
    
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-wider">IMPECCABLE</h2>
        <h2 className="text-3xl font-bold tracking-wider">CRAFTSMANSHIP AND</h2>
        <h2 className="text-3xl font-bold tracking-wider">FINESSE</h2>
      </div>
   <p className=" mt-6  leading-relaxed max-w-md text-Color">
        An example of intricate workmanship and detail, elegant 
        necklaces and long and short chains form a part of our 
        desirable collection.</p>
      
   <button className=" mt-8 bg-[#A8996E] text-white py-2.5
    px-8 rounded hover:bg-[#97885F]  transition-colors duration-200 w-fit text-sm" >Explore Now</button>
   </div>
   <div className=" md:w-1/2 flex justify-end
    border-white relative">
   
    <Image
    src={"/images/figma-image.jpg"}
    alt="hero image"
    width={462}
    height={647}

    />
   </div>
    </div>
            </div>
         </div>
       

  )
}

export default page
 
