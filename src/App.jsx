import React from "react";
import "./App.scss";
import Layout from "./Components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
