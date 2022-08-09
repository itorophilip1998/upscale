import React from "react";
import Form from "./Form";

function ContactUs() {
  return (
    <div className="contact container " id="contact">
      <div className="about container">
        <div className="headingText">
          <img src="/images/Line 1.png" alt="" />
          <img src="/images/logowhite.png" alt="" className="mx-2" />
          CONTACT US
        </div>
      </div>

      <div className="row m-0">
        <div className="col-md-4">
          <div className="littleInfo mt-5">
            <span>Tel: +4917674865418</span> <br />
            <span className="pt-5">Email: info@upscaleadvisroy.de</span>
            {/* {` </br>`} */}
          </div>
          <div className="headInfo" data-aos="fade-left" data-aos-delay="600">
            <span>Got any Project in Mind?</span>
            <h2>Schedule a Free Consultation.</h2>
          </div>
        </div>

        <div className="col-md-8">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
