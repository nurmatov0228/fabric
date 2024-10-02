import React from "react";
import "./intro1.scss";
import { useTranslation } from "react-i18next";

const Intro1 = () => {
  const { t } = useTranslation();

  return (
    <div className="intro1" data-aos="zoom-out-up">
      <div className="intro__container">
        <div className="intro__left">
          <img
            src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png"
            className="intro__img"
            alt="introImageAlt"
          />
        </div>
        <div
          data-aos="zoom-in-left"
          className="intro__right aos-init aos-animate"
        >
          <h4 className="intro__toptitle">{t("Buxoro")}</h4>
          <h3 className="intro__title">{t("Tabiiy")}</h3>
          <h2 className="intro__bottomtitle">{t("Mahsulot")}</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro1;
