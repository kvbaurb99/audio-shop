import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroInfo() {

  useEffect(() => {
    const formContainer = document.querySelector('.product');
    formContainer.classList.add('product-slide');
    
  }, []);
  

  useEffect(() => {
    const formContainer = document.querySelector('.image');
    formContainer.classList.add('hero-photo');
    
  }, []);

  return (
    <div className='w-[80%] mx-auto flex h-[600px] items-center relative'>
        <div className='max-w-[440px] text-white relative product'>
            <p className='tracking-widest text-white/50'>NEW PRODUCT</p>
            <p className='text-6xl font-bold tracking-widest mt-4'>XX99 MARK II HEADPHONES</p>
            <p className='mt-4 tracking-wide max-w-[400px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link to='/headphones/xx99-mark-two-headphones'><button className='bg-[#D87D4A] mt-4 px-12 py-3 text-sm hover:bg-[#FBAF85]  duration-700'>SEE PRODUCT</button></Link>
        </div>
        <div className='absolute right-[10%] opacity-80 image'>
            <img src="https://d287ku8w5owj51.cloudfront.net/images/products/hero/creative-outlier-black/pdt-mhl-creative-outlier-black-mobile.png?width=750" className='w-[400px] animate-pulse' />
        </div>    
    </div>
  )
}
