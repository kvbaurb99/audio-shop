import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Includes from './Includes';
import MainCategories from './MainCategories';
import NavBar from './NavBar';
import Other from './Other';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function ProductDetails({data, cart, setCart}) {
  const [currentProduct, setCurrentProduct] = useState({});
  const [productInclude, setProductInclude] = useState([]);
  const [otherProducts, setOtherProducts] = useState([])
  const [count, setCount] = useState(1)
  const { name, category } = useParams();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const increaseQuantity = () => {
    setCount(prevCount => Math.max(prevCount + 1, 1));
  }


  const decreaseQuantity = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  }

  console.log(otherProducts)

  useEffect(() => {
    const findProduct = async () => {
      const filterProduct = await data.filter(product => product.category === category);
      const currentItem = await filterProduct.find(product => product.slug === name);
      setCurrentProduct(currentItem);
    };
    findProduct();
  }, [data, name, category]);

  useEffect(() => {
    setProductInclude(currentProduct.includes)
  }, [currentProduct])

  useEffect(() => {
    setOtherProducts(currentProduct.others)
  }, [currentProduct])

  console.log(cart)

  const product = {
    name: currentProduct && currentProduct.name,
    price: currentProduct.price,
    quantity: count,
    image: currentProduct.image && currentProduct.image.desktop
  }

  const addProduct = () => {
    const product = {
      name: currentProduct && currentProduct.name,
      price: currentProduct.price,
      quantity: count,
      image: currentProduct.image && currentProduct.image.desktop
    };
  
    const existingCartItem = cart.find(
      cartItem => cartItem.name === product.name &&
                   // check for total price instead of unit price
                  cartItem.image === product.image
    );
  
    if (existingCartItem) {
      const updatedCart = cart.map(cartItem => {
        if (cartItem === existingCartItem) {
          return {  ...cartItem, quantity: cartItem.quantity + count };
        } else {
          return cartItem;
        }
      });
  
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, product]);
    }
  };
  
  
  
  


  return (
    <div className='w-full'>
      <NavBar cart={cart} setCart={setCart} />
      <div className='w-[65%] mx-auto flex justify-around gap-10'>
        
        <div>
          {currentProduct.image && (
            <img onLoad={handleImageLoad} src={require(`${currentProduct.image.desktop}`)} className='w-[500px]' alt={currentProduct.name} />
          )}
        </div>
        <div className='w-[500px] flex h-[500px] justify-center flex-col'>
            <p className='text-5xl tracking-wider font-bold w-[400px]'>{currentProduct.name}</p>
            <p className='w-[450px] text-black/50 text-sm mt-4'>{currentProduct.description}</p>
            <p className='mt-4 text-lg font-bold'>$ {currentProduct.price}</p>
            <div className='flex justify-around mt-8 items-center'>
                <div>
                    <ul className='flex gap-5 items-center'>
                        <li onClick={decreaseQuantity} className='text-black/50 cursor-pointer'>-</li>
                        <li className='font-bold text-sm'>{count}</li>
                        <li onClick={increaseQuantity} className='text-black/50 cursor-pointer'>+</li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => addProduct(product)} className='bg-[#D87D4A] text-white text-xs px-7 py-3'>ADD TO CART</button>
                </div>
            </div>
        </div>
      </div>
      <div className='flex w-[65%] mx-auto justify-around'>
        <div className='w-[50%]'>
            <p className='text-3xl font-bold tracking-wider'>FEATURES</p>
            <p className='text-black/50 text-sm leading-[1.6] mt-4'>{currentProduct.features}</p>
        </div>
        <div>
            <p className='text-3xl font-bold tracking-wider'>IN THE BOX</p>
            <div className='flex flex-col mt-4'>
            {productInclude && productInclude.map(product => (
                <Includes
                 quantity={product.quantity}
                 item={product.item}
                 />
            ))}
            </div>
        </div>
      </div>
      <div className='w-[65%] flex mx-auto justify-center max-h-[600px] gap-5 mt-[10%]'>
                {currentProduct.gallery && (
                <div className='flex flex-col gap-[20px]'>
                <img src={require(`${currentProduct.gallery.first.desktop}`)} className='h-[290px] rounded-lg object-cover'  />
                <img src={require(`${currentProduct.gallery.second.desktop}`)} className='h-[290px] rounded-lg object-cover' />
                </div>
                )}
            <div>
                {currentProduct.gallery && (
                    <img src={require(`${currentProduct.gallery.third.desktop}`)} className='h-[600px] rounded-lg object-cover' />
                )}
            </div>
        </div>
        <div>
      </div>
      <div className='w-[65%] mx-auto'>
        <div className='w-full'>
            <p className='text-center text-3xl font-bold tracking-wider mt-[10%]'>YOU MAY ALSO LIKE</p>
        </div>
        <div className='w-full flex justify-around mb-[10%]'>
            {otherProducts && otherProducts.map(product => (
                <Other
                    name={product.name}
                    image={product.image.desktop}
                    category={product.category}
                    slug={product.slug}
                    
                />
            ))}
        </div>
      </div>
      <MainCategories />
      <About />
      <Footer />
    </div>
  );
}
