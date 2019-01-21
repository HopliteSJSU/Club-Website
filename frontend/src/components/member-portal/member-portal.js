import React from "react";
import axios from "axios";

import Button from "components/button/button";
import CheckIn from "components/check-in/check-in";
import GenerateCode from "components/generate-code/generate-code";

let applyLink = "https://goo.gl/forms/1KcEXaY9r4dA2mGi1";

class MemberPortal extends React.Component {
  state = {
    showDefault: true,
    showCheckIn: false,
    showCode: false,
    error: ""
  };

  componentDidMount() {
    if (window.location.pathname.includes("/techlead/code")) {
      this.setState({
        showDefault: false,
        showCheckIn: false
      });

      this.generateCode();
    }
  }

  generateCode = () => {
    axios
      .get("http://localhost:8080/api/checkin/generate")
      .then(res => {
        console.log(res);
        this.setState({ code: res.data.code, showCode: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  };

  handleCheckIn = () =>
    this.setState({ showCheckIn: true, showDefault: false });

  render() {
    const { showDefault, showCheckIn, showCode, code } = this.state;

    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Member Portal</p>
          </header>
          <section className="modal-card-body">
            {showDefault && (
              <React.Fragment>
                <h3 className="subtitle">
                  Notice: This portal is meant for members only.
                </h3>
                <br />
                <h3 className="subtitle">
                  If you are not yet a member we recommend that you{" "}
                  <a className="has-text-bold" href={applyLink}>
                    APPLY HERE
                  </a>
                  !
                </h3>

                <br />
                <div className="container is-flex actions">
                  <Button
                    label="Meeting Check-In"
                    clicked={this.handleCheckIn}
                  />
                </div>
              </React.Fragment>
            )}
            {showCheckIn && <CheckIn />}
            {showCode && <GenerateCode code={code} />}
          </section>
        </div>
      </div>
    );
  }
}

export default MemberPortal;
