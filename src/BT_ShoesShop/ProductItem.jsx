import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <img className="card-image" src={product.image} alt={product.name} />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductItem;
