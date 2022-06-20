import React, { useState } from "react";

import CookiesPl from "../assets/cookiesPl.pdf";
import CookiesEn from "../assets/cookiesEn.pdf";
import TermsFilePl from "../assets/termsOfUsePl.pdf";
import TermsFileEn from "../assets/termsOfUseEn.pdf";

const Cookies = ({ english, setEnglish }) => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className={openModal ? "cookies" : "no-cookies"}>
      <div className="cookies__bar">
        <p className="cookies__info">
          {!english ? (
            <p>
              Strona karieratp.pl wykorzystuje {""}
              <a
                href={CookiesPl}
                className="cookies__link"
                target="_blank"
                rel="noreferrer"
                download="cookiesPl.pdf"
              >
                cookies.
              </a>{" "}
              Korzystając z niej, akceptujesz naszą politykę prywatności.
            </p>
          ) : (
            <p>
              This website karieratp.pl uses {""}
              <a
                href={CookiesEn}
                className="cookies__link"
                target="_blank"
                rel="noreferrer"
                download="cookiesEn.pdf"
              >
                cookies.
              </a>{" "}
              By using it, you accept our privacy policy.
            </p>
          )}
        </p>
        <div className="cookies__buttons">
          <button className="accept" onClick={() => setOpenModal(false)}>
            {!english ? "Akceptuj" : "Accept"}
          </button>
          <a
            href={!english ? `${TermsFilePl}` : `${TermsFileEn}`}
            target="_blank"
            rel="noreferrer"
            download={!english ? `${"termOfUsePl.pdf"}` : `${"termsOfUseEn"}`}
          >
            <button className="privacy">
              {!english
                ? "Przejdź do Polityki Prywatności"
                : "Go to Privacy Policy"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
