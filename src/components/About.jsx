import React from 'react'
import Photo from './assets/shared/desktop/image-best-gear.jpg'

export default function About() {
  return (
    <div className='md:w-[60%] w-[80%] flex mx-auto mt-[10%] md:h-[550px] relative justify-between flex-col md:flex-row'>
        <div>
            <img src={Photo} className='rounded-lg h-[400px] md:h-[550px] object-cover w-full md:w-auto md:hidden' alt='photo' />
        </div>
        <div className='md:h-[600px] justify-center flex flex-col md:items-start items-center md:w-[500px] h-[450px] mt-[20%] md:mt-0'>
            <p className='md:text-4xl font-bold tracking-wider w-[80%] md:w-auto text-center md:text-left text-3xl'>BRINGING YOU THE <span className='text-[#D87D4A] font-bold'>BEST</span> AUDIO GEAR</p>
            <p className='md:w-[450px] mt-6 leading-[1.7] text-black/50 w-[90%] text-center md:text-left'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <div>
            <img src={Photo} className='rounded-lg h-[400px] md:h-[550px] object-cover w-full md:w-auto md:block hidden' alt='photo' />
        </div>
    </div>
  )
}
