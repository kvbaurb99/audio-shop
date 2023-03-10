import React from 'react'
import HeroInfo from './HeroInfo'
import NavBar from './NavBar'

export default function Hero({cart, setCart}) {
  return (
    <div className='w-full h-[700px] bg-[#141414]'>
        <NavBar cart={cart} setCart={setCart} />
        <HeroInfo />
    </div>
    
  )
}
