import React from 'react';
import image1 from '../assests/team.png'

const About = () => {
  return (
    <div className='w-full bg-white py-20 px-4'>
      <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={image1} alt="/" />
      <div className='px-8 flex flex-col justify-center '>
        <p className='font-bold text-3xl font-serif'>The Big Data Organization</p>
        <h1 className='font-serif font-bold'>Manage Big Data Analytics Centrally</h1>
        <p className='text-serif space '>Teamwork refers to when more people work together to accomplish a common goal.Teamwork is the unbreakable strength of every task.</p>
        <button className='text-green-500 font-bold font-serif bg-black w-[200px] rounded-xl mx-auto py-2 mt-3 '>Get Started</button>
      </div>

      </div>

    </div>
  )
}

export default About