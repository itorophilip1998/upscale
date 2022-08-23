import React from "react";
// import { Facebook, LinkedIn, Twitter, Instagram } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className=" row m-0 ">
        <div className="col-md-3  br text-md-right text-center  pick-footer ">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="" className="logo" /> Upscale
            Advisory
          </a>

          <div className="littleInfo d-none d-md-block my-5 p-0 pb-4">
            <small>Tel: +4917674865418</small> <br />
            <small>Email: support@upscaleadvisory.de</small>
            {/* {` </br>`} */}
          </div>
        </div>
        <div className="col-md-3 br ">
          <div className="headText  text-center text-md-left">Offices</div>
          <ul className="mt-md-4  text-center text-md-left">
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
            <li className="my-5">
              <img src="/images/location.png" alt="" />
              <a href="/" className="nation">
                {" "}
                Netherlands
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 follow ">
          <div className="headText text-md-left">Follow Us</div>
          <ul className="row m-0 mt-4 mb-5">
            <li className="mr-md-2 ">
              <a
                href="https://www.instagram.com/upscale.advisory"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src="/images/footer/instagram.png" alt="" />
              </a>
            </li>
            <li className="mx-md-2">
              <a
                href="https://twitter.com/upscaleadvisory"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src="/images/footer/twitter.png" alt="" />
              </a>
            </li>
            <li className="mx-md-2">
              <a
                href="https://www.facebook.com/upscale.advisory.1"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src="/images/footer/facebook.png" alt="" />
              </a>
            </li>
            <li className="mx-md-2">
              <a
                href="https://www.linkedin.com/company/upscale-advisory/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src="/images/footer/linkedin.png" alt="" />
              </a>
            </li>
          </ul>
          <div className="littleInfo d-block d-md-none text-center p-0 pb-4">
            <small>Tel: +4917674865418</small> <br />
            <small>Email: support@upscaleadvisory.de</small>
            {/* {` </br>`} */}
          </div>
          <div className="footer-upscale ">&copy; 2022 Upscale Advisory</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
