import React, { useState } from "react";
import "../styles/contact.scss";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const settingEmail = (e) => {
    setEmail(e.target.value);
  };

  const settingNumber = (e) => {
    setNumber(e.target.value);
  };

  const settingText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim().length && Number(number.trim()) && text.trim().length) {
      const token = `7224174930:AAHfX4xYMCiylsXEZPRrKF395SLBmv3XdcU`;
      const chat_id = 1308395281;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      console.log(email + number + text);

      axios({
        url: url,
        method: "post",
        data: {
          chat_id: chat_id,
          text: "Email: " + email + " Raqam: " + number + " Xabar: " + text,
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

      e.target.reset();
    } else {
      toast.warning("Kiritilgan ma'lumot noto'g'ri");
    }
  };

  return (
    <div class="contacts">
      <div class="contacts__container">
        <div class="contacts__top ">
          <div class="contacts__left">
            <div class="contacts__title">{t("Contact")}</div>
            <form onSubmit={handleSubmit} data-aos="fade-down">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={settingEmail}
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  onChange={settingNumber}
                  name="number"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message Here"
                  rows="10"
                  name="text"
                  onChange={settingText}
                  required
                ></textarea>
              </div>
              <button type="submit">{t("Submit")}</button>
            </form>
          </div>
          <div class="contacts__right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48018.13154800855!2d69.206016!3d41.2188672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1723386063842!5m2!1sru!2s"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              data-aos="fade-up"
              data-aos-delay="500"
            ></iframe>
          </div>
        </div>
        <div class="contacts__bottom">
          <div class="contacts__card" data-aos="fade-right" data-aos-delay="50">
            <div class="contacts__card__img">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
              </svg>
            </div>
            <div class="contacts__card__text">
              <span>Email:</span>
              <a href="mailto:info@bnpfabric.uz">info@bnpfabric.uz</a>
            </div>
          </div>
          <div
            class="contacts__card"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="contacts__card__img">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contacts__card__text">
              <span>Tel:</span>
              <a href="tel:+998 93 383 75 85">+998 93 383 75 85</a> <br />
              <a href="tel:+998 93 960 78 00">+998 93 960 78 00</a>
            </div>
          </div>
          <div
            class="contacts__card"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div class="contacts__card__img">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"></path>
              </svg>
            </div>
            <div class="contacts__card__text">
              <span>Address:</span>
              <a href="https://www.google.com/maps/@41.218867,69.206016,13z?hl=ru&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
                Bukhara, st. Alpomysh 80.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
