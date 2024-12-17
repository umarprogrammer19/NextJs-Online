"use client";
import { blogsData } from '@/blogs';
import { useParams } from 'next/navigation';
import React from 'react'

function SingleBlog() {
    const { id } = useParams();
    const data = blogsData[Number(id) - 1];

    return (
        <div className='border border-teal-500 p-4 w-[300px] m-10'>
            {data ? <>
                <h1>{data.author}</h1>
                <h1>{data.date}</h1>
                <h1>{data.title}</h1>
                <h1>{data.content}</h1></> : <h1>Data Not Found</h1>}
        </div>
    )
}
export default SingleBlog