import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./Constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("consoling Json " + json.items);
    setVideos(json.items);
  };

  // if (!videos) return null;
  return (
    <div className="flex flex-wrap gap-3 p-4 pl-8">
      {videos?.map((video) => {
        console.log("video", video);
        return <VideoCard key={video.id} {...video} />;
      })}
    </div>
  );
};

export default VideoContainer;
