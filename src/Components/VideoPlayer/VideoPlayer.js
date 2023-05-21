import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import "./VideoPlayer.css";

function VideoPlayer() {
  const location = useLocation();
  const singleVideo = location.state.video;
  const videoId = singleVideo.id;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const opts = {
    disablekb: 1,
    modestbranding: 1,
    endscreen: 0,
    fs: 0,
    controls: 1,
    showinfo: 0,
    showinfobutton: 0,
    playsinline: 1,
    rel: 0,
  };

  return (
    <div className="video-player-wrapper">
      <div className="video-player">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="video-player-details">
        <h3 className="video-player-title">{singleVideo.title}</h3>
        <p className="video-player-channel">{singleVideo.channelTitle}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
