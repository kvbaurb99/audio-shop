import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Cart from './Cart'


export default function NavBar({cart, setCart}) {

  const [showCart, setShowCart] = useState(false)

  const handleCart = () => {
    setShowCart(true)
  }

  return (
    <div className='w-full mx-auto h-[100px] text-white flex justify-around items-center border-b border-[#979797] bg-[#141414]'>
        <div>
            <Link to='/'><p className='font-bold text-2xl'>audiophile</p></Link>
        </div>
        <ul className='flex gap-10 text-sm tracking-wider'>
            <Link to="/"><li className='hover:text-[#D87D4A] cursor-pointer'>HOME</li></Link>
            <Link to="/categories/headphones"><li className='hover:text-[#D87D4A] cursor-pointer'>HEADPHONES</li></Link>
            <Link to="/categories/speakers"><li className='hover:text-[#D87D4A] cursor-pointer'>SPEAKERS</li></Link>
            <Link to="/categories/earphones"><li className='hover:text-[#D87D4A] cursor-pointer'>EARPHONES</li></Link>
        </ul>
        <div className='relative'>
            <AiOutlineShoppingCart onClick={handleCart} className='text-2xl cursor-pointer' />
            { cart.length <= 0 ? null : <div className='absolute top-3 left-4 z-10 bg-red-600 p-1 w-[15px] h-[15px] rounded-full flex justify-center items-center text-xs'>{cart.length}</div>}
        </div>
        { showCart ?
        <Cart setShowCart={setShowCart} cart={cart} setCart={setCart} />
        : null
        }
    </div>
  )
}
