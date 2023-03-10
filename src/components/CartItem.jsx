import React from 'react'

export default function CartItem({name, price, image, quantity}) {

    

  return (
    <div className='flex justify-between items-center mt-4'>
        <div>
            <img src={require(`${image}`)} className='w-[125px]' />
        </div>
        <div className='flex flex-col w-full items-start'>
            <p className='text-sm font-bold'>{name}</p>
            <p className='text-sm text-black/50 mt-2 font-bold'>$ {price}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <p className='bg-[#f1f1f1] cursor-pointer'>-</p>
            <p className='font-bold text-sm'>{quantity}</p>
            <p className='bg-[#f1f1f1] cursor-pointer'>+</p>
        </div>
    </div>
  )
}
