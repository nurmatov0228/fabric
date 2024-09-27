import React from "react";
import summer from "../../assets/summer";
import Item from "../UI/Item/Item";

const Summer = () => {
  return (
    <div class="winter">
      <div class="winter__container">
        <h2 class="winter__title">Yozgi kolleksiya</h2>
        <p class="winter__text">Buxoro tabiiy mahsuloti</p>
        <div class="winter__cards">
          {summer.map((elem) => (
            <Item key={elem?.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summer;
