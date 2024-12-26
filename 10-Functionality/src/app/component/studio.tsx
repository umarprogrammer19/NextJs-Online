import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const Studio = () => {
  return (
    <div className="w-full bg-[#FFFFFF] py-10">
    <div className="flex flex-col md:flex-row items-center md:px-20">
      {/* Left Side (Text) */}
      <div className="md:w-1/2 w-full p-6 md:p-12">
        <h1 className="text-[#2A254B] font-normal text-[20px] md:text-[24px] mb-4">
          From a studio in London to a global brand with over 400 outlets
        </h1>
        <p className="text-[#505977] font-normal text-[14px] md:text-[16px] mb-8 leading-relaxed">
          When we started Avion, the idea was simple: make high-quality furniture 
          affordable and available for the mass market.
          <br />
          <br />
          Handmade and lovingly crafted furniture and homeware are what we live, 
          breathe, and design. Our Chelsea boutique became the hub for the London 
          interior design community.
        </p>
      </div>
  
      {/* Right Side (Image) */}
      <div className="md:w-1/2 w-full h-[300px] md:h-[500px] lg:h-[700px] relative">
        <Image
          src="/bg.png"
          alt="Studio Image"
          layout="fill"
          className="object-cover"
        />
      </div>
    </div>
  
    {/* Button Section */}
    <div className="flex justify-center py-6">
      <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black px-8 py-3 font-normal transition-colors duration-300">
        Get in touch
      </button>
    </div>
  </div>
  
  );
};

export default Studio;