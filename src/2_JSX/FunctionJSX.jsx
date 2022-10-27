import React from "react";

const FunctionJSX = () => {
  const message = "Hello BC32";
  const a = 2;
  const b = 3;

  const getUsername = () => {
    return "Alice";
  };

  // JSX bắt buộc phải được đặt bên trong một thẻ đóng duy nhất
  // Trường hợp nếu ta không muốn tạo ra một thẻ dư, ta có thể sử dụng thẻ rỗng (Fragment), nó cho phép bọc các thẻ JSX khác bên trong mà bản thân nó không hiển thị ra giao diện
  return (
    <>
      <h1>JSX Function</h1>
      {/* Để sử dụng cú pháp javascript bên trong jsx, ta bọc trong cặp ngoặc {} */}
      <p>{message}</p>
      <p>a + b = {a + b}</p>
      <p>My name: {getUsername()}</p>

      <div>
        {/* for => htmlFor */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
    </>
  );
};

export default FunctionJSX;
