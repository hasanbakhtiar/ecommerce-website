import React from 'react'
import img1 from "../../assets/image/about_images/img1.png";
import { useTranslation } from "react-i18next";


const Section1 = () => {
    const { t } = useTranslation();
  return (
    <div className='section1'>
        <div className="container">
            <div class="row">
                <div className="col-xl-6">
                    <div className="img-content">
                        <img src={img1} alt="" />
                    </div>      
                </div>


                <div className="col-xl-6">
                    <div className="text-content">
                        <h4 className="title1">{t("aboutSection1.text1")}</h4>

                        <h2 className='title2'>{t("aboutSection1.text2")} <span>{t("aboutSection1.text3")}</span> </h2>

                        <p className="text">
                        {t("aboutSection1.text4")}
                        <br />
                        {t("aboutSection1.text5")}
                        </p>

                        <button>{t("aboutSection1.text6")}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1