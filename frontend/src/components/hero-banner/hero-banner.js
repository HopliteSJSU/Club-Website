import React, { Component } from "react";

import Navbar from "components/navbar/navbar";
import EmailSubscribe from "components/email-sub/email-sub";

class HeroBanner extends Component {
  state = {
    activeBurger: false
  };

  handleBurgerClick = () =>
    this.setState(prevState => ({ activeBurger: !prevState.activeBurger }));

  render() {
    const { activeBurger } = this.state;

    return (
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Navbar
            isActive={activeBurger}
            burgerClick={this.handleBurgerClick}
          />
        </div>

        <div className="hero-body">
          <div className="container is-inline-block">
            <div className="container has-text-centered">
              <h1 className="title is-1">Hoplite</h1>
              <h2 className="subtitle is-2">Ace your coding interviews!</h2>
            </div>
            <EmailSubscribe />
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <div className="columns">
              <div className="column is-flex">Contact: hoplite@sjsu.edu</div>
              <div className="column is-flex">7:30pm Thursday @ DMH 356</div>
              <div className="column is-flex">
                Follow us on
                <a href="https://www.linkedin.com/company/sjsu-hoplite/">
                  LinkedIn!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBanner;
