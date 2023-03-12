import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu() {
  return (
    <div className='absolute z-50 w-full bg-white h-[500px] top-[100px] rounded-bl-lg rounded-br-lg text-black md:hidden'>
        <ul className='w-full flex flex-col items-center text-2xl font-bold tracking-widest h-full justify-center gap-10'>
            <Link to='/'><li className='border-b border-black/50 w-[80%] text-center py-4'>HOME</li></Link>
            <Link to='/categories/headphones'><li className='border-b border-black/50 w-[80%] text-center py-4'>HEADPHONES</li></Link>
            <Link to='/categories/speakers'><li className='border-b border-black/50 w-[80%] text-center py-4'>SPEAKERS</li></Link>
            <Link to='/categories/earphones'><li className='border-b border-black/50 w-[80%] text-center py-4'>EARPHONES</li></Link>
        </ul>
    </div>
  )
}
