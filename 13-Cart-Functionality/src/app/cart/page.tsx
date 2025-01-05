"use client";
import React, { useEffect, useState } from 'react'
import { IProduct } from '../products/[product]/page';
import Image from 'next/image';

function Cart() {
    // State For Data 
    const [data, setData] = useState<IProduct[]>();
    useEffect(() => {
        (async () => {
            const item = localStorage.getItem("item");
            if (item) {
                const cartItem = await JSON.parse(item);
                setData(cartItem);
            }
        })()
    }, []);

    return (
        <div className='h-screen'>
            {data && data.map((item: IProduct) => <div className='border border-black flex gap-4'>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <h1>{item.price}</h1>
                <Image src={item.image} alt="" width={100} height={100} />
            </div>)}
        </div>
    )
}

export default Cart;