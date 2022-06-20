import React from "react";
import CookieEn from "./CookieEn";
import CookiePl from "./CookiePl";

const Modal = ({ open, english }) => {
  if (!open) return null;
  return (
    <div className="modal__overlay">
      <div className="modal__container">
        <div className="modal__container-text">
          {!english ? <CookiePl /> : <CookieEn />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
