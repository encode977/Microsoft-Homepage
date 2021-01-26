import React from "react";
import "./SingleCard.scss";

function SingleCard({ image, title, text }) {
  return (
    <div className="singleCard">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#">
        Learn More <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default SingleCard;
