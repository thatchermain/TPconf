import React from "react";

const Jobs = ({ english }) => {
  return (
    <section id="jobs" className="jobs">
      <div className="maincontainer">
        <h2 className="section-name">
          {!english ? "oferty pracy" : "job offers"}
        </h2>
        <h2 className="section-title">
          {!english
            ? "Szukasz idealnej oferty pracy? Mamy ich wiele"
            : "Are you looking for a career? We have many"}
        </h2>
        <div className="jobs__buttons">
          <a
            href="https://www.teleperformance.com/en-us/careers/job-opportunities/ "
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">
              {!english ? "Aplikuj teraz" : "Apply now"}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
