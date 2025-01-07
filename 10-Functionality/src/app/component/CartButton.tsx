"use client";
import React from "react";
import { Products } from "@/Data";

function CartButton({ cartItem }: { cartItem: Products }) {
    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingItem = cartItems.find((item: Products) => item.id === cartItem.id);

        if (existingItem) {
            const updatedCart = cartItems.map((item: Products) =>
                item.id === cartItem.id ? { ...item } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            localStorage.setItem(
                "cart",
                JSON.stringify([...cartItems, { ...cartItem }])
            );
        }
        alert("Item added to cart!");
    };

    return (
        <button
            className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white"
            onClick={addToCart}
        >
            Add to cart
        </button>
    );
}

export default CartButton;
