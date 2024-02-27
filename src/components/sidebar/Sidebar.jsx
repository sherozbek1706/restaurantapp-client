import React, { useEffect } from "react";
import "./sidebar.css";
// import { toggleSidebar } from "../";
// import { sidebarItems } from "../../utils";
// import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  // let { pathname } = useLocation();

  return (
    <div className="Sidebar">
      {/* <div className="Sidebar__top">
        <i className="fa-solid fa-xmark icon" onClick={toggleSidebar}></i>
        <h4>Delivery App</h4>
      </div>
      <div className="Sidebar__btns">
        {sidebarItems.map((item, idx) => (
          <Link
            to={item.path}
            key={idx}
            className={`Sidebar__btn ${pathname == item.path ? "active" : ""}`}
          >
            {item.icon || <i className="fa-solid fa-ban icon"></i>} {item.label}
          </Link>
        ))}
        <Link to={"/login"} className={`Sidebar__btn`}>
          <i className="fa-solid fa-ban icon"></i>Log OUT
        </Link>
      </div> */}
    </div>
  );
};
