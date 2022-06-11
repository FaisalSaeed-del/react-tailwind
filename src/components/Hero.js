import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[100px] font-serif w-full h-screen mx-auto text-center flex flex-col'>
                <p className='text-green-500 text-3xl p-2'>Growing With IT Professionals</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl'>Grow with big Data</h1>
                <div className='flex items-center justify-center'>
                    <p className=' mt-2 md:text-3xl sm:text-2xl text-xl text-bold'>Faxt, felxible financing for</p>
                    <Typed className=' pl-2 text-green-500 mt-2 md:text-3xl sm:text-2xl text-xl text-bold' strings={['Python', 'Machine Learning', 'Data Science']} typeSpeed={130} backSpeed={140} loop />
                </div>
                <p className='text-gray-400 mt-4 hover:text-gray-300'>Monitor Your Big Data BTB,BTC and SAAS </p>
                <button className='text-black font-bold font-serif bg-green-500 w-[200px] rounded-xl mx-auto py-2 mt-3 '>Get Started</button>

            </div>

        </div>
    )
}

export default Hero