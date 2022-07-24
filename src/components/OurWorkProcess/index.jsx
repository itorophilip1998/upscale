import React from "react";
import { ourprocess as list } from "../../utils/db";
import WorkProcess from "./WorkProcess";
function OurWorkProcess() {
  return (
    <div className=" ourworkprocess  container py-5 ">
      <div className="ourwork">
        <h1 className="heading pt-3 ">OUR WORK PROCESS</h1>
        <p>
          Our Works are very diverse and we work with several industries while
          giving top notch deliverables.
        </p>
      </div>
      <div className=" work-flex row pt-5">
        {list &&
          list.map((item, key) => (
            <WorkProcess
              key={key}
              item={item}
            />
          ))}
      </div>
      <img src="/images/curveline.png" alt="" className="curveline" />
    </div>
  );
}

export default OurWorkProcess;
