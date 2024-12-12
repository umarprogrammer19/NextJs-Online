import React from 'react'

function Navbar(props: { bgColor: string }) {
    return (
        <div style={{
            backgroundColor: props.bgColor,
        }} className={` w-screen h-[70px]`}></div>
    )
}

export default Navbar