import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import "./SkillVideoList.css";

function SkillsVideoList() {
  const location = useLocation();
  const { videos } = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="SkillVideoList">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default SkillsVideoList;
