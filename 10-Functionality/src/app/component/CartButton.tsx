"use client";
import { Products } from '@/Data';
import React from 'react'

function CartButton({ cartItem }: { cartItem: Products }) {

    const addToCart = () => {
        if (!cartItem) return;
        const CartItem = JSON.parse(localStorage.getItem("item") || "[]");
        const isProduct = CartItem.map((Item: Products) => Item.id === cartItem.id);
        let update;
        if (isProduct) {
            update = CartItem.map((item: Products) => item.id === cartItem.id ? { ...item } : item);
        } else {
            update = [...CartItem, isProduct];
        }
        localStorage.setItem("item", JSON.stringify(update));
    }
    return (
        <button className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white" onClick={addToCart}>
            Add to cart
        </button>
    )
}

export default CartButton