import React from "react";
import { Sparklines } from "react-sparklines";

const SparkLine = (props) => {
  console.log(props);
  return (
    <Sparklines
      data={[...props.sparkLineData]}
      limit={5}
      width={100}
      height={20}
      margin={5}
    ></Sparklines>
  );
};

export default SparkLine;
