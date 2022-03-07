import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/image/home_imgs/Section3imgs/img1.jpg";
import img2 from "../../assets/image/home_imgs/Section3imgs/img2.jpg";
import { useTranslation } from "react-i18next";
 


function Section3 (){

  const { t } = useTranslation();
  
  return <div className='section3' data-aos="fade-up" > 
  <div className="container">
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col"data-aos="fade-right" >
          <div className="img-content-bg bg-1"   >
           <img src={img1} alt="" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col" data-aos="fade-left">
          <div className="bg-img">
            <div className="content">
            <h2 className="title">{t("section3.title1")}</h2>
            <p>{t("section3.desc1")}</p>
            <NavLink to="/Shop">
             <button>Shop Now</button>
            </NavLink> 
            </div>
          </div>
          
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col" data-aos="fade-right">
          <div className="bg-img">
            <div className="content">
            <h2 className="title">{t("section3.title1")}</h2>
            <p>{t("section3.desc2")}</p>
            
           <NavLink to="/Shop" >
             <button>{t("section3.text")}</button>
            </NavLink> 
            </div>
          </div>
          
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col" data-aos="fade-left">
          <div className="img-content-bg bg-2">
            <img src={img2} alt="" />
          </div>
        </div>

        </div>
    </div>
  </div>;
};

export default Section3;
