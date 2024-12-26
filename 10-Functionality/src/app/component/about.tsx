import React from "react";
import Image from "next/image";
import Brand from "./brand";
import Club from "./club";
import Link from "next/link"

const About2 = () => {
  return (
    <> 
    <div className="w-full flex md:flex-row flex-col bg-[#F5F5F5]"> {/* Increased height */}
      
      {/* Left Side: Image */}
      <div className="md:w-1/2 w-full h-[600px] relative">    
        <Image 
          src="/about.png"
          alt="image"
          layout="fill"
          className="object-cover"
        />

      </div>
      {/* Right Side: Text */}
      <div className="md:w-1/2 w-full bg-[#F9F9F9] flex flex-col justify-center items-start md:p-12 p-6 gap-6 h-full m-auto"> 
        {/* Heading */}
        <h1 className="font-normal text-[32px] text-[#2A254B]">
          Our service isn&apos;t just personal, it&apos;s actually hyper personally
          exquisite
        </h1>
        {/* Subtext */}
        <p className="text-[18px] font-normal text-[#2A254B]">
          A global brand with local beginnings, our story began in a small
          studio in South London in early 2014
        </p>
        <p className="text-[16px] text-[#2A254B]">
          When we started Avion, the idea was simple. Make high-quality
          furniture affordable and available for the mass market. Handmade, and
          lovingly crafted furniture and homeware is what we live, breathe and
          design so our Chelsea boutique became the hotbed for the London
          interior design community.
        </p>
        {/* Button */}
        <Link href = "/" className="w-full p-6">
        <button className="bg-[#FFFFFF] px-8 py-3 flex justify-center items-center text-black hover:bg-slate-500">
          Get in touch
        </button>
        </Link>
      </div>
    </div> 
  <Brand/>
  <Club/>
    </>
  );
};

export default About2;