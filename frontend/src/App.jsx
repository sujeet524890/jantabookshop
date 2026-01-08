import React, { useState ,useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Homerouts from "./Pages/Homerouts";
import Cart from "./Pages/Cart";
import ProductPages from "./Pages/ProductPages";
import About from "./Pages/About";
import Login from "./Pages/Login";

import Adminpannal from "./Admin/pages/Adminpannal";
import Productform from "./Admin/pages/Productform";
import Chekout from "./Pages/Chekout";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/Adminpannal");
  const isProductForm = location.pathname.startsWith("/Productform");

  // 🟢 CART STATE (SINGLE SOURCE OF TRUTH)
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (item) => {
  setCart((prev) => {
    const exists = prev.find((p) => p._id === item._id);

    if (exists) {
      return prev.map((p) =>
        p._id === item._id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    }

    return [...prev, { ...item, quantity: 1 }];
  });

  toast.success("Product added to cart");
};




const updateQty = (id, type) => {
  setCart((prev) =>
    prev.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity:
              type === "inc"
                ? item.quantity + 1
                : Math.max(1,item.quantity - 1),
          }
        : item
    )
  );
};


const removeItem = (id) => {
  setCart((prev) => prev.filter((item) => item._id !== id));
  toast.error("Product removed from cart");
};

 const islogin =localStorage.getItem('usertoken')


  return (
    <>
      {/* Navbar */}
      {!isAdmin && !isProductForm && <Navbar />}

      <Routes>
        <Route path="/" element={<Homerouts addToCart={addToCart} />} />

       

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          }
        />

        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ProductPages/:id" element={<ProductPages addToCart={addToCart} />} />
        <Route path="/Adminpannal" element={<Adminpannal />} />
        <Route path="/Productform" element={<Productform />} />
        <Route path="/Chekout" element={islogin ? <Chekout></Chekout> : <Login />}/>
      </Routes>
       
      {/* Footer */}
      {!isAdmin && !isProductForm && <Footer />}
      <ToastContainer />
    </>
  );
};

export default App;
