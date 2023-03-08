import React from 'react'
import HeroInfo from './HeroInfo'
import NavBar from './NavBar'

export default function Hero() {
  return (
    <div className='w-full h-[700px] bg-[#141414]'>
        <NavBar />
        <HeroInfo />
    </div>
  )
}
