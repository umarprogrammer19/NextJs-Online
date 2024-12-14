"use client";
import React, { useRef, useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState<string[]>([]);
    const getValue = useRef<HTMLInputElement>(null);

    function addTodo() {
        if (getValue.current?.value !== "") {
            todo.push(getValue.current!.value);
            setTodo([...todo]);
        } else {
            alert("input feild cannot be empty");
        }
    }
    return (
        <div className='w-screen h-screen bg-blue-600 relative flex justify-center items-center'>
            <h1 className='text-2xl text-white absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-7'>Todo Application</h1>
            <div className='w-[550px] h-[400px] bg-white p-4'>
                <div>
                    {/* input */}
                    <input type="text" className='border-2 border-black' ref={getValue} />
                    {/* Add Button */}
                    <button className='px-4 py-[6px] ms-4 active:scale-75 bg-black text-white' onClick={addTodo}>Add Todo</button>
                </div>
                <ul>
                    {todo.map((val) => {
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Todo