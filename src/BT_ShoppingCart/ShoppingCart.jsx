import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

export default class ShoppingCart extends Component {
  // snippet: rconst
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,

      // state quản lý trạng thái ẩn/hiện của modal
      isOpen: false,

      // state lưu trữ danh sách sản phẩm trong giỏ hàng
      carts: [],
    };
  }

  handleSelect = (product) => {
    // product: sản phẩm ta click vào button Chi tiết ở component ProductList
    // tham số product hiện tại chỉ truy cập được bên trong hàm handleSelect
    // Ta cần dùng state để lưu trữ giá trị của sản phẩm đang được chọn
    this.setState({ selectedProduct: product });
  };

  handleToggleModal = () => {
    // Thay đổi giá trị của state isOpen thành giá trị phủ định của chính nó
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  handleAddToCart = (product) => {
    // Cần kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const index = this.state.carts.findIndex((item) => item.id === product.id);

    if (index === -1) {
      // index = -1 => chưa tồn tại sản phẩm trong giỏ hàng
      // Thêm sản phẩm vào giỏ hàng và set số lượng là 1
      this.setState((state) => ({
        carts: [...state.carts, { ...product, quantity: 1 }],
      }));
    } else {
      // sản phẩm đã tồn tại trong giỏ hàng => chỉ cần tăng số lượng lên 1 đơn vị
      const newCarts = [...this.state.carts];
      newCarts[index].quantity += 1;
      this.setState({ carts: newCarts });
    }
  };

  // productId: id của sản phẩm muốn thay đổi số lượng
  // quantity: -1 hoặc 1
  handleChangeQuantity = (productId, quantity) => {
    const index = this.state.carts.findIndex((item) => item.id === productId);

    const newCarts = [...this.state.carts];

    if (newCarts[index].quantity === 1 && quantity === -1) {
      newCarts.splice(index, 1);
      this.setState({ carts: newCarts });
    } else {
      newCarts[index].quantity += quantity;
      this.setState({ carts: newCarts });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between mb-3">
          <h1 className="text-primary">FPT Shop</h1>
          <button className="btn btn-primary" onClick={this.handleToggleModal}>
            Giỏ hàng
          </button>
        </div>

        <ProductList
          products={data}
          onSelect={this.handleSelect}
          onAddToCart={this.handleAddToCart}
        />

        <ProductDetails product={this.state.selectedProduct} />

        <Cart
          isOpen={this.state.isOpen}
          carts={this.state.carts}
          onClose={this.handleToggleModal}
          onChangeQuantity={this.handleChangeQuantity}
        />
      </div>
    );
  }
}
