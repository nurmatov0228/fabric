import React, { useState } from "react";
import "../styles/card.scss";
import "../assets/data";
import data from "../assets/data";
import { useParams } from "react-router-dom";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState("1");
  const [value1, setValue1] = React.useState();

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text1, setText] = useState("");

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

    if (email.trim().length && Number(number.trim()) && text1.trim().length) {
      const token = `7224174930:AAHfX4xYMCiylsXEZPRrKF395SLBmv3XdcU`;
      const chat_id = 1308395281;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      axios({
        url: url,
        method: "post",
        data: {
          chat_id: chat_id,
          text:
            "Email: " +
            email +
            " Raqam: " +
            number +
            " Xabar: " +
            text1 +
            " Rating: " +
            value1 +
            " stars",
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
      setValue1(0);
    } else {
      toast.warning("Kiritilgan ma'lumot noto'g'ri");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const params = Number(useParams()?.id);

  const item = data.filter((elem) => elem?.id === params);
  const {
    id,
    name,
    img,
    text,
    title,
    category,
    Material,
    Pillowcase,
    sheet,
    Duvet,
    Size,
    Manufacturer,
  } = item[0] || {};

  return (
    <div className="cart">
      <div className="cart__container">
        <div class="cart__top">
          <div class="cart__img">
            <img src={img} alt="photo" />
          </div>
          <div class="cart__info">
            <div class="cart__name">{name}</div>
            <table>
              <tr>
                <td class="th">{t("Material")}</td>
                <td>{Material}</td>
              </tr>
              <tr>
                <td class="th">{t("Pillowcase")}</td>
                <td>{Pillowcase}</td>
              </tr>
              <tr>
                <td class="th">{t("Bed Sheet")}</td>
                <td>{sheet}</td>
              </tr>
              <tr>
                <td class="th">{t("Duvet Cover")}</td>
                <td>{Duvet}</td>
              </tr>
              <tr>
                <td class="th">{t("Size")}</td>
                <td>{Size}</td>
              </tr>
              <tr>
                <td class="th">{t("Manufacturer")}</td>
                <td>{Manufacturer}</td>
              </tr>
            </table>
            <div class="cart__category">
              {t("Category: ")} <span>{category}</span>
            </div>
          </div>
        </div>
        <div className="cart__bottom">
          <Box
            sx={{ width: "100%", typography: "body1" }}
            className="cart__bottom__box"
          >
            <TabContext value={value}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className="cart__bottom__box2"
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label={t("Description")} value="1" className="Tab" />
                  <Tab label={t("Reviews ") + 0} value="2" className="Tab" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div class="tab__description">
                  <div class="tab__name">{t("Description")}</div>
                  <div class="tab__name__subtitle">
                    {t("Bedding set Squares")}
                  </div>
                  <p>{text}</p>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="tab__review">
                  <div className="tab__name">{t("Reviews")}</div>
                  <p>{t("There are no reviews yet")}</p>
                  <div className="tab__product__name">
                    {t("Be the first to review ")}"{name}"
                  </div>
                  <div className="remember">
                    {t(
                      "Your email address will not published. Required fields are marked*"
                    )}
                  </div>

                  <div className="rating">
                    <Box
                      sx={{ "& > legend": { mt: 2 } }}
                      className="rating__flex"
                    >
                      <Typography component="legend">
                        {t("Your Rating:")}
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={value1}
                        onChange={(event, newValue) => {
                          setValue1(newValue);
                        }}
                      />
                    </Box>
                  </div>
                  <div className="contacts__left" id="tabs__form">
                    <form onSubmit={handleSubmit}>
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
                          name="text1"
                          onChange={settingText}
                          required
                        ></textarea>
                      </div>
                      <button type="submit">{t("Submit")}</button>
                    </form>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Cart;
