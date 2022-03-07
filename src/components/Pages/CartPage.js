import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const CartPage = () => {
  const { t } = useTranslation();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return <h1 className="text-center empty-title">{t("cart.text1")}</h1>;
  return (
    <div className="cart">
      <div className="container">
        <h1 className="title text-center"><span>{t("cart.text2")}</span> {t("cart.text3")}</h1>
        <div className="cart-top ">
          <Link to="/Shop">
            <button className="shopping">{t("cart.text4")}</button>
          </Link>

          <div className="center-text text-center-sm  ">
            <a href="#/">{t("cart.text5")} ({totalUniqueItems})</a>
            <a href="#/">{t("cart.text6")} ({totalItems})</a>
          </div>

          <Link to="/Checkout">
            {" "}
            <button className="checkout ">{t("cart.text7")}</button>
          </Link>
        </div>

        <div className="products row">
          {items.map((item, index) => {
            return (
              <div
                className="product col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                key={index}
              >
                <div className="product-content">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="product-body">
                    <div className="left">
                      <p>
                        <b>{t("cart.text8")} </b> {t(item.title)}{" "}
                      </p>
                      <p>
                        <b>{t("cart.text9")} </b> ${item.price}
                      </p>
                      <p>
                        <b>{t("cart.text9")} </b>
                        {t("desc.desc")}
                      </p>
                    </div>

                    <div className="right">
                      <div className="quality">
                        <button
                          className=" ms-2 minus"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="  ms-2 plus"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <div className="remove">
                        <button
                          className="removebutton ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-foot d-flex align-items-center justify-content-between w-100">
          <div className="summary">
            <p>
              <b>{t("cart.text11")}</b> ${cartTotal}
            </p>
          </div>

          <div className=" d-flex ">
            <button className="clean  m-2" onClick={() => emptyCart()}>
            {t("cart.text12")}
            </button>
            <Link to="/Checkout">
              {" "}
              <button className="buy  m-2">{t("cart.text13")}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
