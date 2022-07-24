import React from "react";

function WhatwedoBox({ item }) {
  return (
    <div className="card-box">
      <div className="card-header">
        {item.head}
        <img src={`/images/${item.img}`} alt="" className="card-name" />
      </div>
      <div className="card-text">{item.text}</div>
    </div>
  );
}

export default WhatwedoBox;
