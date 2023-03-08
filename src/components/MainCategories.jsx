import React from 'react'
import Headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import Earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import { IoIosArrowForward } from 'react-icons/io'



export default function MainCategories() {
  return (
    <div className='w-[70%] h-[300px] mx-auto flex items-center justify-around text-sm font-bold mt-5'>
        <div className='flex flex-col items-center bg-[#f1f1f1] w-[350px]'>
            <img src={Headphones} className='w-[200px]' />
            <p>HEADPHONES</p>
            <div className='flex items-center gap-1 mt-2'>
                <p className='text-xs opacity-50 tracking-wider'>SHOP</p>
                <IoIosArrowForward className='text-[#D87D4A]' />
            </div>
        </div>
        <div className='flex flex-col items-center bg-[#f1f1f1] w-[350px]'>
            <img src={Speakers} className='w-[200px]' />
            <p>SPEAKERS</p>
            <div className='flex items-center gap-1 mt-2'>
                <p className='text-xs opacity-50 tracking-wider'>SHOP</p>
                <IoIosArrowForward className='text-[#D87D4A]' />
            </div>
        </div>
        <div className='flex flex-col items-center bg-[#f1f1f1] w-[350px]'>
            <img src={Earphones} className='w-[200px]' />
            <p>EARPHONES</p>
            <div className='flex items-center gap-1 mt-2'>
                <p className='text-xs opacity-50 tracking-wider'>SHOP</p>
                <IoIosArrowForward className='text-[#D87D4A]' />
            </div>
        </div>
    </div>
  )
}
