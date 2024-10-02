import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Collection from "../Pages/Collection";
import NotFound from "../Pages/NotFound";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import NewCart from "../Pages/NewCart";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/element/:id" element={<Cart />} />
        <Route path="/news/:id" element={<NewCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
