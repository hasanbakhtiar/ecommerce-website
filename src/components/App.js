import React, { useState, useEffect, Suspense } from "react";
import Header from "./Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Footer from "./Footer";
import CartPage from "./Pages/CartPage";
import Checkout from "./CheckoutPages/Checkout";
import CheckoutPaymentDetails from "./CheckoutPages/CheckoutPaymentDetails";
import CheckoutEnd from "./CheckoutPages/CheckoutEnd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Prodact_Details from "./Product_Details/Product_Details";
import { CartProvider } from "react-use-cart";
import SignIn from "./Register/SignIn";
import SignUp from "./Register/SignUp";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from "react-loader-spinner";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";
import "../i18n";


function App() {

  
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
       
      {loading ? (
        <div className="loader">
          <Triangle
            height="300"
            width="300"
            color="#FF8714"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div>
            <Suspense fallback={(<div>Loading</div>)}>
          <BrowserRouter>
          <ScrollToTop smooth />
            <Switch>
              <CartProvider>
             
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/Shop" component={Shop}></Route>
                <Route path="/Product" component={Product}></Route>
                <Route path="/About" component={About}></Route>
                <Route path="/Blog" component={Blog}></Route>
                <Route path="/Contact" component={Contact}></Route>
                <Route path="/Cart" component={CartPage}></Route>
                <Route path="/Checkout" component={Checkout}></Route>
                <Route path="/CheckoutEnd" component={CheckoutEnd}></Route>
                <Route
                  path="/Checkout-Payment-Details"
                  component={CheckoutPaymentDetails}
                ></Route>
                <Route
                  path="/Prodact_Details"
                  component={Prodact_Details}
                ></Route>
                <Route path="/SignIn" component={SignIn}></Route>
                <Route path="/SignUp" component={SignUp}></Route>
                <Footer />
              </CartProvider>
            </Switch>
          </BrowserRouter>
          </Suspense>
        </div>
      )}
   
    </div>
  );
}

export default App;
