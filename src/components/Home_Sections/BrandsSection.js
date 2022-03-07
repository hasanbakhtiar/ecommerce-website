import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const BrandsSection = () => {
  const { t } = useTranslation();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5500,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="brandSection" data-aos="fade-up">
      <div className="container">
        <h2 className="text-left title">
          {" "}
          <span>{t("brends.title1")}</span> {t("brends.title1")}{" "}
        </h2>

        <div className="slider-content">
          <Slider {...settings}>
            <div className="bg-brands bg-1"></div>
            <div className="bg-brands bg-2"></div>
            <div className="bg-brands bg-3"></div>
            <div className="bg-brands bg-4"></div>
            <div className="bg-brands bg-5"></div>
            <div className="bg-brands bg-6"></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
