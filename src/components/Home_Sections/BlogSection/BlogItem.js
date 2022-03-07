import React from 'react';
import { useTranslation } from "react-i18next";


const BlogItem = (props) => {
  const { t } = useTranslation();
  return <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12' data-aos="zoom-in">
    <div className="box-content">
    <div className='bg-img '>
        <img src={props.img} alt="" />
    </div>
      <div className="content">
          <div className="buttons">
                <button><i class="fas fa-list"></i>{t("homeblog.text1")}</button>
                <button><i class="fas fa-user"></i>{t("homeblog.text2")}</button>
                <button><i class="far fa-clock"></i>{t("homeblog.text3")}</button>
          </div>

          <h5 className="title">{t(props.desc)}</h5>
          <button className='button-read-me'>{t("homeblog.text4")}</button>
      </div>
    </div>
  </div>;
};

export default BlogItem;
