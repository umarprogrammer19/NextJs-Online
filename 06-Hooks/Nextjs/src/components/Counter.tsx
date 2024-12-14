"use client";
import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);
    function addValue() {
        setCounter(counter + 1);
    }
    function decValue() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }
    function reset() {
        setCounter(0);
    }
    return (
        <div className='border border-black w-64 h-28 bg-blue-400 mx-auto'>
            <h1 className='text-center text-2xl'>{counter}</h1>
            <div className='w-full flex gap-4 justify-center mt-6'>
                <button onClick={addValue} className='bg-green-600 px-4 py-2 ms-2 active:scale-90'>+</button>
                <button onClick={decValue} className='bg-red-600 px-4 py-2 ms-2 active:scale-90'>-</button>
                <button onClick={reset} className='bg-purple-600 px-4 py-2 ms-2 active:scale-90 text-white'>Reset</button>
            </div>
        </div>
    )
}

export default Counter