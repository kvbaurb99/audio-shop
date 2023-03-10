import React, { useEffect, useState } from 'react'
import XX99M1 from './XX99M1';


export default function HeadphonesProducts({data}) {

    const [headphones, setHeadphones] = useState([])


    useEffect(() => {
      const dataCopy = [...data];
      const filteredProducts = dataCopy.reverse().filter(product => product.category === 'headphones');
      setHeadphones(filteredProducts);
    }, [data]);

    useEffect(() => {
      const formContainer = document.querySelector('.product');
      formContainer.classList.add('product-slide');
      
    }, []);




  return (
    <div className='md:w-[60%] w-[80%] mx-auto product'>
        {headphones.map(product => (
          <XX99M1
            key={product.name}
            name={product.name}
            description={product.description}
            image={product.image.desktop}
            category={product.category}
            slug={product.slug}
          />
        ))}
    </div>
  )
}
