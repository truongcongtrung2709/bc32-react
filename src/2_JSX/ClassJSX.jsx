import React, { Component } from "react";

export default class ClassJSX extends Component {
  // Thuộc tính của class
  a = 1;
  b = 2;

  // Phương thức của class
  getUsername() {
    return "Bob";
  }

  render() {
    const message = "Hello Cybersoft";

    return (
      <div>
        <h1>JSX Clas</h1>
        <p>{message}</p>
        <p>a + b = {this.a + this.b}</p>
        <p>Username: {this.getUsername()}</p>
      </div>
    );
  }
}
