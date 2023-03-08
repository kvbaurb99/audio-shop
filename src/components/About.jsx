import React from 'react'
import Photo from '../assets/shared/desktop/image-best-gear.jpg'

export default function About() {
  return (
    <div className='w-[60%] mx-auto mt-[10%] h-[550px] relative'>
        <div className='h-[600px] justify-center flex flex-col w-[400px]'>
            <p className='text-4xl font-bold'>BRINGING YOU THE <span className='text-[#D87D4A]'>BEST</span> AUDIO GEAR</p>
            <p className='w-[450px] mt-6'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <div>
            <img src={Photo} className='absolute right-0 top-0 rounded-lg h-[550px]' />
        </div>
    </div>
  )
}
