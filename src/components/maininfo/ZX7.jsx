import React from 'react'
import Speaker from '../assets/home/desktop/image-speaker-zx7.jpg'

export default function ZX7() {
  return (
    <div className='w-full h-[300px] relative'>
        <img src={Speaker} className='w-full h-[300px] rounded-lg' />
        <div className='absolute top-1/2 left-[10%] flex flex-col'>
            <p className='text-3xl font-bold'>ZX7 SPEAKER</p>
            <button className='border border-black border-solid text-xs py-3 px-4 mt-4 font-bold hover:bg-black hover:text-white'>SEE PRODUCT</button>
        </div>
    </div>
  )
}
