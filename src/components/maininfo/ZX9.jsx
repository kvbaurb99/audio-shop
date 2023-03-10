import React from 'react'
import { Link } from 'react-router-dom'
import Speaker from '../assets/home/desktop/image-speaker-zx9.png'

export default function ZX9() {
  return (
    <div className='bg-[#D87D4A] h-[500px] w-full rounded-lg flex overflow-hidden relative'>
    <div>
        <svg width="944" height="550" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg>
        <img src={Speaker} className='w-[350px] absolute bottom-0 left-[26%] top-[17%]' />
    </div>
    <div className='absolute right-[5%] w-[350px] text-white top-[23%]'>
        <p className='text-5xl font-bold tracking-wider'>ZX9</p>
        <p className='text-5xl font-bold tracking-wider'>SPEAKER</p>
        <p className='text-white/75 text-sm w-[320px] mt-4 tracking-wide'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to='/speakers/zx9-speaker'><button className='mt-6 bg-black px-7 py-3 text-sm tracking-wide hover:bg-[#4C4C4C]'>SEE PRODUCT</button></Link>
    </div>
</div>
  )
}
