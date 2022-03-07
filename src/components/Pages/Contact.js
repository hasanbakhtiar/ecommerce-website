import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact_Section/Contact';
import { useTranslation } from "react-i18next";
 

const Page = () => {
  const { t } = useTranslation();
  return <div className='contact page'>
       <div className="bg">
        <div className="container text-center">
          <Link to="/" className='title1 title '>{t("pages.contact")}</Link>
          <span className='pages-link title'><Link className='link' to="/">{t("pages.home")}</Link> > <Link className='link' to="/Contact">{t("pages.contact")}</Link></span>

        </div>
        
      </div>

  <Contact/>
  </div>;
};

export default Page;
