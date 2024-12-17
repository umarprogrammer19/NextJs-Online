"use client";
import React, { useRef, useState } from 'react'

interface Data {
    title: string;
    amount: number;
}

export default function Expense() {
    
    const [data, setData] = useState<Data[]>([]);

    const getTitle = useRef<HTMLInputElement>(null)
    const getAmount = useRef<HTMLInputElement>(null)

    const add = () => {
        data.push({
            title: getTitle.current!.value,
            amount: Number(getAmount.current!.value)
        });
        setData([...data]);
    }
    return (
        <>
            <div className='m-10 flex gap-4'>
                <input type="text" className='border border-black px-2' ref={getTitle} placeholder='Enter Item' />
                <input type="number" className='border border-black px-2' ref={getAmount} placeholder='Enter Amount' />
                <button className='px-4 py-1 bg-slate-700 text-white' onClick={add}>Add Expense</button>

            </div>
            <ul className='m-10'>
                {data.map(item => <div className='mb-5'>
                    <h1>Title {item.title}</h1>
                    <h1>amount {item.amount}</h1>
                </div>)}
            </ul>
        </>
    )
}
