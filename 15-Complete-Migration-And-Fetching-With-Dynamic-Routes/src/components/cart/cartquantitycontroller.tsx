"use client"
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Cartquantitycontroller = ({ price }: { price: number }) => {
    const [quantity, setQuantity] = useState(1)
    return (
        <>
            <div className="col-span-1 m-auto border-2 xs:px-4 px-2 py-2 border-zinc-300 rounded-md flex xs:gap-4 gap-3 items-center">
                <span className="xs:text-base text-xs">{quantity.toString().length > 1 ? quantity : "0" + quantity}</span>
                <div className="flex flex-col xs:text-[0.6rem] text-[0.5rem]">
                    <span onClick={() => setQuantity(quantity + 1)}><FaAngleUp /></span>
                    <span onClick={() => quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)}><FaAngleDown /></span>
                </div>
            </div>
            <div className="col-span-1 m-auto xs:text-base text-sm">${price * quantity}</div>
        </>
    )
}

export default Cartquantitycontroller