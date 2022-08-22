import React from "react";

function Hero() {
  const scrollDown = () => {
    // window.scrollTo(0, 400);
     window.scrollTo({
       top: 500,
       behavior: "smooth",
     });
  };
  return (
    <div className="hero">
      <p>
        <div className="mb-4 p-md-2 p-4" data-aos="fade-down" data-aos-delay="600">
          Your professional agency for mobile and web based
          <strong> software development</strong>
        </div>
        <img
          src="/images/arrow.png"
          alt=""
          className="mt-5 link"
          onClick={scrollDown}
        />
      </p>
    </div>
  );
}

export default Hero;
