import React from 'react'
import { Link } from 'react-router-dom'

export default function Other({name, image, category, slug}) {
  return (
    <div className='w-[33.3%] h-[480px] flex flex-col items-center'>
        <img src={require(`${image}`)} className='w-full' />
        <p className='text-center text-2xl font-bold tracking-wider mt-2'>{name}</p>
        <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] py-2 px-6 text-sm text-white mt-8'>SEE PRODUCT</button></Link>
    </div>
  )
}
