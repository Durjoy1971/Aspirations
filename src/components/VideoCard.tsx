"use client";

import React from "react";
import Link from "next/link";
import { YouTubeVideo } from "@/lib/youtube";

interface VideoCardProps {
  video: YouTubeVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const handleSelect = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`video_${video.id}`, JSON.stringify(video));
    }
  };

  return (
    <div className="flex justify-center my-10 md:my-16 px-4">
      <Link
        href={`/video-play-skills/${video.id}`}
        onClick={handleSelect}
        className="no-underline block"
      >
        <div
          className="bg-white flex flex-col md:flex-row w-full max-w-[950px] rounded-[5px] overflow-hidden transition-all duration-300 hover:shadow-xl"
          style={{
            boxShadow: "0px 0px 10px 0px rgba(235, 228, 228, 0.8)",
          }}
        >
          <div className="md:w-1/2 flex items-center justify-center p-4">
            {/* eslint-disable-next-js/no-img-element */}
            <img
              className="w-full max-w-[420px] rounded object-cover shadow-sm"
              src={video.thumbnail}
              alt={video.title}
            />
          </div>

          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-black font-semibold text-[clamp(1.1rem,2vw,1.5rem)] m-0 leading-snug">
              {video.title}
            </h3>
            <p className="text-blue-600 font-semibold text-[15px] my-3">
              {video.channelTitle}
            </p>
            <p className="text-black font-medium text-[0.95rem] line-clamp-3">
              {video.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;

