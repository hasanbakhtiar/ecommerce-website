import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const SignIn = () => {
  const { t } = useTranslation();
  return (
    <div className="signin">
      <div className="container">
        <div className="row signInContent">
          <div className="col-xl-6 col-lg-6 ">
            <div className="left">
              <h4>{t("signin.text1")}</h4>

              <form action="">
                <div className="input-content">
                  <i class="fa-solid fa-user"></i>
                  <input type="text" placeholder={t("signin.text2")} />
                </div>

                <div className="input-content">
                  <i class="fa-solid fa-lock"></i>
                  <input type="password" placeholder={t("signin.text3")} />
                </div>

                <div className="check">
                  <input
                    type="checkbox"
                    name="remember"
                    value="remember"
                  ></input>
                  <label for="remember">{t("signin.text4")}</label>
                  <br></br>
                </div>

                <div className="submit-content">
                  <button type="submit">{t("signin.text5")}</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
           <div className="right-content">
           <div className="create-account">
              <p>
              {t("signin.text6")}
              </p>

              
                <Link to="/SignUp">
                  <button>{t("signin.text7")}</button>
                </Link>

            </div>

            <div className="OR">{t("signin.text8")}</div>

            <button className="social-signin facebook">
            {t("signin.text9")}<i class="fa-brands fa-facebook-f"></i>
            </button>
            <button className="social-signin twitter">
            {t("signin.text10")} <i class="fa-brands fa-twitter"></i>
            </button>
           </div>
          </div>

          <div className="col-12 col-end">
            <p className="text-center">
            {t("signin.text11")}
              <a href="#/"> {t("signin.text12")}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
