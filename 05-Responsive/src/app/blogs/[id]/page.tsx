"use client";
import { useParams } from 'next/navigation';
import React from 'react';
import { blogs } from "@/Data/blogs";

function SingleBlog() {
    const { id } = useParams();
    const blog = blogs[Number(id) - 1];
    return (
        <div className='border-2 border-black space-y-4 p-4 m-2 w-[400px] h-[300px]'>
            <h1>{blog.title}</h1>
            <h1>{blog.author}</h1>
            <h1>{blog.date}</h1>
            <h1>{blog.content}</h1>
        </div>
    )
}

export default SingleBlog;