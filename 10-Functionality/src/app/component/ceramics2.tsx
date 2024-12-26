import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/Data';


interface CeramicsProps {
  heading?: string; // Marked as optional
}

const Ceramics2: React.FC<CeramicsProps> = () => {

  return (
    <div>
      {/* Responsive grid columns */}
      <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20">
        {products.map((product, index) => (
          <div key={product.id}>
            <Link href={`/products/${index}`}>
              <div className="bg-[#F5F5F5] flex justify-center items-center">
                <div className="w-[305px] h-[375px] relative transform hover:scale-105 transition-all duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
            {/* Text below the image */}
            <div className="mt-4 text-start">
              <h1 className="font-medium text-[16px]">{product.name}</h1>
              <p className="text-[14px] text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className='w-full py-6'>
        <button className="bg-[#F9F9F9] m-auto flex justify-center items-center text-black hover:bg-slate-500 mt-8 px-8 py-3 font-normal">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default Ceramics2;
