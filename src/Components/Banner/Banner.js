import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner_container">
        <div className="banner-content">
          <h1 className="h1 banner-title">Start Your Future Education</h1>
          <p className="banner-text">
            Credibly redefine distinctive total linkage vis-a-vis multifunction
            data. Phosphorescently impact goal-oriented strategic
          </p>
          <button className="btn btn-primary">Discover More</button>
        </div>
        <figure className="figure-banner">
          <img
            className="banner-img"
            src="https://i.ibb.co/5cS29XK/hero-banner.png"
            alt="A young lady sits, holding a pen and a notebook."
          />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
