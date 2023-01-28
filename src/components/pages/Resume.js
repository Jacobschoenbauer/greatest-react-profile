import React from "react";
import resume from "../images/correctresume.png";
import text from "../images/2023 resume.txt";
export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={text} download>
        <img className="pot" src={resume} alt=""></img>
      </a>
      <p>Click Resume to download</p>
    </div>
  );
}
