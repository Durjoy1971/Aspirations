"use client";

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Introduce: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-[50vw] min-h-[300px] bg-white overflow-hidden">
      {/* eslint-disable-next-js/no-img-element */}
      <img
        src="https://tinyurl.com/intro979"
        alt="background wave top"
        className="absolute top-0 w-full h-[30vw] object-cover pointer-events-none"
      />

      <div className="relative flex justify-center items-center max-w-[1200px] w-full px-4 z-10">
        <video
          ref={videoRef}
          onClick={handleVideoClick}
          className="w-[60vw] max-w-[900px] cursor-pointer shadow-xl"
          style={{ borderBottomRightRadius: "40.5%" }}
        >
          <source src="/Intro.mp4" type="video/mp4" />
        </video>

        {!playing && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.5vw] z-20 cursor-pointer transition-transform hover:scale-110"
            onClick={handleVideoClick}
          >
            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#e90707" }} />
          </div>
        )}

        <img
          src="https://tinyurl.com/intro0002"
          alt="design shape 1"
          className="absolute right-[1vw] w-[10vw] max-w-[100px] rotate-[20deg] pointer-events-none hidden sm:block"
        />

        <img
          src="https://github.com/Durjoy1971/image-storing-for-project/blob/main/blog-shape.png?raw=true"
          alt="design shape 2"
          className="absolute right-[1vw] w-[10vw] max-w-[100px] pointer-events-none hidden sm:block"
        />
      </div>

      <img
        src="https://tinyurl.com/intro979"
        alt="background wave bottom"
        className="absolute bottom-0 w-full rotate-180 object-cover pointer-events-none"
      />
    </div>
  );
};

export default Introduce;

