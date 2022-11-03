import React from "react";
import { Link, Outlet } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <h1>Router</h1>

      <h3>Demo Link</h3>
      <Link to="/" className="me-2">
        Home
      </Link>
      <Link to="/msi" className="me-2">
        MSI
      </Link>
       {/* Outlet là nơi các children route được hiển thị ra */}
      <Outlet/>
    </div>
  );
};

export default Router;
