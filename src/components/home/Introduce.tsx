"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
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
      <Image
        src="/images/shapes/video-bg.png"
        alt="background wave top"
        width={1920}
        height={335}
        priority
        className="absolute top-0 w-full h-[30vw] object-cover pointer-events-none"
      />

      <div className="relative flex justify-center items-center max-w-[1200px] w-full px-4 z-10">
        <video
          ref={videoRef}
          onClick={handleVideoClick}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          preload="metadata"
          poster="/images/intro-poster.jpg"
          playsInline
          className="w-[60vw] max-w-[900px] aspect-video object-cover cursor-pointer shadow-xl"
          style={{ borderBottomRightRadius: "40.5%" }}
        >
          <source src="/Intro.mp4" type="video/mp4" />
        </video>

        {!playing && (
          <button
            type="button"
            aria-label="Play introduction video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-transform hover:scale-110 bg-transparent border-none p-0 focus:outline-none"
            onClick={handleVideoClick}
          >
            <FontAwesomeIcon
              icon={faCirclePlay}
              style={{ color: "#e90707", fontSize: "clamp(40px, 4.5vw, 64px)" }}
            />
          </button>
        )}

        <Image
          src="/images/shapes/blog-shape.png"
          alt="design shape"
          width={186}
          height={186}
          className="absolute right-[1vw] w-[10vw] max-w-[130px] min-w-[70px] pointer-events-none hidden sm:block"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <Image
        src="/images/shapes/video-bg.png"
        alt="background wave bottom"
        width={1920}
        height={335}
        className="absolute bottom-0 w-full h-[30vw] rotate-180 object-cover pointer-events-none"
      />
    </div>
  );
};

export default Introduce;

