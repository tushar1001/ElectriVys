 import { useEffect } from "react";
import "../styles/logoAnimation.css";

const LogoAnimation = () => {
  useEffect(() => {
    const logo = document.getElementById("logo");
    if (logo) logo.style.visibility = "visible";

    // Start animations after 2 seconds
    setTimeout(() => {
      const elements = {
        lectri: document.querySelector(".lectri"),
        v: document.querySelector(".v"),
        ys: document.querySelector(".ys"),
        electricity: document.querySelector(".electricity")
      };

      if (elements.lectri) elements.lectri.style.opacity = "1";
      if (elements.v) elements.v.style.opacity = "1";
      if (elements.ys) elements.ys.style.opacity = "1";
    }, 2000);
  }, []);

  return (
    <div className="logo-animation-container">
      <div className="logo-container" id="logo">
        <span className="ev">E</span>
        <span className="v">V</span>
        <span className="lectri">lectri</span>
        <span className="ys">ys</span>
        <span className="electricity">⚡🛵</span>
      </div>
      
     
      <div className="software-text">Software on Wheels</div>
    </div>
  );
};

export default LogoAnimation;