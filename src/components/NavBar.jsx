import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export default function NavBar() {


  return (
    <div className='w-[80%] mx-auto h-[100px] text-white flex justify-between items-center border-b border-[#979797]'>
        <div>
            <p className='font-bold text-2xl'>audiophile</p>
        </div>
        <ul className='flex gap-10 text-sm tracking-wider'>
            <Link to="/"><li className='hover:text-[#D87D4A] cursor-pointer'>HOME</li></Link>
            <Link to="/categories/headphones"><li className='hover:text-[#D87D4A] cursor-pointer'>HEADPHONES</li></Link>
            <Link to="/categories/speakers"><li className='hover:text-[#D87D4A] cursor-pointer'>SPEAKERS</li></Link>
            <li className='hover:text-[#D87D4A] cursor-pointer'>EARPHONES</li>
        </ul>
        <div>
            <AiOutlineShoppingCart className='text-2xl' />
        </div>
    </div>
  )
}
