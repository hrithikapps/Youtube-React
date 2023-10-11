import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <iframe
          width="950"
          height="450"
          src={`https://www.youtube.com/embed/${id}?si=nezFezg3F3-Oqu-L`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="w-1/3 border p-2 ml-4">
          <LiveChat />
        </div>
      </div>

      <div className="w-[900px]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchVideo;
