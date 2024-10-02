import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../public/pngwing.com.png";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Tilni o'zgartirish funksiyasi
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Tilni o'zgartirish
    localStorage.setItem("language", lng); // Tanlangan tilni localStorage'ga saqlash
  };

  // Modal holati uchun state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Dastlabki yuklanishda localStorage'dan tilni o'qish va o'sha tilga o'zgartirish
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }

    // Modal ochilganda/berkilganda scroll holatini boshqarish
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen, i18n]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <NavLink to={"/"} className={"navbar__image"}>
            <img src={logo} className="navbar__logo" alt="Logo" />
          </NavLink>
          <div className="navbar__links">
            <NavLink to={"/"} className={"navbar__link"}>
              {t("Bosh Sahifa")}
            </NavLink>
            <NavLink to={"/collection"} className={"navbar__link"}>
              {t("To'plam")}
            </NavLink>
            <NavLink to={"/about"} className={"navbar__link"}>
              {t("Biz Haqimizda")}
            </NavLink>
            <NavLink to={"/contact"} className={"navbar__link"}>
              {t("Aloqa")}
            </NavLink>
          </div>
        </div>
        <div className="navbar__right">
          {/* Select elementda onChange ishlatiladi */}
          <select
            className="navbar__language"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language} // Selectda joriy tilni ko'rsatish
          >
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="uz">Uz</option>
            <option value="po">Po</option>
          </select>
          <div className="navbar__burger" onClick={toggleModal}>
            <hr className="navbar__hr" />
            <hr className="navbar__hr" />
            <hr className="navbar__hr" />
          </div>
        </div>
      </div>

      {/* Modal Oyna */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <span className="modal__close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal__links">
              <NavLink to={"/"} className={"navbar__link"} onClick={closeModal}>
                {t("Bosh Sahifa")}
              </NavLink>
              <NavLink
                to={"/collection"}
                className={"navbar__link"}
                onClick={closeModal}
              >
                {t("To'plam")}
              </NavLink>
              <NavLink
                to={"/about"}
                className={"navbar__link"}
                onClick={closeModal}
              >
                {t("Biz Haqimizda")}
              </NavLink>
              <NavLink
                to={"/contact"}
                className={"navbar__link"}
                onClick={closeModal}
              >
                {t("Aloqa")}
              </NavLink>
              {/* Modal uchun ham select element onChange bilan ishlatiladi */}
              <select
                className="navbar__language--modal"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language} // Joriy tilni ko'rsatish
              >
                <option value="en">En</option>
                <option value="ru">Ru</option>
                <option value="uz">Uz</option>
                <option value="po">Po</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
