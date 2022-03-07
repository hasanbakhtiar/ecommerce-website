import React from 'react';
import Data from "../../Data/HomeSection4Data";
import Section4Item from './Section4Item';
import Icon1 from "../../../assets/image/home_imgs/Section4imgs/icon1.png";
import Icon2 from "../../../assets/image/home_imgs/Section4imgs/icon2.png";
import { useTranslation } from "react-i18next";
 


const Section4 = () => {
    const { t } = useTranslation();
  return <div className='section4' >
            <div className="container">
                <div className="title">
                    <h2 className='title-h2'>{t("section4.title")}</h2>
                    <p>{t("section4.text1")}<br />{t("section4.text2")} </p>
                    <img src={Icon1} className="icon1" alt="" />
                    <img src={Icon2} className="icon2" alt="" />
                </div>
                <div className="row boxs-content" data-aos="fade-in">
                    {Data.section4Data.map((item,index) => {
                        return(
                            <Section4Item 
                            img={item.img}
                            title={t(item.title)}
                            desc ={t(item.desc)} 
                            item={item}
                            key={index}/>
                            
                        );
                    })}
                </div>
            </div>
  </div>;
};

export default Section4;
