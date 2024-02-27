import React from "react";
import "./korzinka.css";
import { useDispatch, useSelector } from "react-redux";
import { baseLink, formatMoney, success_notify } from "../../utils";
import { add, minus } from "../../redux/tools/korzinka.slice";
export const toggleKorzinka = () => {
  let korzinka = document.querySelector(".Korzinka");
  korzinka.classList.toggle("sticky");
};
import emptyIMAGE from "../../assets/images/empty.png";
import { toggleOformit } from "../oformit/oformit";

export const Korzinka = () => {
  const korzinka = useSelector((state) => state.korzinka);
  const dispatch = useDispatch();

  const handleAddToCart = (body) => {
    dispatch(add(body));
  };

  const handleRemoveToCart = (id) => {
    dispatch(minus(id));
  };

  return (
    <div className="Korzinka">
      <div className="Korzinka__header">
        <h4>KORZINKA</h4>
        <i
          className="fa-solid fa-circle-xmark icon"
          onClick={toggleKorzinka}
        ></i>
      </div>
      {korzinka?.order?.products.length > 0 ? (
        <div className="korzinka__body">
          <div className="korzinka__products">
            {korzinka?.order?.products?.map((product) => (
              <div className="korzika__product" key={product.id}>
                <div className="korzinkaProduct__left">
                  <div className="korzinkaProduct__image">
                    <img src={baseLink + product.product.image} alt="" />
                  </div>
                  <h2>
                    {product.product.name} - {product.product.price}
                  </h2>
                </div>
                <div className="korzinka__control">
                  <i
                    className="fa-solid fa-minus icon"
                    onClick={() => handleRemoveToCart(product.id)}
                  ></i>
                  <p>{product.count}</p>
                  <i
                    className="fa-solid fa-plus icon"
                    onClick={() => handleAddToCart(product.product)}
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="korzinka__oformit">
            <h3>{formatMoney(korzinka.order.price)} SO'M</h3>
            <button onClick={toggleOformit}>Buyurtmani Tasdiqlash</button>
          </div>
        </div>
      ) : (
        <div className="korzinka__empty">
          <img src={emptyIMAGE}></img>
          <p>Hozircha sizning savatchangiz boʻsh 😕</p>
        </div>
      )}
    </div>
  );
};
