import React from 'react'
import About from './About'
import Footer from './Footer'
import HeadphonesHero from './HeadphonesHero'
import HeadphonesProducts from './HeadphonesProducts'
import MainCategories from './MainCategories'


export default function Headphones({data, cart, setCart}) {
  return (
    <div className='w-full overflow-hidden'>
        <HeadphonesHero cart={cart} setCart={setCart} />
        <HeadphonesProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}
