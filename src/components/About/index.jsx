import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AboutBox from "./AboutBox";
import { about as list } from "../../utils/db";
import AboutBoxMobile from "./AboutBoxMobile";
const About = () => {
  return (
    <div className="about container" id="about">
      <div className="headingText">
        <img src="/images/Line 1.png" alt="" />
        <img src="/images/logowhite.png" alt="" className="mx-2" />
        ABOUT UPSCALE ADVISORY
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        shaowStatus={false}
        showIndicators={false}
        labels={"false"}
        showThumbs={false}
        showArrows={false}
        interval={6000}
        className="d-md-none"
      >
        {list &&
          list.map((item, key) => <AboutBoxMobile item={item} key={key} />)}
      </Carousel>

      <div className="desktopviewAbout d-none d-md-block">
        
          <AboutBox item={list} /> 
      </div>
    </div>
  );
};

export default About;
