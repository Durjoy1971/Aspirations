import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner_container">
        <div className="banner-content">
          <h1 className="h1 banner-title">Empowering Young Minds</h1>
          <p className="banner-text">
          We focus on nurturing a foundation for lifelong learning in young minds. We believe that education is not just about acquiring knowledge, but also about instilling a love for learning and empowering children to become lifelong learners.
          </p>
          <Link to="/kids">
          <button className="btn btn-primary">Discover More</button>
          </Link>
        </div>
        <figure className="figure-banner">
          <img
            className="banner-img"
            src="https://i.ibb.co/Wp9k0Bq/Banner-picture.png"
            alt="A young lady sits, holding a pen and a notebook."
          />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
