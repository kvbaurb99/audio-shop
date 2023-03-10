import React from 'react'

export default function Includes({quantity, item}) {
  return (
    <div className='flex gap-5 mt-2'>
        <div className='text-[#D87D4A] text-sm'>{quantity}x</div>
        <div className='text-black/50 text-sm'>{item}</div>
    </div>
  )
}
