import React from "react";
import "./header.css";
import HalalIMG from "../../assets/images/xalol.png";
import LogoIMG from "../../assets/images/logo.png";
import PhoneIMG from "../../assets/images/tel-svg.svg";
import korzinkaIMG from "../../assets/images/korzinka.svg";
import { toggleKorzinka } from "../korzinka/korzinka";
export const Header = () => {
  return (
    <div className="container headershadow">
      <div className="Header maxwidth">
        <div className="Header__left">
          <div className="Header__logo">
            <img src={LogoIMG} alt="" />
            <div className="HeaderLogo">
              <h5>azizpizza</h5>
              <p>Ёқимли иштаҳа</p>
            </div>
          </div>
          <div className="HeaderSecond">
            <h3>Буюрмани 46 дақ. йетказамиз</h3>
            <p>Биз сиз учун кечаю кундуз ишлаймиз 24/7</p>
          </div>
          <div className="HeaderPhone">
            <img src={PhoneIMG} alt="Telephone" />
            <div className="HeaderPhone__text">
              <h3>(71) 505-50-50</h3>
              <p>Қўнғироқ қилинг!</p>
            </div>
          </div>
        </div>
        <div className="Header__right">
          <img src={HalalIMG} alt="Halal.png" />
          <p>XAЛОЛ СЕРТИФИКAТ</p>
        </div>
        <img
          src={korzinkaIMG}
          onClick={toggleKorzinka}
          className="korzinka__image"
          alt=""
        />
      </div>
    </div>
  );
};
