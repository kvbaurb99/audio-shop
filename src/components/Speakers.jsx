import React from 'react'
import About from './About'
import Footer from './Footer'
import MainCategories from './MainCategories'
import SpeakersHero from './SpeakersHero'
import SpeakersProducts from './SpeakersProducts'

export default function Speakers({data, cart, setCart, username, password, passwordReg, usernameReg, setUsername, setPassword, setUsernameReg, setPasswordReg, authData}) {
  return (
    <div className='w-full overflow-hidden'>
        <SpeakersHero cart={cart} setCart={setCart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} />
        <SpeakersProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}
