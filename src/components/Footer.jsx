import React from 'react'

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
          <ul>
            <li>
              <img src="" alt="" />
              <a href="/">Nigeria</a>
            </li>
            <li>
              <img src="" alt="" />
              <a href="/">Dusseldorf</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <span className="headText">Follow Us</span>
          <ul>
            <li>
              <a href="/">
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer