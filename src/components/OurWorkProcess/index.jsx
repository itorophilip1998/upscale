import React from "react";
import { ourprocess as list } from "../../utils/db";
import WorkProcess from "./WorkProcess";
// import WorkProcess from "./WorkProcess";
// import WorkProcessDesktop from "./WorkProcessDesktop";
import WorkProcessMobile from "./WorkProcessMobile";
function OurWorkProcess() {
  return (
    <div className=" ourworkprocess  container py-5 ">
      <div className="ourwork mb-md-5">
        <h1
          className="heading pt-3 "
          data-aos="fade-right"
          data-aos-delay="200"
        >
          OUR WORKFLOW
        </h1>
        <p data-aos="fade-left" className="twoLinesHeader" data-aos-delay="400">
          We strive to ensure that from our first touch point till your
          requirements are met, the process is as smooth as possible.
        </p>
      </div>
      <div className="d-mode">
        <div className=" work-flex row pt-5 m-0" data-aos="zoom-out-up">
          {list &&
            list.map((item, key) => (
              <WorkProcess key={key} item={item} index={key} />
            ))}
        </div>
        <img src="/images/curveline.png" alt="" className="curveline" />
      </div>

      <div className="m-mode m-0 ">
        {list &&
          list.map((item, key) => (
            <WorkProcessMobile key={key} index={key} item={item} />
          ))}
      </div>
    </div>
  );
}

export default OurWorkProcess;
