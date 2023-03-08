import React from 'react'
import Earphones from '../../assets/home/desktop/image-earphones-yx1.jpg'

export default function YX1() {
  return (
    <div className='w-full flex gap-5'>
        <div className='w-[50%] h-[300px]'>
            <img src={Earphones} className='h-full w-full rounded-lg' />
        </div>
        <div className='w-[50%] h-[300px] flex items-center'>
            <div className='px-[15%]'>
                <p className='text-3xl font-bold'>YX1 EARPHONES</p>
                <button className='border border-black border-solid py-3 px-4 text-xs font-bold mt-4'>SEE PRODUCTS</button>
            </div>
        </div>
    </div>
  )
}