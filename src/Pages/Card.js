import React from "react";
import "./Card.scss";

import SingleCard from "./SingleCard";

function Card() {
  return (
    <section className="card">
      <SingleCard
        image="https://i.ibb.co/LZPVKq9/card1.png"
        title="New Surface Pro 7"
        text="See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to
        put her plans into play."
      />
      <SingleCard
        image="https://i.ibb.co/KjGFHVJ/card2.png"
        title="New Surface Laptop 3"
        text="Express yourself powerfully with a thin, light, and elegant design,
          faster performance, and up to 11.5 hours battery life."
      />
      <SingleCard
        image="https://i.ibb.co/2cnshH6/card3.png"
        title="Save $150 + free controller"
        text="Buy an Xbox One X console and double your fun with a free select
          extra controller. Starting at $349."
      />
      <SingleCard
        image="https://i.ibb.co/G57P0Pb/card4.png"
        title="The new Microsoft Edge"
        text="Expect more. World class performance, with more privacy, more
          productivity, and more value."
      />
    </section>
  );
}

export default Card;
