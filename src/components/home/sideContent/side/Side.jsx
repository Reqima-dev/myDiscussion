import React from "react";
import { gallery } from "../../../../dummyData";
import Heading from "../../../common/Heading/Heading";
import SocialMedia from "../social/SocialMedia";
import Tpost from "../tpost/Tpost";
import "./side.css";
import Slider from "react-slick";
import sliderBannerNew from "../../../../images/sidebar-banner-new.jpg";

const Side = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const category = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technologie",
  ];

  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />

      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>

        <form action="">
          <input type="text" placeholder="Email Address ..." />
          <button>
            <i className="fa fa-paper-plane"></i>
            SUBMIT
          </button>
        </form>
      </section>

      <section className="banner">
        <img src={sliderBannerNew} alt="" />
      </section>

      <Tpost />

      <section className="categorys">
        <Heading title="Categorys" />
        {category.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
