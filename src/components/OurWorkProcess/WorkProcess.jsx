import React from "react";

function WorkProcess({ item, index }) {
  return (
    <div className="ourworkprocess-box col-lg-4  d-lg-block d-none">
      {!item.isTop && (
        <>
          {/* <div className="items-index ">{index + 1}</div> */}

          <img
            src={`/images/${item.img}`}
            alt=""
            data-aos="zoom-out"
            className="topImg "
          />
        </>
      )}

      <div className={`content  ${item.isTop ? "ml-auto mb-5" : "mr-auto "}`}>
        <h2 className="header font-weight-bold">{item.head}</h2>
        <p>{item.text}</p>
      </div>
      {item.isTop && (
        // <>

        <img
          src={`/images/${item.img}`}
          alt=""
          data-aos="zoom-out"
          className="bottomImg"
        />
        // </>
      )}
    </div>
  );
}

export default WorkProcess;
