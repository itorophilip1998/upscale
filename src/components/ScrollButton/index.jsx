import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (showTopBtn)
    return (
      <button
        type="button"
        className="btn btn-transparent shadow"
        id="btn-back-to-top"
        onClick={goToTop}
      >
        <ArrowUpwardIcon />
      </button>
    );
}

export default ScrollToTop;
