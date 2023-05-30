import React from "react";
import Navbar from "../navbar/Index";
import "./style.css";
import new_head from "../../assignment_images/new_head.png";

function Head() {
  return (
    <div className="headContainer">
      <div className="head_content">
        <h1>
          Business Coaching Develop <b>Stronger Minds</b>
        </h1>
        <div className="button_container">
          <button className="button">Read More</button>
          <button className="button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Head;
