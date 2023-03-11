import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Headphones from "./components/Headphones";
import Home from "./components/Home";
import data from "./components/assets/data/data.json"
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import Checkout from "./components/Checkout";
import { useEffect } from "react";



function App() {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  // Save the cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);




  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/categories/headphones" element={<Headphones data={data} cart={cart} setCart={setCart} />} />
        <Route path="/categories/speakers" element={<Speakers data={data} cart={cart} setCart={setCart} />} />
        <Route path="/categories/earphones" element={<Earphones data={data} cart={cart} setCart={setCart} /> } />
        <Route path="/:category/:name" element={<ProductDetails data={data} cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
