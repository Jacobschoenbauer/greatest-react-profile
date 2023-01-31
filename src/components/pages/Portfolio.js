import React from "react";
import Screenshot202209 from "../images/Screenshot 2022-09-03 102949.png";
import Screenshot2022 from "../images/Screenshot 2022-09-25 123904.png";
import supersearch from "../images/super search photo.png";
import cooking from "../images/firstpagecooking.png";

export default function Portfolio() {
  return (
    <div className="mainpages">
      <h1>Portfolio</h1>
      <p className="port">
        <a href="https://jacobschoenbauer.github.io/02-css-portfolio/">
          <img className="pot" src={Screenshot202209} alt=""></img>
        </a>

        <a href="https://jacobschoenbauer.github.io/04-api-jquiz/">
          <img className="pot" src={Screenshot2022} alt="Github"></img>
        </a>

        <a href="https://llyruss.github.io/SuperSearch/">
          <img className="pot" src={supersearch} alt="Github"></img>
        </a>
        <a href="https://whatscookin.herokuapp.com/">
          <img className="pot" src={cooking} alt="Github"></img>
        </a>
      </p>
    </div>
  );
}
