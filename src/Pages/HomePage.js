import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Courses from "./Courses";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Courses" element={<Courses />} />

        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default HomePage;
