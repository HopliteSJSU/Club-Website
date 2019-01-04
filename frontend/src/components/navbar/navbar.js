/* eslint jsx-a11y/anchor-is-valid: 0*/
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isActive, burgerClick, itemClick, activeItem, items }) => (
  <header className="navbar noselect">
    <div className="container">
      <div className="navbar-brand">
        <a href="#Home" className="navbar-item">
          <h1 className="title has-text-white">Hoplite</h1>
        </a>
        <span
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          onClick={burgerClick}
        >
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          {items.map((item, i) => (
            <NavLink
              to={{ hash: `#${item.replace(/\s/g, "")}` }}
              className={`navbar-item ${
                activeItem === item ? "is-active" : ""
              }`}
              onClick={itemClick}
              key={i}
            >
              <span>{item}</span>
              <div className="border-bottom" />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
