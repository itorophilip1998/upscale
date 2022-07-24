import React from "react";

function OurWorks() {
  const list=[1,2,3,4,5]
  return (
    <div className="ourwork py-5 ">
      <h1 className="heading ">OUR WORKS</h1>
      <p>
        Our Works are very diverse and we work with several industries while
        giving top notch deliverables.
      </p>
      <div className="img-box pt-4">
        {list &&
          list.map((item, key) => (
            <img src={`/images/img${item}.png`} alt="" key={key} />
          ))}
      </div>
    </div>
  );
}

export default OurWorks;
