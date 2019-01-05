import React, { Component } from "react";

import HeroBanner from "components/hero-banner/hero-banner";
import Leadership from "components/leadership/leadership";
import Calendar from "components/calendar/calendar";

class FrontPage extends Component {
  componentDidMount() {
    this.HashLink();
  }

  componentDidUpdate() {
    this.HashLink();
  }

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
    return (
      <React.Fragment>
        <HeroBanner />
        <Calendar />
        <Leadership />
      </React.Fragment>
    );
  }
}

export default FrontPage;
