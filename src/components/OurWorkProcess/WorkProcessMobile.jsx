import React from "react";

function WorkProcessMobile({ item, index }) {
  return (
    <div className="d-lg-none m-0 container">
      <div className="row m-0">
        <div className="col p-0">
          <div className="row m-0 ">
            <div className="col-3 p-0 pb-4" data-aos="fade-left">
              <img src={`/images/monileline/line${index + 1}.png`} alt="" />
            </div>
            <div className="col-9 p-0 text-vite py-2" data-aos="fade-right">
              <h3 className="mb-4">{item.head}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcessMobile;
