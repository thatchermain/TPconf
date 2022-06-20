import React from "react";

const Header = ({ english }) => {
  return (
    <header className="header" id="home">
      <div className="maincontainer title-container">
        <h1 className="title-container__title">
          {!english ? "Chcesz podróżować" : "Want to travel "}
          <br />
          {!english ? "każdego dnia?" : "every day?"}
          <br />
          {!english ? "Z nami to możliwe!" : "It’s possible with us!"}
        </h1>
        <a href="#jobs">
          <button className="title-container__button">
            {!english ? "Sprawdź oferty" : "Search jobs"}
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
