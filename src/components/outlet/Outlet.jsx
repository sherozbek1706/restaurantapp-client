import React from "react";
import "./Outlet.css";
import { Header, Sidebar } from "../";
export const Outlet = ({ children }) => {
  return (
    <div className="Outlet">
      <Header />
      <Sidebar />
      <div className="OutletMain">{children}</div>
    </div>
  );
};
