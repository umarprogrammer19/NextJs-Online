import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CeramicsProps {
  heading?: string; // Optional heading
}

const Ceramics2: React.FC<CeramicsProps> = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-20">
      {/* Responsive Grid Columns */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <Link href="/products/1">
            <div className="bg-[#F5F5F5] flex justify-center items-center">
              <div className="w-full h-[375px] relative transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/hero.png"
                  alt="hero"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
          {/* Text below the image */}
          <div className="mt-4 text-start">
            <h1 className="font-medium text-base sm:text-lg">The Dandy Chair</h1>
            <p className="text-sm sm:text-base text-gray-600">£250</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <Link href="/products">
            <div className="bg-[#F5F5F5] flex justify-center items-center">
              <div className="w-full h-[375px] relative transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/Parent.png"
                  alt="parent"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
          <div className="mt-4 text-start">
            <h1 className="font-medium text-base sm:text-lg">Rustic Vase Set</h1>
            <p className="text-sm sm:text-base text-gray-600">£155</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <Link href="/products">
            <div className="bg-[#F5F5F5] flex justify-center items-center">
              <div className="w-full h-[375px] relative transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/silk.png"
                  alt="silk"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
          <div className="mt-4 text-start">
            <h1 className="font-medium text-base sm:text-lg">The Silky Vase</h1>
            <p className="text-sm sm:text-base text-gray-600">£125</p>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <Link href="/products">
            <div className="bg-[#F5F5F5] flex justify-center items-center">
              <div className="w-full h-[375px] relative transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/lamp.png"
                  alt="lamp"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
          <div className="mt-4 text-start">
            <h1 className="font-medium text-base sm:text-lg">The Lucy Lamp</h1>
            <p className="text-sm sm:text-base text-gray-600">£399</p>
          </div>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="mt-8 flex justify-center lg:justify-start">
        <button className="bg-[#F9F9F9] h-[56px] w-[200px] flex justify-center items-center text-black hover:bg-gray-300 transition-all">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default Ceramics2;
