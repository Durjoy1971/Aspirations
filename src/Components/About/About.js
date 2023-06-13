import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-div">
        <div className="de_about_content">
          <img
            className="about-img"
            src="https://i.ibb.co/DGLmFxP/about-banner.png"
            alt="about-banner"
          />
        </div>
        <div className="about-text">
          <h1 className="de_about_title">
            We Help to Create Possibility & Success in Your Career!
          </h1>
          <p className="de_about_section">
          Discover your potential and achieve career success with our tailored services. Our team of experts provides resume writing, interview coaching, and personalized career development plans. Let us guide you towards unlocking new possibilities and reaching your professional goals.
          </p>
          <Link to="/skills">
            <button className="btn btn-primary">Get Started Today</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
