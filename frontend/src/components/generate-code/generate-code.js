import React from "react";

const GenerateCode = ({ code }) => (
  <div className="container check-in">
    <h3 className="subtitle">
      This part of website is for Officer's only! Generate code for members to
      check-in.
    </h3>
    Reresh page to generate new code. Code's expire after 5minutes.
    <br />
    <div class="control">
      <input class="input is-large" type="text" value={code} readonly />
    </div>
  </div>
);

export default GenerateCode;
