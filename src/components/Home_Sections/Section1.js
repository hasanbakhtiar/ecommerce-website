import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

  

const Section1 = () => {
  const { t } = useTranslation();
  return (
    <div className="section1" >
      <div className="container">
        <div className="row" data-aos="fade-in">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"  >
            <div className="bg-img bg-img-1 ">
              <div className="text">
                <p className="title1">{t("section1.title1")}</p>
                <Link to="/Shop"><button className="btn-1" >{t("section1.text")}</button></Link>
              </div>
            </div>
           
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" >
            <div className="bg-img bg-img-2 "> 
            <div className="text">
                <p  className="title2">{t("section1.title2")}</p>
                <Link to="/Shop"><button className="btn-2">{t("section1.text")}</button></Link>
              </div>
            </div>

          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" >
        
            <div className="bg-img bg-img-3">      
            <div className="text">
                <p  className="title3">{t("section1.title3")}</p>
                <Link to="/Shop"><button className="btn-3">{t("section1.text")}</button></Link>
              </div>
            </div>
        
          </div>
        </div>
        </div>
      </div>
  );
};

export default Section1;
