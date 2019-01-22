/* eslint no-useless-escape: 0 */

import React, { Component } from "react";
import Button from "components/button/button";
import LoadingIcon from "components/animations/loading-icon/loading-icon";

import axios from "axios";
import _ from "lodash";

class EmailSub extends Component {
  constructor(props) {
    super();
    this.state = {
      showInput: false,
      invalidEmail: false,
      errSubmitEmail: false,
      loading: false
    };

    //So user can't spam enter when submitting an email.
    this.submitEmail = _.debounce(this.submitEmail.bind(this), 500);
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  submitEmail = async () => {
    if (this.validateEmail(this.emailInput.value)) {
      this.setState({ loading: true });
      let res;
      try {
        if (process.env.NODE_ENV === "production") {
          res = await axios.post(
            process.env.REACT_APP_BACKEND +
              "/api/subscribe/" +
              this.emailInput.value
          );
        } else {
          res = await axios.post(
            "http://localhost:8080/api/subscribe/" + this.emailInput.value
          );
        }
      } catch (err) {
        console.log(err);
      }

      if (res && res.data.success) {
        this.setState({
          errSubmitEmail: false,
          invalidEmail: false,
          loading: false
        });
        this.emailInput.value = "";
        this.emailInput.placeholder = `Success!`;
      } else {
        this.setState({
          errSubmitEmail: true,
          invalidEmail: false,
          loading: false
        });
        this.emailInput.value = "";
        this.emailInput.placeholder = `Error: please try again or send us an email.`;
      }
    } else {
      this.setState({ errSubmitEmail: false, invalidEmail: true });
      let badEmail = this.emailInput.value;
      this.emailInput.value = "";
      this.emailInput.placeholder = `Please try again, invalid email: "${badEmail}"`;
    }
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.submitEmail();
    }
  };

  handleSubClick = () => {
    this.setState({ showInput: true });
    this.emailInput.focus();
  };

  render() {
    const { showInput, invalidEmail, errSubmitEmail, loading } = this.state;
    const { deviceType } = this.props;

    let isHidden = showInput ? "show" : "hide";
    let invalid = invalidEmail ? "invalid-email" : "";
    let error = errSubmitEmail ? "error-email" : "";

    return (
      <div className={`container ${deviceType}`} id="email-sub">
        <div className="container" id="input-container">
          <div
            className={`container for-animation ${isHidden} ${deviceType} ${invalid} ${error}`}
            ref={node => (this.inputContainer = node)}
          >
            <input
              className={`input ${deviceType}`}
              id="email-input"
              placeholder="What's your email?"
              type="email"
              onKeyPress={this.handleKeyPress}
              ref={node => {
                this.emailInput = node;
              }}
            />
            {loading ? (
              <LoadingIcon />
            ) : (
              <span
                className={`icon ${showInput ? "show" : "hide"}`}
                onClick={this.submitEmail}
                id="arrow-submit"
              >
                <i className="fas fa-arrow-right" />
              </span>
            )}
            <span
              className={`icon ${showInput ? "show" : "hide"}`}
              id="email-icon"
            >
              <i className="fas fa-envelope" />
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
