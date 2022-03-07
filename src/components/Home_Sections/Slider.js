import React from 'react'
import img1 from "../../assets/image/home_imgs/Carousel_Imgs/img6.jpg";
import img2 from "../../assets/image/home_imgs/Carousel_Imgs/img1.jpg";
import img3 from "../../assets/image/home_imgs/Carousel_Imgs/img3.jpg";
import { useTranslation } from "react-i18next";


 

const Slider = () => {
    const { t } = useTranslation();
  return (
    <div className='carousel'>
        <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active slide_Item">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption  text-content ">
            <div className="caption animate__animated animate__fadeInRightBig" >
                {t("carousel.title1")}
            </div>
            <div className="desc animate__animated animate__bounceInUp" style={{"animation-delay": ".5s"}} > {t("carousel.desc1")}</div>
            <div className="button animate__animated animate__zoomInDown" style={{"animation-delay": "3s"}} >
                <button>{t("carousel.text")}</button>
            </div>
            </div>
          </div>
          <div className="carousel-item slide_Item">
         
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption text-content ">
            <div className="caption  animate__animated animate__fadeInRightBig" >
                {t("carousel.title2")}
            </div>
            <div className="desc animate__animated animate__bounceInUp" style={{"animation-delay": ".5s"}}  > {t("carousel.desc2")}</div>
            <div className="button animate__animated animate__zoomInDown"  style={{"animation-delay": "3s"}}>
                <button>{t("carousel.text")}</button>
            </div>
            </div>
          </div>
          <div className="carousel-item slide_Item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption  text-content ">
            <div className="caption animate__animated animate__fadeInRightBig" >
                {t("carousel.title3")}
            </div>
            <div className="desc animate__animated animate__bounceInUp" style={{"animation-delay": ".5s"}} > {t("carousel.desc3")}</div>
            <div className="button animate__animated animate__zoomInDown" style={{"animation-delay": "3s"}} >
                <button>{t("carousel.text")}</button>
            </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
 
    </div>
  )
}

export default Slider