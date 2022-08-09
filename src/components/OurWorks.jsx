import React, { useState } from "react";
// /* eslint-disable */
import { imgList } from "../utils/db.js";
function OurWorks() {
  const list = imgList;
  // console.log(list)
  const [isHover, setIshover] = useState(null);
  return (
    <div className="ourwork py-5 ">
      <h1 className="heading " data-aos="fade-right" data-aos-delay="200">
        OUR WORKS
      </h1>
      <p data-aos="fade-left" data-aos-delay="400">
        Below you may find some of the applications we have successfully
        delivered to clients in the Netherlands and Germany.
      </p>
      <div className="img-box pt-4 ">
        {list &&
          list.map((item, key) => (
            <div key={key} className="img-div ">
              <img
                src={`/images/img${key + 1}.png`}
                data-aos="zoom-out"
                data-aos-delay="600"
                alt=""
                onTouchMove={(e) => setIshover(item)}
                onMouseOver={(e) => setIshover(item)}
                onClick={(e) => setIshover(null)}
              />
              {item === isHover && (
                <div className="overlay" data-aos="zoom-out">
                  <h5 className="text-white">{item.title}</h5>
                  <p className="text-left">{item.body}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default OurWorks;
