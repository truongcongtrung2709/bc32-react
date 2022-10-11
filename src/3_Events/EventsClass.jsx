import React, { Component } from "react";

export default class EventsClass extends Component {
  username = "Dan Nguyen";

  constructor() {
    super();
    this.showMessage = this.showMessage.bind(this);
  }

  handleClick() {
    alert("clicked");
  }

  // Khi regular function được đưa vào trong onClick, thì ta không thể truy cập this của component, vì nó không phải do component gọi tới.
  // Cách khắc phục:
  // 1 - Chuyển thành arrow function
  // showMessage = () => {
  //   alert("Hello " + this.username);
  // }

  // 2 - Nếu vẫn xài regular function, ta cần bind this của component vào function này
  showMessage() {
    alert("Hello " + this.username);
  }

  render() {
    return (
      <div>
        <h1>EventsClass</h1>
        <button onClick={this.handleClick}>Click</button>
        <br />

        <button onClick={this.showMessage}>Show Message</button>
      </div>
    );
  }
}
