import React from "react";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const ProductItem = (props) => {
  const { t } = useTranslation();
  const { addItem } = useCart();
  return (
    <div className="card col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" data-aos="zoom-in-down">
      <div className="card-content">
        <div className="img-content">
          <img src={props.img} className="card-img-top main-img" alt="err" />
        </div>

        <div className="card-body">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star">
                <i class="fas fa-star"></i>
              </div>
              <div class="star">
                <i class="fas fa-star"></i>
              </div>
              <div class="star">
                <i class="fas fa-star"></i>
              </div>
              <div class="star">
                <i class="fas fa-star"></i>
              </div>
              <div class="star">
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>

          <h5 className="card-title title-h5">{t(props.title)}</h5>
          <p className="card-text price mt-50">
            <span>$</span>
            {props.price}
          </p>
          <button onClick={() => addItem(props.item)} className="btn addtocard">
          {t("product1.addtocard")} <i class="fas fa-shopping-basket"></i>
          </button>
        </div>

        <div className="hover-icons">
          <a href="#/">
            <i class="far fa-eye"></i>
          </a>
          <a href="#/">
            <i class="far fa-heart"></i>
          </a>
          <a href="#/">
            <i class="far fa-plus"></i>
          </a>
        </div>

        <div className="new">{t("product1.new")}</div>
      </div>
    </div>
  );
};

export default ProductItem;
