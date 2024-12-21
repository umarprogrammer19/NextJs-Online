"use client";
import React, { useRef, useState } from 'react'

function Comment() {
    const [comment, setComment] = useState<string[]>([]);
    const getComment = useRef<HTMLTextAreaElement>(null);

    const add = () => {
        comment.push(getComment.current!.value);
        setComment([...comment]);
    }
    return (
        <div className='m-10'>
            <textarea className='outline outline-black' cols={50} rows={5} ref={getComment}></textarea>
            <button className='px-4 py-1 bg-yellow-400 text-black ms-4' onClick={add}>Comment</button>
            <ul>
                {comment.length > 0 && comment.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Comment