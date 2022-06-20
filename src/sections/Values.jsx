import React from "react";
import ValuesImg from "../assets/images/values.webp";

const Values = ({ english }) => {
  return (
    <section id="values">
      <div className="maincontainer-margin-right">
        <div className="values__content">
          <div className="values__content-image">
            <img src={ValuesImg} alt="" />
          </div>
          <div className="values__content-info">
            <h2 className="section-name section-name--white">
              {!english ? "nasze wartości" : "our values"}
            </h2>
            <h2 className="values__content-info--title section-title">
              {!english
                ? "Różnorodna kultura oparta na ludzkich wartościach"
                : "A diverse and inclusive culture built on human values"}
            </h2>
            <p className="values__content-info--description section-description">
              {!english
                ? "Wiemy, że za to pracownicy stanowią największy kapitał w naszej organizacji. Ludzi i pracę zespołową stawiamy zawsze na pierwszym miejscu. Inwestujemy w miejsca pracy, które inspirują do uczenia siebie i innych, do rozwoju i realizacji celów. Motywujemy do działania, dokonujemy zmian, bo Twoje sprawy to nasze sprawy. Razem budujemy partnerskie relacje, które zdają egzamin."
                : "This is a place where we believe in the power of people. Where teamwork wins. That’s how we put commitment into practice. This is the company that inspires. To learn, to teach, to grow. To get things done. This is a company that motivates. We make a difference. Because your business is our business. Together, we build partnerships that perform."}
            </p>
          </div>
        </div>
      </div>
      <div className="values__banner maincontainer">
        <p className="banner__h1" data-aos="fade-up" data-aos-duration="1000">
          {!english
            ? "Bądź częścią czegoś więcej niż tylko praca"
            : "Be part of something bigger than just a job"}
        </p>
      </div>
      <a
        href="https://www.teleperformance.com/en-us/careers/job-opportunities/ "
        target="_blank"
        rel="noreferrer"
      >
        <button className="values__content-button button">
          {!english ? "Dołącz do nas już dziś!" : "Apply now"}
        </button>
      </a>
    </section>
  );
};

export default Values;
