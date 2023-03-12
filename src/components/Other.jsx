import React from 'react'
import { Link } from 'react-router-dom'

export default function Other({name, image, category, slug}) {
  return (
    <div className='md:w-[33.3%] md:h-[480px] flex flex-col items-center mt-[20%] md:mt-0'>
        <img src={require(`${image}`)} className='w-full' />
        <p className='text-center text-2xl font-bold tracking-wider mt-2'>{name}</p>
        <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] py-3 md:py-2 px-6 text-sm text-white mt-8 hover:bg-[#FBAF85] duration-700'>SEE PRODUCT</button></Link>
    </div>
  )
}
