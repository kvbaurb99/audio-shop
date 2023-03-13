import React from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react';

export default function SpeakersHero({cart, setCart, username, password, passwordReg, usernameReg, setUsername, setPassword, setUsernameReg, setPasswordReg, authData}) {

  useEffect(() => {
    const formContainer = document.querySelector('.text');
    formContainer.classList.add('slide-from-left');
    
  }, []);


  return (
    <div className='w-full h-[340px] bg-[#141414]'>
        <NavBar cart={cart} setCart={setCart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} />
    <div className='w-full h-[240px] flex justify-center items-center'>
        <p className='text-white font-bold text-3xl tracking-widest text'>SPEAKERS</p>
    </div>
</div>
  )
}
