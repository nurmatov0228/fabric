import React from "react";
import { ToastContainer } from "react-toastify";
import Router from "../../Router/Router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer className="toastify" />
      <div className="router">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
