import React from "react";
import "./FeaturesCard.scss";
import SingleFeature from "./SingleFeature";

function FeaturesCard() {
  return (
    <section className="features__card">
      <SingleFeature
        image="https://i.ibb.co/zVqhWn2/card5.png"
        title="Microsoft Teams"
        text="Unleash the power of your team."
        category="Shop Now"
      />
      <SingleFeature
        image="https://i.ibb.co/mGZcxcn/card6.jpg"
        title="Unlock the power of learning"
        text="Get students future-ready with Windows 10 devices. Starting at $219."
        category="Shop Now"
      />
      <SingleFeature
        image="https://i.ibb.co/NpPvVHj/card7.png"
        title="Windows 10 Enterprise"
        text="Download the free 90-day evaluation for IT professionals."
        category="Download Now"
      />
      <SingleFeature
        image="https://i.ibb.co/LkP4L5T/card8.png"
        title="Explore Kubernetes"
        text="Learn how Kubernetes works and get started with cloud native app
        development today."
        category="Get Started"
      />
    </section>
  );
}

export default FeaturesCard;
