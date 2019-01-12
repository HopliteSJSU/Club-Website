import React, { Component } from "react";

import Navbar from "components/navbar/navbar";
import EmailSubscribe from "components/email-sub/email-sub";

class HeroBanner extends Component {
  state = {
    activeBurger: false,
    activeNavbarItem: "Home",
    navbarItems: ["Home", "About Us", "Calendar", "Leadership", "Projects"]
  };

  componentDidMount() {
    // window.addEventListener("scroll", this.addParallax);
  }

  addParallax = () => {
    let offset = window.pageYOffset;
    this.home.style.backgroundPositionY = offset * 0.9 + "px";
  };

  handleBurgerClick = () =>
    this.setState(prevState => ({ activeBurger: !prevState.activeBurger }));

  handleItemClick = e =>
    this.setState({ activeNavbarItem: e.currentTarget.textContent });

  render() {
    const { windowWidth } = this.props;
    const { activeBurger, activeNavbarItem, navbarItems } = this.state;

    let deviceType = windowWidth <= 850 ? "mobile" : "desktop";

    return (
      <section
        className="hero is-fullheight"
        id="home"
        ref={node => (this.home = node)}
      >
        <div className="hero-head">
          <Navbar
            isActive={activeBurger}
            activeItem={activeNavbarItem}
            burgerClick={this.handleBurgerClick}
            itemClick={this.handleItemClick}
            items={navbarItems}
          />
        </div>

        <div className="hero-body">
          <div className="container is-inline-block">
            <div className="container has-text-centered noselect">
              <h1 className="title is-1">Hoplite</h1>
              <h2 className="subtitle is-2">Ace your coding interviews!</h2>
            </div>
            <EmailSubscribe deviceType={deviceType} />
          </div>
        </div>

        <div className={`hero-foot ${deviceType}`}>
          <div className="container">
            <div className="columns">
              <div className="column is-flex" />
              <div className="column is-flex has-text-centered">
                MEETING TIMES: <br />
                7:30pm Thursday @ MQH 234 <br /> 10:00am Friday @ TBD
              </div>
              <div className="column is-flex" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBanner;
