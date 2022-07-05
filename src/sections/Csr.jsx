import React from "react";
import CsrSlider from "../components/CsrSlider";
import CsrImg from "../assets/images/csr.webp";
import CertImg from "../assets/images/cert.png";

const Csr = ({ english, setEnglish }) => {
  return (
    <section id="csr" className="csr">
      <div className="maincontainer">
        <h2 className="section-name">csr</h2>
        <div>
          <h2 className="csr__content-info--title section-title">
            {!english
              ? "Tworząc lepszy i sprawiedliwszy świat"
              : "Creating a better and fairer world"}
          </h2>
          <p className="csr__content-info--description">
            {!english
              ? "Zobowiązujemy się dbać o równość płci, walczyć ze zmianami klimatycznymi i wyróżniać się jako innowacyjny pracodawca przyszłości."
              : "We are committed to gender equality, fighting climate change, and being a top employer."}
          </p>
          <div className="csr__slider ">
            <CsrSlider english={english} setEnglish={setEnglish} />
          </div>
        </div>
      </div>
      <div className="csr__content maincontainer-margin-left">
        <div className="csr__content-stats">
          <div className="csr__content-stats--cert">
            <img src={CertImg} alt="" />
          </div>
          <div className="csr__content-stats--procentage">
            <div className="csr__content-stats--banner">
              <div className="csr__content-stats--circle">90%</div>
              <div className="csr__content-stats--info">
                {!english
                  ? "Pracowników Teleperformace Polska uważa, że są traktowani sprawiedliwie niezależnie od płci, pochodzenia, orientacji, wieku"
                  : "of Teleperformance Polska employees say they are treated fairly regardless of their gender, background, sexual orientation or age"}
              </div>
            </div>
            <div className="csr__content-stats--banner">
              <div className="csr__content-stats--circle">90%</div>
              <div className="csr__content-stats--info">
                {!english
                  ? "Pracowników Teleperformace Polska uważa, że jest to bezpieczne miejsce pracy"
                  : "of Teleperformance Polska employees feel they work in a safe place"}
              </div>
            </div>
            <div className="csr__content-stats--banner">
              <div className="csr__content-stats--circle">90%</div>
              <div className="csr__content-stats--info">
                {!english
                  ? "Pracowników Teleperformace Polska ocenia pozytywnie sposób przywitania ich w firmie"
                  : "of Teleperformance Polska employees speak positively about the welcome they received from the company"}
              </div>
            </div>
            <div className="csr__content-stats--banner">
              <div className="csr__content-stats--circle">87%</div>
              <div className="csr__content-stats--info">
                {!english
                  ? "Pracowników Teleperformace Polska uważa, że kadra zarządzająca jest zawsze dostępna"
                  : "of Teleperformance Polska employees say the management team is always available"}
              </div>
            </div>
          </div>
        </div>
        <div className="csr__content-image">
          <img src={CsrImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Csr;
