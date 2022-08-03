import React from "react";

function WorkProcess({ item }) {
  return (
    <div className="ourworkprocess-box col-lg-4  d-md-block d-none">
      {!item.isTop && (
        <img
          src={`/images/${item.img}`}
          alt=""
          data-aos="zoom-out"
          className="topImg "
        />
      )}

      <div className={`content  ${item.isTop ? "ml-auto mb-4" : "mr-auto "}`}>
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
