import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { name, price } = this.props;

    return (
      <div>
        <h3>
          {/* Product: {this.props.name} - {this.props.price} */}
          Product: {name} - {price}
        </h3>
      </div>
    );
  }
}

// Đặt giá trị mặc định cho props của component
Product.defaultProps = {
  name: "unknown",
  price: 0,
};
