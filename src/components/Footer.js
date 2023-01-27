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
          <img src={githubLogo} alt="Github"></img>
        </a>

        <a href="https://www.facebook.com/jacob.schoenbauer">
          <img src={facelogo} alt="Github"></img>
        </a>

        <a href="https://www.linkedin.com/in/jacob-schoenbauer-281374239/">
          <img src={linklogo} alt="Github"></img>
        </a>
      </p>
    </div>
  );
}
export default Footer;
