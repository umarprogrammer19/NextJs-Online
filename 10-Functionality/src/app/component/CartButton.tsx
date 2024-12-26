"use client";
import React from 'react'

function CartButton({ cartItem }: { cartItem: Object }) {

    const addToCart = () => {
        localStorage.setItem("item", JSON.stringify(cartItem))
    }
    return (
        <button className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white" onClick={addToCart}>
            Add to cart
        </button>
    )
}

export default CartButton