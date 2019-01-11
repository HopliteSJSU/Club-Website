import React, { Component } from "react";

import Button from "components/button/button";

class Calendar extends Component {
  state = {
    windowWidth: window.innerWidth
  };

  handleBtnClick = () => {
    console.log("helllo world");
  };

  render() {
    const { windowWidth } = this.state;

    let deviceType = windowWidth <= 850 ? "mobile" : "desktop";

    return (
      <section id="calendar">
        <div className={`container ${deviceType}`}>
          <h2 className="title has-text-centered has-text-white">Calendar</h2>
          <h3 className="subtitle has-text-centered has-text-white">
            Find out when all of our schedule meetings and events are.
          </h3>
          <div className="container is-flex">
            {deviceType === "desktop" ? (
              <iframe
                src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=c9umttrjh8lh95rot8fs7nd0nk%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles"
                style={{ border: 0 }}
                width="1000"
                height="600"
                frameborder="0"
                scrolling="no"
              />
            ) : (
              <Button label="Go To Calendar" clicked={this.handleSubClick} />
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
