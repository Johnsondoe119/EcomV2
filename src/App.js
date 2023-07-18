import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./Pages/Base";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Header from "./Component/Header"; // Import the Header component
import Footer from "./Component/Footer"; // Import the Footer component

const App = () => {
  return (
    <div className="App">
      {/* Routing the pages with each other */}
      <Router>
        <Header /> {/* Use the Header component */}
        <div>
          <Routes>
            <Route path="/" element={<Base />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer /> {/* Use the Footer component */}
      </Router>
    </div>
  );
};

export default App;
