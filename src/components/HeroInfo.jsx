import React from 'react'
import HomeImage from './assets/home/desktop/image-hero.jpg'

export default function HeroInfo() {
  return (
    <div className='w-[80%] mx-auto flex h-[600px] items-center relative'>
        <div className='max-w-[440px] text-white relative z-50'>
            <p className='tracking-widest text-white/50'>NEW PRODUCT</p>
            <p className='text-6xl font-bold tracking-widest mt-4'>XX99 MARK II HEADPHONES</p>
            <p className='mt-4 tracking-wide max-w-[400px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button className='bg-[#D87D4A] mt-4 px-12 py-3 text-sm hover:bg-[#FBAF85]'>SEE PRODUCT</button>
        </div>
        <div>
            
        </div>    
    </div>
  )
}
