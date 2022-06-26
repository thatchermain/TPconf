import React from "react";

const JobOffer = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="jobOffer">
        <div className="jobOfferTop">
          <h2 className="jobOfferTitle">
            {!props.english ? `${props.titlePl}` : `${props.titleEn}`}
          </h2>
          <br />
          <br />
          <h4 className="jobOfferLocation">
            {!props.english ? `${props.locationPl}` : `${props.locationEn}`}
          </h4>
        </div>
        <div className="jobOfferBottom">
          {/* <a href={"http://" + props.link} target="_blank" rel="noreferrer"> */}
          {/* <a href="http://onet.pl" target="_blank" rel="noreferrer"> */}
          <button className="jobOfferButton">
            {!props.english ? "Aplikuj teraz" : "Apply Now"}
          </button>
        </div>
      </div>
    </a>
  );
};

export default JobOffer;
