import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 mx-2 shadow-md align-middle cursor-pointer">
      <div className="flex col-span-1  ">
        <IoReorderThree
          onClick={() => toggleMenuHandler()}
          className="h-8 w-8 mr-3 cursor-pointer"
        />
        {/* <Link to="/"> */}
        <img
          className="h-7"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="Youtube Logo"
        />
        {/* </Link> */}
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          className="w-1/2 pl-5   rounded-l-full border border-gray-400"
          type="text"
          placeholder="Search"
        />
        <button className="rounded-r-full bg-slate-100 border px-4 border-gray-400">
          <GoSearch className="h-6 w-8 " />
        </button>
      </div>
      <div className="flex col-span-1 justify-around">
        <HiOutlineVideoCamera className="h-7 w-8" />
        <IoIosNotificationsOutline className="h-7 w-8" />
        <BiUserCircle className="h-7 w-8" />
      </div>
    </div>
  );
};

export default Header;
