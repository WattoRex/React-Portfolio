import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navWrapStyle = {
    font: '12px "opensans-bold", sans-serif',
    width: "100%",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    margin: "0 auto",
    zIndex: "100",
    position: "fixed",
    left: "0",
    top: "0",
  };

  const mobileBtnStyle = {
    display: "none",
  };

  const navStyle = {
    minHeight: "48px",
    width: "auto",
    textAlign: "center",
  };

  const listItemStyle = {
    position: "relative",
    listStyle: "none",
    height: "48px",
    display: "inline-block",
  };

  const linkStyle = {
    display: "inline-block",
    padding: "8px 13px",
    lineHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
    color: "#f06000",
    transition: "color 0.2s ease-in-out",
  };

  return (
    <nav id="nav-wrap" style={navWrapStyle}>
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation" style={mobileBtnStyle}>
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation" style={mobileBtnStyle}>
        Hide navigation
      </a>

      {/* Fonctionne avec des bouton ! */}
      <div className="boiteNav">
        <ul id="nav" className="nav" style={navStyle}>
          <li className="current" style={listItemStyle}>
            <Link to="/" style={linkStyle}>
              Accueil
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/About" style={linkStyle}>
              A-Propos
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/Portfolio" style={linkStyle}>
              Projet
            </Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
