import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import korzinkaIMG from "../../assets/images/korzinka.svg";
import { search } from "../../redux/tools/modal.slice";
import { axiosInstance } from "../../services/index";
import { Errors, baseLink, format_string } from "../../utils";
import { toggleModal } from "../modal/Modal";
import "./cards.css";

export const Cards = ({ data }) => {
  if (!data.length) {
    return (
      <div className="CardsNotFound">
        <h2>Mahsulotlar hozircha yo'q!😢</h2>
      </div>
    );
  }

  const dispatch = useDispatch();

  const fetchData = async (id) => {
    try {
      let res = await axiosInstance.get("/product/get/" + id);
      if (res.status == 200) {
        return res.data.data;
      } else {
        return false;
      }
    } catch (error) {
      Errors(error);
    }
  };

  const showHigh = async (id) => {
    let res = await fetchData(id);
    if (!res) {
      return;
    } else {
      dispatch(search(res));
      toggleModal();
    }
  };

  return (
    <div className="Cards">
      {data?.map((elem, idx) => (
        <Fragment key={idx}>
          {elem ? (
            <div
              className="Card"
              key={elem.id}
              onClick={() => showHigh(elem.id)}
            >
              <div className="card__img">
                <img src={baseLink + elem.image} alt="" />
              </div>
              <div className="card__box">
                <h4>{elem.name}</h4>
                <div className="cardbox__description">
                  <p>{format_string(elem.description, 100)}</p>
                </div>
              </div>
              <div className="cardbox__price">
                <img src={korzinkaIMG} alt="" />
                <p>от {elem.price} СУМ</p>
              </div>
            </div>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
};
