import { useState } from "react";
import img4 from "../../assets/image/home_imgs/Product2Imgs/img4.webp";
import img4Hover from "../../assets/image/home_imgs/Product2Imgs/img4-hover.webp";
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';

function Prodact_Details(props) {
  const{updateItemQuantity,
}=useCart();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="productDetails">
      <div className="container p-0">
        <div className=" product-content">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="imgs-content">
                <div className="content-tabs">
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <img src={img4} alt="" />
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <img src={img4Hover} alt="" />
                  </div>
                </div>

                <div className="img-tabs">
                  <div
                    className={
                      toggleState === 1 ? "img-tab active-tabs" : "img-tab"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    <img src={img4} alt="" />
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "img-tab active-tabs" : "img-tab"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    <img src={img4Hover} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
              <div className="productsDetailsContent">
                <div className="links">
                  <Link to="/" className="link">Home</Link> / <Link to="/" className="link">Product</Link>
                </div>

                <div className="title">
                  <h4>Dog Chow For Pets</h4>
                </div>

                <div className="price">
                  <span>$61.9</span>
                </div>

                <div className="addtocart">

                  <div className="quality">
                  <span>1</span>
                   <div className="minusPlus">
                   <button className=" minusPlus" onClick={()=>updateItemQuantity(props.quantity-1)}>-</button>           
                    <button className=" minusPlus " onClick={()=>updateItemQuantity(props.quantity+1)}>+</button>
                   </div>
                  </div>

                <Link to="/Cart">  <button className="add-cart">ADD TO CART</button></Link>
                 
                </div>

                <div className="details-text">
                  <h3>Product Details</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur ut ullam eum facere! Tempora vitae magni, nam
                    cupiditate eos enim ea tenetur quos, adipisci consequuntur
                    repellendus rem aut quaerat amet tempore minus impedit
                    possimus. Repellat quo corporis consequatur saepe, magnam
                    minus nostrum quae necessitatibus inventore, recusandae in,
                    beatae aspernatur odio nesciunt quia ea quaerat. Dolorem
                    omnis suscipit dolor eos laboriosam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prodact_Details;
