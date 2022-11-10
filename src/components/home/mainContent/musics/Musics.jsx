import React from "react";
import "./musics.css";

import Slider from "react-slick";
import Heading from "../../../common/Heading/Heading";

import { popular } from "../../../../dummyData";
const Musics = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dots: false,

   
  };

  return (
    <>
      <section className="music">
        <Heading title="Musics News" />
        <div className="content">
          <Slider {...settings}>
            {popular
              .filter((val) => val.catgeory === "fun")
              .map((val) => {
                return (
                  <div className="items">
                    <div className="box shadow flexSB">
                      <div className="images ">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div className="category category1">
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className="text">
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                        <div className="date">
                          <i className="fas fa-calendar-days"></i>
                          <label htmlFor="">{val.date}</label>
                        </div>
                        <p className="desc"> {val.desc.slice(0, 250)}... </p>
                        <div className="comment">
                          <i className="fas fa-share"></i>
                          <label htmlFor="">Share / </label>
                          <i className="fas fa-comment"></i>
                          <label htmlFor="">{val.date}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Musics;
