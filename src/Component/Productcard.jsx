import React from "react";
import "./Productcard.css";

function Productcard({ product }) {
  return (
    //this sets up my product card. the products are pulled from a database.
    //each content such as the image, title, description, price, and type are pulled and is slotted into their individual areas
    <div>
      <div className="product-card" key={product.id}>
        <div className="imagewrap">
          <img className="items" src={product.image} alt={product.title} />
        </div>
        <h1>{product.title}</h1>
        <button className="p-btn">${product.price}</button>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Productcard;
