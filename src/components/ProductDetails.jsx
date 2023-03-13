import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Includes from './Includes';
import MainCategories from './MainCategories';
import NavBar from './NavBar';
import Other from './Other';

export default function ProductDetails({data, cart, setCart, username, usernameReg, passwordReg, authData, password, setUsername, setPassword, setUsernameReg, setPasswordReg}) {
  const [currentProduct, setCurrentProduct] = useState({});
  const [productInclude, setProductInclude] = useState([]);
  const [otherProducts, setOtherProducts] = useState([])
  const [count, setCount] = useState(1)
  const { name, category } = useParams();


  const increaseQuantity = () => {
    setCount(prevCount => Math.max(prevCount + 1, 1));
  }


  const decreaseQuantity = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  }


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
    <div className='w-full overflow-hidden'>
      <NavBar cart={cart} setCart={setCart} setUsernameReg={setUsernameReg} setPasswordReg={setPasswordReg} usernameReg={usernameReg} passwordReg={passwordReg} username={username} password={password} setPassword={setPassword} setUsername={setUsername} authData={authData} />
      <div className='w-[80%] md:w-[65%] mx-auto flex flex-col md:flex-row justify-around md:gap-10 mt-[10%] md:mt-0'>
        <div>
          {currentProduct.image && (
            <img src={require(`${currentProduct.image.desktop}`)} className='w-[500px]' alt={currentProduct.name} />
          )}
        </div>
        <div className='md:w-[500px] flex h-[400px] md:h-[500px] justify-center flex-col'>
            <p className='md:text-5xl text-4xl tracking-wider font-bold w-[80%] md:w-[400px]'>{currentProduct.name}</p>
            <p className='md:w-[450px] text-black/50 text-sm mt-4 tracking-wide text-justify md:text-left'>{currentProduct.description}</p>
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
                    <button onClick={() => addProduct(product)} className='bg-[#D87D4A] text-white text-xs px-10 md:px-7 py-3 hover:bg-[#FBAF85]  duration-700'>ADD TO CART</button>
                </div>
            </div>
        </div>
      </div>
      <div className='flex w-[65%] flex-col md:flex-row mx-auto justify-around mt-[20%] md:mt-0'>
        <div className='md:w-[50%]'>
            <p className='text-3xl font-bold tracking-wider'>FEATURES</p>
            <p className='text-black/50 text-sm leading-[1.6] mt-4 tracking-wide'>{currentProduct.features}</p>
        </div>
        <div className='mt-[35%] md:mt-0'>
            <p className='text-3xl font-bold tracking-wider'>IN THE BOX</p>
            <div className='flex flex-col mt-4'>
            {productInclude && productInclude.map(product => (
                <Includes
                 key={product.item} 
                 quantity={product.quantity}
                 item={product.item}
                 />
            ))}
            </div>
        </div>
      </div>
      <div className='md:w-[65%] w-[90%] flex md:flex-row flex-col mx-auto justify-center md:max-h-[600px] gap-5 mt-[10%]'>
                {currentProduct.gallery && (
                <div className='flex flex-col gap-[20px]'>
                <img src={require(`${currentProduct.gallery.first.desktop}`)} className='h-[290px] rounded-lg object-cover' alt='product' />
                <img src={require(`${currentProduct.gallery.second.desktop}`)} className='h-[290px] rounded-lg object-cover' alt='product' />
                </div>
                )}
            <div>
                {currentProduct.gallery && (
                    <img src={require(`${currentProduct.gallery.third.desktop}`)} className='h-[600px] rounded-lg object-cover' alt='product' />
                )}
            </div>
        </div>
        <div>
      </div>
      <div className='w-[65%] mx-auto'>
        <div className='w-full'>
            <p className='text-center text-2xl md:text-3xl font-bold tracking-wider mt-[10%]'>YOU MAY ALSO LIKE</p>
        </div>
        <div className='w-full flex md:flex-row flex-col items-center md:justify-around mb-[10%]'>
            {otherProducts && otherProducts.map(product => (
                <Other
                    key={product.slug}
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
