import React from "react";
import PrivacyPolicyEn from "./PrivacyPolicyEn";
import PrivacyPolicyPl from "./PrivacyPolicyPl";

const PrivacyPolicy = ({
  setOpenPrivacy,
  openPrivacy,
  english,
  setEnglish,
}) => {
  return (
    <div className="modal__overlay">
      <div className="modal__container">
        <div className="modal__container-text">
          {!english ? <PrivacyPolicyPl /> : <PrivacyPolicyEn />}
        </div>
        <button
          className="privacy__button"
          onClick={() => setOpenPrivacy(false)}
        >
          {!english ? "Zamknij" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
