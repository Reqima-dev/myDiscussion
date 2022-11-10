import React from "react";
import "./singlePagesSlider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../dummyData";

const SinglePagesSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <section className="singlePopular">
        <Slider {...settings}>
          {popular.map((val) => {
            return (
              <div className="items">
                <div className="box">
                  <div className="images">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">{val.title}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default SinglePagesSlider;
