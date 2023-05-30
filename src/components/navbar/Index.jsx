import React from "react";
import "./style.css";
import nav_image from "../../assignment_images/nav_image.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <img
            style={{ height: "100px", width: "200px", objectFit: "contain" }}
            src={nav_image}
            alt="nav_image"
          />
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" id="home" href="#">
                HOME
                <hr></hr>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SERCIVES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                RESOURCES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MANAGEMENT TEAM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CAREERS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
