import React, { useState } from "react";
import "./Introduce.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Video from "./Intro.mp4";
import { Container } from "react-bootstrap";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Introduce = () => {
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = document.querySelector(".intro-video");
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="introduce">
      <img
        src="https://tinyurl.com/intro979"
        alt="OK2"
        className="intro-bg-pic"
      />
      <Container className="video_container">
        <video onClick={handleVideoClick} className="intro-video">
          <source src={Video} type="video/mp4" />
        </video>
        {!playing && (
          <div className="play-button" onClick={handleVideoClick}>
            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#e90707" }} />
          </div>
        )}
        <img
          src="https://tinyurl.com/intro0002"
          alt="OK1"
          className="intro-design-01"
        />

        <img
          src="https://github.com/Durjoy1971/image-storing-for-project/blob/main/blog-shape.png?raw=true"
          alt="OK2"
          className="intro-design-02"
        />
      </Container>
      <img
        src="https://tinyurl.com/intro979"
        alt="OK2"
        className="intro-bg-02"
      />
    </div>
  );
};

export default Introduce;
