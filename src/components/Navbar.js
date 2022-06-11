import React from 'react'

export const Navbar = () => {

    return (
        <div className='flex justify-between cursor-pointer font-bold items-center h-24 max--w[1240px] px-6 text-white'>
            <h1 className='text-3xl w-full font-serif font-bold text-green-500'>React</h1>
            <ul className='flex font-serif'>
            <li>
            <a href="#" className="p-4 hover:text-green-500 ">Home</a>
        </li>
        <li>
            <a href="#" className="p-4 hover:text-green-500">About</a>
        </li>
        
        <li>
            <a href="#" className='p-4 hover:text-green-500'>Contact</a>
        </li>
            </ul>

        </div>
    )
}
