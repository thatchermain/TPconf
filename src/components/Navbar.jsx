import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = ({ english, setEnglish }) => {
  const [fixed, setFixed] = useState(false);

  const isFixed = () => {
    if (window.scrollY > 800) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", isFixed);
  return (
    <nav className={fixed ? "navbar-fixed" : "navbar"}>
      <div className="maincontainer navbar__content">
        <div className="navbar__logo">
          <a href="#home">
            <img src={Logo} alt="ArcelorMittal Brand Logo" />
          </a>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#about">
                {!english ? "O nas" : "About us"}
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#benefits">
                {!english ? "Benefity" : "Benefits"}
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#values">
                {!english ? "Nasze wartości" : "Our values"}
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#csr">
                {!english ? "CSR" : "CSR"}
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#jobs">
                {!english ? " Oferty pracy" : "Job offers"}
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#contact">
                {!english ? "Kontakt" : "Contact"}
              </a>
            </li>
            <button
              className="navbar__button"
              onClick={() => setEnglish(!english)}
            >
              {!english ? "EN" : "PL"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
