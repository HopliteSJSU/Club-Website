import React from "react";
import _ from "lodash";

class Card extends React.Component {
  state = {
    hover: false,
    flipped: false
  };

  handleIconEnter = () => this.setState({ hover: true });
  handleIconLeave = () => this.setState({ hover: false });
  handleIconClick = () => window.open(this.props.linkedin, "linkedin");
  handleCardFlipClick = () => this.setState({ flipped: true });
  handleCardFlipMouseLeave = () => this.setState({ flipped: false });

  render() {
    const { img, name, role } = this.props;
    const { flipped } = this.state;

    return (
      <div
        className="column"
        onMouseEnter={_.debounce(this.handleCardFlipClick, 400)}
        onMouseLeave={_.debounce(this.handleCardFlipMouseLeave, 500)}
      >
        <div className={`card ${flipped ? "back" : "front"}`}>
          <div className="card-image noselect">
            <figure className="image is-4by3">
              <img alt={name} src={img} width="100%" draggable="false" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5 has-text-centered">{name}</p>
                <p className="subtitle is-6 has-text-centered">{role}</p>
              </div>
            </div>
          </div>
          <div id="card-back">
            <p>HELLO MY NAME IS PHILLIP ROGNERUD AND THIS IS MY AWESOME CARD</p>
          </div>
        </div>
      </div>
    );
  }
}

// <span
//   className="icon"
//   onMouseEnter={this.handleIconEnter}
//   onMouseLeave={this.handleIconLeave}
//   onClick={this.handleIconClick}
//   title={`${name}'s LinkedIn Profile`}
//   style={{ position: "absolute", right: "8%" }}
// >
//   <i
//     className="fab fa-linkedin"
//     style={{
//       float: "right",
//       fontSize: "2rem",
//       color: hover ? "blue" : "",
//       cursor: "pointer"
//     }}
//   />
// </span>

export default Card;
