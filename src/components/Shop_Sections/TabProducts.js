import { useState } from "react";
import TabProductData from "../Data/Product3Data";
import ProductItem from "./ProductItem";
import { useTranslation } from "react-i18next";


const TabProducts= ()=> {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <div className="tabproduct1" data-aos="fade-in" >
           <h1 className="title ">
          <span>{t("tabproduct.basliq1")}</span> {t("tabproduct.basliq2")}
        </h1>

           <div className="container">          

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         {t('tabproduct.btn1')}
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
            {t("tabproduct.btn2")}
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
           {t("tabproduct.btn3")}
        </button>
      </div>
      

      <div className="content-tabs" >
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="row">
            {TabProductData.newarrivals.map((item, index) => {
              return (
                <ProductItem img={item.img}
                    img2 ={item.img2}
                    title={t(item.title)}
                    desc={t(item.desc)}
                    price={item.price}
                    item={item}
                    key={index}
                    />
              );
            })}
          </div>
        </div>


        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="row">
              {TabProductData.bestsellers.map((item,index)=>{
                  return(
                    <ProductItem img={item.img}
                    title={t(item.title)}
                    desc={t(item.desc)}
                    price={item.price}
                    item={item}
                    key={index}
                    />
                  );
              })}
          </div>
        </div>


        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >

            <div className="row">
          {TabProductData.toprates.map((item,index)=>{
                  return(
                    <ProductItem img={item.img}
                    title={t(item.title)}
                    desc={item.desc}
                    price={item.price}
                    item={item}
                    key={index}
                    />
                  );
              })}
              </div>
        </div>

      </div>
    </div>
      </div>
   
  );
}

export default TabProducts;