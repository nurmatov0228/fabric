import React from "react";
import Intro1 from "../Components/UI/Intro/Intro1";
import Delivery from "../Components/UI/Delivery/Delivery";
import Winter from "../Components/Winter/Winter";
import Summer from "../Components/Summer/Summer";
import Autumn from "../Components/Autumn/Autumn";
import Cloth from "../Components/UI/Cloth/Cloth";

const Home = () => {
  return (
    <div>
      <Intro1 />
      <Delivery />
      <Winter />
      <Summer />
      <Autumn />
      <Cloth />
    </div>
  );
};

export default Home;
