import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row"  >
          <div className="col-xl-3 col-lg-3 col-md-3 col-12 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2 " >

            <div className="col1" >
              <h3 className="title " >STORE INFORMATION</h3>

              <ul className="content">
                <li>
                  <div className="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="text">
                    Leo Gopet <br /> United States
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div className="email">
                    Email Us <br /> <a href="#/">demo@demo.com</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="col-xl-9 col-lg-9 col-md-9 col-12 order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1" >
              <div className="contact-us">
              <h3 className="title">Contact Us</h3>
            <div className="contact-us-content">

              <div className="box">
                <p > Subject</p>
                <div className="inputs-content">
                <select  name="contactUs" id="contactUs">
                  <option value="Customer service">Customer service</option>
                  <option value="Customer service">WebMater</option>
                </select>
                </div>
                
              </div>

              <div className="box">
                <p>Email address</p>
                <div className="inputs-content">
                <input type="text" placeholder="your@email.com" />
                </div>
                
              </div>

              <div className="box">
                <p>Attachment</p>
                <div className="inputs-content">
                <div className="input input-3">
                  <input type="text" placeholder="attachment" />
                  <button>CHOOSE FILE</button>
                </div>
                </div>
              </div>

              <div className="box">
                <p>Message</p>
                <div className="inputs-content">
                <textarea
                  name=""
                  id=""
                  
                  placeholder="How can we help?"
                ></textarea>
                </div>
                
              </div>
            </div>

            <div className="btn-content">
            <button>SEND</button>
            </div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
