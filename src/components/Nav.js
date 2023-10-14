import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <nav
      className="navbar"
      style={{
        background: "black",
        borderBottom: "1px solid white",
        position: "sticky",
      }}
    >
      <a href="#home" className="navbar-brand">
        <p className="text-light">Welcome to my Portfolio</p>
      </a>
      <div className="nav ">
        <a href="#home" className="nav-link text-light">
          Home
        </a>
        <a href="#about" className="nav-link text-light">
          About
        </a>
        <a href="#projects" className="nav-link text-light">
          Projects
        </a>
        <a href="#contact" className="nav-link text-light">
          Let's Connect
        </a>
      </div>
    </nav>
  );
}

export default Nav;
