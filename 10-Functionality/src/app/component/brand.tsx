import React from 'react';
import Image from 'next/image';

const Brand = () => {
  return (
    <div>
     <div className="text-[#2A254B] font-[satoshi] text-center text-2xl font-normal py-7 px-6">
    What makes our brand different
  </div>
      <div className="w-full px-8 py-20 lg:px-20">
        {/* Container for each item */}
        <div className="flex flex-wrap justify-between text-left gap-y-12">
          
          {/* First Item */}
          <div className="flex flex-col items-start text-[#2A254B] px-4 sm:w-80 w-full">
            <Image
              src="/Delivery.png"
              alt="delivery"
              width={24}
              height={24}
            />
            <h1 className={`font-[satoshi] py-2 text-[20px] font-normal`}>
              Next day as standard
            </h1>
            <p className={`font-[satoshi] font-normal`}>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-start text-[#2A254B] px-4 sm:w-80 w-full">
            <Image
              src="/Checkmark.png"
              alt="check"
              width={24}
              height={24}
            />
            <h1 className={`font-[satoshi] py-2 text-[20px] font-normal`}>
              Made by true artisans
            </h1>
            <p className={`font-[satoshi] font-normal`}>
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          {/* Third Item */}
          <div className="flex flex-col items-start text-[#2A254B] px-4 sm:w-80 w-full">
            <Image
              src="/Purchase.png"
              alt="purchase"
              width={24}
              height={24}
            />
            <h1 className={`font-[satoshi] py-2 text-[20px] font-normal`}>
              Unbeatable prices
            </h1>
            <p className={`font-[satoshi] font-normal`}>
              For our materials and quality you won&apos;t find better prices anywhere
            </p>
          </div>

          {/* Fourth Item */}
          <div className="flex flex-col items-start text-[#2A254B] px-4 sm:w-80 w-full">
            <Image
              src="/Sprout.png"
              alt="sprout"
              width={24}
              height={24}
            />
            <h1 className={`font-[satoshi] py-2 text-[20px] font-normal`}>
              Recycled packaging
            </h1>
            <p className={`font-[satoshi] font-normal`}>
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
