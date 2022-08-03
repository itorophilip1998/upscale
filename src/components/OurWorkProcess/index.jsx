import React from "react";
import { ourprocess as list } from "../../utils/db";
import WorkProcess from "./WorkProcess";
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
          OUR WORK PROCESS
        </h1>
        <p data-aos="fade-left" data-aos-delay="400">
          Our Works are very diverse and we work with several industries while
          giving top notch deliverables.
        </p>
      </div>
      <div className="d-mode">
        <div className=" work-flex row pt-5 " data-aos="zoom-out-up">
          {list &&
            list.map((item, key) => <WorkProcess key={key} item={item} />)}
        </div>
        <img src="/images/curveline.png" alt="" className="curveline" />
      </div>

      <div className="m-mode m-0">
        {list &&
          list.map((item, key) => <WorkProcessMobile key={key} index={key} item={item} />)}
      </div>
    </div>
  );
}

export default OurWorkProcess;
