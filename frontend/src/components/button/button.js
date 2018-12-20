import React from "react";
import PropTypes from "prop-types";

import "./style/button.css";

const Button = ({ label, classes, styles }) => {
  return (
    <React.Fragment>
      <button className={`button is-rounded ${classes}`} style={{ ...styles }}>
        <span>{label}</span>
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired
};

Button.defaultProps = {
  classes: "",
  styles: {}
};

export default Button;
