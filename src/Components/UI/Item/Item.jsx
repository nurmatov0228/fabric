import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({
  id,
  name,
  img,
  text,
  title,
  category,
  Material,
  Pillowcase,
  sheet,
  Duvet,
  Size,
  Manufacturer,
}) => {
  return (
    <NavLink className={"winter__link"} to={`/element/${id}`}>
      <div data-aos="zoom-in-right" class="winter__card aos-init aos-animate">
        <img alt="" src={img} className="winter__card__img" />
        <h3 class="winter__subtitle">{name}</h3>
      </div>
    </NavLink>
  );
};

export default Item;
