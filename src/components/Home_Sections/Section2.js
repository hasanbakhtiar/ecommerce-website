import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import Img1 from "../../assets/image/home_imgs/Section2imgs/img1.png"
import Img2 from "../../assets/image/home_imgs/Section2imgs/img2.png"
import Img3 from "../../assets/image/home_imgs/Section2imgs/img3.png"
import Img4 from "../../assets/image/home_imgs/Section2imgs/img4.png"
import Img5 from "../../assets/image/home_imgs/Section2imgs/img5.png"
import Img6 from "../../assets/image/home_imgs/Section2imgs/img6.png"
import { useTranslation } from "react-i18next";


const Section2 = ()=> {

  const { t } = useTranslation();

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
      <div className="Home-Section2" data-aos="fade-up">
        <div className="container">
        <h1 className="title"> <span>{t("section2.title1")}</span> {t("section2.title2")} </h1>
        <Slider {...settings}>
          <div>
            <div className="img-content"><img src={Img1} alt="" /></div>   
            <Link className="link" to="/Shop"> 
            <p>{t("section2.text1")}</p>
            </Link>
          </div>
          <div>
          <div className="img-content"><img src={Img2} alt="" /></div>   
          <Link className="link" to="/Shop"> 
          <p>{t("section2.text2")}</p>
          </Link>
          </div>
          <div>
          <div className="img-content"><img src={Img3} alt="" /></div>  
          <Link className="link" to="/Shop"> 
          <p>{t("section2.text3")}</p>
          </Link> 
          </div>
          <div>
          <div className="img-content"><img src={Img4} alt="" /></div>   
          <Link className="link" to="/Shop"> 
          <p>{t("section2.text4")}</p>
          </Link> 
          </div>
          <div>
          <div className="img-content"><img src={Img5} alt="" /></div>   
          <Link className="link" to="/Shop"> 
          <p>{t("section2.text5")}</p>
          </Link> 
          </div>
          <div>
          <div className="img-content"><img src={Img6} alt="" /></div>   
          <Link className="link" to="/Shop"> 
          <p>{t("section2.text6")}</p>
          </Link> 
          </div>
          <div>
          <div className="img-content"><img src={Img3} alt="" /> </div>   
          <Link className="link" to="/Shop"> 
          <p>{t("section2.text7")}</p>
          </Link> 
          </div>
          <div>
          <div className="img-content"><img src={Img5} alt="" /> </div>   
          <Link className="link" to="/Shop"> 
          <p>{t("section2.text8")}</p>
          </Link> 
          </div>
        </Slider>
        </div>
      </div>
    );
  }
export default Section2;
