import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../Product_Details/Product_Details";
import Product2 from "../Home_Sections/Product2/Product2";
import { useTranslation } from "react-i18next";


const Product = () => {
  const { t } = useTranslation();
  return (
    <div className="product page">
      <div className="bg">
        <div className="container text-center">
          <Link to="/" className="title1 title ">
          {t("pages.product")}
          </Link>
          <span className="pages-link title">
            <Link className="link" to="/">
            {t("pages.home")}
            </Link>{" "}
            >{" "}
            <Link className="link" to="/Product">
            {t("pages.product")}
            </Link>
          </span>
        </div>
      </div>

      <ProductDetails />
      <Product2/>
    </div>
  );
};

export default Product;
