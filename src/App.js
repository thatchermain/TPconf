import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Csr from "./sections/Csr";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Jobs from "./sections/Jobs";
import People from "./sections/People";
import Values from "./sections/Values";
import NavbarMobile from "./components/NavbarMobile";
import FooterMobile from "./sections/FooterMobile";
import Cookies from "./components/Cookies";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [english, setEnglish] = useState(false);
  return (
    <div className="App">
      <Navbar setEnglish={setEnglish} english={english} />
      <NavbarMobile setEnglish={setEnglish} english={english} />
      <Header setEnglish={setEnglish} english={english} />
      <Cookies setEnglish={setEnglish} english={english} />
      <Intro setEnglish={setEnglish} english={english} />
      <About setEnglish={setEnglish} english={english} />
      <Benefits setEnglish={setEnglish} english={english} />
      <Values setEnglish={setEnglish} english={english} />
      <People setEnglish={setEnglish} english={english} />
      <Csr setEnglish={setEnglish} english={english} />
      <Jobs setEnglish={setEnglish} english={english} />
      <Footer setEnglish={setEnglish} english={english} />
      <FooterMobile setEnglish={setEnglish} english={english} />
    </div>
  );
}

export default App;
