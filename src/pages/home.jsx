// Home.js
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";

const Home = ({ data }) => {
  return (
    <header id="home">
      <Banner data={data} />

      {/* Bouton Scroll Down pour une Landing Page */}
      {/* <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p> */}
    </header>
  );
};

export default Home;
