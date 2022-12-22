import React from "react";

// import SparkLine from "./graph/SparkLine";

// function numberWithCommas(x) {
//   const val = x > 0 ? Math.ceil(x) : Math.floor(x);
//   return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// }

const TableRowData = (props) => {
  const value = Number(props.value?.toFixed(4)).toLocaleString();
  // const value = numberWithCommas(props.value);

  return (
    <div className="w-full grid grid-cols-2">
      <p className="justify-items-start font-normal text-slate-500 text-xs">
        {props.title}
      </p>{" "}
      <p className="justify-self-end text-xs font-bold text-slate-600">
        <span>$</span>
        {`${value}`}
      </p>
    </div>
  );
};

export default TableRowData;
