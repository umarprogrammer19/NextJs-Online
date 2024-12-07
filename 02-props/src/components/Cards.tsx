import React from 'react';
interface Cards {
    title: string;
    day: string;
    date: string | number;
}
// FC = Function Component
const Cards: React.FC<Cards> = (props) => {
    return (
        <div className='border border-black w-40 h-40 p-3 m-5'>
            <h1>{props.title}</h1>
            <h1>{props.day}</h1>
            <h1>{props.date}</h1>
        </div>
    )
}
export default Cards;