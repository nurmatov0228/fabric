import React from "react";
import autumn from "../../assets/autumn";
import Item from "../UI/Item/Item";

const Autumn = () => {
  return (
    <div class="winter">
      <div class="winter__container">
        <h2 class="winter__title">Kuzgi kolleksiya</h2>
        <p class="winter__text">Buxoro tabiiy mahsuloti</p>
        <div class="winter__cards">
          {autumn.map((elem) => (
            <Item key={elem?.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Autumn;
