import React from 'react'
import WhatwedoBox from './WhatwedoBox';
import { whatwedo as list } from "../../utils/db";

function WhatWeDo() {
  return (
    <div className="about container" id="about">
      <div className="headingText">
        <img src="/images/Line 1.png" alt="" />
        <img src="/images/logowhite.png" alt="" className="mx-2" />
        WHAT WE DO
      </div>
      <div>
        {list && list.map((item, key) => <WhatwedoBox item={item} key={key} />)}
      </div>
    </div>
  );
}

export default WhatWeDo