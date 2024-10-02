import React from "react";
import "./winter.scss";
import winter from "../../assets/winter";
import Item from "../UI/Item/Item";
import { useTranslation } from "react-i18next";

const Winter = () => {
  const { t } = useTranslation();
  return (
    <div class="winter">
      <div class="winter__container">
        <h2 class="winter__title">{t("Qishki kolleksiya")}</h2>
        <p class="winter__text">{t("Buxoro tabiiy mahsuloti")}</p>
        <div class="winter__cards">
          {winter.map((elem) => (
            <Item key={elem?.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Winter;
