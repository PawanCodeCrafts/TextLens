import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom'; // Import Link from React Router

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> Replaced href with to */}
          <a className="navbar-brand" href="#">
            {props.title}
          </a>{" "}
          {/* Replaced href with to */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link> Replaced href with to */}
                <a className="nav-link active" aria-current="page" href="#">
                  {props.home}
                </a>{" "}
                {/* Replaced href with to */}
              </li>
              {/* <li className="nav-item"> */}
              {/* <Link className="nav-link" to="/about">{props.about}</Link>  */}
              {/* </li> */}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } mx-5`}
            >
              <input
                className="form-check-input "
                type="checkbox"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label "
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? "DarkMode" : "LightMode"}
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-info" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
