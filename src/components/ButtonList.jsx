import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Computer Programming",
    "Mixes",
    "Music",
    "Marketplaces",
    "News",
    "Live",
    "History",
  ];
  return (
    <>
      <div>
        {list.map((listElement,index) => (
          <Button key={index} name={listElement} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
