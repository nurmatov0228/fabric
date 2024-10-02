import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NewItem = ({ id, img, text }) => {
  const { t } = useTranslation();
  return (
    <NavLink className={"new__link"} to={`/news/${id}`}>
      <div class="new__card">
        <div class="new__card__img">
          <img src={img} alt="photo" />
        </div>
        <div class="new__card__date">
          <div>10/05/2019</div> <span></span> <div>{t("by admin")}</div>
        </div>
        <div class="new__card__name">{t("How to choose perfect gadgets")}</div>
        <div class="new__card__description">{text.slice(0, 99) + "..."}</div>
      </div>
    </NavLink>
  );
};

export default NewItem;
