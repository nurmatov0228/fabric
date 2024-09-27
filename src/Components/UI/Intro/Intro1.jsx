import React from "react";
import "./intro1.scss";

const Intro1 = () => {
  return (
    <div className="intro1">
      <div class="intro__container">
        <div class="intro__left">
          <img
            src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png"
            class="intro__img"
            alt="introImageAlt"
          />
        </div>
        <div data-aos="zoom-in-left" class="intro__right aos-init aos-animate">
          <h4 class="intro__toptitle">Buxoro</h4>
          <h3 class="intro__title">Tabiiy</h3>
          <h2 class="intro__bottomtitle">Mahsulot</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro1;
