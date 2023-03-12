import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import Cart from './Cart'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MobileMenu from './MobileMenu'


export default function NavBar({cart, setCart}) {

  const [showCart, setShowCart] = useState(false)
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  const handleCart = () => {
    setShowCart(true)
  }

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of page
  }, [location]);

  return (
    <div className='relative w-full mx-auto h-[100px] text-white flex justify-around items-center border-b border-[#979797]/30 bg-[#141414]'>
        <div onClick={handleMenu} className='block md:hidden'>
          <AiOutlineMenu className='text-2xl' />
        </div>
        <div>
            <Link to='/'><p className='font-bold text-2xl hover:animate-pulse hover:text-[#D87D4A] tracking-wider'>audiophile</p></Link>
        </div>
        <ul className='md:flex hidden gap-10 text-sm tracking-wider'>
            <Link to="/"><li className='hover:text-[#D87D4A] cursor-pointer'>HOME</li></Link>
            <Link to="/categories/headphones"><li className='hover:text-[#D87D4A] cursor-pointer'>HEADPHONES</li></Link>
            <Link to="/categories/speakers"><li className='hover:text-[#D87D4A] cursor-pointer'>SPEAKERS</li></Link>
            <Link to="/categories/earphones"><li className='hover:text-[#D87D4A] cursor-pointer'>EARPHONES</li></Link>
        </ul>
        <div className='relative'>
            <AiOutlineShoppingCart onClick={handleCart} className='text-2xl cursor-pointer hover:text-[#D87D4A]' />
            { cart.length <= 0 ? null : <div className='absolute top-3 left-4 z-10 bg-red-600 p-1 w-[15px] h-[15px] rounded-full flex justify-center items-center text-xs'>{cart.length}</div>}
        </div>
        { showCart ?
        <Cart setShowCart={setShowCart} cart={cart} setCart={setCart} />
        : null
        }
        {showMenu ? <MobileMenu /> : null}
    </div>
  )
}
