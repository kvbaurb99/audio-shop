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

    console.log(speakers)

  return (
    <div className='w-[60%] mx-auto'>
    {speakers.map(product => (
      <SpeakerProduct
        key={product.name}
        name={product.name}
        description={product.description}
        image={product.image.desktop}
      />
    ))}
</div>
  )
}
