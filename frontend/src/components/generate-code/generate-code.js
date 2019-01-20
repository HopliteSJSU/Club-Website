import React from "react";

const GenerateCode = ({ code }) => (
  <div className="container check-in">
    <h3 className="subtitle">
      This part of website is for officers only! Generate code for members to
      check-in.
    </h3>
    Reresh page to generate new code. Codes expire after 5 minutes.
    <br />
    {/* <div className="control">
      <input className="input is-large" type="text" value={code} readOnly />
    </div> */}
    <div className="level code-display">
      <h2 className="level-item">{ code }</h2>
    </div>
  </div>
);

export default GenerateCode;
