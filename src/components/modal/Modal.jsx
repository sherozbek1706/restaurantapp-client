import React from "react";
import "./modal.css";

export const toggleModal = () => {
  let modal = document.querySelector(".Modal");
  modal.classList.toggle("sticky");
};

export const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="ModalLayout">
        <div className="ModalClosing">
          <i
            className="fa-solid fa-circle-xmark icon"
            onClick={toggleModal}
          ></i>
        </div>
        {children}
      </div>
    </div>
  );
};
