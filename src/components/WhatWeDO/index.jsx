import React from 'react'
import WhatwedoBox from './WhatwedoBox';
import { whatwedo as list } from "../../utils/db";

function WhatWeDo() {
  return (
    <div className="about whatwedo container" id="about">
      <div className="headingText mb-5">
        <img src="/images/Line 1.png" alt="" />
        <img src="/images/logowhite.png" alt="" className="mx-2" />
        WHAT WE DO
      </div>
      <div className="whatwedobox row">
        {list &&
          list.map((item, key) => (
            <WhatwedoBox item={item} key={key} className="col-md-4" />
          ))}
      </div>
      <div className="border-bottom-box"></div>
    </div>
  );
}

export default WhatWeDo