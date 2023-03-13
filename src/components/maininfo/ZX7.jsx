import React from 'react'
import { Link } from 'react-router-dom'
import Speaker from '../assets/home/desktop/image-speaker-zx7.jpg'

export default function ZX7() {
  return (
    <div className='w-full h-[300px] relative'>
        <img src={Speaker} className='w-full h-[300px] rounded-lg object-cover md:object-none' alt='product' />
        <div className='absolute top-1/2 left-[10%] flex flex-col'>
            <p className='text-3xl font-bold'>ZX7 SPEAKER</p>
            <Link to='/speakers/zx7-speaker'><button className='border border-black border-solid text-xs py-3 px-4 mt-4 font-bold hover:bg-black hover:text-white duration-700'>SEE PRODUCT</button></Link>
        </div>
    </div>
  )
}
