import React, { useRef } from "react";
import "./footer.scss";
import logo from "../../../public/pngwing.com.png";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const emailInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = emailInputRef.current.value;

    if (emailValue.length) {
      const token = `7224174930:AAHfX4xYMCiylsXEZPRrKF395SLBmv3XdcU`;
      const chat_id = 1308395281;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      axios({
        url: url,
        method: "post",
        data: {
          chat_id: chat_id,
          text: `Email submitted:
        ${emailValue},`,
        },
      })
        .then((data) => {
          toast.success("Ma'lumotlar jo'natildi", {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        })
        .catch((error) => {
          toast.error("Jo'natishda xatolik bor", {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        });
      emailInputRef.current.value = "";
    } else {
      toast.error("Email Invialid");
    }
  };

  return (
    <>
      <div className="footer">
        <div
          className="footer__container"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <div className="footer__content">
            <div className="footer__left">
              <a className="footer__logo" href="/">
                <img src={logo} alt="photo" />
              </a>
              <p className="footer__logo__description">
                {t(
                  "'Bukhara Natural Product' has been a company that produces cotton fabrics for many years for use all over the world."
                )}
              </p>
            </div>
            <div className="footer__right">
              <ul className="footer__menu">
                <li>{t("Menu")}</li>
                <NavLink className="link" to={"/"}>
                  {t("Home")}
                </NavLink>
                <NavLink className="link" to={"/about"}>
                  {t("About Us")}
                </NavLink>
                <NavLink className="link" to={"/collection"}>
                  {t("Collection")}
                </NavLink>
                <NavLink className="link" to={"/contact"}>
                  {t("Contact")}
                </NavLink>
              </ul>
              <ul className="footer__contacts">
                <li>{t("Contacts")}</li>
                <li>
                  <a href="https://www.google.com/maps/@41.218867,69.206016,13z?hl=ru&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
                    Bukhara, st. Alpomysh 80.
                  </a>
                </li>
                <li>
                  <a href="mailto:Bnpuz@bk.ru">Bnpuz@bk.ru</a>
                </li>
                <li>
                  <a href="mailto:bnp_fabrik">bnp_fabrik</a>
                </li>
                <li>
                  <a href="mailto:info@bnpfabric.com">info@bnpfabric.com</a>
                </li>
                <li>
                  <a href="tel:+998 93 383 75 85">+998 93 383 75 85</a>
                </li>
                <li>
                  <a href="tel:+998 93 960 78 00">+998 93 960 78 00</a>
                </li>
              </ul>
              <ul className="footer__email">
                <li>{t("Subscribe to our email")}</li>
                <li>
                  <form onSubmit={handleSubmit}>
                    <input
                      id="email"
                      ref={emailInputRef}
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    <button type="submit">{t("Subscribe")}</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__container">
            <p className="footer__bottom__title">
              © {new Date().getFullYear()}{" "}
              {t(" LLC 'BUKHARA NATURAL PRODUCT'. All rights reserved.")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
