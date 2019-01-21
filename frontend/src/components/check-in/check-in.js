import React, { Component } from "react";
import axios from "axios";

import Button from "components/button/button";

export default class CheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      code: ""
    };
  }

  handleSubmit = () => {
    axios
      .post("http://localhost:8080/api/checkin/update", { ...this.state })
      .then(res => {
        if (res.data.success) {
          alert("Thanks! You are successfully checked in!");
          window.location.replace("http://www.sjsuhoplite.org");
        }
      })
      .catch(err => {
        if (err.response.data.msg !== undefined && err.response.data.msg)
          alert(err.response.data.msg);
        else alert("Check your form information, and try again");
      });
  };

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container check-in">
        <h3 className="subtitle">
          If you attended one of our sessions either Thursday or Friday please
          fill out form below. Thank you!
        </h3>
        <br />
        <div className="field">
          <div className="control">
            <label>Please enter SJSU email</label>
            <input
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              className="input is-rounded is-medium"
              type="text"
              placeholder="SJSU Email"
            />
          </div>
          {/* Max length for check in code is 6 */}
          <div className="control">
            <label>Please enter CODE provided by the Tech Lead</label>
            <input
              name="code"
              onChange={this.handleChange}
              value={this.state.code}
              className="input is-rounded is-medium"
              type="text"
              placeholder="Enter Code"
              maxLength="7"
            />
          </div>
          <div className="container is-flex actions">
            <Button
              className="submit-button"
              label="Submit"
              clicked={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
