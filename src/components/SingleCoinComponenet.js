import React from "react";

function numberWithCommas(x) {
  const val = x > 0 ? Math.ceil(x) : Math.floor(x);
  return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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

// h-80

const SingleCoinComponenet = (props) => {
  return (
    <figure className=" rounded-md  2border-2 border-black flex gap-4 flex-col">
      {/* TITLE */}
      <p className="font-bold text-lg text-slate-600">
        <span>{`#${props.data.market_cap_rank} `}</span>
        {props.data.name}
      </p>
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
      {/* 24 Hrs stat */}
      <div>
        <p className="font-bold text-sm text-slate-500">Past 24 Hours</p>
        <div className="flex-1 space-y-1">
          <TableRowData title={"Price"} value={props.data.price_change_24h} />
          <TableRowData
            title={"Market cap"}
            value={props.data.market_cap_change_24h}
          />
          <TableRowData title={"High"} value={props.data.high_24h} />
          <TableRowData title={"Low"} value={props.data.low_24h} />
        </div>
      </div>
    </figure>
  );
};

export default SingleCoinComponenet;
