import React from "react";
import { Link } from "react-router-dom";
// import HamburgerMenu from "./Component/hamburgerMenu";
import "./Base.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="base">Welcome to Seazons Wear</h1>
        <Link to="/products">
          <button class="button-85">
            ENTER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
