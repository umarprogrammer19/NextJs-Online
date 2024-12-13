import React from 'react';
import { blogs } from "@/Data/blogs";
import Link from 'next/link';

function AllBlogs() {
    return (
        <div className='w-screen mt-20 flex justify-center'>
            <div className='w-[90%] p-5 flex flex-wrap justify-center'>
                {blogs.length > 0 && blogs.map((blog) => {
                    return <div key={blog.id} className='border-2 border-black space-y-4 p-4 m-2 w-[400px] h-[300px]'>
                        <h1>{blog.title}</h1>
                        <h1>{blog.author}</h1>
                        <h1>{blog.date}</h1>
                        <h1>{blog.content}</h1>
                        <Link href={`/blogs/${blog.id}`} className='text-blue-700 text-xl relative top-16'>View More</Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllBlogs