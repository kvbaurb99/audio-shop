import React from 'react'

export default function CheckoutItem({image, name, price, quantity}) {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <img src={require(`${image}`)} className='w-[100px]' />
        </div>
        <div className='flex flex-col w-full items-start ml-4'>
            <div className='flex w-full justify-between'>
                <p className='font-bold md:w-auto w-[80%]'>{name}</p>
                <p className='font-bold text-black/50'>x{quantity}</p>
            </div>
            <p className='mt-1 text-sm text-black/50 font-bold'>$ {price}</p>
        </div>
    </div>
  )
}
