import React from 'react'
import ZX9 from './maininfo/ZX9'
import ZX7 from './maininfo/ZX7'
import YX1 from './maininfo/YX1.jsx'

export default function MainInfo() {
  return (
    <div className='md:w-[60%] w-[80%] mx-auto relative flex flex-col gap-10'>
        <ZX9 />
        <ZX7 />
        <YX1 />
    </div>
  )
}
