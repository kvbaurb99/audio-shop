import React from 'react'
import MainCategories from './MainCategories'
import About from './About'
import Hero from './Hero'
import MainInfo from './MainInfo'
import Footer from './Footer'

export default function Home({cart, setCart}) {
  return (
    <div className='w-full overflow-hidden scroll-smooth'>
      <Hero cart={cart} setCart={setCart} />
      <MainCategories />
      <MainInfo />
      <About />
      <Footer />
    </div>
  )
}
