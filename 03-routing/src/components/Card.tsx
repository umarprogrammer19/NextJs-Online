import React from 'react';

interface Card {
    title: string;
    description: string;
    discount?: number;
}

function Card(props:Card) {
    return (
        <div className='w-40 h-40 border border-black m-10'>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <p>{props.discount}</p>
        </div>
    )
}

export default Card;