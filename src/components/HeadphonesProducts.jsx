import React, { useEffect, useState } from 'react'
import XX99M1 from './XX99M1';


export default function HeadphonesProducts({data}) {

    const [headphones, setHeadphones] = useState([])


    useEffect(() => {
      const dataCopy = [...data];
      const filteredProducts = dataCopy.reverse().filter(product => product.category === 'headphones');
      setHeadphones(filteredProducts);
    }, [data]);



  return (
    <div className='w-[60%] mx-auto'>
        {headphones.map(product => (
          <XX99M1
            key={product.name}
            name={product.name}
            description={product.description}
            image={product.image.desktop}
          />
        ))}
    </div>
  )
}
