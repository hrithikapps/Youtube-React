import React from "react";
import { AiFillHome, AiOutlineClockCircle } from "react-icons/ai";
import {
  MdLocalMovies,
  MdOutlineSportsCricket,
  MdVideocam,
} from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiLike, BiTrendingUp } from "react-icons/bi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { SiFacebookgaming } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-5 m-2 shadow-sm w-52 ">
      <ul className="leading-10">
        <li className="flex text-base">
          {" "}
          <Link to="/" className="flex">
            <AiFillHome className="mt-1 mr-6 h-5 w-5" /> Home{" "}
          </Link>
        </li>
        <li className="flex text-base">
          <MdVideocam className="mt-1 mr-6 h-5 w-5" /> Shorts
        </li>
        <li className="flex text-base">
          {" "}
          <MdOutlineSubscriptions className="mt-1 mr-6 h-5 w-5" /> Subscription
        </li>
      </ul>
      <hr className="mt-5 mb-5" />
      <ul className="leading-10">
        <li className="flex text-base">
          {" "}
          <MdVideoLibrary className="mt-1 mr-6 h-5 w-5" /> Library
        </li>
        <li className="flex text-base">
          {" "}
          <LuHistory className="mt-1 mr-6 h-5 w-5" /> History
        </li>
        <li className="flex text-base">
          {" "}
          <RiVideoLine className="mt-1 mr-6 h-5 w-5" />
          Your Videos
        </li>
        <li className="flex text-base">
          {" "}
          <AiOutlineClockCircle className="mt-1 mr-6 h-5 w-5" /> Watch Later
        </li>
        <li className="flex text-base">
          {" "}
          <LiaDownloadSolid className="mt-1 mr-6 h-5 w-5" /> Downloads
        </li>
        <li className="flex text-base">
          {" "}
          <BiLike className="mt-1 mr-6 h-5 w-5" /> Liked videos
        </li>
      </ul>
      <hr className="mt-5 mb-5" />
      <h1 className="flex text-base">Explore</h1>
      <ul className="leading-10">
        <li className="flex text-base">
          {" "}
          <BiTrendingUp className="mt-1 mr-6 h-5 w-5" /> Trending
        </li>
        <li className="flex text-base">
          {" "}
          <BsMusicNoteBeamed className="mt-1 mr-6 h-5 w-5" /> Music
        </li>
        <li className="flex text-base">
          {" "}
          <MdOutlineSportsCricket className="mt-1 mr-6 h-5 w-5" /> Sports
        </li>
        <li className="flex text-base">
          {" "}
          <SiFacebookgaming className="mt-1 mr-6 h-5 w-5" /> Gaming
        </li>
        <li className="flex text-base">
          {" "}
          <MdLocalMovies className="mt-1 mr-6 h-5 w-5" /> Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
