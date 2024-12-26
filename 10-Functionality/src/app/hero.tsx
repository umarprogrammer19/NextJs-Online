import React from "react";
import Image from "next/image";
import Link from "next/link"

const Hero = () => {
  return (
    <div className="bg-white flex items-center justify-center xl:mx-20 md:mx-10">
    <div className="w-full max-w-7xl h-auto bg-[#2A254B] flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex-1 p-8 text-white flex flex-col justify-start order-2 lg:order-1">
        <h1 className="text-3xl lg:text-4xl font-normal font-[clash] leading-snug max-w-lg">
          The furniture brand for the future, with timeless designs
        </h1>
  
        {/* Button */}
        <Link href = "/products">
        <button className="bg-white/20 h-14 w-56 flex justify-center items-center text-white hover:bg-slate-500 mt-10">
          View Collection
        </button>
        </Link>
  
        {/* Description */}
        <h2 className="font-[satoshi] text-base lg:text-lg mt-10 lg:mt-20 max-w-2xl leading-relaxed">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </h2>
      </div>
  
      {/* Right Section */}
      <div className="w-full lg:w-auto h-64 lg:h-auto order-1 lg:order-2 md:block hidden">
        <Image
          src="/hero.png"
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;