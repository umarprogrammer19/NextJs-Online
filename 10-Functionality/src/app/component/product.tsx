import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div className='w-full md:px-20 p-3 py-24'>
    {/* Heading */}
    <div className='mb-10'>
      <h1 className='font-[clash] text-[32px] font-normal'>
        Our popular products
      </h1>
    </div>
  
    {/* Responsive grid columns */}
    <div className="flex gap-6 overflow-x-scroll md:overflow-x-visible md:grid md:grid-cols-4 md:gap-6">
      {/* Column 1 */}
      <div className="h-full col-span-2">
        <div className=" h-full flex justify-center items-center">
          <div className="lg:w-[700px] w-[420px] md:h-[480px] h-[300px] relative transform hover:scale-105 transition-all duration-300">
            <Image  
              src="/Large.png"
              alt="large"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        {/* Text below the image */}
        <div className="mt-4 text-start">
          <h1 className="font-medium text-[16px]">The Poplar suede sofa</h1>
          <p className="text-[14px] text-gray-600">£980</p>
        </div>
      </div>
  
      {/* Column 2 */}
      <div className="h-full">
        <div className=" h-full flex justify-center items-center">
          <div className="md:w-96 w-60 md:h-[480px] h-[300px] relative transform hover:scale-105 transition-all duration-300">
            <Image
              src="/hero.png"
              alt="parent"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        {/* Text below the image */}
        <div className="mt-4 text-start">
          <h1 className="font-medium text-[16px]">The Dandy Chair</h1>
          <p className="text-[14px] text-gray-600">£250</p>
        </div>
      </div>
  
      {/* Column 3 */}
      <div className="h-full">
        <div className=" h-full flex justify-center items-center">
          <div className="md:w-96 w-60 md:h-[480px] h-[300px] relative transform hover:scale-105 transition-all duration-300">
            <Image
              src="/chair2.png"
              alt="silk"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        {/* Text below the image */}
        <div className="mt-4 text-start">
          <h1 className="font-medium text-[16px]">The Dandy Chair</h1>
          <p className="text-[14px] text-gray-600">£250</p>
        </div>
      </div>
    </div>
  
    {/* View Collection Button */}
    <div className='w-full py-10'>
      <button className="bg-[#F9F9F9] m-auto flex justify-center items-center text-black hover:bg-slate-500 mt-8 px-8 py-3 font-normal">
        View Collection
      </button>
    </div>
  </div>
  


  );
};

export default Product;