import React from "react";
import "./loader.css";
export const Loader = () => {
  return (
    <div className="Loader">
      <div className="LoaderLayout">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
