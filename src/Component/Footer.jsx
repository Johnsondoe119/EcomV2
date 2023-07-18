import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img className="szns2" src="szns.png" alt="" />
        <p>"Fashion for Every Chapter of Your Journey."</p>
        <ul className="socials">
          <li>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-instagram"> instagram | </i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <i className="bx bxl-twitter"> twitter | </i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/">
              <i className="bx bxl-facebook-circle"> facebook | </i>
            </a>
          </li>
          <li>
            <a href="https://spotify.com/">
              <i className="bx bxl-spotify"> spotify | </i>
            </a>
          </li>
          <li>
            <a href="https://youtube.com/">
              <i className="bx bxl-youtube"> youtube | </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
