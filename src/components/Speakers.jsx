import React from 'react'
import About from './About'
import Footer from './Footer'
import MainCategories from './MainCategories'
import SpeakersHero from './SpeakersHero'
import SpeakersProducts from './SpeakersProducts'

export default function Speakers({data, cart, setCart}) {
  return (
    <div className='w-full'>
        <SpeakersHero cart={cart} setCart={setCart} />
        <SpeakersProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}
