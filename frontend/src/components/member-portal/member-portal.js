import React from "react";

import Button from "components/button/button";
import CheckIn from "components/check-in/check-in";

let applyLink = "https://goo.gl/forms/1KcEXaY9r4dA2mGi1";

class MemberPortal extends React.Component {
  state = {
    showDefault: true,
    showCheckIn: false
  };

  handleCheckIn = () =>
    this.setState({ showCheckIn: true, showDefault: false });

  render() {
    const { showDefault, showCheckIn } = this.state;

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
          </section>
        </div>
      </div>
    );
  }
}

export default MemberPortal;
