import React, { useState } from 'react'
import axios from 'axios';

export default function Authentication({setUsernameReg, setPasswordReg, usernameReg, passwordReg, username, password, setUsername, setPassword}) {

    const [form, showForm] = useState('register')
    const [registerError, setRegisterError] = useState('')
    const [loginError, setLoginError] = useState('')
    const [success, setSuccess] = useState('')

    const createAccount = (e) => {
        e.preventDefault();
        axios.post('https://audiophile-kvbaurb99.herokuapp.com/register', {
            username: usernameReg,
            password: passwordReg
        }).then(res => {
            if (res.data.err) {
                setRegisterError(res.data.err)
                setTimeout(() => {
                    setRegisterError('')
                }, 2000)
                return;
            } else {
                showForm('login')
                setUsernameReg('')
                setPasswordReg('')
            }
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
            if (!res.data.message) {
                const authData = { isLoggedIn: true, user: username };
                localStorage.setItem('authData', JSON.stringify(authData));
                window.location.reload()
                setUsername('')
                setPassword('')         
            } else if (username === '' || password === '') {
                setLoginError('Username or password is required');
                setTimeout(() => {
                  setLoginError('');
                }, 2000);
            } else if (res.data.message) {
                setLoginError(res.data.message)
                setTimeout(() => {
                    setLoginError('');
                }, 2000)
            }
        })
    }


  return (
    <div className='md:w-[320px] w-[250px] md:h-[220px] bg-white text-black p-4 rounded'>
        { form === 'register' ? 
        <>
        {registerError ? <p className='text-xs font-bold text-red-600'>{registerError}</p> : <p className='font-bold tracking-widest'>CREATE ACCOUNT</p>}
        <form onSubmit={createAccount} className='mt-2'>
            <div className='flex flex-col'>
                <label htmlFor="username" className='text-sm'>Username</label>
                <input value={usernameReg} onChange={(e) => setUsernameReg && setUsernameReg(e.target.value)} type="text" name="username" id="username" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input value={passwordReg} onChange={(e) => setPasswordReg && setPasswordReg(e.target.value)} type="password" name="password" id="password" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <button type='submit' className='text-xs bg-[#D87D4A] py-1 rounded mt-3 px-4 text-white hover:bg-[#FBAF85]'>CREATE ACCOUNT</button>
            <p className='text-xs mt-2 text-[#D87D4A] tracking-wide'>Already have account ? <span onClick={() => showForm('login')} className='text-black hover:text-[#D87D4A] cursor-pointer'>Log in</span></p>
        </form>
        </>
        :
        <>
        {loginError ? <p className='text-xs font-bold text-red-600'>{loginError}</p> : <p className='font-bold tracking-widest'>LOG IN</p>}
        <form onSubmit={logIn} className='mt-2'>
            <div className='flex flex-col'>
                <label htmlFor="username" className='text-sm'>Username</label>
                <input value={username} onChange={(e) => setUsername && setUsername(e.target.value)} type="text" name="username" id="username" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input value={password} onChange={(e) => setPassword && setPassword(e.target.value)} type="password" name="password" id="password" className='border border-[#cfcfcf] outline-none rounded-lg px-2 text-sm py-1 focus:border-[#D87D4A]' />
            </div>
            <button type='submit' className='text-xs bg-[#D87D4A] py-1 rounded mt-3 px-4 text-white hover:bg-[#FBAF85]'>LOG IN</button>
            <p className='text-xs mt-2 text-[#D87D4A] tracking-wide'>Don't have account ? <span onClick={() => showForm('register')} className='text-black hover:text-[#D87D4A] cursor-pointer'>Sign in</span></p>
        </form>
        </>
        }
    </div>
  )
}
