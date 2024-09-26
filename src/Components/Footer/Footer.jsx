import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <p class="footer__title">
          © {new Date().getFullYear()} LLC "BUKHARA NATURAL PRODUCT". All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
