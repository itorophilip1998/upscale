import React, { useEffect, useState } from "react";

function AboutBox(props) {
  const [item, setItem] = useState(props?.item[0]);
  useEffect(() => {
    setItem(props?.item[0]);
  }, []);
  let pushState = (state) => {
    if (state === 0) setItem(props?.item[1]);
    else setItem(props?.item[0]);
  };
  return (
    <div className="about-box py-md-5 p-md-4 text-left mt-4 ">
      <div className="row m-0 py-3">
        <div className="col-md-5 p-0 p-md-2">
          <img src={`/images/${item.img}.png`} alt="" className="rounder " />
          <h1 
            className="heading text-white  head1"
            data-oas="fade-up"
          >
            {item.head}
          </h1>
          <h1
            data-oas="fade-up"
            className="body pt-4 d-none d-md-block link head2"
            onClick={(e) => pushState(item.key)}
          >
            {item.body}
          </h1>
        </div>
        <div className="col-md-7 p-0">
          <div className="box p-0"></div>
          <p className="side_text mt-4 p-0 pl-4 pt-4" data-oas="fade-left">
            {item.side_text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
