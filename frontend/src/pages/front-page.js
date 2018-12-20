import React, { Component } from "react";

import HeroBanner from "components/hero-banner/hero-banner";
import Button from "components/button/button";

class FrontPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroBanner />
        <Button label="Subscribe!" animated />
      </React.Fragment>
    );
  }
}

export default FrontPage;
