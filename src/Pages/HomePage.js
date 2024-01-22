import React from "react";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Courses from "./Courses";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
// import { products } from "../List/List";

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <div>
      {/* <NavBar /> */}
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/Courses"
          element={<Courses onAddToCart={handleAddToCart} />}
        />
        <Route path="/Cart" element={<Cart cartItems={cartItems} onRemove={handleRemove} />} />
      </Routes>
    </div>
  );
};

export default HomePage;
