import React from "react";
import { popular } from "../../../../dummyData";
import Heading from "../../../common/Heading/Heading";
import "./popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    dots: false,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <Slider {...settings}>
          {popular.map((val) => {
            return (
              <div className="items">
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>{val.catgeory}</span>
                    </div>
                  </div>
                  <div className="text row">
                    <h1 className="title">{val.title.slice(0, 40)}...</h1>
                    <div className="date">
                      <i className="fas fa-calendar-days"></i>
                      <label htmlFor="">{val.date}</label>
                    </div>
                    <div className="comment">
                      <i className="fas fa-comment"></i>
                      <label htmlFor="">{val.date}</label>
                    </div>
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

export default Popular;
