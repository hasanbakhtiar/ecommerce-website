import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import useThemeSwitcher from "./useThemeSwitcher";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import CartSubmenu from "./CartSubmenu";

function Header() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  const ThemeSwitcher = useThemeSwitcher();
  const { totalItems } = useCart();

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="header">
      <div id="header-top">
        <div className="container">
          <div className="left">
            <div>
              <i class="fas fa-phone-alt"></i>
              <a href="/">+994-070-843-0208 </a>
            </div>

            <div>
              <i class="far fa-envelope"></i>
              <a href="/">{t("ashurova@petio.com")}</a>
            </div>
          </div>

          <div className="right">
            {ThemeSwitcher}
            <div className="language">
              <button className="lang" onClick={() => handleClick("en")}>
                {" "}
                EN
              </button>
              <button className="lang" onClick={() => handleClick("ru")}>
                {" "}
                RU
              </button>
            </div>
          </div>
        </div>
      </div>
      

      <div className="header-mobile">
        <div className="header-center">
          <div className=" container">
            <div className="header-center-content">
              <div
                className="button-content mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? (
                  <i class="fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </div>

              <div className="logo-content">
                <NavLink to="/">
                  <div className="logo-bg"></div>
                </NavLink>
              </div>

              <div className="search-content">
                <form>
                  <input
                    type="text"
                    placeholder={t("navbar.text8")}
                  ></input>
                  <button>
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>

              <div className="header-icons ">
                <a href="/" className="account ">
                  <Link className="link" to="/SignIn">
                    <i class="far fa-user"></i>
                  </Link>
                  <ul className="account-submenu">
                    <li>
                      <Link to="/SignIn" className="sub-link ">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/SignUp" className="sub-link">Sign Up</Link>
                    </li>
                  </ul>
                </a>
                <a href="/" className="like ">
                  <i class="far fa-heart"></i>
                </a>
                <Link to="/Cart" className="addtocart">
                  <i class="fal fa-shopping-bag"></i>
                  <a href="#/" className="cart-total">
                    {totalItems}
                  </a>
                 <CartSubmenu/>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="header-nav">
          <div className="container">
            <div className="nav-content">
              <ul
                className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
              >
                <li>
                  <NavLink to="/">{t("navbar.text1")} </NavLink>
                </li>
                <li>
                  <NavLink to="/About">{t("navbar.text2")} </NavLink>
                </li>
                <li>
                  <NavLink to="/Shop">{t("navbar.text3")} </NavLink>
                </li>
                <li>
                  <NavLink to="/Product">{t("navbar.text4")} </NavLink>
                </li>
                <li>
                  <NavLink to="/Blog">{t("navbar.text5")}</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact">{t("navbar.text6")}</NavLink>
                </li>
              </ul>

              <p>{t("navbar.text7")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
