import React from "react";
import { Link } from "react-router-dom";

import "./VideoCard.css";

function VideoCard({ video }) {
  return (
    <div className="video-card-wrapper">
      <Link to={`/video-play-skills/${video.id}`} state={{ video }}>
        <div className="video-card">
          <div className="video-card-thumbnail">
            <img
              className="video-card-image"
              src={video.thumbnail}
              alt={video.title}
            />
          </div>
          <div className="video-card-details">
            <h3 className="video-card-title">{video.title}</h3>
            <p className="video-card-channel">{video.channelTitle}</p>
            <p className="video-card-description">{video.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
