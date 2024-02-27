import React, { useEffect, useState } from "react";
import "./render-cell.css";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../requests/common";
import { add, remove } from "../../redux/tools/korzinka.slice";

import { Category, Modal } from "../";
import { Errors, baseLink, info_notify, success_notify } from "../../utils";
export const RenderCell = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.modals);
  const korzinka = useSelector((store) => store.korzinka);
  const [dhave, setDhave] = useState(false);
  let [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    checkProduct(korzinka);
    console.log(korzinka);
  }, [product, korzinka]);

  const fetchData = async () => {
    let data = await getRequest("/product/list");
    if (data.status == 200) {
      setData(data.data.data);
    }
    try {
    } catch (error) {
      Errors(error);
    }
  };

  const checkProduct = (data) => {
    let validBtn = document.querySelector(".CardModalBoxTop button");
    let have = data?.cart?.find((el) => el.id == product.id);
    if (have) {
      setDhave(true);
    } else {
      setDhave(false);
    }
  };

  const handleAddToCart = (body) => {
    dispatch(add(body));
    success_notify("Savatga Qo'shildi!");
  };
  const handleRemoveToCart = (id) => {
    dispatch(remove(id));
    info_notify("Savatga O'chirildi!");
  };

  return (
    <div className="container">
      <div className="RenderCell maxwidth">
        {data?.result?.map((elem) => (
          <Category key={elem.id} category={elem} />
        ))}
        <Modal>
          <div className="Card__Modal">
            <div className="CardModal__image">
              <img src={baseLink + product.image} alt="" />
            </div>
            <div className="CardModal__box">
              <div className="CardModalMobile__image">
                <img src={baseLink + product.image} alt="" />
              </div>
              <div className="CardModalBoxTop">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
              </div>
              <div className="CardModalBoxTop">
                <h2>{product.price} СУМ</h2>
                {dhave ? (
                  <button
                    className="CardModalBoxBtn one"
                    onClick={() => handleRemoveToCart(product.id)}
                  >
                    Savatdan O'chirish
                  </button>
                ) : (
                  <button
                    className="CardModalBoxBtn two"
                    onClick={() => handleAddToCart(product)}
                  >
                    Savatga Qo'shish
                  </button>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
