import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/newcart.scss";
import news1 from "../../public/news1.png";
import news2 from "../../public/news2.png";
import news3 from "../../public/news3.png";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";

const NewCart = () => {
  const { t } = useTranslation();
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

  const cloths = [
    {
      id: 1,
      img: news1,
      text: `${t(
        "When while the lovely valley teems with vapour around me and the meridian sun strikes the upper surface of the impenetrable foliage of my trees and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks and grow familiar with the countless indescribable forms of the insects and flies then I feel the presence of the Almighty who formed us in his own image and the breath of that universal love which bears and sustains us as it floats around us in an eternity of bliss and then my friend when darkness overspreads my eyes and heaven and earth seem to dwell in my soul and absorb its power like the form of a beloved mistress then I often think with longing Oh would I describe these conceptions could impress upon paper all that is living so full and warm within me that it might be the mirror of my soul as my soul is the mirror of the infinite God!O my friend - but it is too much for my strength - I sink under the weight of the splendour of these visions! A wonderful serenity has taken possession of my entire soul like these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence in this spot which was created for the bliss of souls like mine.I am so happy my dear friend so absorbed in the exquisite sense of mere tranquil existence that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.When while the lovely valley teems with vapour around me and the meridian sun strikes the upper surface of the impenetrable foliage of my trees and but a few stray gleams steal into the inner sanctuary I throw myself down among the tall grass by the trickling stream and as I lie close to the earth a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks and grow familiar with the countless indescribable forms of the insects and flies then I feel the presence of the Almighty who formed us in his own image and the breath of that universal love which bears and sustains us as it floats around us in an eternity of bliss; and then my friend when darkness overspreads my eyes and heaven and earth seem to dwell in my soul and absorb its power like the form of a beloved mistress then I often think with longing Oh would I describe these conceptions could impress upon paper all that is living so full and warm within me."
      )}`,
    },
    {
      id: 2,
      img: news2,
      text: `${t(
        "When while the lovely valley teems with vapour around me and the meridian sun strikes the upper surface of the impenetrable foliage of my trees and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks and grow familiar with the countless indescribable forms of the insects and flies then I feel the presence of the Almighty who formed us in his own image and the breath of that universal love which bears and sustains us as it floats around us in an eternity of bliss and then my friend when darkness overspreads my eyes and heaven and earth seem to dwell in my soul and absorb its power like the form of a beloved mistress then I often think with longing Oh would I describe these conceptions could impress upon paper all that is living so full and warm within me that it might be the mirror of my soul as my soul is the mirror of the infinite God!O my friend - but it is too much for my strength - I sink under the weight of the splendour of these visions! A wonderful serenity has taken possession of my entire soul like these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence in this spot which was created for the bliss of souls like mine.I am so happy my dear friend so absorbed in the exquisite sense of mere tranquil existence that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.When while the lovely valley teems with vapour around me and the meridian sun strikes the upper surface of the impenetrable foliage of my trees and but a few stray gleams steal into the inner sanctuary I throw myself down among the tall grass by the trickling stream and as I lie close to the earth a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks and grow familiar with the countless indescribable forms of the insects and flies then I feel the presence of the Almighty who formed us in his own image and the breath of that universal love which bears and sustains us as it floats around us in an eternity of bliss; and then my friend when darkness overspreads my eyes and heaven and earth seem to dwell in my soul and absorb its power like the form of a beloved mistress then I often think with longing Oh would I describe these conceptions could impress upon paper all that is living so full and warm within me."
      )}`,
    },
    {
      id: 3,
      img: news3,
      text: `${t(
        "When while the lovely valley teems with vapour around me and the meridian sun strikes the upper surface of the impenetrable foliage of my trees and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks and grow familiar with the countless indescribable forms of the insects and flies then I feel the presence of the Almighty who formed us in his own image and the breath of that universal love which bears and sustains us as it floats around us in an eternity of bliss and then my friend when darkness overspreads my eyes and heaven and earth seem to dwell in my soul and absorb its power like the form of a beloved mistress then I often think with longing Oh would I describe these conceptions could impress upon paper all that is living so full and warm within me that it might be the mirror of my soul as my soul is the mirror of the infinite God!O my friend - but it is too much for my strength - I sink under the weight of the splendour of these visions! A wonderful serenity has taken possession of my entire soul like these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence in this spot which was created for the bliss of souls like mine.I am so happy my dear friend so absorbed in the exquisite sense of mere tranquil existence that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.When while the lovely valley teems with vapour around me and the meridian sun strikes the upper surface of the impenetrable foliage of my trees and but a few stray gleams steal into the inner sanctuary I throw myself down among the tall grass by the trickling stream and as I lie close to the earth a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks and grow familiar with the countless indescribable forms of the insects and flies then I feel the presence of the Almighty who formed us in his own image and the breath of that universal love which bears and sustains us as it floats around us in an eternity of bliss; and then my friend when darkness overspreads my eyes and heaven and earth seem to dwell in my soul and absorb its power like the form of a beloved mistress then I often think with longing Oh would I describe these conceptions could impress upon paper all that is living so full and warm within me."
      )}`,
    },
  ];

  const params = Number(useParams()?.id);
  const item = cloths.filter((elem) => elem?.id === params);
  const { id, img, text } = item[0] || {};

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
            "NewID " +
            id +
            " Email: " +
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

  return (
    <div className="newcart">
      <div className="newcart__container">
        <div class="newcart__img">
          <img src={img} alt="photo" />
        </div>
        <div className="newcart__texts">
          <div class="newcart__date">
            <div>10/05/2019</div> <span></span>{" "}
            <div id="admin">{t("by admin")}</div>
          </div>
          <div class="newcart__description">{text}</div>

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
      </div>
    </div>
  );
};

export default NewCart;
