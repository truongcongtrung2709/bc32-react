// Khi import những thư viện từ node_modules, ta không cần phải viết đường dẫn trỏ đến đúng thư mục, VD: node_modules/react/index.js, ta chỉ cần gọi tới tên thư viện là được
import React from "react";
import ReactDOM from "react-dom/client";
// import css trong js nhưng nó sẽ được đưa lên thẻ head trong html
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
// Khi import các file js ta có thể bỏ qua đuôi .js
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
