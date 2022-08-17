import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className=" row m-0 ">
        <div className="col-md-3 br text-md-right text-center  pick-footer ">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="" className="logo" /> Upscale
            Advisory
          </a>
        </div>
        <div className="col-md-3 br">
          <span className="headText">Offices</span>
          <ul className="mt-md-4">
            <li className="my-5">
              <img src="/images/location.png" alt="" />
              <a href="/" className="nation">
                {" "}
                Netherlands
              </a>
            </li>
            <li className="my-5">
              <img src="/images/location.png" alt="" />
              <a href="/" className="nation">
                {" "}
                Nigeria
              </a>
            </li>
            <li>
              <img src="/images/discover.png" alt="" />
              <a href="/" className="nation">
                {" "}
                Düsseldorf
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 follow">
          <span className="headText">Follow Us</span>
          <ul className="row m-0 mt-4">
            <li className="mr-md-2 ">
              <a href="https://www.instagram.com/upscale.advisory">
                <img src="/images/instagram.png" alt="" />
              </a>
            </li>
            <li className="mx-md-2">
              <a href="https://twitter.com/upscaleadvisory">
                <img src="/images/Vector.png" alt="" />
              </a>
            </li>
            <li className="mx-md-2">
              <a
                href="https://www.facebook.com/upscale.advisory.1"
              >
                <img src="/images/Vector (5).png" alt="" />
              </a>
            </li>
            <li className="mx-md-2">
              <a href="/">
                <img src="/images/Vector (6).png" alt="" />
              </a>
            </li>
          </ul>
          <small className="footer-upscale">&copy; 2022 Upscale Advisory</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
