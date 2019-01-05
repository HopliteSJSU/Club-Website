import React, { Component } from "react";

import Navbar from "components/navbar/navbar";
import EmailSubscribe from "components/email-sub/email-sub";

import _ from "lodash";

class HeroBanner extends Component {
  state = {
    windowWidth: window.innerWidth,
    activeBurger: false,
    activeNavbarItem: "Home",
    navbarItems: [
      "Home",
      "About Us",
      "Leadership",
      "Projects",
      "Sponsors",
      "Apply"
    ]
  };

  componentDidMount() {
    window.addEventListener("resize", _.debounce(this.updateWidth, 200));
    // window.addEventListener("scroll", this.addParallax);
  }

  addParallax = () => {
    let offset = window.pageYOffset;
    this.home.style.backgroundPositionY = offset * 0.9 + "px";
  };

  updateWidth = () => this.setState({ windowWidth: window.innerWidth });

  handleBurgerClick = () =>
    this.setState(prevState => ({ activeBurger: !prevState.activeBurger }));

  handleItemClick = e =>
    this.setState({ activeNavbarItem: e.currentTarget.textContent });

  render() {
    const {
      activeBurger,
      activeNavbarItem,
      navbarItems,
      windowWidth
    } = this.state;

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
              <div className="column is-flex">
                Contact: hopliteclub@gmail.com
              </div>
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
