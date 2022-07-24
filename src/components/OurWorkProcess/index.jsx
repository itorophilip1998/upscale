import React from "react";
import { ourprocess as list } from "../../utils/db";
import WorkProcess from "./WorkProcess";
function OurWorkProcess() {
  return (
    <div className="ourwork ourworkprocess  container py-5 ">
      <h1 className="heading pt-3 ">OUR WORK PROCESS</h1>
      <p>
        Our Works are very diverse and we work with several industries while
        giving top notch deliverables.
      </p>
      <div className="row m-0">
        {list && list.map((item, key) => <WorkProcess key={key} item={item} className="col-md-4" />)}
      </div>
    </div>
  );
}

export default OurWorkProcess;
