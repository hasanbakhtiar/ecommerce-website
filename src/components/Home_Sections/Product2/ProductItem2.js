import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductItem2 = (props) => {
  const { t } = useTranslation();
  const { addItem } = useCart();
  return (
    <div className="slide" data-aos="fade-right">
      <div className="img-content">
        <img src={props.img} className="card-img-top main-img" alt="err" />
        <img src={props.img2} className="hover-img" alt="" />
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
        <p className="card-text price">
          <span>$</span>
          {props.price}
        </p>
        <button onClick={() => addItem(props.item)} className="btn addtocard">
          {t("product1.addtocard")} <i class="fas fa-shopping-basket"></i>
        </button>
      </div>

      <div className="hover-icons">
        <Link href="#/" to="/Product">
          <i class="far fa-eye"></i>
        </Link>
        <a href="#/">
          <i class="far fa-heart"></i>
        </a>
        <a href="#/">
          <i class="far fa-plus"></i>
        </a>
      </div>

      <div className="new">{t("product1.new")}</div>
    </div>
  );
};

export default ProductItem2;
