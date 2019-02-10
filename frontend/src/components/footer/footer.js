import React from "react";

import SocialMediaIcons from "components/social-media-icons/social-media-icons";

const Footer = props => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="content location">
            <span className="icon is-inline-flex">
              <i className="fas fa-map-marker-alt is-flex hoplite-red" />
            </span>
            <div className="sub-content is-inline-block">
              <h3 className="title">Location</h3>
              <p>
                Thursday 7:30PM @ MQH 234 <br /> Friday 10:00AM @ MQH 226
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="content contact-us">
            <span className="icon is-inline-flex hoplite-red">
              <i className="fas fa-envelope-open" />
            </span>
            <div className="sub-content is-inline-block">
              <h3 className="title">Contact Us</h3>
              <p>hopliteclub@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
