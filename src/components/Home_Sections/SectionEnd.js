import React from "react";
import İcon1 from "../../assets/image/home_imgs/SectionEndİmgs/1İcon.png"
import İcon2 from "../../assets/image/home_imgs/SectionEndİmgs/2İcon.png"
import İcon3 from "../../assets/image/home_imgs/SectionEndİmgs/3İcon.png"


const SectionEnd = () => {
  return (
    <div className="section-end">
      <div className="container">

        <div className="row boxs">
          <div className="col-xl-4 col-lg-4 col-md-6 box">
            <div className="bg-img">
              <img width={50} src={İcon1} alt="" />
              </div>            
            <h4>Free Same-Day Delivery</h4>
            <p>Order by 2pm local time to get free delivery on </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 box">
          <div className="bg-img">
              <img width={50} src={İcon2} alt="" />
              </div>
            <h4>30 Day Return </h4>
            <p>35% off your first order plus 5% off all future </p>
          </div>
          <div className=" box col-xl-4 col-lg-4 col-md-12 text-md-center">
          <div className="bg-img">
              <img width={50} src={İcon3} alt="" />
              </div>
            <h4>
              <span>Security payment </span>
            </h4>
            <p>25% off your online order of $50+. Available at </p>
          </div>
        </div>
      </div>
   
      </div>
  );
};

export default SectionEnd;
