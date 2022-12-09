import React from "react";
import "./header.css";
import LogoDisccus from "../../../images/logo.png";
import headerb from "../../../images/headerb.png";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src={LogoDisccus} alt="" />
          </div>
          <div className="ad">
            <img src={headerb} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
