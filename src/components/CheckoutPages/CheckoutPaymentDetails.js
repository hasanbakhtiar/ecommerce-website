import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { useTranslation } from "react-i18next";

const CheckoutPaymentDetails = () => {   
    const { t } = useTranslation();
    const{
        cartTotal,
        totalItems,
        totalUniqueItems
    }=useCart();
  return (
    <div className='checkout card-details'>
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
                            <span className='second-span payment-details-span'>2</span>
                            <p>{t("checkout2.text3")}</p>
                        </div>
                    </div>


                    <div className="content-card-datails row">
                    <h4 className='summary'>{t("checkout2.text4")}</h4>
                  
                  <div className="wrapper">
                  <div>
                
                        <div className='text'>
                            <p>{t("checkout2.text5")} {totalUniqueItems}</p>
                            <span className="price">${cartTotal}</span>
                        </div>
                    </div>

                    <div>
                        <div className='text'>
                            <p>{t("checkout2.text6")} {totalItems}</p>
                            <span className="price">${cartTotal}</span>
                        </div>
                    </div>


                    <div className='text'>
                        <h4>{t("checkout2.text7")}</h4>
                       <div><span className="price">${cartTotal}</span></div> 
                    </div>

                  </div>

                  <div className="payment">
                      <h4>{t("checkout2.text8")}</h4>
                      <div className='card-number'>
                          <div className="number">
                              <div className="icon"><i class="fa-solid fa-credit-card"></i></div>
                              <input type="text" placeholder='Card number'/>                              
                          </div>

                          <div className="card-code">
                              <div>
                              <input type="text" placeholder='MM' />
                              <span className='line'>/</span>
                              <input type="text" placeholder='YY' />
                              </div>

                              <div>
                                  <input type="text" placeholder='CVC' />
                              </div>
                          </div>
                      </div>
                  </div>
                   

                    <div className="check-foot">
                  <Link to="/Checkout"> <button className='back-cart'>{t("checkout2.text9")}</button></Link> 

                  <Link to="/CheckoutEnd"><button className='next'>{t("checkout2.text10")} ${cartTotal}</button></Link>
                    </div>

                    </div>
                   

                </div>
            </div>
    </div>
  )
}

export default CheckoutPaymentDetails