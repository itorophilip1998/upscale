import React from "react";

function WhatwedoBox({ item }) {
  return (
    <div className="card-box" data-aos="flip-down" data-aos-delay="200">
      <div className="card-head">{item.head}</div>
      <img src={`/images/${item.img}`} alt="" className="card-name" />

      <div className="card-text">{item.text}</div>
    </div>
  );
}

export default WhatwedoBox;
