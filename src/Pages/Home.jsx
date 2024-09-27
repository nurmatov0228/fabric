import React from "react";
import Intro1 from "../Components/UI/Intro/Intro1";
import Delivery from "../Components/UI/Delivery/Delivery";
import Winter from "../Components/Winter/Winter";
import Summer from "../Components/Summer/Summer";
import Autumn from "../Components/Autumn/Autumn";
import Cloth from "../Components/UI/Cloth/Cloth";
import Intro2 from "../Components/UI/Intro/Intro2";
import Intro3 from "../Components/UI/Intro/Intro3";
import Intro4 from "../Components/UI/Intro/Intro4";

const Home = () => {
  return (
    <div>
      <Intro1 />
      <Delivery />
      <Intro2 />
      <Winter />
      <Intro3 />
      <Autumn />
      <Intro4 />
      <Summer />
      <Cloth />
    </div>
  );
};

export default Home;
