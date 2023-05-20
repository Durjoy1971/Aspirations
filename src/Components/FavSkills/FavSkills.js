import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FavSkills.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FavSkills = () => {
  return (
    <section className="fav-departments">
      <div className="fav-container">
        <img
          src="https://tinyurl.com/favskills01"
          alt="Vector line art"
          className="fav-vector-line"
        />

        <h2 className="fav-departments-title">
          We Have Most of Popular Courses
        </h2>

        <ul className="fav-departments-list">
          <li>
            <div className="fav-departments-card">
              <Nav.Link className="fav-card-banner" as={Link} to="/skills">
                <figure>
                  <img
                    src="https://i.ytimg.com/vi/BjZXRs6fAkA/hq720.jpg"
                    alt="JBV"
                  />
                </figure>
              </Nav.Link>

              <h3 className="fav-card-title">Leadership Development</h3>

              <p className="fav-card-text">
                Leadership Expert and Author of "Start With Why"
              </p>

              <Nav.Link className="fav-card-link" as={Link} to="/skills">
                <span>Learn More</span>
                <FontAwesomeIcon className="fav-icon" icon={faArrowRight} />
              </Nav.Link>
            </div>
          </li>

          <li>
            <div className="fav-departments-card">
              <Nav.Link className="fav-card-banner" as={Link} to="/skills">
                <figure>
                  <img
                    src="https://i.ytimg.com/vi/HcOc7P5BMi4/hq720.jpg"
                    alt="JBV"
                  />
                </figure>
              </Nav.Link>

              <h3 className="fav-card-title">HTML Tutorial For Beginners</h3>

              <p className="card-text">
                Here you will learn the html concepts with examples from
                scratch.
              </p>

              <Nav.Link className="fav-card-link" as={Link} to="/skills">
                <span>Learn More</span>
                <FontAwesomeIcon className="fav-icon" icon={faArrowRight} />
              </Nav.Link>
            </div>
          </li>

          <li>
            <div className="fav-departments-card">
              <Nav.Link className="fav-card-banner" as={Link} to="/skills">
                <figure>
                  <img
                    src="https://i.ytimg.com/vi/vmEHCJofslg/hq720.jpg"
                    alt="JBV"
                  />
                </figure>
              </Nav.Link>

              <h3 className="fav-card-title">Phyton Pandas</h3>

              <p className="fav-card-text">
                Practice your Phyton Pandas data science skills with problems on
                StrataScratch!
              </p>

              <Nav.Link className="fav-card-link" as={Link} to="/skills">
                <span>Learn More</span>
                <FontAwesomeIcon className="fav-icon" icon={faArrowRight} />
              </Nav.Link>
            </div>
          </li>
        </ul>

        <Link to="/skills">
          <button className="fav-btn-primary">View All Courses</button>
        </Link>
      </div>
    </section>
  );
};

export default FavSkills;
