import React from "react";
import PropTypes from "prop-types";

import "./style/button.css";

const Button = ({ label, classes, styles, animated }) => {
  let id = animated ? "animated-btn" : "";
  return (
    <React.Fragment>
      <button
        className={`button is-rounded ${classes}`}
        style={{ ...styles }}
        id={id}
      >
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
