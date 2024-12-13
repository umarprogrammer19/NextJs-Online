import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='w-screen h-[84px] flex justify-center'>
            <div className='w-[90%] lg:w-4/5 h-full flex justify-center md:justify-between items-center'>
                <div>
                    <Image src={"/Logo.png"} alt='none' width={500} height={500} className='xl:w-[200px] h-[40px] w-[140px] md:block hidden' />
                </div>
                <div className='space-x-6 xl:text-xl'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>
                    <Link href={"/"}>Services</Link>
                    <Link href={"/blogs"}>Blogs</Link>
                </div>
                <div className='space-x-6 xl:text-xl lg:block hidden'>
                    <button>Login</button>
                    <button>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar