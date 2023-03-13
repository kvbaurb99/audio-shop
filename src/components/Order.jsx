import React from 'react'

export default function Order({products, id}) {

    const totalPrice = products.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);

  return (
    <div className='w-[50%] flex flex-col mx-auto py-2 border-b border-gray-400 mt-5'>
        <div className='flex flex-col w-full items-center mt-2'>
            <p>Order ID</p>
            <p className='font-bold text-sm tracking-wider mt-2'>{id}</p>
        </div>
        <div className='w-full flex-wrap flex justify-center items-start gap-2'>
            {products.map(product => (
                <div className='flex flex-col items-center'>
                    <img src={require(`${product.image}`)} alt="order" className='w-[150px]' />
                    <p className='font-bold text-black/50 text-sm'>x{product.quantity}</p>
                </div>
            ))}
        </div>
        <div className='flex flex-col w-full items-center mt-8'>
            <p>Delivery status</p>
            <p className='font-bold text-sm mt-2'>Order is being prepared by our employers...</p>
        </div>
        <div className='flex flex-col w-full items-center mt-8'>
            <p>Total order price</p>
            <p className='font-bold text-lg mt-2'>$ {totalPrice.toLocaleString()}</p>
        </div>
    </div>
  )
}
