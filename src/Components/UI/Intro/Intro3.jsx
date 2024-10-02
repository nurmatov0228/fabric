import React from "react";
import "./intro2.scss";
import intro2 from "../../../../public/intro2.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Intro3 = () => {
  const { t } = useTranslation();
  return (
    <div class="intro2">
      <div class="intro2__container" id="intro3">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          class="intro2__left aos-init aos-animate"
        >
          <h1 class="intro2__title">100%</h1>
          <p class="intro2__text">{t("Mahsulot sifati")}</p>
        </div>
        <div data-aos="fade-down" class="intro2__middle aos-init aos-animate">
          <img src={intro2} alt="" class="intro2__img" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          class="intro2__right aos-init aos-animate"
        >
          <h2 class="intro2__subtitle">{t("Buxoro tabiiy mahsuloti")}</h2>
          <p class="intro2__subtext">
            {t(
              "ko'p yillar davomida butun dunyo uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan"
            )}
          </p>
          <NavLink to={"/collection"}>
            <button className="intro2__btn" type="button">
              {t("To'plam")}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Intro3;
