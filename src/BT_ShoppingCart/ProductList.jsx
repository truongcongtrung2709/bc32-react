import React from "react";

const ProductList = ({ products, onSelect, onAddToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-sm-4">
          <div className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-img"
              width="100%"
              height="400px"
            />
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <button
                className="btn btn-success"
                onClick={() => onSelect(product)}
              >
                Chi tiết
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onAddToCart(product)}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
