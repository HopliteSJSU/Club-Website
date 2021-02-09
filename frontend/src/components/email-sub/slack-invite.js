/* eslint no-useless-escape: 0 */

import React, { Component } from "react";
import Button from "components/button/button";

class EmailSub extends Component {
  constructor(props) {
    super();

    this.state = {
        deviceType: "desktop"
      };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.deviceType !== state.deviceType) {
      return { deviceType: props.deviceType };
    }

    return null;
  }

  handleClick = () => {
    window.location.href="https://sjsuhoplite.slack.com/"
  };

  render() {
    const {
      showInput,
      deviceType
    } = this.state;

    return (
      <div className={`container ${deviceType}`} id="email-sub">
        <div className="container" id="input-container">
        </div>
        <Button
            label="Join Now!"
            styles={{ position: showInput ? "relative" : "absolute" }}
            clicked={this.handleClick}
          />
      </div>
    );
  }
}

export default EmailSub;
