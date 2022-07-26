import React from "react";

function AboutBoxMobile({ item }) {
  return (
    <div className="about-box py-md-5 p-md-4 text-left mt-4 ">
      <div className="row m-0 py-3">
        <div className="col-md-5 p-0 p-md-2">
          <img src={`/images/${item.img}.png`} alt="" className="rounder " />
          <h1 className="heading text-white">{item.head}</h1>
          <h1 className="body pt-4 d-none d-md-block">{item.body}</h1>
        </div>
        <div className="col-md-7 p-0">
          <div className="box p-0"></div>
          <p className="side_text mt-4 p-0 ">{item.side_text}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutBoxMobile;
