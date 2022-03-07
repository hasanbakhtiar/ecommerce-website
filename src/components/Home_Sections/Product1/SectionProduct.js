import React from "react";
import ProductItem from "./ProductItem";
import data from "../../Data/dataproduct";
import HeadingTitleIcon from "../../../assets/image/home_imgs/ProductSection1/heading-title-icon.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const SectionProduct = () => {
  const { t } = useTranslation();
  return (
    <div className="sectionProduct1">
      <div className="container">
     <div className="title">
       <img className="HeadingTitleIcon" src={HeadingTitleIcon} alt="" />
     <h1 className="section-title text-center"><span>{t("product1.title1.1")}</span> {t("product1.title1.2")}</h1>
      <h1 className="section-title text-center"><span className="Recent">{t("product1.title2.1")}</span> {t("product1.title2.2")}</h1>
     </div>
      <div className="row" data-aos="fade-up">
        {data.productData.map((item, index) => {
          return (
            <ProductItem
              img={item.img}
              img2={item.img2}
              title={t(item.title)}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </div>

      <Link to="/Shop" className="show">
        <button>{t("product1.text")}</button>
      </Link>
    </div>
    </div>
  );
};

export default SectionProduct;
