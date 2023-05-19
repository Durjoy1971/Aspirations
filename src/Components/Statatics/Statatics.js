import React from "react";
import "./Statatics.css";

function Statatics() {
  return (
    <section className="stats-section" aria-label="stats">
      <div className="stats-container">
        <div className="stats-card card-1">
          <h3 className="stats-card-title-1">29.3k</h3>
          <p className="stats-card-text">Student Enrolled</p>
        </div>
        <div className="stats-card card-2">
          <h3 className="stats-card-title-2">32.4K</h3>
          <p className="stats-card-text">Class Completed</p>
        </div>
        <div className="stats-card card-3">
          <h3 className="stats-card-title-3">100%</h3>
          <p className="stats-card-text">Satisfaction Rate</p>
        </div>
        <div className="stats-card card-4">
          <h3 className="stats-card-title-4">354+</h3>
          <p className="stats-card-text">Top Instructors</p>
        </div>
      </div>
    </section>
  );
}

export default Statatics;
