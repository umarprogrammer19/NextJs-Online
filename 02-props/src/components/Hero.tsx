import Image from 'next/image';
import React from 'react';
function Hero() {
    return (
        <div className='w-screen h-[440px] flex justify-center'>
            {/* Hero Section */}
            <div className='w-[80%] h-64 mt-10 flex justify-between'>
                {/* Left Side */}
                <div className='w-[180px] space-y-4'>
                    {/* 1st Heading */}
                    <div className='flex justify-between w-full items-center'>
                        <p>Womans Fashion</p>
                        <Image src={"/RightArrow.png"} alt='None' width={100} height={100} className='w-2 h-3' />
                    </div>
                    {/* 2nd Heading */}
                    <div className='flex justify-between w-full items-center'>
                        <p>Mens Fashion</p>
                        <Image src={"/RightArrow.png"} alt='None' width={100} height={100} className='w-2 h-3' />
                    </div>
                    {/* Remaining Fashions */}
                    <p>Womans Fashion</p>
                    <p>Mens Fashion</p>
                    <p>Womans Fashion</p>
                    <p>Mens Fashion</p>
                    <p>Womans Fashion</p>
                    <p>Mens Fashion</p>
                </div>
                {/* Left Side End */}
                {/* Right Side Image */}
                <div className='w-[800px] h-[340px]'>
                    <Image src={'/Hero.png'} alt='Hero' width={1000} height={1000} className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero