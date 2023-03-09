import React from 'react'
import About from './About'
import Footer from './Footer'
import MainCategories from './MainCategories'
import SpeakersHero from './SpeakersHero'
import SpeakersProducts from './SpeakersProducts'

export default function Speakers({data}) {
  return (
    <div className='w-full'>
        <SpeakersHero />
        <SpeakersProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}