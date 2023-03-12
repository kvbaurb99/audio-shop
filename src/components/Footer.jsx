import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

export default function Footer() {

    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of page
      }, [location]);

  return (
    <div className='w-full h-screen md:h-[360px] bg-[#141414] mt-[10%] text-white relative'>
        <div className='h-full flex flex-col justify-around md:justify-center md:ml-[15%]'>
            <div className='flex md:flex-row flex-col items-center w-full md:justify-between md:mt-0'>
                <div>
                    <p className='text-2xl font-bold tracking-wide'>audiophile</p>
                </div>
                <div className='md:mr-[15%] mt-[15%] md:mt-0'>
                    <ul className='flex md:flex-row flex-col md:w-auto w-full items-center text-sm gap-7 tracking-widest'>
                        <Link to='/'><li className='hover:text-[#D87D4A] cursor-pointer'>HOME</li></Link>
                        <Link to ='/categories/headphones'><li className='hover:text-[#D87D4A] cursor-pointer'>HEADPHONES</li></Link>
                        <Link to='/categories/speakers'><li className='hover:text-[#D87D4A] cursor-pointer'>SPEAKERS</li></Link>
                        <Link to='/categories/earphones'><li className='hover:text-[#D87D4A] cursor-pointer'>EARPHONES</li></Link>
                    </ul>
                </div>
            </div>
            <p className='md:mt-8 text-sm leading-[1.6] text-white/50 md:w-[490px] text-center md:text-left w-[90%] mx-auto md:-mx-0'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            <p className='md:mt-8 text-white/50 text-sm text-center md:text-left'>Copyright 2023. All Rights Reserved</p>
        </div>
    </div>
  )
}
