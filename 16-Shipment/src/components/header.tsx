import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full sm:py-4 sm:px-6 px-2 py-2 flex justify-between items-center border-b max-w-[1280px] m-auto'>
            <h1 className='sm:text-3xl text-xl font-bold'>Exclusive</h1>
            <div className='hidden md:flex gap-6 items-center w-fit'>
                <Link href="/" className='text-base hover:border-b-2 border-zinc-300'>Home</Link>
                <Link href="/contact" className='text-base hover:border-b-2 border-zinc-300'>Contact</Link>
                <Link href="/about" className='text-base hover:border-b-2 border-zinc-300'>About</Link>
                <Link href="/signup" className='text-base hover:border-b-2 border-zinc-300'>Sign Up</Link>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <div className='relative xs:block hidden'>
                    <input type="text" className='px-4 py-2 bg-zinc-100 rounded-lg placeholder:text-sm sm:w-64 w-56 focus:outline-none' placeholder='What are you looking for?'/>
                    <div className='w-6 h-6 sm:w-8 sm:h-8 overflow-hidden absolute top-1/2 -translate-y-1/2 right-2'>
                        <Image src={"/icons/search.png"} alt={"/icons/favorite.png"} width={600} height={600} className='w-full h-full object-cover' />
                    </div>
                </div>
                <Link href="/wishlist" className='w-6 h-6 sm:w-8 sm:h-8 overflow-hidden'>
                    <Image src={"/icons/favorite.png"} alt={"/icons/favorite.png"} width={600} height={600} className='w-full h-full object-cover' />
                </Link>
                <Link href={"/cart"} className='w-6 h-6 sm:w-8 sm:h-8 overflow-hidden'>
                    <Image src={"/icons/cart.png"} alt={"/icons/cart.png"} width={600} height={600} className='w-full h-full object-cover' />
                </Link>
            </div>
        </div>
    )
}

export default Header