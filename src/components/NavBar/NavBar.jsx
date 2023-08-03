// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      {/* Fonctionne avec des bouton ! */}
      <div className="boiteNav">
        <ul id="nav" className="nav">
          <li className="current">
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/About">A-Propos</Link>
          </li>
          <li>
            <Link to="/Portfolio">Projet</Link>
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
