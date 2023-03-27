import React from "react";
import { Button, Container } from "react-bootstrap";

import "./CourseDownload.css";
const CourseDownload = () => {
  return (
    <Container>
      <div className="d-flex CD_Outer">
        <div className="CaptionCourseDownload">
          <h4>
            Explore our 'Free Downloads' section to access lecture handouts and
            class notes created by our top instructors. This is a great
            opportunity to enhance your learning experience and supplement your
            knowledge with valuable resources.
          </h4>
          <Button className="btnDownload" variant="success">
            {" "}
            Free Download{" "}
          </Button>{" "}
        </div>
        <div>
          <img
            className="CD_IMG"
            src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Fcdn.10minuteschool.com%2Fimages%2FMask_group_1670836813852.png&w=640&q=75"
            alt="First slide"
          />
        </div>
      </div>
    </Container>
  );
};

export default CourseDownload;
