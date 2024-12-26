import React from "react";

const Club = () => {
  return (
    <div className="w-full border border-[#F9F9F9] px-4 md:px-20 py-8">
      <div className="w-full h-full border-2 border-[#F9F9F9] p-6 md:p-8 flex flex-col justify-center items-center">
        {/* Heading */}
        <h1 className="font-[clash] font-normal text-[24px] md:text-[36px] text-center mb-4">
          Join the club and get the benefits
        </h1>

        {/* Subheading */}
        <p className="text-center text-sm md:text-base text-[#505977] mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>

        {/* Input and Button Section */}
        <div className="w-full md:w-[500px] h-12 flex relative">
          <input
            type="email"
            className="h-full w-full bg-[#F9F9F9] px-4 focus:outline-none text-black placeholder-[#A0A0A0] text-sm md:text-base"
            placeholder="your@email.com"
          />
          <button className="bg-[#2A254B] absolute top-0 right-0 h-full px-6 md:w-24 capitalize text-white text-sm md:text-base">
            sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Club;
