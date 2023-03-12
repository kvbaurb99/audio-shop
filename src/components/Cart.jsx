import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useEffect } from 'react';

export default function Cart({setShowCart, cart, setCart}) {


    useEffect(() => {
        const formContainer = document.querySelector('.cart');
        formContainer.classList.add('cart-open');
        
      }, []);

    const handleCartClick = (e) => {
        e.stopPropagation();
      };
    
      const handleClick = () => {
        setShowCart(false);
      };

      const clearCart = () => {
        setCart([])
      }

      const total = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
      const formatted = total.toLocaleString()


  return (
    <div className='fixed w-full h-full z-50 top-0 left-0 bg-[#979797]/60 cart md:block flex items-center justify-center' onClick={handleClick}>
        <div className='md:w-[380px] w-[90%] mx-auto md:mx-auto h-[490px] bg-white fixed md:top-[15%] md:right-[15%] rounded-lg text-black flex flex-col justify-between z-100' onClick={handleCartClick}>
            <div className='w-full flex justify-around items-center mt-5'>
                <p className='text-xl font-bold tracking-wider'>CART ({cart.length})</p>
                <p onClick={clearCart} className='text-black/50 text-sm cursor-pointer'>Remove all</p>
            </div>
            <div className='h-full mx-auto md:w-full w-[80%] flex flex-col justify-start overflow-y-scroll mt-4'>
                {cart && cart.map(product => (
                    <CartItem
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        quantity={product.quantity}
                        setCart={setCart}
                    />
                ))}
            </div>
            <div className='w-[90%] flex flex-col mx-auto mb-5'>
                <div className='w-full flex justify-between mb-5 items-center'>
                    <p className='text-black/50 text-sm'>TOTAL</p>
                    <p className='font-bold'>$ {formatted}</p>
                </div>
                { cart.length <= 0 ?
                <button className='bg-[#D87D4A] w-full py-3 text-white text-sm cursor-not-allowed'>CHECKOUT</button>
                :
                <Link to='/checkout'><button className='bg-[#D87D4A] w-full py-3 text-white text-sm'>CHECKOUT</button></Link>
                }
            </div>
        </div>
    </div>
  )
}
