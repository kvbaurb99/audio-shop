import React from 'react'
import { Link } from 'react-router-dom'

export default function EarphoneProduct({name, description, image, category, slug}) {
  return (
    <div className='w-full md:h-[500px] flex flex-col md:flex-row md:items-center md:justify-around mt-[20%] md:mt-10'>
      <div className='w-full md:hidden block mx-auto'>
        <img src={require(`${image}`)} className="md:w-[350px] w-[300px] mx-auto h-[300px] object-cover" />
      </div>
      <div className='md:w-[50%] md:block flex flex-col items-center'>
        <p className='tracking-widest text-[#D87D4A] mt-[10%] md:mt-0'>NEW PRODUCT</p>
        <p className='font-bold text-3xl md:text-5xl md:w-[300px] tracking-wider mt-4 text-center md:text-left'>{name}</p>
        <p className='text-sm w-full md:w-[400px] mt-4 text-black/50 text-center md:text-left'>{description}</p>
        <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] text-xs px-10 py-3 text-white mt-4 hover:bg-[#FBAF85] duration-700'>SEE NOW</button></Link>
      </div>
      <div className='w-[50%] hidden md:block'>
        <img src={require(`${image}`)} className="w-[350px]" />
      </div>
    </div>
  )
}
