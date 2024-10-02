import React from "react";
import autumn from "../../assets/autumn";
import Item from "../UI/Item/Item";
import { useTranslation } from "react-i18next";

const Autumn = () => {
  const { t } = useTranslation();
  return (
    <div class="winter">
      <div class="winter__container">
        <h2 class="winter__title">{t("Kuzgi kolleksiya")}</h2>
        <p class="winter__text">{t("Buxoro tabiiy mahsuloti")}</p>
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
