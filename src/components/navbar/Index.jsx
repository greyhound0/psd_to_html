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
              HOME
              <hr></hr>
            </li>
            <li className="nav-item">ABOUT US</li>
            <li className="nav-item"></li>
            <li className="nav-item">RESOURCES</li>
            <li className="nav-item">MANAGEMENT TEAM</li>
            <li className="nav-item">CAREERS</li>
            <li className="nav-item">CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
