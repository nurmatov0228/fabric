import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../public/pngwing.com.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scrollni o'chirish va yoqish
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Scrollni o'chirish
    } else {
      document.body.style.overflow = "auto"; // Scrollni qayta yoqish
    }
  }, [isModalOpen]);

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
              Home
            </NavLink>
            <NavLink to={"/collection"} className={"navbar__link"}>
              Colection
            </NavLink>
            <NavLink to={"/about"} className={"navbar__link"}>
              About
            </NavLink>
            <NavLink to={"/contact"} className={"navbar__link"}>
              Contact
            </NavLink>
          </div>
        </div>
        <div className="navbar__right">
          <select className="navbar__language">
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="uz">Uz</option>
            <option value="pl">Poland</option>
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
                Home
              </NavLink>
              <NavLink
                to={"/collection"}
                className={"navbar__link"}
                onClick={closeModal}
              >
                Collection
              </NavLink>
              <NavLink
                to={"/about"}
                className={"navbar__link"}
                onClick={closeModal}
              >
                About
              </NavLink>
              <NavLink
                to={"/contact"}
                className={"navbar__link"}
                onClick={closeModal}
              >
                Contact
              </NavLink>
              {/* Language dropdownni modalga ham qo'shamiz */}
              <select className="navbar__language--modal">
                <option value="en">En</option>
                <option value="ru">Ru</option>
                <option value="uz">Uz</option>
                <option value="pl">Poland</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
