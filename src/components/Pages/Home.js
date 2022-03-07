import React from 'react';
import Section2 from '../Home_Sections/Section2';
import Section3 from '../Home_Sections/Section3';
import Section4 from '../Home_Sections/Section4/Section4';
import Section1 from "../Home_Sections/Section1";
import BlogSection from "../Home_Sections/BlogSection/BlogSection";
import Product1 from "../Home_Sections/Product1/SectionProduct";
import Product2 from "../Home_Sections/Product2/Product2";
import TabProducts from '../Shop_Sections/TabProducts';
import BrandsSection from '../Home_Sections/BrandsSection';
import Slider from "../Home_Sections/Slider";

const Home = () => {
  return <div className='home' >
    <Slider/>
    <Section1/>
    <Section2 />
    <Product1/>
    <Section3/>
    <Product2/>
    <Section4/>
    <TabProducts/>
    <BlogSection/>
    <BrandsSection/>
    {/* <Product1/> */}

    {/* <SectionEnd/> */}
    
    </div>;
};

export default Home;