import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SpeakerProduct from './SpeakerProduct';

export default function SpeakersProducts({data}) {

    const [speakers, setSpeakers] = useState([])


    useEffect(() => {
      const dataCopy = [...data];
      const filteredProducts = dataCopy.reverse().filter(product => product.category === 'speakers');
      setSpeakers(filteredProducts);
    }, [data]);

    useEffect(() => {
      const formContainer = document.querySelector('.product');
      formContainer.classList.add('product-slide');
      
    }, []);

  return (
    <div className='w-[60%] mx-auto product'>
    {speakers.map(product => (
      <SpeakerProduct
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
