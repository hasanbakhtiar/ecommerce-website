import React from 'react';
import { useTranslation } from "react-i18next";


const Section4Item = (props) => {
  const { t } = useTranslation();
  return <div className='col-xl-4 col-lg-4 col-md-4 md-sm-4 col-12'  >
      <div className="box" >
          <img src={props.img} alt="" />
         <div className="text">
         <h5>{t(props.title)}</h5>
          <p className="desc">{t(props.desc)}</p>
             </div> 
      </div>
  </div>;
};

export default Section4Item;
