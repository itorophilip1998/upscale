import React from "react";
import { Facebook, LinkedIn, Twitter, Instagram } from "@material-ui/icons";

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
              <img src="/images/location.png" alt="" />
              <a href="/" className="nation">
                {" "}
                Düsseldorf
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 follow ">
          <span className="headText">Follow Us</span>
          <ul className="row m-0 mt-4 mb-5">
            <li className="mr-md-2 ">
              <a href="https://www.instagram.com/upscale.advisory">
                <Instagram className="svgIco" />
              </a>
            </li>
            <li className="mx-md-2">
              <a href="https://twitter.com/upscaleadvisory">
                <Twitter className="svgIco" />
              </a>
            </li>
            <li className="mx-md-2">
              <a href="https://www.facebook.com/upscale.advisory.1">
                <Facebook className="svgIco" />
              </a>
            </li>
            <li className="mx-md-2">
              <a href="https://www.linkedin.com/company/upscale-advisory/" >
                <LinkedIn className="svgIco" />
              </a>
            </li>
          </ul>
          <div className="footer-upscale pb-5 ">
            &copy; 2022 Upscale Advisory
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
