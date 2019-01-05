import React, { Component } from "react";

class Calendar extends Component {
  state = {};

  render() {
    return (
      <section id="calendar">
        <div className="container">
          <h2 className="title has-text-centered has-text-white">Calendar</h2>
          <h3 className="subtitle has-text-centered has-text-white">
            Find out when all of our schedule meetings and events are.
          </h3>
          <div className="container is-flex">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=hopliteclub%40gmail.com&ctz=America%2FLos_Angeles"
              style={{ border: 0 }}
              width="1000"
              height="600"
              frameborder="0"
              scrolling="no"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
