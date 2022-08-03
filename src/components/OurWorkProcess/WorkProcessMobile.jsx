import React from "react";

function WorkProcessMobile({ item, index }) {
  return (
    <div className="d-md-none ">
      <div className="row m-0">
        <div className="col p-0">
          <div className="row m-0">
            <div className="col-3 p-0">
              <img src={`/images/monileline/line${index+1}.png`} alt="" />
          </div>
            <div className="col-9 p-0">
              <h3>{item.head}</h3>
               

              <p>{item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcessMobile;
