import React, { useRef } from "react";
import "./footer.scss";
import logo from "../../../public/pngwing.com.png";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

const Footer = () => {
  const emailInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = emailInputRef.current.value;
    console.log("Email submitted:", emailValue);

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
  };

  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__left">
              <a className="footer__logo" href="/">
                <img src={logo} alt="photo" />
              </a>
              <p className="footer__logo__description">
                'Bukhara Natural Product' has been a company that produces
                cotton fabrics for many years for use all over the world.
              </p>
            </div>
            <div className="footer__right">
              <ul className="footer__menu">
                <li>Menu</li>
                <a className="link" href="/">
                  Home
                </a>
                <a className="link" href="/about">
                  About Us
                </a>
                <a className="link" href="/collection">
                  Collection
                </a>
                <a className="link" href="/contact">
                  Contacts
                </a>
              </ul>
              <ul className="footer__contacts">
                <li>Contacts</li>
                <li>Bukhara, st. Alpomysh 80.</li>
                <li>Bnpuz@bk.ru</li>
                <li>bnp_fabrik</li>
                <li>info@bnpfabric.com</li>
                <li>+998 93 383 75 85</li>
                <li>+998 93 960 78 00</li>
              </ul>
              <ul className="footer__email">
                <li>Subscribe to our email</li>
                <li>
                  <form onSubmit={handleSubmit}>
                    <input
                      id="email"
                      ref={emailInputRef}
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__container">
            <p className="footer__bottom__title">
              © {new Date().getFullYear()} LLC "BUKHARA NATURAL PRODUCT". All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
