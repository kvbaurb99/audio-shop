import React from 'react'
import Headphones from './assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speakers from './assets/shared/desktop/image-category-thumbnail-speakers.png';
import Earphones from './assets/shared/desktop/image-category-thumbnail-earphones.png';
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



export default function MainCategories() {

    useEffect(() => {
        const formContainer = document.querySelector('.third');
        formContainer.classList.add('slide-right');
        
      }, []);

      useEffect(() => {
        const formContainer = document.querySelector('.second');
        formContainer.classList.add('main-fade');
        
      }, []);

      useEffect(() => {
        const formContainer = document.querySelector('.first');
        formContainer.classList.add('product-slide');
        
      }, []);

  return (
    <div className='w-[70%] mt-[25%] md:h-[400px] mx-auto flex flex-col md:flex-row items-center justify-between text-sm font-bold md:mt-5'>
        <div className='flex flex-col items-center w-[350px] first mt-8 md:mt-0'>
            <img src={Headphones} className='w-[200px]' alt='product' />
            <p>HEADPHONES</p>
            <div className='flex items-center gap-1 mt-2'>
                <Link to='/categories/headphones'><p className='text-xs opacity-50 tracking-wider hover:text-[#D87D4A] cursor-pointer'>SHOP</p></Link>
                <IoIosArrowForward className='text-[#D87D4A]' />
            </div>
        </div>
        <div className='flex flex-col items-center w-[350px] second mt-8 md:mt-0'>
            <img src={Speakers} className='w-[200px]' alt='product' />
            <p>SPEAKERS</p>
            <div className='flex items-center gap-1 mt-2'>
            <Link to='/categories/speakers'><p className='text-xs opacity-50 tracking-wider hover:text-[#D87D4A] cursor-pointer'>SHOP</p></Link>
                <IoIosArrowForward className='text-[#D87D4A]' />
            </div>
        </div>
        <div className='flex flex-col items-center w-[350px] third mt-8 md:mt-0'>
            <img src={Earphones} className='w-[200px]' alt='product' />
            <p>EARPHONES</p>
            <div className='flex items-center gap-1 mt-2'>
            <Link to='/categories/earphones'><p className='text-xs opacity-50 tracking-wider hover:text-[#D87D4A] cursor-pointer'>SHOP</p></Link>
                <IoIosArrowForward className='text-[#D87D4A]' />
            </div>
        </div>
    </div>
  )
}
