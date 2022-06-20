import React from "react";
import JobOffer from "../components/JobOffer";

const Jobs = ({ english, offers }) => {
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
        {offers.map((offer) => {
          return <JobOffer title={offer.jobTitle} location={offer.location} />;
        })}
      </div>
    </section>
  );
};

export default Jobs;
