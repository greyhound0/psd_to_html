import React from "react";
import "./style.css";
import ClientCarousel from "./Carousel";

function Body() {
  return (
    <div className="outer_container">
      <h3>
        <b>Our Services</b>
      </h3>
      <div className="card_container">
        <div className="body_card" id="c1">
          <h5>Financial Advisory & Accounting Services</h5>
          <button className="button">Read More</button>
        </div>
        <div className="body_card" id="c2">
          <h5>Transaction Advisory</h5>
          <button className="button">Read More</button>
        </div>
        <div className="body_card" id="c3">
          <h5>Business Risk Services</h5>
          <button className="button">Read More</button>
        </div>
        <div className="body_card" id="c4">
          <h5>Operations Consulting</h5>
          <button className="button">Read More</button>
        </div>
      </div>
      <div className="lower_body"></div>
      <h2>Core Values</h2>
      <h6>Growing with our clients</h6>
      <p>
        Our set of core values- 'Trust, Relationship, Innovation and
        Passion(TRIP)', is the foundation of organisation. Our values are the
        principles that guide us as we perform at work with sincerety and
        dedication. We at 'Valueshare Advisors' are committed to delivering our
        very best in everything we do and creating value for our clients.
      </p>
      <div className="lower_card_container">
        <div className="lower_card">
          <h5>
            <b>Trust</b>
          </h5>
          <p className="text">Uncoromising integrity</p>
        </div>
        <div className="lower_card">
          <h5>
            <b>Relationship</b>
          </h5>
          <p className="text">Teamwork,Mutual Respect</p>
        </div>
        <div className="lower_card">
          <h5>
            <b>Innovation</b>
          </h5>
          <p className="text">Creative Thinking Change</p>
        </div>
        <div className="lower_card">
          <h5>
            <b>Passion</b>
          </h5>
          <p className="text">Outstanding client service</p>
        </div>
      </div>
      <h3>Our Esteemed Clientele</h3>
      <div className="carousel">
        <ClientCarousel />
      </div>
      <h3>Trusted by Big Names</h3>
      <h6>Great reviews by our Services</h6>
      <div className="lowest_body"></div>
      <div className="footer"></div>
    </div>
  );
}

export default Body;
