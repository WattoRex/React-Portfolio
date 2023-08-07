import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const LogoLinkStyle = {
  marginLeft: "30px",
  textDecoration: "none",
};

const LogoImageStyle = {
  width: "6vh",
  height: "6vh",
};

const MenuItemsStyle = {
  display: "flex",
};

const MenuItemStyle = {
  marginLeft: "30px",
  color: "#242424",
  textDecoration: "none",
  backgroundImage:
    "linear-gradient(to right, #415a77, #415a77 0%, #242424 50%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "-100%",
  display: "inline-block",
  padding: "5px 0",
  position: "relative",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "all 0.3s ease-in-out",
};

const HamburgerIconStyle = {
  display: "none",
  color: "#242424",
  cursor: "pointer",
  fontSize: "20px",
  marginRight: "2vh",
};

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav style={NavContainerStyle}>
      <Link to="/" style={LogoLinkStyle}>
        <img
          src="./logo.png"
          alt="Logo Manier Valentin"
          style={LogoImageStyle}
        />
      </Link>
      <span style={MenuItemsStyle} id="menuItems">
        <ul>
          <li>
            <Link to="/" style={MenuItemStyle} className="liennav">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/About" style={MenuItemStyle} className="liennav">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/portfolio" style={MenuItemStyle} className="liennav">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" style={MenuItemStyle} className="liennav">
              Contact
            </Link>
          </li>
        </ul>
      </span>
      <div onClick={toggleMenu} style={HamburgerIconStyle} className="icon">
        &#9776;
      </div>
    </nav>
  );
};

export default Nav;
