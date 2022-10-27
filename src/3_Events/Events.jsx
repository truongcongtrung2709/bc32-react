import React from "react";

// html: <button onclick="onSubmit()">Submit</button>
// document.getElementById('submit').addEventListener("click", onSubmit)

const Events = () => {
  const onSubmit = () => {
    alert("Clicked");
  };

  const showMessage = (name) => {
    alert("Hello " + name);
  };

  const handleChange = (evt) => {
    console.log("target:", evt.target);
    console.log("value:", evt.target.value);
  };

  return (
    <div>
      <h1>Events</h1>

      {/* Phải truyền vào onClick một callback function (chỉ truyền vào tên hàm - không bao gồm cặp dấu () gọi hàm) */}
      <button onClick={onSubmit}>Submit</button>
      <br />

      {/* Trường hợp cần truyền tham số khi gọi hàm, ta viết 1 arrow function return về function mà ta muốn gọi tới, lúc này ta sẽ gọi hàm và truyền vào tham số cho hàm */}
      <button onClick={() => showMessage("Alice")}>Show Message</button>
      <br />

      <input type="text" onChange={handleChange} />
      {/* <input type="text" onChange={(evt) => handleChange(evt, ...)} /> */}
    </div>
  );
};

export default Events;
