import React from 'react'
import { Link } from 'react-router-dom'

export default function SpeakerProduct({name, image, description, category, slug}) {
  return (
    <div className='w-full h-[560px] flex items-center justify-around'>
        { name === 'ZX9 Speaker' ? 
        <>
        <div className='w-[30%]'>
            <img src={require(`${image}`)} className="w-[350px]" />
        </div>
      <div className='w-[50%]'>
        <p className='tracking-widest text-[#D87D4A]'>NEW PRODUCT</p>
        <p className='font-bold text-5xl w-[300px] tracking-wider mt-4'>{name}</p>
        <p className='text-sm w-[400px] mt-4 text-black/50'>{description}</p>
        <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] text-xs px-10 py-3 text-white mt-4 hover:bg-[#FBAF85] duration-700'>SEE NOW</button></Link>
      </div>
      </>
      :
      <>
      <div className='w-[30%]'>
      <p className='font-bold text-5xl w-[300px] tracking-wider mt-4'>{name}</p>
      <p className='text-sm w-[400px] mt-4 text-black/50'>{description}</p>
      <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] text-xs px-10 py-3 text-white mt-4 hover:bg-[#FBAF85] duration-700'>SEE NOW</button></Link>
    </div>
    <div className='w-[50%]'>
      <img src={require(`${image}`)} className="w-[350px]" />
    </div>
    </>
        }
    </div>
  )
}
