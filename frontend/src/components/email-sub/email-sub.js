import React, { Component } from "react";
import Button from "components/button/button";

class EmailSub extends Component {
  state = {
    showInput: false
  };

  handleSubClick = () => {
    this.setState({ showInput: true });
    this.emailInput.focus();
  };

  render() {
    const { showInput } = this.state;

    return (
      <div className="container" id="email-sub">
        <div className="container" id="input-container">
          <div
            className={`container for-animation ${showInput ? "show" : "hide"}`}
          >
            <input
              className={`input`}
              id="email-input"
              placeholder="What's your email?"
              type="email"
              ref={node => {
                this.emailInput = node;
              }}
            />
            <span className={`icon ${showInput ? "show" : "hide"}`}>
              <i className="fas fa-arrow-right" />
            </span>
          </div>
        </div>
        {!showInput && (
          <Button
            label="Subscribe!"
            styles={{ position: showInput ? "relative" : "absolute" }}
            clicked={this.handleSubClick}
            animated
          />
        )}
      </div>
    );
  }
}

export default EmailSub;
