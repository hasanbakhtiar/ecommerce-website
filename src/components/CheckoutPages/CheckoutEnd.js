import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


const CheckoutPaymentDetails = () => {
    const { t } = useTranslation();
  return (
    <div className='checkout card-details checkout-end'>
            <div className="container">
                <div className="row">
                    <h2 className="title text-center">{t("checkout2.text1")}</h2>
                    <div className='top-content'>
                        <div>
                            <span><i class="fa-solid fa-check"></i></span>
                           <p>{t("checkout2.text2")}</p> 
                        </div>
                        <div className="line"></div>
                        <div>
                            <span className='second-span payment-details-span'><i class="fa-solid fa-check"></i></span>
                            <p>{t("checkout2.text3")}</p>
                        </div>
                    </div>

                    <div className="card-text">
                        <h4>{t("checkout3.text1")}</h4>
                    </div>
                    
                   <div className="back-home">
                       <Link to="/"><button>{t("checkout3.text2")}</button></Link>
                   </div>

                </div>
            </div>
    </div>
  )
}

export default CheckoutPaymentDetails