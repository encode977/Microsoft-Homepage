import React from "react";
import "./SingleFeature.scss";

function SingleFeature({ title, image, text, category }) {
  return (
    <div className="singleCard">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#">
        {category}
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default SingleFeature;
