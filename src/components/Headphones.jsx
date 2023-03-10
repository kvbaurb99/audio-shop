import React from 'react'
import About from './About'
import Footer from './Footer'
import HeadphonesHero from './HeadphonesHero'
import HeadphonesProducts from './HeadphonesProducts'
import MainCategories from './MainCategories'


export default function Headphones({data, cart, setCart, username, usernameReg, passwordReg, password, setUsername, setPassword, setUsernameReg, setPasswordReg, authData}) {
  return (
    <div className='w-full overflow-hidden'>
        <HeadphonesHero cart={cart} setCart={setCart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} />
        <HeadphonesProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}
