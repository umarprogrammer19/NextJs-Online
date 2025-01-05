"use client";
import React, { useState } from "react";
import { Italiana } from "next/font/google";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#E4D7CA] text-blue-900 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-6 md:p-8 flex-row items-center justify-between">
          {/* Logo or Title */}
          <span
            className={`text-3xl md:text-5xl font-extrabold tracking-tight cursor-pointer hover:text-blue-600
                 transition duration-300 ${italiana.className}`}
          >
            MY Shop
          </span>

          {/* Hamburger Menu Icon */}
          <button
            className="inline-flex items-center justify-center md:hidden p-2 rounded-md focus:outline-none
             hover:bg-blue-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  className="sm:mt-11"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                  className="pt-12"
                />
              )}
            </svg>
          </button>

          {/* Navigation */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6 mt-4 md:mt-0`}
          >
            <Link
              href="/"
              className="block text-lg font-medium hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:border-b-2 hover:border-blue-500 pb-1 md:inline-block"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-lg font-medium hover:text-blue-500 transition duration-300 ease-in-out 
              transform hover:scale-105 hover:border-b-2 hover:border-blue-500 pb-1 md:inline-block"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="block text-lg font-medium hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:border-b-2 hover:border-blue-500 pb-1 md:inline-block"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="white"
                className="ml-[22rem]"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg> */}
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription><nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6 mt-4 md:mt-0`}
          >
            <Link
              href="/"
              className="block text-lg font-medium hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:border-b-2 hover:border-blue-500 pb-1 md:inline-block"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-lg font-medium hover:text-blue-500 transition duration-300 ease-in-out 
              transform hover:scale-105 hover:border-b-2 hover:border-blue-500 pb-1 md:inline-block"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="block text-lg font-medium hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:border-b-2 hover:border-blue-500 pb-1 md:inline-block"
            >
              Contact
            </Link>
          </nav></SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
