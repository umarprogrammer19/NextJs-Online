import React from 'react';
import { blogsData } from "@/blogs";
import Link from 'next/link';
function Blogs() {
    return (
        <div className='w-screen flex flex-col justify-center'>
            <h1 className='text-center text-2xl'>All Blogs</h1>
            <div className='w-[80%] flex justify-center flex-wrap'>
                {blogsData.map((blog) => <div key={blog.id} className='w-[30%] border border-black p-4 space-y-4'>
                    <h1>{blog.author}</h1>
                    <h1>{blog.date}</h1>
                    <h1>{blog.title}</h1>
                    <h1>{blog.content}</h1>
                   
                    <Link href={`/${blog.id}`} className='text-blue-800 text-xl'>View More</Link>
                </div>)}
            </div>
        </div>
    )
}
export default Blogs