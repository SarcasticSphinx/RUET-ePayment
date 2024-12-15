import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import "./navStyle.css";
import ruetLogo from "../../images/ruetLogo.webp";
import dropDownMenuImg from "../../images/dropDownMenu.png";

const NavBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const location = useLocation();

  const toggleDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };

  useEffect(() => {
    if (location.pathname === "/RUET-ePayment/payNow") {
      setAlertMessage(
        "সময় নিয়ে এবং সাবধানতার সাথে সঠিক তথ্য দিয়ে পেমেন্ট করার জন্য শিক্ষার্থীদের অনুরোধ জানানো যাচ্ছে। পেমেন্ট সম্পূর্ণ হবার পর ভুল হলে সেটির দায়বদ্ধতা একান্তই আপনার।"
      );
    } else {
      setAlertMessage(
        "Send us any problem/feedback to epayment@ruet.edu [Please allow us 1-3 working days for a solution]"
      );
    }
  }, [location.pathname]);

  return (
    <div className="nav-container">
      <Link to="/RUET-ePayment/">
        <div className="logo">
          <img src={ruetLogo} alt="RUET Logo" />
          <h1>RUET ePayment</h1>
        </div>
      </Link>
      <nav className="nav-bar">
        <div className="dropDownMenu" onClick={toggleDropDownMenu}>
          <p>RUET ePayment</p>
          <img className="dropDownMenuImg" src={dropDownMenuImg} alt="Menu" />
        </div>
        <div className={`nav-links ${dropDownMenu ? "active" : ""}`}>
          <NavLink to="/RUET-ePayment/" end>
            Home
          </NavLink>
          <NavLink to="/RUET-ePayment/search-receipt">
            Search for Payment Receipt
          </NavLink>
          <a
            href="https://ugresult.ruet.ac.bd/admin/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Registration
          </a>
          <a
            href="https://forms.gle/QthntHZdPF2kJb2L8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feature Request
          </a>
          <NavLink to="/RUET-ePayment/statistics">Statistics</NavLink>
          <NavLink to="/RUET-ePayment/support">Support</NavLink>
        </div>
      </nav>
      <div
        className={
          location.pathname === "/RUET-ePayment/payNow"
            ? "important-notice-red"
            : "important-notice-green"
        }
      >
        {alertMessage}
      </div>
    </div>
  );
};

export default NavBar;
