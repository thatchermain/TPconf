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
        {/* <div className={offers ? "jobs__buttons" : "jobs__buttons-hidden"}>
          <a
            href="https://www.teleperformance.com/en-us/careers/job-opportunities/ "
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">
              {!english ? "Aplikuj teraz" : "Apply now"}
            </button>
          </a>
        </div> */}
        <div className="jobsContainer">
          {offers.map((offer) => {
            return (
              <JobOffer
                english={english}
                titlePl={offer.jobTitlePl}
                titleEn={offer.jobTitleEn}
                locationPl={offer.locationPl}
                locationEn={offer.locationEn}
                link={offer.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
