import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CheckoutItem from './CheckoutItem'
import Footer from './Footer'
import NavBar from './NavBar'
import OrderSummary from './OrderSummary';
import axios from 'axios';

export default function Checkout({cart, setCart, username, password, usernameReg, passwordReg, setUsername, setPassword, setUsernameReg, setPasswordReg, authData}) {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState()
    const [city, setCity] = useState('')
    const [emoney, setEmoney] = useState(false)
    const [orderCompleted, setOrderCompleted] = useState(false)

    const total = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
    const formatted = total.toLocaleString()
    const vatPrice = (total * 23) / 100
    const shipPrice = 50;
    const navigate = useNavigate()

    useEffect(() => {
        if (cart.length <= 0) {
            navigate('/')
        }
    }, [cart, navigate])

    const fillForm = () => {
        setName('John')
        setEmail('john@gmail.com')
        setPhone(145234635)
        setAddress('123 Main Street')
        setZip(34100)
        setCity('London')
    }

    const completeOrder = (e) => {
        e.preventDefault()
        axios.post('https://audiophile-kvbaurb99.herokuapp.com/createorder', {
            username: username,
            products: cart
        }).then(res => {
            setOrderCompleted(true)
        })
    }

    const completeOrderGuest = (e) => {
        e.preventDefault()
        setOrderCompleted(true)
    }

  return (
    <div className='w-full bg-[#f2f2f2]'>
        <NavBar cart={cart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} />
        {authData && authData.isLoggedIn ? 
        <form onSubmit={completeOrder} className='md:w-[70%] w-[90%] mx-auto mt-[5%] flex flex-col md:flex-row gap-5'>
            <div className='md:w-[70%] w-full p-6 bg-white'>
                <p className='text-3xl font-bold tracking-wider'>CHECKOUT</p>
                <p className='text-sm text-[#D87D4A] tracking-wider mt-10 font-bold'>BILLING DETAILS</p>
                <div className='mt-8'>
                    <div className='flex gap-[15px] justify-start w-full flex-wrap'>
                        <div className='flex flex-col md:w-[49%] w-full'>
                            <label htmlFor="name" className='font-bold text-sm'>Name</label>
                            <input required type="text" name="" id="name" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your name...' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col md:w-[49%] w-full'>
                            <label htmlFor="email" className='font-bold text-sm'>Email Address</label>
                            <input required type="email" name="email" id="email" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col md:w-[49%] w-full'>
                            <label htmlFor="phone" className='font-bold text-sm'>Phone Number</label>
                            <input required type="tel" name="phone" id="phone" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your number...' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                    <p className='mt-6 text-sm text-[#D87D4A] tracking-wider font-bold'>SHIPPING INFO</p>
                    <div className='flex gap-[15px] justify-start w-full flex-wrap'>
                        <div className='flex flex-col w-full mt-4'>
                            <label htmlFor="address" className='font-bold text-sm'>Address</label>
                            <input required type="text" name="address" id="address" className='py-3 rounded-lg mt-1 border w-full px-4 border-[#cfcfcf] outline-none' placeholder='Enter your address...' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className='flex flex-col md:w-[49%] w-full'>
                            <label htmlFor="zip" className='font-bold text-sm'>ZIP Code</label>
                            <input required type="text" name="zip" id="zip" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your zip-code...' value={zip} onChange={(e) => setZip(e.target.value)} />
                        </div>
                        <div className='flex flex-col md:w-[49%] w-full'>
                            <label htmlFor="city" className='font-bold text-sm'>City</label>
                            <input required type="text" name="city" id="city" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your city...' value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>
                    <p className='mt-6 text-sm text-[#D87D4A] tracking-wider font-bold'>PAYMENT DETAILS</p>
                    <p className='md:text-xs text-sm font-bold tracking-wider mt-6'>Payment Method</p>
                    <div className='flex gap-[15px] items-center md:items-end w-full flex-wrap mt-4 flex-col'>
                        <div className='flex md:w-[49%] w-full border-[#cfcfcf] border py-4 px-4 rounded-lg'>
                            <input required onChange={() => setEmoney(!emoney)} type="radio" name="payment" id="e-money" className='hidden' value="e-money" />
                            <label htmlFor="e-money" className='font-bold text-sm relative flex items-center'>
                                <span className='checkbox'></span>
                                <p className='ml-4'>e-Money</p>
                            </label>
                        </div>
                        <div className='flex md:w-[49%] w-full border-[#cfcfcf] border py-4 px-4 rounded-lg'>
                            <input required onChange={() => setEmoney(false)} type="radio" name="payment" id="ondelivery" className='hidden' value="ondelivery" />
                            <label htmlFor="ondelivery" className='font-bold text-sm relative flex items-center'>
                                <span className='checkbox'></span>
                                <p className='ml-4'>Cash on Delivery</p>
                            </label>
                        </div>
                    </div>
                    { emoney ? 
                    <div className='flex gap-[15px] justify-start w-full flex-wrap mt-8'>
                        <div className='flex flex-col md:w-[49%] w-full'>
                            <label htmlFor="zip" className='font-bold text-sm'>e-Money Number</label>
                            <input required type="text" name="zip" id="zip" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' />
                        </div>
                        <div className='flex flex-col md:w-[49%] w-full'>
                            <label htmlFor="city" className='font-bold text-sm'>e-Money PIN</label>
                            <input required type="text" name="city" id="city" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' />
                        </div>            
                    </div>
                    :
                    null
                    }
                    <div className='mt-[8%] w-full justify-start flex'>
                        <button type='button' onClick={fillForm} className='bg-[#D87D4A] py-3 px-2 text-sm w-full md:w-[49%] text-white tracking-wider hover:bg-[#FBAF85] duration-700'>FILL WITH EXAMPLE ADDRESS</button>
                    </div>
                </div>
            </div>
            <div className='md:w-[35%] w-full p-6 bg-white'>
                <p className='font-bold text-xl'>SUMMARY</p>
                <div className='mt-[10%]'>
                    {cart.map(product => (
                        <CheckoutItem
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                            image={product.image}
                        />
                    ))}
                </div>
                <div>
                    <div className='md:mt-3 flex justify-between mt-[15%]'>
                        <p className='text-black/50'>TOTAL</p>
                        {formatted <= 0 ? null : <p className='font-bold text-lg'>$ {formatted}</p>}
                    </div>
                    <div className='mt-2 flex justify-between'>
                        <p className='text-black/50'>SHIPPING</p>
                        { formatted <= 0 ? null : <p className='font-bold text-lg'>$ {shipPrice}</p>}
                    </div>
                    <div className='mt-2 flex justify-between'>
                        <p className='text-black/50'>VAT (INCLUDED)</p>
                        {total <= 0 ? null : <p className='font-bold text-lg'>$ {vatPrice.toFixed(0)}</p>}
                    </div>
                    <div className='mt-6 flex justify-between'>
                        <p className='text-black/50'>GRAND TOTAL</p>
                        { total <= 0 ? null : <p className='font-bold text-lg text-[#D87D4A]'>$ {total + shipPrice}</p>}
                    </div>
                    <button type='submit' className='bg-[#D87D4A] text-white w-full py-3 text-sm mt-6 tracking-wider hover:bg-[#FBAF85] duration-700'>CONTINUE & PAY</button>
                </div>
            </div>
        </form>
        :
        <form onSubmit={completeOrderGuest} className='md:w-[70%] w-[90%] mx-auto mt-[5%] flex flex-col md:flex-row gap-5'>
        <div className='md:w-[70%] w-full p-6 bg-white'>
            <p className='text-3xl font-bold tracking-wider'>CHECKOUT</p>
            <p className='text-sm text-[#D87D4A] tracking-wider mt-10 font-bold'>BILLING DETAILS</p>
            <div className='mt-8'>
                <div className='flex gap-[15px] justify-start w-full flex-wrap'>
                    <div className='flex flex-col md:w-[49%] w-full'>
                        <label htmlFor="name" className='font-bold text-sm'>Name</label>
                        <input required type="text" name="" id="name" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your name...' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='flex flex-col md:w-[49%] w-full'>
                        <label htmlFor="email" className='font-bold text-sm'>Email Address</label>
                        <input required type="email" name="email" id="email" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col md:w-[49%] w-full'>
                        <label htmlFor="phone" className='font-bold text-sm'>Phone Number</label>
                        <input required type="tel" name="phone" id="phone" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your number...' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <p className='mt-6 text-sm text-[#D87D4A] tracking-wider font-bold'>SHIPPING INFO</p>
                <div className='flex gap-[15px] justify-start w-full flex-wrap'>
                    <div className='flex flex-col w-full mt-4'>
                        <label htmlFor="address" className='font-bold text-sm'>Address</label>
                        <input required type="text" name="address" id="address" className='py-3 rounded-lg mt-1 border w-full px-4 border-[#cfcfcf] outline-none' placeholder='Enter your address...' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='flex flex-col md:w-[49%] w-full'>
                        <label htmlFor="zip" className='font-bold text-sm'>ZIP Code</label>
                        <input required type="text" name="zip" id="zip" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your zip-code...' value={zip} onChange={(e) => setZip(e.target.value)} />
                    </div>
                    <div className='flex flex-col md:w-[49%] w-full'>
                        <label htmlFor="city" className='font-bold text-sm'>City</label>
                        <input required type="text" name="city" id="city" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' placeholder='Enter your city...' value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                </div>
                <p className='mt-6 text-sm text-[#D87D4A] tracking-wider font-bold'>PAYMENT DETAILS</p>
                <p className='md:text-xs text-sm font-bold tracking-wider mt-6'>Payment Method</p>
                <div className='flex gap-[15px] items-center md:items-end w-full flex-wrap mt-4 flex-col'>
                    <div className='flex md:w-[49%] w-full border-[#cfcfcf] border py-4 px-4 rounded-lg'>
                        <input required onChange={() => setEmoney(!emoney)} type="radio" name="payment" id="e-money" className='hidden' value="e-money" />
                        <label htmlFor="e-money" className='font-bold text-sm relative flex items-center'>
                            <span className='checkbox'></span>
                            <p className='ml-4'>e-Money</p>
                        </label>
                    </div>
                    <div className='flex md:w-[49%] w-full border-[#cfcfcf] border py-4 px-4 rounded-lg'>
                        <input required onChange={() => setEmoney(false)} type="radio" name="payment" id="ondelivery" className='hidden' value="ondelivery" />
                        <label htmlFor="ondelivery" className='font-bold text-sm relative flex items-center'>
                            <span className='checkbox'></span>
                            <p className='ml-4'>Cash on Delivery</p>
                        </label>
                    </div>
                </div>
                { emoney ? 
                <div className='flex gap-[15px] justify-start w-full flex-wrap mt-8'>
                    <div className='flex flex-col md:w-[49%] w-full'>
                        <label htmlFor="zip" className='font-bold text-sm'>e-Money Number</label>
                        <input required type="text" name="zip" id="zip" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' />
                    </div>
                    <div className='flex flex-col md:w-[49%] w-full'>
                        <label htmlFor="city" className='font-bold text-sm'>e-Money PIN</label>
                        <input required type="text" name="city" id="city" className='py-3 rounded-lg mt-1 border px-4 border-[#cfcfcf] outline-none' />
                    </div>            
                </div>
                :
                null
                }
                <div className='mt-[8%] w-full justify-start flex'>
                    <button type='button' onClick={fillForm} className='bg-[#D87D4A] py-3 px-2 text-sm w-full md:w-[49%] text-white tracking-wider hover:bg-[#FBAF85] duration-700'>FILL WITH EXAMPLE ADDRESS</button>
                </div>
            </div>
        </div>
        <div className='md:w-[35%] w-full p-6 bg-white'>
            <p className='font-bold text-xl'>SUMMARY</p>
            <div className='mt-[10%]'>
                {cart.map(product => (
                    <CheckoutItem
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        image={product.image}
                    />
                ))}
            </div>
            <div>
                <div className='md:mt-3 flex justify-between mt-[15%]'>
                    <p className='text-black/50'>TOTAL</p>
                    {formatted <= 0 ? null : <p className='font-bold text-lg'>$ {formatted}</p>}
                </div>
                <div className='mt-2 flex justify-between'>
                    <p className='text-black/50'>SHIPPING</p>
                    { formatted <= 0 ? null : <p className='font-bold text-lg'>$ {shipPrice}</p>}
                </div>
                <div className='mt-2 flex justify-between'>
                    <p className='text-black/50'>VAT (INCLUDED)</p>
                    {total <= 0 ? null : <p className='font-bold text-lg'>$ {vatPrice.toFixed(0)}</p>}
                </div>
                <div className='mt-6 flex justify-between'>
                    <p className='text-black/50'>GRAND TOTAL</p>
                    { total <= 0 ? null : <p className='font-bold text-lg text-[#D87D4A]'>$ {total + shipPrice}</p>}
                </div>
                <button type='submit' className='bg-[#D87D4A] text-white w-full py-3 text-sm mt-6 tracking-wider hover:bg-[#FBAF85] duration-700'>CONTINUE & PAY</button>
            </div>
        </div>
    </form>}
        <Footer />
        {orderCompleted ? <OrderSummary cart={cart} total={total} setCart={setCart} orderCompleted={orderCompleted} /> : null}
    </div>
  )
}
