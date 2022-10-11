// * Hiện tại muốn sử dụng state, ta cần dùng class component
import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    // state là một object đặc biệt dùng để lưu trữ dữ liệu trong component
    // Mỗi khi một giá trị bên trong object state thay đổi nó sẽ tự động chạy lại hàm render
    this.state = {
      // Tạo giá trị mặc định cho state
      // message: "Hello Cybersoft",

      // Gán giá trị của prop làm giá trị mặc định của state
      message: props.message,

      count: 0,

      colors: ["red", "green", "blue"],
    };
  }

  changeMessage = () => {
    const message = prompt("Input your message:");
    // Không được thay đổi trực tiếp giá trị của object state
    // this.state.message = message

    // Để thay đổi state ta cần dùng hàm setState
    // Hàm setState cung cấp tham số thứ 2 là một callback sẽ được gọi sau khi quá trình cập nhật state hoàn tất
    this.setState({ message: message }, () => {
      console.log("state message bên trong callback:", this.state.message);
    });

    // Quá trình cập nhật state là bất đồng bộ => log ra giá trị chưa thay đổi của state
    console.log("state message bên dưới hàm setState:", this.state.message);
  };

  handleIncrease = () => {
    // this.setState({ count: this.state.count + 1 });

    // Khi cập nhật state nếu cần dùng giá trị hiện tại của state để tính toán ra giá trị mới ta nên viết setState nhận vào tham số đầu tiên là một callback nhận tham số là giá trị mới nhất của state và dùng nó để return về state mới.
    this.setState((state) => ({ count: state.count + 1 }));
  };

  handleAddColor = () => {
    const color = prompt("Input your colors:");
    this.setState((state) => ({
      colors: [...state.colors, color],
    }));
  };

  handleRemoveColor = () => {
    const color = prompt("Input your colors:");
    const newColors = this.state.colors.filter((item) => item !== color);
    this.setState({ colors: newColors });

    // this.setState((state) => ({
    //   colors: state.colors.filter((item) => item !== color),
    // }));
  };

  render() {
    return (
      <div>
        <h1>State</h1>
        <p>{this.number}</p>
        <p>State message: {this.state.message}</p>
        <button onClick={this.changeMessage}>Change message</button>

        <br />
        <br />

        <p>State count: {this.state.count}</p>
        <button onClick={this.handleIncrease}>Increase</button>

        <br />
        <br />

        <p>State colors: {this.state.colors.join(", ")}</p>
        <button onClick={this.handleAddColor}>Add color</button>
        <button onClick={this.handleRemoveColor}>Remove color</button>
      </div>
    );
  }
}
