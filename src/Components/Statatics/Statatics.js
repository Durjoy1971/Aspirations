import React from "react";
import "./Statatics.css";

function Statatics() {
  return (
    <section className="stats-section" aria-label="stats">
      <div className="stats-container">
        <div className="stats-card card-1">
          <h3 className="stats-card-title-1">5k+</h3>
          <p className="stats-card-text">User Visited</p>
        </div>
        <div className="stats-card card-2">
          <h3 className="stats-card-title-2">300+</h3>
          <p className="stats-card-text">Total Videos</p>
        </div>
        <div className="stats-card card-3">
          <h3 className="stats-card-title-3">95%</h3>
          <p className="stats-card-text">Satisfaction Rate</p>
        </div>
        <div className="stats-card card-4">
          <h3 className="stats-card-title-4">200+</h3>
          <p className="stats-card-text">Top Instructors</p>
        </div>
      </div>
    </section>
  );
}

export default Statatics;
