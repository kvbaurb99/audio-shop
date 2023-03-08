import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function NavBar() {
  return (
    <div className='w-[80%] mx-auto h-[100px] text-white flex justify-between items-center border-b border-[#979797]'>
        <div>
            <p className='font-bold text-2xl'>audiophile</p>
        </div>
        <ul className='flex gap-10 text-sm'>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
        </ul>
        <div>
            <AiOutlineShoppingCart className='text-2xl' />
        </div>
    </div>
  )
}
