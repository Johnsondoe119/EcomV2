import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import Productcard from "../Component/Productcard";

const Products = () => {
  // State variables to store product data and filter settings
  const [products, setProducts] = useState([]); // Store the list of products
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 }); // State to store the selected price range
  const [productType, setProductType] = useState("All"); // State to store the selected product type

  // Fetch product data from the server when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products") // Make a GET request to the specified URL to fetch product data
      .then((response) => {
        setProducts(response.data); // Save the fetched product data to the 'products' state
      })
      .catch((error) => {
        console.log("Error fetching products:", error); // Log any errors that occur during the fetch request
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // Handle changes in the selected product type from the dropdown menu
  const handleProductTypeChange = (e) => {
    const selectedType = e.target.value; // Get the value of the selected option from the dropdown
    console.log("Selected Type:", selectedType); // Log the selected product type
    setProductType(selectedType); // Update the 'productType' state with the selected value
  };

  // Filter products based on the selected price range and product type
  const filteredProducts = products.filter((product) => {
    const productPrice = parseFloat(product.price); // Convert the product price from string to a floating-point number
    const withinPriceRange =
      productPrice >= priceRange.min && productPrice <= priceRange.max; // Check if the product price is within the selected price range
    const isProductTypeMatch =
      productType === "All" || product.type === productType; // Check if the product type matches the selected product type
    return withinPriceRange && isProductTypeMatch; // Return true for products that satisfy both conditions
  });

  return (
    <>
      <div
        className="p-heading"
        style={{ marginTop: "200px", textAlign: "center" }}
      >
        <h1>Products</h1>
      </div>
      {/* Section for Price Range Filter */}
      <div className="range" style={{ marginTop: "20px", textAlign: "center" }}>
        <label>Price Range:</label>
        <input
          type="number"
          min="0"
          max="200"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: parseFloat(e.target.value) })
          }
        />
        <span>{priceRange.min}</span> - <span>{priceRange.max}</span>
      </div>
      {/* Section for Product Type Filter */}
      <div className="type" style={{ marginTop: "20px", textAlign: "center" }}>
        <label>Product Type:</label>
        {/* Dropdown menu to select product type */}
        <select value={productType} onChange={handleProductTypeChange}>
          <option value="All">All</option>
          <option value="Long Sleeve">Long Sleeve</option>
          <option value="Pants">Pants</option>
          <option value="Set">Set</option>
          <option value="Jacket">Jacket</option>
        </select>
      </div>

      {/* Section for Product Cards */}
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className="product-container"
      >
        {/* Render Productcard component for each product in filteredProducts */}
        {filteredProducts.map((product) => (
          <Productcard product={product} /> // Using product.id as key for efficient rendering and pass the product data as props to Productcard component
        ))}
      </div>
    </>
  );
};

export default Products;
//=============================
