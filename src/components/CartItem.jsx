import React from 'react'
import { useState } from 'react';

export default function CartItem({ name, price, image, quantity, setCart }) {
    const [itemQuantity, setItemQuantity] = useState(quantity);
  
    const handleDecreaseQuantity = () => {
      if (itemQuantity > 1) {
        setItemQuantity(itemQuantity - 1);
        updateCart(itemQuantity - 1);
      }
    };
  
    const handleIncreaseQuantity = () => {
      setItemQuantity(itemQuantity + 1);
      updateCart(itemQuantity + 1);
    };
  
    const updateCart = (newQuantity) => {
        const updatedCart = [...JSON.parse(localStorage.getItem('cart'))];
        const existingCartItemIndex = updatedCart.findIndex(
          (cartItem) =>
            cartItem.name === name && cartItem.price === price && cartItem.image === image
        );
        if (existingCartItemIndex >= 0) {
          updatedCart[existingCartItemIndex] = {
            name: name,
            price: price,
            quantity: newQuantity,
            image: image,
          };
        }
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
      };

  return (
    <div className='flex justify-around md:justify-between items-center mt-4'>
        <div>
            <img src={require(`${image}`)} className='w-[125px]' alt='product' />
        </div>
        <div className='flex flex-col w-full items-start ml-4 md:ml-0'>
            <p className='text-sm font-bold'>{name}</p>
            <p className='text-sm text-black/50 mt-1 md:mt-2 font-bold'>$ {price}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <p onClick={handleDecreaseQuantity} className='bg-white cursor-pointer'>-</p>
            <p className='font-bold text-sm'>{quantity}</p>
            <p onClick={handleIncreaseQuantity} className='bg-white cursor-pointer'>+</p>
        </div>
    </div>
  )
}
