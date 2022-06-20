import React from "react";

const About = ({ english, setEnglish }) => {
  return (
    <section id="about" className="about">
      <div className="maincontainer">
        <h2 className="section-name">{!english ? "o nas" : "about us"}</h2>
        <div className="about__content">
          <div className="about__content-info">
            <h2 className="about__content-info--title section-title">
              {!english
                ? "Teleperformance to światowy lider w zakresie spersonalizowanej i wielokanałowej obsługi oraz zarządzania relacjami z klientem."
                : "Teleperformance is the global leader in advanced experience management for customers and citizens around the world"}
            </h2>
            <p className="about__content-info--description section-description">
              {!english
                ? "Koncentrując się na dostarczaniu wyjątkowych usług biznesowych, firma zapewnia zintegrowane podejście OneOffice, obejmujące zarządzanie doświadczeniami klientów, usługi back-office i optymalizację procesów biznesowych. Kompleksowe portfolio rozwiązań pomaga organizacjom zwiększyć wydajność biznesową, a także poprawić lojalność klientów. Wszystko to poprzez zrównoważenie zaawansowanych technologicznie rozwiązań z podejściem skoncentrowanym na potrzebach odbiorców praktyk biznesowych."
                : "Focused on delivering exceptional business services, we provide an integrated, OneOffice approach through: customer experience management, back-office services, and business process optimization. This end-to-end solution portfolio helps companies achieve business efficiencies and improve customer loyalty by balancing high-tech solutions with a high-touch, human-centric approach. "}
              <br />
              <br />
              {!english
                ? "Teleperformance Polska obecne jest na polskim rynku nieprzerwanie od 20 lat. Działamy w czterech oddziałach zlokalizowanych w Warszawie, Krakowie i Katowicach."
                : "Teleperformance Poland has been present on the Polish market for over 20 years. We operate from 4 sites, located in Warsaw, Katowice and Krakow."}
            </p>
            <a href="#jobs">
              <button className="about__content-button button">
                {!english ? "Dołącz do nas już dziś!" : "Join us today!"}
              </button>
            </a>
          </div>
          <div className="about__content-stats">
            <div className="about__content-stats--stat about__content-stats--stat-one">
              <span className="stat-text-gray">
                {!english ? "Obecnie zatrudniamy" : "We are a group of"}
              </span>
              <span className="stat-number text-gradient">1700</span>
              <span className="stat-text-pink">
                {!english ? "pełnych pasji pracowników" : "passionate people"}
              </span>
            </div>
            <div className="about__content-stats--stat about__content-stats--stat-two">
              <span className="stat-text-gray">
                {!english ? "obywateli ponad" : "citizens of over"}
              </span>
              <span className="stat-number text-gradient">55</span>
              <span className="stat-text-pink">
                {!english ? "różnych krajów" : "different countries"}
              </span>
            </div>
            <div className="about__content-stats--stat about__content-stats--stat-three">
              <span className="stat-text-gray">
                {!english ? "którzy obsługują rynki w" : "serving in"}
              </span>
              <span className="stat-number text-gradient">20</span>
              <span className="stat-text-pink">
                {!english ? "językach" : "different languages"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
