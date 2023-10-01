import React from "react";

const VideoCard = ({ id, snippet, statistics }) => {
  // console.log("info from Video card", id);

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col shadow-md rounded-md w-60">
      <div>
        <img
          className="rounded-md"
          src={thumbnails.medium.url}
          alt="Thumbnail"
        />
      </div>
      <div className="flex p-2 flex-wrap">
        <div className="mr-3"></div>
        <div>
          <h2 className="flex  text-sm font-bold">{title}</h2>
          <h4 className="text-xs">{channelTitle}</h4>
          <div className="flex ">
            <ul>
              <li className="text-slate-500 font-light text-xs">
                {statistics.viewCount}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
