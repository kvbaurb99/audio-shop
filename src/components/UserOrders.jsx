import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { useState } from 'react'
import Order from './Order'

export default function UserOrders({username, usernameReg, passwordReg, password, setUsername, setPassword, setUsernameReg, setPasswordReg, authData, cart, setCart}) {

    const navigate = useNavigate()
    const [orders, setOrders] = useState()

    useEffect(() => {
        if (!username) {
            navigate('/')
        }
    }, [])

    const retrieveOrders = async () => {
        const response = await axios.get(`https://audiophile-kvbaurb99.herokuapp.com/api/orders/${username}`)
        setOrders(response.data)
    }

    useEffect(() => {
        retrieveOrders()
    }, [])


  return (
    <div className='w-full'>
        <NavBar setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} cart={cart} setCart={setCart} />
        <div className='w-full flex justify-center mt-8'>
            <p className='text-2xl font-bold tracking-wider'>Hello {username}, you can check your orders here !</p>
        </div>
        <div className='mt-[3%]'>
            {orders && orders.map(product => (
                <Order
                    products={product.products}
                    id={product.id}
                />
            ))}
        </div>
    </div>
  )
}

