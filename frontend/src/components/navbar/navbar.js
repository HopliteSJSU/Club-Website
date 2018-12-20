/* eslint jsx-a11y/anchor-is-valid: 0*/
import React from "react";

const Navbar = ({ isActive, burgerClick }) => (
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h1 className="title has-text-white">Hoplite</h1>
        </a>
        <span
          class={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          onClick={burgerClick}
        >
          <span />
          <span />
          <span />
        </span>
      </div>
      <div class={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div class="navbar-end">
          <a class="navbar-item is-active">Home</a>
          <a class="navbar-item">Examples</a>
          <a class="navbar-item">Documentation</a>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
