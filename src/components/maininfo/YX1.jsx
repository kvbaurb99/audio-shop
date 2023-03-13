import React from 'react'
import { Link } from 'react-router-dom'
import Earphones from '../assets/home/desktop/image-earphones-yx1.jpg'

export default function YX1() {
  return (
    <div className='w-full flex gap-5 flex-col md:flex-row'>
        <div className='md:w-[50%] w-full h-[300px]'>
            <img src={Earphones} className='h-full w-full rounded-lg object-cover md:object-none' alt='product' />
        </div>
        <div className='w-[50%] h-[200px] md:h-[300px] flex items-center'>
            <div className='px-[15%]'>
                <p className='text-3xl font-bold'>YX1 EARPHONES</p>
                <Link to='/earphones/yx1-earphones'><button className='border border-black border-solid py-3 px-4 text-xs font-bold mt-4 hover:bg-black hover:text-white duration-700'>SEE PRODUCT</button></Link>
            </div>
        </div>
    </div>
  )
}
