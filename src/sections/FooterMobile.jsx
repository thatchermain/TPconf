import React from "react";
import FooterLogo from "../assets/images/logo-footer.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";

const FooterMobile = ({ english }) => {
  return (
    <footer id="contact" className="footerMobile">
      <div className="footer__content">
        <div className="footer__content--left">
          <div className="logo-footer-mobile">
            <img src={FooterLogo} alt="" />
            <p className="email"> jobs@pl.teleperformance.com</p>
          </div>
        </div>

        <p>{!english ? "Nasze biura" : "Our offices"}</p>
        <br />

        <div className="location-top--left">
          <p className="city">WARSZAWA</p>
          <p>
            ul. Wołoska 24 <br /> 02-675 Warszawa
          </p>
          <br />
          <br />
        </div>
        <div className="location-top--right"></div>

        <div className="location-bottom">
          <p className="city">KATOWICE</p>
          <p>
            Biuro 1 <br /> ul. Chorzowska 146 D <br /> 40-101 Katowice <br />
            <br /> Biuro 2 <br /> Al. Roździeńskiego 1 A <br /> 40-202 Katowice
          </p>
          <br />
          <br />
          <p className="city">KRAKÓW</p>
          <p>
            ul. Wielicka 28 <br /> 30-552 Kraków
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="social">
          <a
            className="social-icon"
            href="https://www.instagram.com/teleperformancepoland"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            className="social-icon"
            href="https://www.facebook.com/teleperformance.polska"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-text">© 2022 Teleperformance</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
