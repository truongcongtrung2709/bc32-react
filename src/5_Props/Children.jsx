import React from "react";

// Các component có thể sẽ tồn tại một prop children, nó thể hiện nội dung ở giữa 2 thẻ đóng mở khi sử dụng component
// VD: <ComponentA>Hello</ComponentA>
// text Hello chính là prop children
// VD: <ComponentB> <span>BC32</span> </ComponentB>
// <span>BC32</span> chính là prop children
const Children = ({ children }) => {
  return <h3 className="text-success">{children}</h3>;
};

export default Children;













