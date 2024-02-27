import React, { useState } from "react";
import "./oformit.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector } from "react-redux";
import { Errors, success_notify } from "../../utils";
import { axiosInstance } from "../../services";
import { toggleKorzinka } from "../korzinka/korzinka";

export const toggleOformit = () => {
  let modal = document.querySelector(".Oformit");
  modal.classList.toggle("sticky");
};

export const Oformit = () => {
  const [phone, setPhone] = useState("");

  const order = useSelector((state) => state.korzinka);

  const handlePhone = (value) => {
    if (value.length < 10 && !value.includes(" ")) {
      setPhone(value);
    }
  };
  const handleSubmit = () => {
    let buyurtma = { ...order.order, phone: `+998${phone}` };
    ordered(buyurtma);
  };

  let ordered = async (buyurtma) => {
    try {
      let data = await axiosInstance.post("/order/add", buyurtma);
      if (data.status == 201) {
        toggleOformit();
        toggleKorzinka();
        success_notify("Buyurtma qabul qilindi!");
        setTimeout(() => {
          window.location.assign("/");
        }, 1000);
      }
    } catch (error) {
      Errors(error);
    }
  };

  return (
    <div className="Oformit">
      <div className="OformitLayout">
        <div className="OformitLayoutX">
          <i className="fa-solid fa-xmark icon" onClick={toggleOformit}></i>
        </div>
        <div className="OformitTitle">
          <h3>Tasdiqlash</h3>
          <p>Buyurtmani tasdiqlash uchun telefon raqamingizni kiriting!</p>
        </div>
        <div className="OformitForm">
          <p>+998</p>
          <input
            type="tel"
            value={phone}
            onChange={(e) => handlePhone(e.target.value)}
          />
        </div>
        <button
          className="OformitButton"
          disabled={phone.length == 9 ? false : true}
          onClick={handleSubmit}
        >
          Buyurtmani Tasdiqlash
        </button>
      </div>
    </div>
  );
};
