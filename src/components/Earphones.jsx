import React from 'react'
import About from './About'
import EarphonesHero from './EarphonesHero'
import EarphonesProducts from './EarphonesProducts'
import Footer from './Footer'
import MainCategories from './MainCategories'

export default function Earphones({data, cart, setCart, username, usernameReg, passwordReg, password, setUsername, setPassword, setUsernameReg, setPasswordReg, authData}) {
  return (
    <div className='w-full overflow-hidden'>
        <EarphonesHero cart={cart} setCart={setCart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} />
        <EarphonesProducts data={data} />
        <MainCategories />
        <About />
        <Footer />
    </div>
  )
}
