import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { useEffect } from 'react';

export default function HeadphonesHero({cart, setCart, username, usernameReg, passwordReg, password, setUsername, setPassword, setUsernameReg, setPasswordReg, authData}) {

  useEffect(() => {
    const formContainer = document.querySelector('.text');
    formContainer.classList.add('slide-from-left');
    
  }, []);


  return (
    <div className='w-full h-[340px] bg-[#141414]'>
        <NavBar cart={cart} setCart={setCart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} />
        <div className='w-full h-[240px] flex justify-center items-center'>
            <p className='text-white font-bold text-3xl tracking-widest text'>HEADPHONES</p>
        </div>
    </div>
  )
}
