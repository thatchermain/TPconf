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
            <div className="csr__content-stats--procentage-top">
              <span className="procentage-number text-gradient">54%</span>
              <p className="procentage-text">
                {!english ? "udział kobiet" : "percentage of women"} <br />{" "}
                {!english ? "wśród zatrudnionych" : " in the workforce"}
              </p>
            </div>
            <div className="csr__content-stats--procentage-bottom">
              <span className="procentage-number text-gradient">15%</span>
              <p className="procentage-text">
                {!english
                  ? "zmniejszenie śladu węglowego"
                  : "decrease in carbon footprint"}{" "}
                <br />{" "}
                {!english
                  ? "na pracownika od 2020 do 2021"
                  : "per employee from 2020 to 2021"}
              </p>
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
