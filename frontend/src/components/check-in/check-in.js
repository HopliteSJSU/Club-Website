import React from "react";

const CheckIn = props => (
  <div className="container check-in">
    <h3 className="subtitle">
      If you attended one of our sessions either Thursday or Friday please fill
      out form below. Thank you!
    </h3>
    <br />
    <div class="field">
      <div class="control">
        <label>Please enter SJSU email</label>
        <input
          class="input is-rounded is-medium"
          type="text"
          placeholder="SJSU Email"
        />
      </div>
      <div class="control">
        <label>Please enter CODE provided by the Tech Lead</label>
        <input
          class="input is-rounded is-medium"
          type="text"
          placeholder="Enter Code"
        />
      </div>
    </div>
  </div>
);

export default CheckIn;
