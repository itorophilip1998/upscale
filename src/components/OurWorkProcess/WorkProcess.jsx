import React from "react";

function WorkProcess({ item }) {
  return (
    <div className="ourworkprocess-box col-md-4">
      {!item.isTop && (
        <img src={`/images/${item.img}`} alt="" className="topImg" />
      )}

      <div className={`content ${item.isTop ? "ml-auto" : "mr-auto"}`}>
        <h2 className="header ">{item.head}</h2>
        <p>{item.text}</p>
      </div>
      {item.isTop && (
        <img src={`/images/${item.img}`} alt="" className="bottomImg" />
      )}
    </div>
  );
}

export default WorkProcess;
