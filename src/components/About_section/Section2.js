import React from 'react'
import img1 from "../../assets/image/about_images/section2imgs/img1.png";
import img1hover from "../../assets/image/about_images/section2imgs/img1hover.png";
import img2 from "../../assets/image/about_images/section2imgs/img2.png";
import img2hover from "../../assets/image/about_images/section2imgs/img2hover.png";
import img3 from "../../assets/image/about_images/section2imgs/img3.png";
import img3hover from "../../assets/image/about_images/section2imgs/img3hover.png";
import img4 from "../../assets/image/about_images/section2imgs/img4.png";
import img4hover from "../../assets/image/about_images/section2imgs/img4hover.png";
import img5 from "../../assets/image/about_images/section2imgs/img5.png";
import img5hover from "../../assets/image/about_images/section2imgs/img5hover.png";
import titleimg from "../../assets/image/about_images/titleimg.png";
import { useTranslation } from "react-i18next";

   

const Section2 = () => {
    const { t } = useTranslation();
  return (
    <div className='section2'>
        <div className="container">
            <div className="title text-center">
                <img src={titleimg} className="title-img" alt="" />
                <h4 >{t ("aboutSection2.text1")}</h4>
                <h1>{t ("aboutSection2.title1")} <span>{t ("aboutSection2.title2")}</span></h1>
            </div>

                <div className="row text-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12" >
                        <div className="box box1">
                            <div className="img">
                                <img src={img1} className="img1" alt="" />
                                <img src={img1hover} className="img-hover" alt="" />
                            </div>

                            <div className="text">
                                <h2 className="title-text">{t ("aboutSection2.text2")}</h2>
                                <p>{t ("aboutSection2.textrepeat")}</p>
                            </div>
                        </div>
                        </div>


                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                            <div className='box box2'>
                        <div className="img">
                                <img src={img2} className="img1" alt="" />
                                <img src={img2hover} className="img-hover" alt="" />
                            </div>

                            <div className="text">
                                <h2 className="title-text">{t ("aboutSection2.text3")}</h2>
                                <p>{t ("aboutSection2.textrepeat")}</p>
                            </div>
                            </div>
                        </div>
                     

                     
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                        <div className="box box3">
                        <div className="img">
                                <img src={img3} className="img1" alt="" />
                                <img src={img3hover} className="img-hover" alt="" />
                            </div>

                            <div className="text">
                                <h2 className="title-text">{t ("aboutSection2.text4")}</h2>
                                <p>{t ("aboutSection2.textrepeat")}</p>
                            </div>
                        </div>
                        </div>
                       
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                        <div className="box box4">
                        <div className="img">
                                <img src={img4} className="img1" alt="" />
                                <img src={img4hover} className="img-hover" alt="" />
                            </div>

                            <div className="text">
                                <h2 className="title-text">{t ("aboutSection2.text5")}</h2>
                                <p>{t ("aboutSection2.textrepeat")}</p>
                            </div>
                        </div>
                        </div>


                      
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                        <div className="box box5">
                        <div className="img">
                                <img src={img5} className="img1" alt="" />
                                <img src={img5hover} className="img-hover" alt="" />
                            </div>

                            <div className="text">
                                <h2 className="title-text">{t ("aboutSection2.text6")}</h2>
                                <p>{t ("aboutSection2.textrepeat")}</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                        <div className="box box6">
                            <div className="img">
                            <img src={img1} className="img1" alt="" />
                                <img src={img1hover} className="img-hover" alt="" />
                            </div>

                            <div className="text">
                                <h2 className="title-text">{t ("aboutSection2.text2")}</h2>
                                <p>{t ("aboutSection2.textrepeat")}</p>
                            </div>
                        </div>
                        </div>
                       
                    
                </div>

            </div>
        </div>
  )
}

export default Section2