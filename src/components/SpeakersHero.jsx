import React from 'react'
import NavBar from './NavBar'

export default function SpeakersHero() {
  return (
    <div className='w-full h-[340px] bg-[#141414]'>
        <NavBar />
    <div className='w-full h-[240px] flex justify-center items-center'>
        <p className='text-white font-bold text-3xl tracking-widest'>SPEAKERS</p>
    </div>
</div>
  )
}
