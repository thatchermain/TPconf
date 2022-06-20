import React from "react";
import People1 from "../assets/images/people1.webp";
import People2 from "../assets/images/people2.webp";
import People3 from "../assets/images/people3.webp";

const People = ({ english }) => {
  return (
    <section id="people">
      <div className="maincontainer">
        <h2 className="section-name">
          {!english ? "nasi ludzie" : "our people"}
        </h2>
        <h2 className="people__content-info--title section-title">
          {!english
            ? "Zatrudniamy i rozwijamy"
            : "We hire and develop the best "}{" "}
          <br />{" "}
          {!english ? "największe talenty w branży" : "talent in the industry"}
        </h2>
        <div className="people__content">
          <div className="people__content--images">
            <div
              className={!english ? "images__left" : "images__left--english"}
            >
              <img src={People1} alt="" />
            </div>
            <div
              className={!english ? "images__right" : "images__right--english"}
            >
              <div
                className={
                  !english
                    ? "images__right--top"
                    : "images__right--english--top"
                }
              >
                <img src={People2} alt="" />
              </div>
              <div
                className={
                  !english
                    ? "images__right--bottom"
                    : "images__right--english--bottom"
                }
              >
                <img src={People3} alt="" />
              </div>
            </div>
          </div>
          <div className="people__content--info">
            <p>
              {!english
                ? "Korzystamy z odpowiedzialnych i skutecznych metod rekrutacji, aby przyciągać najlepsze talenty. Inwestujemy w rozwój pracowników, wzmacniając ich poczucie własnej wartości i tym samym motywując do dalszego rozwoju."
                : "We use responsible, inclusive and efficient recruiting practices to attract the best talent, and then invest heavily in employee empowerment, growth, and development to maximize each employee’s potential."}
              <br />
              <br />
              {!english
                ? "Różnorodność, inkluzywność i równość to podstawy naszej kultury. Jesteśmy najbardziej zróżnicowanym globalnie dostawcą usług biznesowych w branży. Wierzymy, że nasze różnice czynią nas silniejszymi. Jesteśmy dużą grupą, ale działamy solidarnie."
                : "Diversity, inclusion, and equality are core to our culture. We are the most globally diverse business service provider in the industry, and believe that our differences make us stronger. We are many, but act as one."}
            </p>
          </div>
        </div>
        <div className="people__banner banner">
          <p
            className="banner__h1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="400"
            data-aos-delay="400"
          >
            {!english
              ? "Jesteś ambitny? My również"
              : "Are you ambitious? So are we"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default People;
