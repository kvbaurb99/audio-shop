import React, { useState } from 'react'
import axios from 'axios';

export default function Authentication({setUsernameReg, setPasswordReg, usernameReg, passwordReg, username, password, setUsername, setPassword}) {

    const [form, showForm] = useState('register')

    const createAccount = (e) => {
        e.preventDefault();
        axios.post('https://audiophile-kvbaurb99.herokuapp.com/register', {
            username: usernameReg,
            password: passwordReg
        }).then(res => {
            console.log(res.data.msg);
        }).catch(err => {
            console.log(err);
        });
    }


    const logIn = (e) => {
        e.preventDefault();
        axios.post('https://audiophile-kvbaurb99.herokuapp.com/login', {
            username: username,
            password: password
        }).then(res => {
            if (res.data.message) {
                const authData = { isLoggedIn: true, user: username };
                localStorage.setItem('authData', JSON.stringify(authData));
                window.location.reload()          
            } else if (username === '' || password === '') {
                console.log('not empty')
            } else if (res.data.message) {
                console.log(res.data.message);
            }
        })
    }


  return (
    <div className='w-[320px] h-[220px] bg-white text-black p-4 rounded'>
        { form === 'register' ? 
        <>
        <p className='font-bold tracking-widest'>CREATE ACCOUNT</p>
        <form onSubmit={createAccount} className='mt-2'>
            <div className='flex flex-col'>
                <label htmlFor="username" className='text-sm'>Username</label>
                <input value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)} type="text" name="username" id="username" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} type="password" name="password" id="password" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <button type='submit' className='text-xs bg-[#D87D4A] py-1 rounded mt-3 px-4 text-white'>CREATE ACCOUNT</button>
            <p className='text-xs mt-2 text-[#D87D4A] tracking-wide'>Already have account ? <span onClick={() => showForm('login')} className='text-black hover:text-[#D87D4A] cursor-pointer'>Log in</span></p>
        </form>
        </>
        :
        <>
        <p className='font-bold tracking-widest'>LOG IN</p>
        <form onSubmit={logIn} className='mt-2'>
            <div className='flex flex-col'>
                <label htmlFor="username" className='text-sm'>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <button type='submit' className='text-xs bg-[#D87D4A] py-1 rounded mt-3 px-4 text-white'>LOG IN</button>
            <p className='text-xs mt-2 text-[#D87D4A] tracking-wide'>Don't have account ? <span onClick={() => showForm('register')} className='text-black hover:text-[#D87D4A] cursor-pointer'>Sign in</span></p>
        </form>
        </>
        }
    </div>
  )
}
