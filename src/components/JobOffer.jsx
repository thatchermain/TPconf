import React from "react";

const JobOffer = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h5>{props.location}</h5>
      <a href={props.link} target="_blank" rel="noreferrer">
        <button>{props.title}sadsad</button>
      </a>
    </div>
  );
};

export default JobOffer;
