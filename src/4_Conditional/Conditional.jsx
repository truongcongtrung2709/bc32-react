import React from "react";

const Conditional = () => {
  // biến kiểm tra xem user đã đăng nhập hay chưa
  const isLoggedIn = true;

  // const unreadMessages = ["A", "B", "C"];
  const unreadMessages = [];

  // Chưa đăng nhập
  if (!isLoggedIn) {
    return (
      <div>
        <h1>Please Login</h1>
        <button>Login</button>
      </div>
    );
  }

  // Đã đăng nhập
  return (
    <div>
      <h1>Welcome back</h1>
      {/* Cách 1: Dùng toán tử bậc 3 */}
      {/* {unreadMessages.length ? (
        <p>You have {unreadMessages.length} unread messages</p>
      ) : null} */}

      {/* Cách 2: Dùng toán tử && */}
      {!!unreadMessages.length && (
        <p>You have {unreadMessages.length} unread messages</p>
      )}

      <button>Logout</button>
    </div>
  );
};

export default Conditional;
