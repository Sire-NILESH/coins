import React from "react";
import TableRowData from "./../ui/TableRowData";
import CoinImage from "./CoinImage";

const colorCode = (value) => {
  const code = {
    positive: "bg-green-600",
    neutral: "bg-yellow-600",
    negative: "bg-red-600",
    fallback: "bg-blue-600",
  };

  if (value.toFixed(3) === 0.0) return code["neutral"];
  else if (value.toFixed(3) > 0.0) return code["positive"];
  else if (value.toFixed(3) < 0.0) return code["negative"];
  else return code["fallback"];
};

{
  /* <div className="py-4 px-4 w-80 bg-blue-50 h-28 rounded-xl"></div> */
}
const CoinCard = (props) => {
  return (
    <div className="py-4 px-1 w-80 bg-blue-50 h-28 cursor-pointer">
      <header className="flex items-center justify-between mb-1 w-full">
        <div className="flex justify-between w-full">
          <div className="flex">
            <CoinImage image={props.data.image} name={props.data.name} />
            <p className="ml-2 text-slate-600 text-sm font-semibold">
              {props.data.name}
            </p>
          </div>
          <span className="border border-slate-300 text-slate-500 flex items-center justify-center rounded-full h-6 w-6 mr-1">
            {props.data.rank}
          </span>{" "}
        </div>
        {/* <div
          className={`w-3 justify-self-end rounded-full h-3 ${colorCode(
            props.data.OverAllchange
          )}`}
        /> */}
      </header>
      <div className="mx-2 mt-2">
        <TableRowData title={"Price"} value={props.data.currentPrice} />
        <TableRowData title={"Total supply"} value={props.data.total_supply} />
        <TableRowData title={"Market cap"} value={props.data.marketCap} />
      </div>
      <div></div>
    </div>
  );
};

export default CoinCard;
