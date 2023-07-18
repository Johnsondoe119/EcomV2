import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img className="logo" src="Seazon.png" alt="" />

      <ul className="navmenu">
        <li>
          <Link className="whatever" to="/">
            {/* The 'Link' component is used to create a link to another page within the application. 
            The 'to' attribute specifies the destination URL to navigate when the link is clicked. 
            In this case, when clicked, it will navigate to the root ('/') of the application. */}
            Main
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          {/* In this case, when clicked, it will navigate to the root ('/about') of the
          application. */}
        </li>
        <li>
          <Link to="/products">Products</Link>
          {/* In this case, when clicked, it will navigate to the root ('/products') of the
          application. */}
        </li>
      </ul>
    </header>
  );
};

export default Header;
