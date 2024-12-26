"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const [cart, setCart] = useState<any>();
  
  useEffect(() => {
    (async () => {
      const getCartItem = localStorage.getItem("item");
      if (getCartItem) {
        const response = await JSON.parse(getCartItem);
        setCart(response);
      };
    })();
  }, []);


  return (
    <div className="w-full px-4 md:px-20 bg-[#F9F9F9] py-8">
      <div>
        {/* Heading */}
        <h1 className="text-[28px] md:text-[36px] text-[#2A254B] font-normal mb-6">
          Your shopping cart
        </h1>

        {/* Flex Container Header for Product, Quantity, and Total */}
        <div className="hidden md:flex justify-between items-center mb-4">
          <p className="text-[14px] text-gray-600">Product</p>
          <p className="text-[14px] text-gray-600">Quantity</p>
          <p className="text-[14px] text-gray-600">Total</p>
        </div>

        {/* First Product */}
        {cart && <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
          {/* Product Section */}
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <Image src={cart.image} alt="silk" width={109} height={134} />
            <div>
              <h1 className="text-lg md:text-xl font-medium mb-2">
                {cart.name}
              </h1>
              <p className="text-[#2A254B] text-[14px] mb-2">
                A timeless ceramic vase with a tri-color grey glaze.
              </p>
              <p className="text-lg font-semibold">{cart.price}</p>
            </div>
          </div>

          {/* Quantity Section */}
          <div className="flex justify-center items-center gap-4">
            <Image src="/Stepper.png" alt="stepper" width={122} height={46} />
          </div>

          {/* Total Section */}
          <div className="text-lg font-semibold text-[#2A254B]">£85</div>
        </div>}

      </div>

      {/* Divider */}
      <hr className="w-full border-b-2 border-[#EBE8F4] mb-6" />

      {/* Subtotal Section */}
      <div className="w-full bg-white border border-[#EBE8F4] p-6 md:p-8">
        <div className="flex flex-col items-end">
          <div className="text-right mb-4">
            <h1 className="font-normal text-[#4E4D93] text-[20px] mb-2">
              Subtotal
            </h1>
            <p className="text-black text-lg font-normal">£210</p>
            <p className="text-sm text-[#4E4D93]">
              Taxes and shipping are calculated at checkout
            </p>
          </div>

          {/* Checkout Button */}
          <Link href="/">
            <button className="bg-[#2A254B] w-full md:w-[172px] h-[56px] text-white text-sm capitalize">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
