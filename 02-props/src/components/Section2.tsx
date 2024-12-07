import Image from 'next/image'
import React from 'react'

function Section2() {
    return (
        <div className='w-screen flex justify-center mb-96'>
            <div className='w-[80%]'>
                <div className='w-full flex flex-col'>
                    <div className='flex gap-4 items-center'>
                        <div className='h-8 w-4 bg-red-600 rounded-sm'></div>
                        <h1 className='text-red-700 font-bold'>Today&apos;s</h1>
                    </div>
                    <div className='flex items-end relative gap-20'>
                        <h1 className='text-3xl font-bold tracking-wider'>Flash Sales</h1>
                        <div className='flex items-center gap-4'>
                            <div>
                                <p>Days</p>
                                <h1 className='text-4xl font-bold'>03</h1>
                            </div>
                            <span className='text-red-400 text-5xl'>:</span>
                            <div>
                                <p>Hourse</p>
                                <h1 className='text-4xl font-bold'>23</h1>
                            </div>
                            <span className='text-red-400 text-5xl'>:</span>
                            <div>
                                <p>Minutes</p>
                                <h1 className='text-4xl font-bold'>19</h1>
                            </div>
                            <span className='text-red-400 text-5xl'>:</span>
                            <div>
                                <p>Seconds</p>
                                <h1 className='text-4xl font-bold'>56</h1>
                            </div>
                        </div>
                        <div className='flex absolute right-0'>
                            <Image src="/LA.png" alt="" width={50} height={50} />
                            <Image src="/RA.png" alt="" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;
