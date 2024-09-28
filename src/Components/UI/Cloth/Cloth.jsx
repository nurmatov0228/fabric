import React from "react";
import "./cloth.scss";
import news1 from "../../../../public/news1.png";
import news2 from "../../../../public/news2.png";
import news3 from "../../../../public/news3.png";

const Cloth = () => {
  return (
    <div class="cloth">
      <div class="cloth__container">
        <h4 class="cloth__title">News</h4>
        <h5 class="cloth__description">Bukhara natural product</h5>
        <div class="cloth__cards">
          <div class="new__card">
            <div class="new__card__img">
              <img src={news1} alt="photo" />
            </div>
            <div class="new__card__date">
              <div>10/05/2019</div> <span></span> <div>by admin</div>
            </div>
            <div class="new__card__name">How to choose perfect gadgets</div>
            <div class="new__card__description">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper s ...
            </div>
          </div>
          <div class="new__card">
            <div class="new__card__img">
              <img src={news2} alt="photo" />
            </div>
            <div class="new__card__date">
              <div>10/05/2019</div> <span></span> <div>by admin</div>
            </div>
            <div class="new__card__name">How to choose perfect gadgets</div>
            <div class="new__card__description">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper s ...
            </div>
          </div>
          <div class="new__card">
            <div class="new__card__img">
              <img src={news3} alt="photo" />
            </div>
            <div class="new__card__date">
              <div>10/05/2019</div> <span></span> <div>by admin</div>
            </div>
            <div class="new__card__name">How to choose perfect gadgets</div>
            <div class="new__card__description">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper s ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloth;
