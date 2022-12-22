import React from "react";

const HeaderButton = (props) => {
  return (
    <button className="cursor-pointer transition-colors duration-300 ease-in-out text-slate-500 text-xs font-semibold rounded-full w-24 px-4 py-3 hover:bg-blue-200 bg-blue-100">
      {props.title}
    </button>
  );
};

export default HeaderButton;
