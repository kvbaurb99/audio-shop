import React from 'react'
import { Link } from 'react-router-dom'




export default function XX99M1({name, description, image, category, slug}) {



  return (
    <div className='w-full h-[560px] flex items-center justify-around'>
    { name === 'XX99 Mark I Headphones' ?
    <>
      <div className='w-[30%]'>
        <img src={require(`${image}`)} className="w-[350px] object-cover" />
      </div>
      <div className='w-[50%]'>
        <p className='font-bold text-5xl w-[300px] tracking-wider mt-4'>{name}</p>
        <p className='text-sm w-[400px] mt-4 text-black/50'>{description}</p>
        <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] text-xs px-3 w-[150px] py-3 text-white mt-4 hover:bg-[#FBAF85]'>SEE NOW</button>    </Link>
      </div>
    </>
    :
    <>

      <div className='w-[30%]'>
        {name === 'XX99 Mark II Headphones' ? <p className='tracking-widest text-[#D87D4A]'>NEW PRODUCT</p> : null}
        <p className='font-bold text-5xl w-[300px] tracking-wider mt-4'>{name}</p>
        <p className='text-sm w-[400px] mt-4 text-black/50'>{description}</p>
        <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] text-xs px-3 w-[150px] py-3 text-white mt-4 hover:bg-[#FBAF85]'>SEE NOW</button></Link>
      </div>
      <div className='w-[50%]'>
        <img src={require(`${image}`)} className="w-[350px]" />
      </div>
</>
    }
    </div>  
  )
}




