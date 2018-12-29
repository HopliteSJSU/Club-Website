import React, { Component } from "react";

import HeroBanner from "components/hero-banner/hero-banner";
import AboutUs from "components/about-us/about-us";
class FrontPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroBanner />
        <AboutUs />
      </React.Fragment>
    );
  }
}

export default FrontPage;
