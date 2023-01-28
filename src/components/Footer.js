import React from "react";
import githubLogo from "./images/Screenshot 2023-01-26 213135.png";
import facelogo from "./images/facebooklogo.png";
import linklogo from "./images/linkedlogo.png";
import "./styles/Footer.css";

function Footer() {
  return (
    <div>
      <p className="footer">
        <a href="https://github.com/Jacobschoenbauer">
          <img className="end" src={githubLogo} alt="Github"></img>
        </a>

        <a href="https://www.facebook.com/jacob.schoenbauer">
          <img className="end" src={facelogo} alt="Github"></img>
        </a>

        <a href="https://www.linkedin.com/in/jacob-schoenbauer-281374239/">
          <img className="end" src={linklogo} alt="Github"></img>
        </a>
      </p>
    </div>
  );
}
export default Footer;
