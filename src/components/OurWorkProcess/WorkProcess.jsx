import React from "react";

function WorkProcess({ item }) {
  return (
    <div className="ourworkprocess-box">
      {item.isTop && <img src={`/images/${item.img}`} alt="" />}

      <h2 className="header">{item.head}</h2>
      <p>{item.text}</p>
      {!item.isTop && <img src={`/images/${item.img}`} alt="" />}
    </div>
  );
}

export default WorkProcess;
