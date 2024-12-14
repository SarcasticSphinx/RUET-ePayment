import React from "react";
import { Link } from "react-router-dom";
import availablePaymentOptionsImg from "../../images/availablePaymentOptions.png";
import "./footerStyle.css";

const Footer = () => {
  return (
    <div className="footer-container">
        <img src={availablePaymentOptionsImg} alt="" />
      <div className="copy-right">
      Copyright © 2024 <Link to="https://www.ruet.ac.bd/" target="_blank">Rajshahi University of Engineering and Technology.</Link> All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
