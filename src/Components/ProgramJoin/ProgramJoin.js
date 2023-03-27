import React from "react";
import { Button } from "react-bootstrap";
import "./ProgramJoin.css";
const ProgramJoin = () => {
  return (
    <div className="PJ-outer">
      <div className="PJ-left">
        <div className="PJ-content">
          <h2>
            Join Today
            <br />
            The Largest learning platform of Bangladesh
          </h2>
          <a href="/logIn">
            <Button className="btnDownload" variant="success">
              Join Here
            </Button>{" "}
          </a>
        </div>
      </div>
      <div className="PJ-right">
      </div>
    </div>
  );
};

export default ProgramJoin;
