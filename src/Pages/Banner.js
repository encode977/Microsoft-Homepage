import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <section className="banner">
      <h2>Surface Deals</h2>
      <p>Select Surfaces are on sale now - save while supplies last</p>
      <a href="" className="btn">
        Shop Now <i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
}

export default Banner;
