import Link from 'next/link';
import React from 'react';


function Navbar() {
    return (
        <div className='w-screen flex justify-center h-[70px] bg-black text-white'>
            <div className='w-[80%] flex justify-between items-center'>
            <div>
                <h1>Logo</h1>
            </div>
            <div className='flex gap-10 text-xl text-yellow-500'>
                {/* <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Service</p> */}
                {/* Href ====> Hyper reference */}
                <Link href={"/"}>Home</Link>
                <Link href={"/About"}>About</Link>
                <Link href={"/Contact"}>Contact</Link>
                <Link href={"/login"}>Login</Link>
                <Link href={"/signup"}>SignUp</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar