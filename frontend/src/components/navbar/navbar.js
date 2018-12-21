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
          <div class="navbar-item">
            <span>Home</span>
            <div class="border-bottom" />
          </div>
          <div class="navbar-item">
            <span>About Us</span>
            <div class="border-bottom" />
          </div>
          <div class="navbar-item">
            <span>Leadership</span>
            <div class="border-bottom" />
          </div>
          <div class="navbar-item">
            <span>Projects</span>
            <div class="border-bottom" />
          </div>
          <div class="navbar-item">
            <span>Sponsors</span>
            <div class="border-bottom" />
          </div>
          <div class="navbar-item">
            <span>Apply to join</span>
            <div class="border-bottom" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
