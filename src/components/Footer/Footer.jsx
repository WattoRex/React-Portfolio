import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    // Manipulation du DOM pour inclure le CSS
    const style = document.createElement("style");
    style.textContent = `
      .footer {
        background-color: #f0f0f0;
        padding: 20px;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #333;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
      }

      .footer:hover {
        background-color: #e0e0e0;
      }

      .footer a {
        color: #007bff;
        text-decoration: none;
      }

      .footer a:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const currentYear = new Date().getFullYear();
  const yourName = "Manier Valentin";

  return (
    <div className="footer">
      {yourName} &copy; {currentYear} | Site réalisé par{" "}
      <Link to="/">
        <a href="https://www.example.com">Manier Valentin</a>
      </Link>
    </div>
  );
};

export default Footer;
