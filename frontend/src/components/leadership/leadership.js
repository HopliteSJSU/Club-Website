import React, { Component } from "react";
import Card from "./card";
import leaders from "./leaders";

class Leadership extends Component {
  render() {
    let columns = [];
    let row = [];
    leaders.forEach(({ name, role, img, linkedin }, index) => {
      if (index && index % 4 === 0) {
        columns.push(row);
        row = [];
      }

      console.log(row);
      row.push(<Card name={name} role={role} img={img} linkedin={linkedin} />);

      if (index === leaders.length - 1) {
        columns.push(row);
      }
    });

    console.log(columns);

    return (
      <section id="leadership">
        <div className="container">
          <h2 className="title has-text-centered">Leadership</h2>
          <h3 className="subtitle has-text-centered">
            Meet our <strong>awesome</strong> leadership team that focus on all
            aspects of Hoplite!
          </h3>
          {columns.map(column => (
            <div className="columns">{column}</div>
          ))}
        </div>
      </section>
    );
  }
}

export default Leadership;
