import React from "react";
import Slider from "react-slick";
import Data from "../../Data/dataProduct2";
import ProductItem2 from "./ProductItem2";
import HeadingTitleIcon from "../../../assets/image/home_imgs/ProductSection1/heading-title-icon.svg";
import { useTranslation } from "react-i18next";


const Product2 = ()=> {
  const { t } = useTranslation();
 
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 1,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide:1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <div className="product2" data-aos="fade-up">
      <div className="container">
        <div className="title">
        <img className="HeadingTitleIcon" src={HeadingTitleIcon} alt="" />
      <h1 className="section-title "><span>{t("product2.title1.1")}</span> {t("product2.title1.2")}</h1>
     </div>
     <div className="slider-product2">
        <Slider {...settings}>
            {Data.data.map((item,index)=>{
                return (
                    <ProductItem2
                    img={item.img}
                    img2 ={item.img2}
                    title={t(item.title)}
                    desc={t(item.desc)}
                    price={item.price}
                    item={item}
                    key={index}
                    />
                );
            })}
        </Slider>
        </div>
      </div>
      </div>
    );
  
}

export default Product2;