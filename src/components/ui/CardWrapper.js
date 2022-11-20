import React from "react";

const CardWrapper = (props) => {
  return <div className="bg-neumorphic w-full">{props.children}</div>;
};

export default CardWrapper;
