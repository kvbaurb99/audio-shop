import React from 'react'
import About from './About'
import Footer from './Footer'
import HeadphonesHero from './HeadphonesHero'
import HeadphonesProducts from './HeadphonesProducts'
import MainCategories from './MainCategories'


export default function Headphones({data}) {
  return (
    <div className='w-full'>
        <HeadphonesHero />
        <HeadphonesProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}
