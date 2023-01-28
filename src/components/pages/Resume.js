import React from "react";
const downloadTxtFile = () => {
  console.log("download logic goes here");

  const file = new Blob({ type: "text/plain" });

  // anchor link
  const element = document.createElement("a");
  element.href = URL.createObjectURL(file);
  element.download = "100ideas-" + Date.now() + ".txt";

  // simulate link click
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <div className="btnDiv">
        <button id="downloadBtn" onClick={downloadTxtFile} value="download">
          Download
        </button>
      </div>
    </div>
  );
}
