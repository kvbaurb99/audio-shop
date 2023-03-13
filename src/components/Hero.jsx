import React from 'react'
import HeroInfo from './HeroInfo'
import NavBar from './NavBar'

export default function Hero({cart, setCart, setUsernameReg, setPasswordReg, usernameReg, passwordReg, username, password, setUsername, setPassword, authData}) {
  return (
    <div className='w-full h-[700px] bg-[#141414]'>
        <NavBar cart={cart} setCart={setCart} setPasswordReg={setPasswordReg} setUsernameReg={setUsernameReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setUsername={setUsername} setPassword={setPassword} authData={authData} />
        <HeroInfo />
    </div>
    
  )
}
