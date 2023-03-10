import React from 'react'
import About from './About'
import EarphonesHero from './EarphonesHero'
import EarphonesProducts from './EarphonesProducts'
import Footer from './Footer'
import MainCategories from './MainCategories'

export default function Earphones({data, cart, setCart}) {
  return (
    <div className='w-full'>
        <EarphonesHero cart={cart} setCart={setCart} />
        <EarphonesProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}
