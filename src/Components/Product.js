import React from "react";
import "./styles/Products.css";

function Product({ img, brand, title, size, prize }) {
  return (
    <div className="product_item">
      <img src={img} alt="" />
      <span>{brand}</span>
      <p>{title}</p>
      <span>{`Prize-${prize}`}</span>
      <span>{`Available Sizes: ${size}`}</span>
    </div>
  );
}

export default Product;
