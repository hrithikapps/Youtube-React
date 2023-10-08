import React, { useState, useEffect } from "react";
import { IoReorderThree } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SUGGESTIONS_API } from "./Constants";
import { cacheResults } from "./utils/searchSlice";
import LOGO from "../../data/youtube logo.jpg";

const Header = () => {
  //Dispatching an action for the Toggle of Sidebar
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  //Search Suggestions Functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const suggestionsTimeout = setTimeout(() => {
      //check if response is already present in redux state
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
      // console.log("StTimeout");
    }, 200);

    return () => {
      clearTimeout(suggestionsTimeout);
    };
  }, [searchQuery]);

  //Suggestions Function
  const getSearchSuggestions = async () => {
    console.log("Api call", searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const response = await data.json();
    setSearchResults(response[1]);

    //Update the Cache
    searchQuery &&
      dispatch(
        cacheResults({
          [searchQuery]: response[1],
        })
      );

    console.log(response[1]);
  };

  return (
    <div className="grid grid-flow-col p-2 mx-2 shadow-md align-middle ">
      <div className="flex col-span-1 cursor-pointer ">
        <IoReorderThree
          onClick={() => toggleMenuHandler()}
          className="h-8 w-8 mr-3 cursor-pointer"
        />
        {/* <Link to="/"> */}

        <img
          className="h-7 cursor-pointer bg-white"
          src={LOGO}
          // src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="Youtube Logo"
        />

        {/* </Link> */}
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          className="w-[50%] pl-5   rounded-l-full border border-gray-400"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            return setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
          placeholder="Search"
        />
        <button className="rounded-r-full bg-slate-100 border px-4 border-gray-400">
          <GoSearch className="h-6 w-8 " />
        </button>
      </div>
      {
        <div
          // style={{searchQuery ? { display: "visible" } : { display: "hidden" }}}
          className="absolute top-9 left-96 bg-white w-[35.5%] shadow-md rounded-lg"
        >
          {showSuggestions && (
            <ul>
              {searchResults.map((s) => (
                <li
                  onClick={() => {
                    console.log(s);
                    setSearchQuery(s);
                  }}
                  key={s}
                  className="flex px-3 p-1 shadow-sm align-middle bg-white cursor-pointer  border-b-gray-400 hover:bg-slate-100"
                >
                  <GoSearch className="mr-3 mt-1" />
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      }
      <div className="flex col-span-1 justify-around cursor-pointer">
        <HiOutlineVideoCamera className="h-7 w-8 " />
        <IoIosNotificationsOutline className="h-7 w-8" />
        <BiUserCircle className="h-7 w-8" />
      </div>
    </div>
  );
};

export default Header;
