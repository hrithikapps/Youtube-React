import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button className="px-4 m-2 text-sm p-1 bg-slate-100 rounded-md">
        {name}
      </button>{" "}
    </>
  );
};

export default Button;
