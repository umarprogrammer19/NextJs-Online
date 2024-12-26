import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillSkype } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
  
const Footer = () => {
  return (
    <div>
      <div className="bg-[#2A254B] w-full  text-white py-20  sm:px-8 lg:px-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:px-16">
          
          <div className="w-full">
            <h1 className="font-normal text-[16px] text-[#FFFFFF] mb-4">
              Menu
            </h1>
            <h2 className="font-normal mb-4">New arrivals</h2>
            <h2 className="font-normal mb-4">Best sellers</h2>
            <h2 className="font-normal mb-4">Recently viewed</h2>
            <h2 className="font-normal mb-4">Popular this week</h2>
            <h2 className="font-normal mb-4">All products</h2>
          </div>

          {/* Categories Section */}
          <div className="w-full">
            <h1 className="font-normal text-[16px] text-[#FFFFFF] mb-4">
              Categories
            </h1>
            <h2 className="font-normal mb-4">Crockery</h2>
            <h2 className="font-normal mb-4">Furniture</h2>
            <h2 className="font-normal mb-4">Homeware</h2>
            <h2 className="font-normal mb-4">Plant pots</h2>
            <h2 className="font-normal mb-4">Crockery</h2>
          </div>

          {/* Our Company Section */}
          <div className="w-full">
            <h1 className="font-normal text-[16px] text-[#FFFFFF] mb-4">
              Our company
            </h1>
            <h2 className="font-normal mb-4">About us</h2>
            <h2 className="font-normal mb-4">Vacancies</h2>
            <h2 className="font-normal mb-4">Contact us</h2>
            <h2 className="font-normal mb-4">Privacy</h2>
            <h2 className="font-normal mb-4">Returns policy</h2>
          </div>
          {/* Mailing section */}
          <div className="w-full">
            <h1 className="font-normal text-[16px] text-[#FFFFFF] mb-4">
              Join our mailing list
            </h1>
            <span className="md:w-[500px] h-12 relative flex">
              <input
                type="text"
                className="h-full w-full bg-[#dbd6f8] px-4 focus:outline-none text-white"
                placeholder="your@email.com"
              />
              <button className="absolute top-0 right-0 h-full w-24 bg-white capitalize text-black text-sm">
                sign up
              </button>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
  <hr className="w-full border-b-2 border-[#4E4D93]" />
  <div className="flex justify-between items-center w-full mt-12">
    <h1 className="font-normal text-[14px] text-left">
      Copyright 2022 Avion LTD
    </h1>
    <div className="flex justify-end items-center gap-9">
      <CiLinkedin />
      <CiFacebook />
      <FaInstagramSquare />
      <AiFillSkype />
      <FaTwitter />
    </div>
  </div>
</div>


</div>
      </div>
  
  );
};

export default Footer;