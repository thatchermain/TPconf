import React from "react";
import ImageSlider from "../components/ImageSlider";

const Benefits = ({ english, setEnglish }) => {
  return (
    <section id="benefits" className="benefits">
      <div className="maincontainer">
        <h2 className="section-name">
          {!english ? "nasze benefity" : "benefits"}
        </h2>
        <div className="benefits__content">
          <h2 className="about__content-info--title section-title">
            {!english
              ? "Nie lubisz granic? U nas ich nie znajdziesz"
              : "You don’t like boundaries? We have none"}
          </h2>
          <div className="benefits__slider ">
            <ImageSlider setEnglish={setEnglish} english={english} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
