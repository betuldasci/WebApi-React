import React from "react";

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Available until: {product.date}</p>
    </div>
  );
}

export default Product;
