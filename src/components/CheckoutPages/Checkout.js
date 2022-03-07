import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Checkout = () => {
    const { t } = useTranslation();
  return (
    <div className='checkout'>
            <div className="container">
                <div className="row">
                    <h2 className="title text-center">{t("checkout1.text1")}</h2>
                    <div className='top-content'>
                        <div>
                            <span>1</span>
                           <p>{t("checkout1.text2")}</p> 
                        </div>
                        <div className="line"></div>
                        <div>
                            <span className='second-span'>2</span>
                            <p>{t("checkout1.text3")}</p>
                        </div>
                    </div>


                    <div className="content row">
                    <h4>{t("checkout1.text4")}</h4>
                    <div className="col-6 ">
                        <div className='input-content'>
                            <label htmlFor="name">{t("checkout1.text5")}</label>
                            <input type="text" id='name' placeholder={t("checkout1.text6")}/>                           
                        </div>

                        <div className='input-content'>
                            <label htmlFor="address">{t("checkout1.text7")}</label>
                            <input type="text" id='address' placeholder={t("checkout1.text8")}/>                           
                        </div>

                        <div className='input-content'>
                            <label htmlFor="city">{t("checkout1.text9")}</label>
                            <input type="text" id='city' placeholder={t("checkout1.text10")}/>                           
                        </div>

                        <div className='input-content'>
                            <label htmlFor="country">{t("checkout1.text11")}</label>
                            <select name="country" id="country">
                                <option value="Azerbaijan">{t("checkout1.text12")}</option>
                                <option value="France">{t("checkout1.text13")}</option>
                                <option value="Italy">{t("checkout1.text14")}</option>
                                <option value="German">{t("checkout1.text15")}</option>
                                <option value="Turkish">{t("checkout1.text16")}</option>
                                <option value="England">{t("checkout1.text17")}</option>
                            </select>                          
                        </div>

                        <div className='input-content'>
                            <label htmlFor="options">{t("checkout1.text18")}</label>
                            <select name="options" id="options">
                                <option value="1">{t("checkout1.text19")}</option>
                                <option value="2">{t("checkout1.text20")}</option>
                                <option value="3">{t("checkout1.text21")}</option>
                            </select>                          
                        </div>

                     

                    </div>
                    
                    <div className="col-6 ">
                        <div className='input-content'>
                            <label htmlFor="surname">{t("checkout1.text22")}</label>
                            <input type="text" id='surname' placeholder={t("checkout1.text23")}/>                           
                        </div>

                        <div className='input-content'>
                            <label htmlFor="email">{t("checkout1.text24")}</label>
                            <input type="email" id='email' placeholder={t("checkout1.text34")}/>                           
                        </div>

                        <div className='input-content'>
                            <label htmlFor="code">{t("checkout1.text25")}</label>
                            <input type="password" id='code' placeholder={t("checkout1.text26")}/>                           
                        </div>

                        <div className='input-content'>
                            <label htmlFor="country">{t("checkout1.text27")}</label>
                            <select name="country" id="country">
                                <option value="aube">{t("checkout1.text28")}</option>
                                <option value="France">{t("checkout1.text29")}</option>
                                <option value="Italy">{t("checkout1.text30")}</option>
                                <option value="German">{t("checkout1.text31")}</option>
                            </select>                          
                        </div>

                    </div>

                    <div className="check-foot">
                  <Link to="/Cart"> <button className='back-cart'>{t("checkout1.text32")}</button></Link> 

                  <Link to="/Checkout-Payment-Details"><button className='next'>{t("checkout1.text33")}</button></Link>
                    </div>
                    </div>
                   

                </div>
            </div>
    </div>
  )
}

export default Checkout


