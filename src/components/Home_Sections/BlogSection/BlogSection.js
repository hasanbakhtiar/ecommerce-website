import React from 'react';
import Data from '../../Data/BlogSectionData';
import BlogItem from './BlogItem';
import { useTranslation } from "react-i18next";


const Section = () => {
    const { t } = useTranslation();
  return <div className='Blog' >
      <h1 className='title1 text-center'>{t("homeblog.title")}</h1>
        <div className="container">
            <div className="row">
                {Data.data.map((item,index)=> {
                    return(
                        <BlogItem
                        img = {item.img}
                        desc={t(item.desc)}
                        item={item}
                        key={index}
                        />
                    );
                })}
            </div>
        </div>
  </div>;
};

export default Section;