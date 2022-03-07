import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CartSubmenu = () => {
    const { t } = useTranslation();
    const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
    } = useCart();
    if (isEmpty)
      return <h1 className="text-center empty-title-submenu">{t("cart.text1")}</h1>;
    return (
      <div className="cartsubmenu">
        <div className="products-content">
        <ul className="products row">
          {items.map((item,index)=>{
            return(
              <li className="product">
               
                <div className="img">
                  <img src={item.img} alt="" />
                </div>

                <div className="text-product">
                  <h6>{t(item.title)}{" "}</h6>
                  <p className="qyt">Qyt: {item.quantity} </p>
                  <p className="price">{item.price}$</p>
                </div>
           
               

                <div className="remove">
              
                  <button
                          className="removebutton ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
             
                </div>
              </li>
            );
          })}
        </ul>
        </div>

        <div className="total">
          <h4>Total :</h4>
          <span>{cartTotal}$</span>
          </div>
        <div className="cart-footer">
          <Link to="/Cart"><button className="cartpagebtn">View Cart</button></Link> 
          <Link to="/Checkout"><button className="checkout">Check Out</button></Link>  
        </div>
      </div>
    );
  };
  

export default CartSubmenu;

