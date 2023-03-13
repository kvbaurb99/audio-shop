import React from 'react'
import MainCategories from './MainCategories'
import About from './About'
import Hero from './Hero'
import MainInfo from './MainInfo'
import Footer from './Footer'

export default function Home({cart, setCart, setUsernameReg, setPasswordReg, usernameReg, passwordReg, username, password, setPassword, setUsername, authData}) {
  return (
    <div className='w-full overflow-hidden scroll-smooth'>
      <Hero cart={cart} setCart={setCart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setUsername={setUsername} setPassword={setPassword} authData={authData} />
      <MainCategories />
      <MainInfo />
      <About />
      <Footer />
    </div>
  )
}
