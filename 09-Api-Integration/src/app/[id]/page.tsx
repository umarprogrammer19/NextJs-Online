import Comment from '@/components/comment';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const data = await fetch("http://localhost:8000/blogs");
    const res = await data.json();
    const blogs = res.blogs[Number(id) - 1];


    return <>
        <div className='border border-black p-4 m-10 w-64 h-64'>
            <h1>{blogs.author}</h1>
            <h1>{blogs.date}</h1>
            <h1>{blogs.title}</h1>
            <h1>{blogs.content}</h1>
        </div>
        <Comment />
    </>;
}