import React from "react";
import "./CFA.css";
import { Link } from "react-router-dom";

const CFA = () => {
  return (
    <section className="cfa">
      <div className="cfa-container">
        <div className="cfa-text">
          <h1 className="de_cfa_title">Create Free Account & Get Register</h1>
        </div>
        <Link to="/login">
          <button className="btn btn-primary">Register Now</button>
        </Link>
      </div>
      <div className="cfa-img-div">
        <img
          className="cfa-image"
          src="https://i.ibb.co/1ZQ3Mpt/cta-banner.png"
          alt="cta-banner"
        />
      </div>
    </section>
  );
};

export default CFA;
