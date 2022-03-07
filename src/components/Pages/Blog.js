import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Blog_Section/Section';
import { useTranslation } from "react-i18next";


const Blog = () => {
  const { t } = useTranslation();
  return <div className='blog page'>
  <div className="bg">
   <div className="container text-center">
     <Link to="/" className='title1 title '>{t("pages.blog")}</Link>
     <span className='pages-link title'><Link className='link' to="/">{t("pages.home")}</Link> > <Link className='link' to="/Blog">{t("pages.blog")}</Link></span>

   </div>
   
 </div>

  <Section/>
</div>;
};

export default Blog;


