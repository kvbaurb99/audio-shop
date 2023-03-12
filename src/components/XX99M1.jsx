import React from 'react'
import { Link } from 'react-router-dom'




export default function XX99M1({name, description, image, category, slug}) {



  return (
    <div className='w-full md:h-[500px] flex flex-col md:flex-row md:items-center md:justify-around mt-[20%] md:mt-10'>
    { name === 'XX99 Mark I Headphones' ?
        <>
        <div className='md:w-[50%]'>
          <img src={require(`${image}`)} className="w-[350px] h-[300px] md:h-auto md:block hidden" />
        </div>
        <div className='md:w-[50%] md:hidden w-full mx-auto'>
          <img src={require(`${image}`)} className="md:w-[350px] w-[300px] mx-auto h-[300px] object-cover" />
        </div>
        <div className='md:w-[50%] md:block flex flex-col items-center'>
          {name === 'XX99 Mark II Headphones' ? <p className='tracking-widest text-[#D87D4A] md:mt-0 mt-[10%]'>NEW PRODUCT</p> : null}
          <p className='font-bold text-3xl md:text-5xl md:w-[300px] tracking-wider mt-4 text-center md:text-left'>{name}</p>
          <p className='text-sm w-full md:w-[400px] mt-4 text-black/50 text-center md:text-left'>{description}</p>
          <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] text-xs px-3 w-[150px] py-3 text-white md:mt-4 hover:bg-[#FBAF85] duration-700 mt-[15%]'>SEE NOW</button></Link>
        </div>
  </>
    :
    <>
      <div className='md:w-[50%] md:hidden w-full mx-auto'>
        <img src={require(`${image}`)} className="md:w-[350px] w-[300px] mx-auto h-[300px] md:h-[350px] object-cover" />
      </div>
      <div className='md:w-[50%] md:block flex flex-col items-center'>
        {name === 'XX99 Mark II Headphones' ? <p className='tracking-widest text-[#D87D4A]'>NEW PRODUCT</p> : null}
        <p className='font-bold text-3xl md:text-5xl md:w-[300px] tracking-wider mt-4 text-center md:text-left'>{name}</p>
        <p className='text-sm w-full md:w-[400px] mt-4 text-black/50 text-center md:text-left'>{description}</p>
        <Link to={`/${category}/${slug}`}><button className='bg-[#D87D4A] text-xs px-3 w-[150px] py-3 text-white md:mt-4 hover:bg-[#FBAF85] duration-700 mt-[15%]'>SEE NOW</button></Link>
      </div>
      <div className='md:w-[50%]'>
        <img src={require(`${image}`)} className="w-[350px] md:block hidden" />
      </div>
</>
    }
    </div>  
  )
}




