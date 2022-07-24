import React from "react";
import { ourprocess as list } from "../../utils/db";
function OurWorkProcess() { 
  return (
    <div className="ourwork ourworkprocess py-5 ">
      <h1 className="heading pt-3 ">OUR WORK PROCESS</h1>
      <p>
        Our Works are very diverse and we work with several industries while
        giving top notch deliverables.
      </p>
      {list && list.map((item,key) => (
        <Workp
      ))}
    </div>
  );
}

export default OurWorkProcess;
