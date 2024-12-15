"use client";
import { useRef, useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState<string[]>([]);
    const getValue = useRef<HTMLInputElement>(null);

    // Add Function
    function addTodo() {
        if (getValue.current?.value !== "") {
            todo.push(getValue.current!.value);
            setTodo([...todo]);
            getValue.current!.value = "";
        } else {
            alert("Please Enter a value");
        }
    }

    // Delete
    function deleteTodo(index: number) {
        todo.splice(index, 1);
        setTodo([...todo]);
    }

    // Edit 
    function editTodo(index: number) {
        const newValue = prompt("Enter a Value", todo[index]);
        if (newValue) {
            todo.splice(index, 1, newValue!);
            setTodo([...todo]);
        } else {
            alert("Please Enter a Value");
        }
    }

    return (
        <div className='p-10'>
            {/* Input Feild */}
            <input type="text" placeholder='Enter Anything' className='border-2 border-black px-2' ref={getValue} />

            {/* Add Button */}
            <button className='px-4 py-1 bg-blue-600 text-white active:scale-90' onClick={addTodo}>Add Todo</button>

            {/* Lists (Data) */}
            <ul>
                {todo.map((item, index) => <li className='mb-4' key={item}>
                    {/* List Item */}
                    {item}
                    {/* Delete Button */}
                    <button className="px-4 py-1 bg-red-600 text-white active:scale-95 ms-4" onClick={() => deleteTodo(index)}>Delete</button>
                    {/* Edit Button */}
                    <button className="px-4 py-1 bg-green-600 ms-2 text-white active:scale-95" onClick={() => editTodo(index)}>Edit</button>
                </li>)}
            </ul>
            {/* Delete All */}
            <button className="px-4 py-1 bg-black ms-2 text-white active:scale-95" onClick={() => setTodo([])}>Delete All</button>
        </div>
    );
};

export default Todo;
