import React from "react";
import "../styles/about.scss";
import aboutus from "../../public/aboutimage.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__left" data-aos="fade-right">
          <div className="about__title">{t("Bukhara Natural Product")}</div>
          <div className="about__texts">
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory has been a company that produces cotton fabrics for use all over the world for many years."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThis company has been serving customers for 17 years."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe main goal of this company is to produce high quality and cost effective products."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe production process of this company is completely environmentally friendly."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company can produce any types of cotton raw materials according to the requirements and suggestions of customers."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company is the official dealer of DongJia weaving machines in Uzbekistan."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsCurrently, more than 80 families contribute to the prestige and success of the company by providing financially for their families."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsTo meet this demand, 50 looms are running at high speed, non-stop."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsWe have the capacity to weave 200-250,000 meters of fabric per month."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsIn accordance with the high demand of our customers, the company has now launched the production of high-quality premium eco-bags."
              )}
            </p>
            <p className="about__text">
              {t(
                "Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsBukhara Natural Product Company is pleased to serve its loyal customers at any time."
              )}
            </p>
          </div>
        </div>
        <div className="about__right">
          <img src={aboutus} alt="Photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
