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
            src="https://i.ibb.co/JkRtJDz/about-banner.png://i.ibb.co/QbhS3jc/book.png"
            alt="about-banner"
          />
        </div>
        <div className="about-text">
          <h1 className="de_about_title">
            We Help to Create Possibility & Success in Your Career!
          </h1>
          <p className="de_about_section">
            Continually administrate process-centric human capital rather than
            bleeding-edge methodologies. Distinctively supply accurate methods
            of empowerment before.
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
