import React from "react";

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
                7:30pm - Thursdays - MQH 234 <br /> 10:00am - Fridays - TBD
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
          <div className="content follow-us">
            <h3 className="title is-flex">Follow Us:</h3>
            <a
              href="https://twitter.com/sjsuhoplite"
              className="icon hoplite-red"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/sjsu-hoplite/"
              className="icon hoplite-red"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://sjsuhoplite.slack.com/"
              className="icon hoplite-red"
            >
              <i className="fab fa-slack-hash" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
