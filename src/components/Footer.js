import React from "react";
import logo from "../assets/image/header-imgs/logo-white.png";
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";



const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <ScrollToTop
        smooth
        color="white"
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />
        {/* <ScrollToTop smooth color="white" /> */}
      <div className="footer-wrapper container">
        <div className="footer-top row">
          <div className="sign-up col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <p>{t("footer.text1")}</p>
            <span>
            {t("footer.text2")}
            </span>
          </div>

          <div className="input-email col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <form action="">
              <input type="text" placeholder={t("footer.text3")} required />
              <button>
                <i class="far fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-center row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <img src={logo} alt="" />
            <p className="footer-text">
            {t("footer.text4")} <br />
              <a href="#/">ashurova@petio.com</a>
            </p>
            <p>{t("footer.text5")} </p>
            <p>+994-070-843-2822</p>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <h5>{t("footer.text6")} </h5>
            <ul>
              <li>
                <a href="/#">{t("footer.text7")} </a>
              </li>
              <li>
                <a href="/#">{t("footer.text8")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text9")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text10")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text11")}</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <h5>{t("footer.text11")}</h5>
            <ul>
              <li>
                <a href="/#">{t("footer.text12")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text13")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text14")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text15")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text16")}</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <h5>{t("footer.text17")}</h5>
            <ul>
              <li>
                <a href="/#">{t("footer.text18")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text19")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text20")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text21")}</a>
              </li>
              <li>
                <a href="/#">{t("footer.text22")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
