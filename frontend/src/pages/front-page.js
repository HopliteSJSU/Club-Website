import React, { Component } from "react";

import HeroBanner from "components/hero-banner/hero-banner";
import AboutUs from "components/about-us/about-us";
import Leadership from "components/leadership/leadership";
import Calendar from "components/calendar/calendar";
import Footer from "components/footer/footer";

import _ from "lodash";

class FrontPage extends Component {
  state = {
    windowWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", _.debounce(this.updateWidth, 200));
    this.HashLink();
  }

  componentDidUpdate() {
    this.HashLink();
  }

  updateWidth = () => this.setState({ windowWidth: window.innerWidth });

  HashLink = () => {
    let hash = window.location.hash.replace("#", "").toLowerCase();
    if (hash) {
      let el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    }
  };

  render() {
    const { windowWidth } = this.state;

    return (
      <React.Fragment>
        <HeroBanner windowWidth={windowWidth} />
        <AboutUs windowWidth={windowWidth} />
        <Calendar windowWidth={windowWidth} />
        <Leadership windowWidth={windowWidth} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default FrontPage;
