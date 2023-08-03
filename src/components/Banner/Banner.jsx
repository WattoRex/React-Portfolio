// Banner.js
import React from "react";
import "./Banner.css";

const Banner = ({ data }) => {
  if (!data) return null;

  const { name, occupation, description, address, social } = data;
  const { city } = address;

  const networks = social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <div className="row banner">
      <div className="boite">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            Je suis un <span>{occupation}</span> basé à {city}.<br></br>
            {description}.
          </h3>
        </div>
      </div>
      <hr />
      <ul className="social">{networks}</ul>
    </div>
  );
};

export default Banner;
