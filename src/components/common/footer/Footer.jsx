import React from "react";
import "./footer.css";
import hero01 from "../../../images/hero/hero1.jpg";
import hero02 from "../../../images/hero/hero2.jpg";
import hero03 from "../../../images/hero/hero3.jpg";
import hero04 from "../../../images/hero/hero4.jpg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ipsa iure deleniti facilis nesciunt solutaommodi.
            </p>
            <i className="fa fa-envelope"></i>
            <span>hello@discussion.com</span>
            <br />
            <i className="fa fa-headphones"></i>
            <span>+1 234 567 890</span>
          </div>

          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src={hero01} alt="" />
              <p>Google TO Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src={hero02} alt="" />
              <p>Google TO Boost Android Security In Few Days</p>
            </div>
          </div>

          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src={hero03} alt="" />
              <p>Google TO Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src={hero04} alt="" />
              <p>Google TO Boost Android Security In Few Days</p>
            </div>
          </div>

          <div className="box">
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span>
                <label>(5)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Fashion</span>
                <label>(6)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Health</span>
                <label>(7)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Nature</span>
                <label>(8)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <div className="container flexSB">
          <p>&copy; all rights reserved</p>
          <p>
            made with <i className="fa fa-heart"></i> by reqima-dev
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
