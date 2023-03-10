import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import EarphoneProduct from './EarphoneProduct';

export default function EarphonesProducts({data}) {

    const [earphones, setEarphones] = useState([])


    useEffect(() => {
      const dataCopy = [...data];
      const filteredProducts = dataCopy.reverse().filter(product => product.category === 'earphones');
      setEarphones(filteredProducts);
    }, [data]);

    useEffect(() => {
      const formContainer = document.querySelector('.product');
      formContainer.classList.add('product-slide');
      
    }, []);

  return (
    <div className='w-[60%] mx-auto product'>
    {earphones.map(product => (
      <EarphoneProduct
        key={product.name}
        name={product.name}
        description={product.description}
        image={product.image.desktop}
        category={product.category}
      />
    ))}
    </div>  
  )
}
