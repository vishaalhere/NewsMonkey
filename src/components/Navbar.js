import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong style={{ color: "blue" }}>NewsMonkey</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "7%", color: "black" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={props.toggleMode}
              className={`btn mx-2 btn-${
                props.mode === "dark" ? "light" : "dark"
              } shadow-none`}>
              {props.mode === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
