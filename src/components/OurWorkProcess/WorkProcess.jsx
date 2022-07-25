import React from "react";

function WorkProcess({ item }) {
  return (
    <div className="ourworkprocess-box col-lg-4 md-6">
      {!item.isTop && (
        <img
          src={`/images/${item.img}`}
          alt=""
          data-aos="zoom-out"
          className="topImg"
        />
      )}

      <div className={`content ${item.isTop ? "ml-auto" : "mr-auto"}`}>
        <h2 className="header ">{item.head}</h2>
        <p>{item.text}</p>
      </div>
      {item.isTop && (
        <img
          src={`/images/${item.img}`}
          alt=""
          data-aos="zoom-out"
          className="bottomImg"
        />
      )}
    </div>
  );
}

export default WorkProcess;
