import React from 'react'
import { useEffect } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function OrderSummary({cart, total, setCart, orderCompleted}) {

    const firstProduct = cart[0]

    useEffect(() => {
        const formContainer = document.querySelector('.summary');
        formContainer.classList.add('display-summary');
        
      }, [orderCompleted]);


  return (
    <div className='w-full h-full fixed bg-[#979797]/60 top-0 left-0 flex justify-center items-center'>
        <div className='bg-white rounded-lg w-[90%] md:w-[28%] h-[80%] md:h-[60%] p-[8%] md:p-[3%] summary'>
            <div className='w-[60px] h-[60px] bg-[#D87D4A] rounded-full flex justify-center items-center'>
                <AiOutlineCheck className='text-3xl text-white' />
            </div>
            <div className='text-2xl md:text-3xl font-bold tracking-wider mt-6'>
                <p>THANK YOU</p>
                <p>FOR YOUR ORDER</p>
            </div>
            <p className='text-sm text-black/50 mt-6'>You will receive an email confirmation shortly.</p>
            <div className='w-full h-[160px] md:h-[150px] flex flex-col md:flex-row md:justify-between mt-6'>
                <div className={`md:w-[45%] w-full h-full flex flex-col ${cart.length === 1 ? 'justify-start' : 'justify-center'}`}>
                    <div className='w-full flex items-center border-b border-[#979797/40] py-3'>
                        <div>
                            <img src={firstProduct.image && require(`${firstProduct.image}`)} alt="first-product" className='w-[80px]' />
                        </div>
                        <div className='flex flex-col w-full text-sm ml-3'>
                            <div className='flex justify-between w-full text-sm'>
                                <p className='font-bold tracking-wider'>{firstProduct && firstProduct.name}</p>
                                <p>x{firstProduct && firstProduct.quantity}</p>
                            </div>
                            <p className='text-black/50 text-sm font-bold mt-1'>$ {firstProduct && firstProduct.price}</p>
                        </div>
                    </div>
                    { cart.length === 1 ? null :
                    <div className='font-bold text-xs text-black/50 w-full flex justify-center py-3'>
                        <p>and {cart.length - 1} other item(s)</p>
                    </div>
                    }
                </div>
                <div className='md:w-[45%] h-[120px] md:h-auto w-full bg-black rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg flex flex-col justify-center items-center'>
                    <div className='md:block w-full flex flex-col items-start justify-center md:h-auto ml-[25%] '>
                        <p className='text-white/50'>GRAND TOTAL</p>
                        <p className='text-white font-bold mt-2'>$ {total}</p>
                    </div>       
                </div>
            </div>
            <div className='w-full flex justify-center bg-blue-400 mt-8'>
                <Link to='/' className='w-full'><button onClick={() => setCart([])} className='bg-[#D87D4A] w-full py-3 text-sm tracking-wider text-white'>BACK TO HOME</button></Link>
            </div>
        </div>
    </div>
  )
}
