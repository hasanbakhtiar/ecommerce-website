import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section1 from "../About_section/Section1";
import Section2 from "../About_section/Section2";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about page">
      <div className="bg">
        <div className="container text-center">
          <Link to="/" className="title1 title ">
            ABOUT
          </Link>
          <span className="pages-link title">
            <Link className="link" to="/">
              {t("pages.home")}
            </Link>{" "}
            >{" "}
            <Link className="link" to="/About ">
              About
            </Link>
          </span>
        </div>
      </div>
      <Section1/>
      <Section2/>
    </div>
  );
};

export default About;
