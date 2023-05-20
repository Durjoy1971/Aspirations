import React from "react";
import { Container, Nav } from "react-bootstrap";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-container">
      <Container className="aboutus-1">
        <div className="row-aboutus">
          <div>
            <img
              src="https://i.ibb.co/W0hNQ6M/young-people-row-with-thumbs-up.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="aboutus_text">
              About <span className="aboutus_text1">Aspiration</span>
            </h1>
            <h4 className="aboutus_text2">
              We are working on creating an online course
              platform that offers free videos from a variety of sectors. Our
              goal is to curate and provide the best online courses available,
              with the aim of helping people learn and grow through accessible
              and high-quality educational content.
            </h4>
            <Nav.Link as={Link} to="/aboutus">
              <button className="aboutus_btn fav-btn-primary">Read More</button>
            </Nav.Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
