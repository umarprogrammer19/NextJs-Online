"use client"
import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    function add() {
        setCounter(counter + 1)
    }
    function minus() {
        counter > 0 && setCounter(counter - 1);
    }
    function reset() {
        setCounter(0)
    }
    return (
        <div className='p-10'>
            <h1 className='text-4xl'>{counter}</h1>
            <button className='px-4 py-2 bg-black text-white me-4 active:scale-90' onClick={add}>+</button>
            <button className='px-4 py-2 bg-black text-white me-4 active:scale-90' onClick={minus}>-</button>
            <button className='px-4 py-2 bg-black text-white me-4 active:scale-90' onClick={reset}>reset</button>
        </div>
    )
}

export default Counter