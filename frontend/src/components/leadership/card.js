import React from "react";
import uuid from "uuid/v1";

class Card extends React.Component {
  state = {
    hover: false
  };

  handleIconEnter = () => this.setState({ hover: true });
  handleIconLeave = () => this.setState({ hover: false });
  handleIconClick = () => window.open(this.props.linkedin, "linkedin");

  render() {
    const { img, name, role } = this.props;
    const { hover } = this.state;

    return (
      <div className="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img alt={name} src={img} width="100%" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content" key={hover ? uuid() : "media"}>
                <p class="title is-5 is-inline">{name}</p>
                <span
                  className="icon"
                  onMouseEnter={this.handleIconEnter}
                  onMouseLeave={this.handleIconLeave}
                  onClick={this.handleIconClick}
                  title={`${name}'s LinkedIn Profile`}
                  style={{ position: "absolute", right: "8%" }}
                >
                  <i
                    className="fab fa-linkedin"
                    style={{
                      float: "right",
                      fontSize: "2rem",
                      color: hover ? "blue" : "",
                      cursor: "pointer"
                    }}
                  />
                </span>
                <p class="subtitle is-6">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
