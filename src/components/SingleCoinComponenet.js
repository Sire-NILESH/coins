import React, { useState } from "react";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const TableRowData = (props) => {
  const value = numberWithCommas(props.value);

  return (
    <div className="grid grid-cols-2">
      <p className="justify-items-start font-semibold text-slate-400 text-sm">
        {props.title}
      </p>{" "}
      <p className="justify-self-end text-sm font-bold text-slate-500">
        <span>$</span>
        {`${value}`}
      </p>
    </div>
  );
};

const SingleCoinComponenet = (props) => {
  return (
    <div className="w-80 rounded-md h-80 2border-2 border-black flex gap-4 flex-col">
      {/* TITLE */}
      <p className="font-bold text-lg text-slate-6500">{props.data.name}</p>
      {/* GRAPH */}
      <div className="flex-[2] bg-blue-100">graph</div>
      {/* RELATED DATA */}
      <div className="flex-1 space-y-1">
        <TableRowData title={"Market cap"} value={props.data.market_cap} />
        <TableRowData
          title={"Volume (24Hrs)"}
          value={props.data.total_volume}
        />
        <TableRowData
          title={"Circulating supply"}
          value={props.data.circulating_supply}
        />
        <TableRowData title={"Max supply"} value={props.data.max_supply} />
      </div>
    </div>
  );
};

export default SingleCoinComponenet;
