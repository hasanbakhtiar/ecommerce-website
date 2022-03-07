import React from 'react';
import { Link } from 'react-router-dom';
import TabProducts from '../Shop_Sections/TabProducts';
import { useTranslation } from "react-i18next";
 


const Shop = () => {
  const { t } = useTranslation();
 
  return <div className='shop page'>
      <div className="bg">
        <div className="container text-center">
          <h1 to="/" className='title1 title '>{t("pages.shop")}</h1>
          <span className='pages-link title'><Link className='link' to="/">{t("pages.home")}</Link> > <Link className='link' to="/shop">{t("pages.shop")}</Link></span>
            
        </div>
        
        
      </div>
      <TabProducts/>
  </div>;
};

export default Shop;
