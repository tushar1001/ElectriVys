import { useEffect, useState } from "react";
import "../styles/logoAnimation.css";

const LogoAnimation = () => {
  const [expandE, setExpandE] = useState(false);
  const [expandV, setExpandV] = useState(false);
  const [showFullLogo, setShowFullLogo] = useState(false);

  useEffect(() => {
    const logo = document.getElementById("logo");
    const icon = document.getElementById("icon-container");
    const metallicText = document.getElementById("software-text");

    if (logo) logo.style.visibility = "visible";

    if (icon) {
      setTimeout(() => {
        icon.style.animation = "evMoveAcross 6s linear forwards";
      }, 500);
    }

    if (metallicText) {
      setTimeout(() => {
        metallicText.style.opacity = "1";
      }, 1500);
    }

    // Expand "E" into "Electri"
    setTimeout(() => setExpandE(true), 800); 

    // Expand "V" into "Vys"
    setTimeout(() => setExpandV(true), 1400); 

    // Show full "ElectriVys"
    setTimeout(() => setShowFullLogo(true), 2000);

  }, []);

  return (
    <div className="logo-animation-container">
      <div className="logo-container" id="logo">
        {!showFullLogo ? (
          <div className="expand-text">
            {!expandE ? (
              <>
                <span className="ev-light">E</span>
                <span className="ev-dark">V</span>
              </>
            ) : (
              <>
                <span className="electri expand-electri">Electri</span>
                {!expandV && <span className="ev-dark">V</span>}
              </>
            )}
            {expandV && <span className="vys expand-vys">Vys</span>}
          </div>
        ) : (
          <div className="full-logo fade-in">
            <span className="electri">Electri</span>
            <span className="vys">Vys</span>
          </div>
        )}
      </div>
      <div className="icon-container" id="icon-container">⚡</div>
      <div className="metallic-text" id="software-text">Software on Wheels</div>
    </div>
  );
};

export default LogoAnimation;
