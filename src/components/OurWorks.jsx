import React, { useState } from "react";
// /* eslint-disable */
function OurWorks() {
  const list = [1, 2, 3, 4, 5];
  const [isHover, setIshover] = useState(null);
  return (
    <div className="ourwork py-5 ">
      <h1 className="heading " data-aos="fade-right" data-aos-delay="200">
        OUR WORKS
      </h1>
      <p data-aos="fade-left" data-aos-delay="400">
        Our Works are very diverse and we work with several industries while
        giving top notch deliverables.
      </p>
      <div className="img-box pt-4 ">
        {list &&
          list.map((item, key) => (
            <div
              key={key}
              // style={{ background: `url(/images/img${item}.png)` }}
              className="img-div "
            >
              <img
                src={`/images/img${item}.png`}
                data-aos="zoom-out"
                data-aos-delay="600"
                
                alt=""
                onTouchMove={(e) => setIshover(item)}
                onMouseOver={(e) => setIshover(item)}
                // onMouseLeave={(e) => setIshover(null)}
                // onMouseOut={(e) => setIshover(null)}
                onClick={(e) => setIshover(null)}
              />
              {item === isHover && (
                <div className="overlay">
                  <h1>Excercise App</h1>
                  <p className="text-left">
                    This App was designed and built for a Client to enable users
                    have good excercise routines.
                  </p>
                </div>
              )} 
             
                {/* <div className="overlay overlay2 d-md-none">
                  <h1>Excercise App</h1>
                  <p className="text-left">
                    This App was designed and built for a Client to enable users
                    have good excercise routines.
                  </p>
                </div> */}
            
            </div>
          ))}
      </div>
    </div>
  );
}

export default OurWorks;
