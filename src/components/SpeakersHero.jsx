import React from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react';

export default function SpeakersHero({cart, setCart}) {

  useEffect(() => {
    const formContainer = document.querySelector('.text');
    formContainer.classList.add('slide-from-left');
    
  }, []);


  return (
    <div className='w-full h-[340px] bg-[#141414]'>
        <NavBar cart={cart} setCart={setCart} />
    <div className='w-full h-[240px] flex justify-center items-center'>
        <p className='text-white font-bold text-3xl tracking-widest text'>SPEAKERS</p>
    </div>
</div>
  )
}
