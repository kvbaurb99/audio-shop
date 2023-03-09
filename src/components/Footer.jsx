import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='w-full h-[360px] bg-[#141414] mt-[10%] text-white relative'>
        <div className='h-full flex flex-col justify-center ml-[15%]'>
            <div className='flex items-center w-full justify-between'>
                <div>
                    <p className='text-2xl font-bold tracking-wide'>audiophile</p>
                </div>
                <div className='mr-[15%]'>
                    <ul className='flex text-sm gap-7 tracking-wider'>
                        <Link to='/'><li className='hover:text-[#D87D4A] cursor-pointer'>HOME</li></Link>
                        <Link to ='/categories/headphones'><li className='hover:text-[#D87D4A] cursor-pointer'>HEADPHONES</li></Link>
                        <li className='hover:text-[#D87D4A] cursor-pointer'>SPEAKERS</li>
                        <li className='hover:text-[#D87D4A] cursor-pointer'>EARPHONES</li>
                    </ul>
                </div>
            </div>
            <p className='mt-8 text-sm leading-[1.6] text-white/50 w-[490px]'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            <p className='mt-8 text-white/50 text-sm'>Copyright 2021. All Rights Reserved</p>
        </div>
    </div>
  )
}
