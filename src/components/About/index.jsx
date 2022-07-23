import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AboutBox from "./AboutBox";
import { about as list } from "../../utils/db";
const About = () => {
  return (
    <div className="about" id="about">
      <Carousel
        autoPlay
        infiniteLoop
        shaowStatus={false}
        showIndicators={false}
        labels={"false"}
        showThumbs={false}
        showArrows={false}
        interval={3000}
      >
        {list && list.map((item, key) => <AboutBox item={item} key={key} />)}
      </Carousel>
    </div>
  );
};

export default About;
