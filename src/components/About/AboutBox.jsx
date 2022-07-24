import React from "react";

function AboutBox({ item }) {
  return (
    <div className=" about-box py-md-5 p-md-4 text-left mt-4">
      <div className="row m-0 py-3">
        <div className="col-md-5">
                  <img src={`/images/${item.img}.png` } alt="" className="rounder" />

          <h1 className="heading text-white">{item.head}</h1>
          <h1 className="body pt-4">{item.body}</h1>
        </div>
        <div className="col-md-7 ">
          <div className="box"></div>
          <p className="side_text">{item.side_text}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
