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

      <div className="row ">
        <div className="col-md-4">
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
