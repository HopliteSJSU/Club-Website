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
      <section class="hero is-fullheight">
        <div class="hero-head">
          <Navbar
            isActive={activeBurger}
            burgerClick={this.handleBurgerClick}
          />
        </div>

        <div class="hero-body">
          <div className="container is-inline-block">
            <div class="container has-text-centered">
              <h1 class="title is-1">Hoplite</h1>
              <h2 class="subtitle is-2">Ace your coding interviews!</h2>
            </div>
            <EmailSubscribe />
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBanner;
