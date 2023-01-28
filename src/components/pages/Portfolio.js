import React from "react";
import Screenshot202209 from "../images/Screenshot 2022-09-03 102949.png";
import Screenshot2022 from "../images/Screenshot 2022-09-25 123904.png";
import supersearch from "../images/super search photo.png";
import cooking from "../images/firstpagecooking.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p className="port">
        <a href="https://github.com/Jacobschoenbauer">
          <img className="pot" src={Screenshot202209} alt=""></img>
        </a>

        <a href="https://www.facebook.com/jacob.schoenbauer">
          <img className="pot" src={Screenshot2022} alt="Github"></img>
        </a>

        <a href="https://www.linkedin.com/in/jacob-schoenbauer-281374239/">
          <img className="pot" src={supersearch} alt="Github"></img>
        </a>
        <a href="https://www.linkedin.com/in/jacob-schoenbauer-281374239/">
          <img className="pot" src={cooking} alt="Github"></img>
        </a>
      </p>
    </div>
  );
}
