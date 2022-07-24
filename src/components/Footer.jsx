import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className=" row m-0 ">
        <div className="col-md-3 br text-right ">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="" className="logo" /> Upscale
            Advisory
          </a>
        </div>
        <div className="col-md-3 br">
          <span className="headText">Offices</span>
          <ul className="mt-4">
            <li className="my-5">
              <img src="/images/location.png" alt="" />
              <a href="/" className="nation"> Nigeria</a>
            </li>
            <li>
              <img src="/images/discover.png" alt="" />
              <a href="/" className="nation"> Dusseldorf</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <span className="headText">Follow Us</span>
          <ul className="row m-0 mt-4">
            <li className="mr-2">
              <a href="/">
                <img src="/images/instagram.png" alt="" />
              </a>
            </li>
            <li className="mx-2">
              <a href="/">
                <img src="/images/Vector.png" alt="" />
              </a>
            </li>
            <li className="mx-2">
              <a href="/">
                <img src="/images/Vector (5).png" alt="" />
              </a>
            </li>
            <li className="mx-2">
              <a href="/">
                <img src="/images/Vector (6).png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
