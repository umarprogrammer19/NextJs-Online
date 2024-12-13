import Image from 'next/image'
import React from 'react'

function Section2() {
    return (
        <div className='w-screen h-[600px] flex justify-center'>
            <div className='w-[75%] h-full flex flex-col lg:flex-row justify-between items-center mt-10 lg:mt-0'>
                <div className='w-full lg:w-[70%] flex items-center flex-col gap-8 lg:gap-16'>
                    <div className='flex flex-col gap-4 lg:gap-8 md:text-left text-center '>
                        <h1 className='text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold'>Lessons and insights <br /> <span className='text-green-600'> from 8 years</span> </h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                    </div>
                    <div>
                        <button className='px-6 py-2 bg-green-600 text-md text-white'>Register</button>
                    </div>
                </div>
                <div className='w-full lg:w-[30%] flex justify-center'>
                    <div className='xl:w-[391px] xl:h-[407px] w-[300px] h-[320px]'>
                        <Image src={"/Illustration.png"} alt='' width={1000} height={1000} className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2