/* eslint jsx-a11y/anchor-is-valid: 0*/
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "components/button/button";

const clicked = () => {
  window.location.href =
    "https://docs.google.com/forms/u/2/d/1vT5bP42waOwcxa6DIl9dQi7VE15psoT6JlCdHThw7OE";
};

const style = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  background: "rgba(0, 0, 0, 0.60)"
};

const Navbar = ({
  activeBurger,
  burgerClick,
  itemClick,
  activeNavbarItem,
  navbarItems,
  fixed
}) => (
  <header className="navbar noselect" style={fixed ? { ...style } : null}>
    <div className="container">
      <div className="navbar-brand">
        <a href="#Home" className="navbar-item">
          <h1 className="title has-text-white">Hoplite</h1>
        </a>
        <span
          className={`navbar-burger burger ${activeBurger ? "is-active" : ""}`}
          onClick={burgerClick}
        >
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className={`navbar-menu ${activeBurger ? "is-active" : ""}`}>
        <div className="navbar-start">
          {navbarItems.map((item, i) => {
            let path;
            if (item === "Members") {
              path = { pathname: `/${item.replace(/\s/g, "").toLowerCase()}` };
            } else {
              path = { hash: `#${item.replace(/\s/g, "")}` };
            }

            return (
              <NavLink
                to={path}
                className={`navbar-item ${
                  activeNavbarItem === item ? "is-active" : ""
                }`}
                onClick={itemClick}
                key={i}
              >
                <span>{item}</span>
                <div className="border-bottom" />
              </NavLink>
            );
          })}
        </div>
        <div className="navbar-end">
          <Button label="Apply" clicked={clicked} />
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
